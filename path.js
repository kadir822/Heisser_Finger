'use strict';
(
	function () {
		function draw() {
			var path = document.getElementById('canvas');
			if (path.getContext) {
				var context = path.getContext('2d');
				context.clearRect(0, 0, path.width, path.height);
				context.beginPath();
				context.moveTo(120, 475);		//context.moveTo(80, 400);
				context.lineTo(120, 150);		//context.lineTo(350, 150);
				context.lineTo(500, 150);		//context.lineTo(500, 400);
				context.lineTo(500, 450);		//context.lineTo(700, 200);
				context.lineTo(800, 450);		//context.lineTo(800, 180);
				context.lineTo(800, 125);
				context.strokeStyle = '#000000';
				context.lineWidth = 50;
				context.lineJoin = 'round';
				context.stroke();
			}
		}
		document.addEventListener("DOMContentLoaded", function () {
			draw();
		});
	}
	(
	)
);
