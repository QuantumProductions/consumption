Fish.prototype.draw = function(client, context) {
	context.beginPath();
	context.strokeStyle = "purple";
	context.ellipse(this.x, this.y, this.size * 2, this.size, 0, 10, 40, false);

	var butt = {'x': this.x - this.size * 2, 'y' : this.y};
	context.moveTo(butt.x, butt.y);
	context.lineTo(butt.x - this.size, butt.y - this.size);
	context.moveTo(butt.x, butt.y);
	context.lineTo(butt.x - this.size, butt.y + this.size);
  context.closePath();
	context.stroke();

	context.beginPath();
	var socketCenter = {'x': this.x + 0.75 * this.size, 'y' : this.y - 0.5 * this.size};
	context.arc(socketCenter.x, socketCenter.y, 10, 0, 2 * Math.PI, false);
	context.fillStyle = "white";
	context.fill();
	context.closePath();

	context.beginPath();
	var eyeAngle = getAngleAsXY(this, this.target);
	var eyePoint = {'x' : socketCenter.x + (8 * eyeAngle.x), 'y' : socketCenter.y + (8 * eyeAngle.y)};
	context.arc(eyePoint.x, eyePoint.y, 2, 0, 2 * Math.PI, false);
	context.fillStyle = "black";
	context.fill();

	context.closePath();
};

