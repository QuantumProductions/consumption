Fish.prototype.draw = function(client, context) {
	context.beginPath();
	context.strokeStyle = "white";
	context.ellipse(this.x, this.y, this.size * 2, this.size, 0, 10, 40, false);

	var butt = {'x': this.x - this.size * 2, 'y' : this.y};
	context.moveTo(butt.x, butt.y);
	context.lineTo(butt.x - this.size, butt.y - this.size);
	context.moveTo(butt.x, butt.y);
	context.lineTo(butt.x - this.size, butt.y + this.size);
  context.closePath();
	context.stroke();
};

