const Husky = require("./husky")
const Controller = require('./controller')

function Game(ctx) {
     husky = new Husky
     controller = new Controller(husky)
}

let lastTime = 0;


Game.prototype.loop = function (timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp
        
        ctx.clearRect(0,0,800,800);
        husky.update(deltaTime);
        husky.draw(ctx);
        requestAnimationFrame(this.loop.bind(this))
    }

module.exports = Game;