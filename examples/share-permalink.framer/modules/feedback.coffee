Events.Dismiss = "DismissFeedback"

# Feedback Class
class Feedback extends TextLayer
  constructor: (options={}) ->

    # Dismiss icon svg set up
    svgProps =
      color: options.color || 'white'

    svg =
    """
    		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#{svgProps.color}" d="M13.41525,12.0005 L17.70725,7.7075 C18.09825,7.3175 18.09825,6.6845 17.70725,6.2935 C17.31625,5.9025 16.68425,5.9025 16.29325,6.2935 L12.00125,10.5865 L7.70725,6.2925 C7.31625,5.9025 6.68425,5.9025 6.29325,6.2925 C5.90225,6.6835 5.90225,7.3155 6.29325,7.7065 L10.58725,12.0005 L6.29325,16.2945 C5.90325,16.6845 5.90225,17.3185 6.29325,17.7085 C6.68425,18.0995 7.31725,18.0985 7.70725,17.7085 L12.00125,13.4145 L16.29425,17.7065 C16.68425,18.0975 17.31725,18.0975 17.70825,17.7065 C18.09925,17.3165 18.09825,16.6835 17.70825,16.2935 L13.41525,12.0005 Z"/>
    </svg>


    		"""

    # text padding settings for different types of feedback
    if options.autoDismiss
      textPadding =
        top: 16,
        right: 16,
        bottom: 16,
        left: 16
    else
      textPadding =
        top: 16,
        right: 48,
        bottom: 16,
        left: 16

    # some generic looking defaults for Feedback class
    super _.defaults options,
      fontSize: 16
      color: 'white'
      text: options.text
      backgroundColor: '#333'
      borderRadius: 3
      lineHeight: 1.4
      x: Align.center
      y: Align.bottom(-20)
      clip: true
      padding: textPadding
      borderColor: 'rgba(0, 0, 0, 0.2)'
      borderWidth: 1

    @name = 'feedback'
    @states.show =
      opacity: 1
      y: options.y || Align.bottom(0)

    @states.hide =
      opacity: 0
      y: options.y || Align.bottom(0)

    @states.animationOptions =
      time: 0.25

    @stateSwitch('hide')
    @states.switch('show')

    # handler for dimissing feedback.
    dismissFeedback = () =>
      feedback = Layer.select('feedback')
      feedback.states.switch('hide')
      Utils.delay 0.5, ->
        feedback.destroy()

      @emit(Events.Dismiss)


    # When 'autoDismiss' object is used as an option, generate horizontal bar that counts down to the user-specified duration.
    if options.autoDismiss
      counter = new Layer
        parent: @
        borderRadius: 10
        y: Align.top(0)
        height: options.autoDismiss.counterHeight || 3
        backgroundColor: options.autoDismiss.color || 'white'
        width: @width

      counter.animate
        width: 0
        options:
          time: options.autoDismiss.duration || 3
          curve: 'linear'

      counter.onAnimationEnd ->
        dismissFeedback()

    # Otherwise, default to using a dimissable Feedback & generate dimiss icon button.
    else
      dismiss = new Layer
        parent: @
        backgroundColor: null
        borderRadius: 50
        y: Align.top(14)
        x: Align.right(-12)
        html: svg
        width: 24
        height: 24
        opacity: 0.5
        style: 'cursor':'pointer'

      dismiss.onMouseOver ->
        this.opacity = 1

      dismiss.onMouseOut ->
        this.opacity = 0.5

      dismiss.onClick ->
        dismissFeedback()

  onDismiss: (cb) -> @on(Events.Dismiss, cb)

module.exports = Feedback
