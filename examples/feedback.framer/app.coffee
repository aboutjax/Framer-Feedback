{Feedback} = require 'feedback'

button_timer.onClick ->	
	feedbackAutoDismiss = new Feedback
		text: 'This feedback dismisses automatically.'
		backgroundColor: '#333'
		autoDismiss:
			duration: 2
			color: '#ffffff'
			counterHeight: 3
			
button_generic.onClick ->
	feedback = new Feedback
		text: 'This feedback requires manual dismissal'