const Game = require("./game");

document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext('2d');
  
    let game = new Game(ctx);
   
    game.loop(0);

    

    console.log("webpack is working")

})
