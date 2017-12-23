# Show Hints
Framer.Extras.Hints.enable()

# This is a test

# Use desktop cursor
document.body.style.cursor = "auto"

{Feedback} = require 'feedback'

# on peramlink button mouse out
btn_share.onMouseOver (event, layer) ->
	hint.states.switch("show")
	
# on peramlink button mouse out
btn_share.onMouseOut (event, layer) ->
	hint.states.switch("default")

# cursor style
btn_share.style =
	'cursor':'pointer'

hint.states.show =
	opacity: 1
	y: 58

hint.states.animationOptions =
	time: 0.2

btn_share.onClick (event, layer) ->
	feedbackAutoDismiss = new Feedback
		text: 'Share link copied to clipboard.'
		fontFamily: 'metric'
		autoDismiss:
			duration: 4
			color: '#019C42'