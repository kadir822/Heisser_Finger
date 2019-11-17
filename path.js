'use strict';
(function () {
	function draw() {
		var element = document.getElementById('canvas');
		if (element.getContext) {
			var context = element.getContext('2d');
			context.clearRect(0, 0, element.width, element.height);
			context.beginPath();
            context.moveTo(80, 400);
           //context.quadraticCurveTo(80,350,400,150);
			context.lineTo(350, 150);
            context.lineTo(500, 400);
            context.lineTo(700, 200);
            context.lineTo(800, 180);
			//context.arc(90, 50, 30, Math.PI * 7 / 6, Math.PI * 5 / 6);
			//context.closePath();
			context.strokeStyle = '#000000';
			context.lineWidth = 50;
			context.lineJoin = 'round';
			context.stroke();
		}
	}
	document.addEventListener("DOMContentLoaded", function () {
		draw();
	});
}());
