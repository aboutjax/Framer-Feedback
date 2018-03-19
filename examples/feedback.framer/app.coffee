{Feedback} = require 'feedback'
Canvas.backgroundColor = '#002FFF'

button_timer.onClick ->	
	feedbackAutoDismiss = new Feedback
		text: 'This feedback dismisses automatically.'
		backgroundColor: '#333'
		autoDismiss:
			duration: 2
			color: '#007AFF'
			counterHeight: 5
			
button_generic.onClick ->
	feedback = new Feedback
		text: 'This feedback requires manual dismissal'