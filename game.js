"use strict";
class Consumption extends Game {
		
	parsePlayerInput(player, left1, up1, right1, down1, firing1) {
	}


	loopKeyboardInput(key_pressed_map) {

	}

	setupPlayers() {
		this.fish = new Fish({'position' : {'x': 150, 'y' : 150}});
		this.add('fish', this.fish);
		console.log(this.things['fish']);
	}

	resetGame() {
		super.resetGame();
		this.over = false;
		this.scale = 1;
		
	}

	onMouseDown(x, y) {
	}

	onMouseMove(x, y) {
		this.fish.target = {'x' : x, 'y' : y};
	}
}

class Fish extends Thing {
	constructor(options) {
		super(options);
		this.size = 40;
		this.target = this.position();
	}

}