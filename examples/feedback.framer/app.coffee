# Use desktop cursor
document.body.style.cursor = "auto"

{Feedback} = require 'feedback'


button_timer.onClick ->	
	feedbackAutoDismiss = new Feedback
		text: 'This is a feedback with a self destruct timer.'
		x: 20
		autoDismiss:
			duration: 2
			
			
button_generic.onClick ->
	feedbackGeneric = new Feedback
		x: 20
		text: 'This is a generic feedback with a dimissable action'
