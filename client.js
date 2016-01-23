"use strict";

class GameClient extends Client {
	installGame() {
		this.game = new Consumption({canvas: this.canvas});
		Thing.prototype.scale = this.scale();
	}
}