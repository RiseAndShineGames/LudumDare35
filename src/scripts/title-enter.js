"use strict";

var sw, sp, fp, fw, scene = 1, fish = 2;

module.exports = function(game) { // eslint-disable-line no-unused-vars
    game.scaleCanvasToFitRectangle(1280,960);

    sw = game.entities.get(scene, "size").width;
    sp = game.entities.get(scene, "position");
    sp.x = game.canvas.width * 0.5 - sw * 0.5;

    fw = game.entities.get(fish, "size").width;
    fp = game.entities.get(fish, "position");
    fp.x = game.canvas.width * 0.5 - fw * 0.5;
    fp.y = game.canvas.height;
    game.entities.set(fish, "rotation", { "angle": -Math.PI * 0.5 });

};
