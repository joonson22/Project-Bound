const MovingObject = require('./moving_object');
const StillObject = require('./still_object');
const Husky = require('./husky');
const Game = require("./game");
const Controller = require('./controller')

document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext('2d');
  
    let game = new Game(ctx);
    // game.explode(ctx);
    game.loop();

    

    console.log("webpack is working")

})
