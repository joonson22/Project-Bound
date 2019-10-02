const MovingObject = require('./moving_object');
const StillObject = require('./still_object');
const Husky = require('./husky');
const Game = require("./game");
const Controller = require('./controller')

document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext('2d');
    window.MovingObject = MovingObject;
    window.Husky = Husky;
    window.StillObject = StillObject;
    window.ctx = ctx;

    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 800;

    // let husky = new Husky({
    //     color: "#505050",
    //     pos: [
    //         800 / 2 - 100 / 2,
    //         800 - 100 - 10
    //     ],
    //     vel: [2, 2],
    //     width: 100,
    //     height: 100,
    // })
    // husky.draw(ctx);
  
    let game = new Game(ctx);
    game.loop();

    
    

    console.log("webpack is working")

})
