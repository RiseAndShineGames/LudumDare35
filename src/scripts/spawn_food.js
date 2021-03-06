"use strict";
var timers, food, position, bounds, type,round, image, container = 3, camera = 0;
module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	timers = game.entities.get(entity,"timers");
	food = game.instantiatePrefab("food");
	position = game.entities.get(food,"position");
	bounds = game.entities.get(container,"size");
	round = game.entities.get(camera,"round");
	image = game.entities.get(food,"image");
	position.x =  Math.floor(Math.random() * (bounds.width - 1)) + 1;
	position.y =  Math.floor(Math.random() * (bounds.height - 1)) + 1;

	type =  Math.floor(Math.random() * 4) + 1;
	game.entities.set(food,"type",type);
	switch (round) {
		case 0:
			game.entities.set(food,"type",0);
			break;
		default:
			switch (type) {
				case 1:
					image.name = "YellowFood.png";
					break;
				case 2:
					image.name = "GreenFood.png";
					break;
				case 3:
					image.name = "BlueFood.png";
					break;
				case 4:
					image.name = "RedFood.png";
					break;
			}
	}

	timers["spawn_food"].time = 0;
	timers["spawn_food"].running = true;
};
