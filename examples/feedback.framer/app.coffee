Feedback = require 'feedback'

button_timer.onClick ->	
	feedbackAutoDismiss = new Feedback
		text: 'Hello world.'
		autoDismiss:
			duration: 3
			color: '#007AFF'
			counterHeight: 5
		
			
button_generic.onClick ->
	feedback = new Feedback
		text: 'Hello world.'
		y: 400