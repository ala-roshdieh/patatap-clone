$('body').on('keypress', function (e) {
	if (e.which == "13") {	
		var newCircle = new Path.Circle(new Point (200, 200), 60);
		newCircle.fillColor = 'green'
	}
});