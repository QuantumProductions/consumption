"use strict";
class Consumption extends Game {
		
	parsePlayerInput(player, left1, up1, right1, down1, firing1) {
	}


	loopKeyboardInput(key_pressed_map) {

	}

	setupPlayers() {
		this.fish = new Fish({'position' : {'x': 150, 'y' : 150}});
		this.add('fish', this.fish);
		this.things['food'] = [];
		console.log(this.things['fish']);
	}

	resetGame() {
		super.resetGame();
		this.over = false;
		this.scale = 1;
		
	}

	spawnFood(x) {
		var f = new Food({'position' : {'x' : x, 'y' : 0}});
		console.log("f" + f);
		this.add('food', f);
	}

	onMouseDown(x, y) {
		this.spawnFood(x);
	}

	onMouseMove(x, y) {
		this.fish.target = {'x' : x, 'y' : y};
	}

	installGroupLoops() {
		super.installGroupLoops();

		this.loopForGroup['fish'] = function(thing, game) {
			var foods = game.things['food'];
			for (var i = 0; i < foods.length; i++) {
				var food = foods[i];
				if (getDistance(thing, food) < thing.size) {
					food.gone = true;
					thing.size+= 4;
				}
			}

			return thing;
		}
	}
}

class Fish extends Thing {
	constructor(options) {
		super(options);
		this.size = 10;
		this.target = this.position();
	}

	loop() {
		super.loop();
		var eyeAngle = getAngleAsXY(this, this.target);
		this.mx = eyeAngle.x;
		this.my = eyeAngle.y;
	}
}

class Food extends Thing {
	constructor(options) {
		super(options);
		this.my = 2;
	}

}