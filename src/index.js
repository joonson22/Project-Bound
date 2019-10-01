const MovingObject = require('./moving_object');

document.addEventListener("DOMContentLoaded", function () {
    window.MovingObject = MovingObject;
    let canvas = document.getElementById("game-canvas");
    window.ctx = canvas.getContext('2d');
    
    console.log("webpack is working")

})
