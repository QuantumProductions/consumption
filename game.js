"use strict";
class Consumption extends Game {
	
	
	
	outOfBounds(group_name, thing) {
		if (group_name == 'p1' || group_name == 'p2') {
			var nose = thing.nosePoint();
			var eng  = thing.enginePoint();
			if (nose.x < 5 || eng.x < 5 || nose.x > this.canvas.width - 5 || eng > this.canvas.width - 5 || nose.y < 5 || eng.y < 5 || nose.y > this.canvas.height - 5 || eng > this.canvas.height - 5) {
				return true;
			}

		}
 		return super.outOfBounds(group_name, thing);
	}

	handleOutOfBounds(group_name, thing) {
			thing.gone = true;
	}
	
	parsePlayerInput(player, left1, up1, right1, down1, firing1) {
	}


	loopKeyboardInput(key_pressed_map) {

	}

	setupPlayers() {
		this.fish = new Fish();
	}

	resetGame() {
		super.resetGame();
		this.over = false;
		this.scale = 1;
		
	}

	onMouseDown(x, y) {
	}
}

class Fish extends Thing {
	constructor(options) {
		super(options);
	}

}