# Use desktop cursor
document.body.style.cursor = "auto"
{Feedback} = require 'feedback'

button_timer.onClick ->	
	feedbackAutoDismiss = new Feedback
		text: 'Share link copied to clipboard.'
		autoDismiss:
			duration: 2
			color: '#66BB66'
			
button_generic.onClick ->
	feedback = new Feedback
		text: 'Share link copied to clipboard.'

