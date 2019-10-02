const Husky = require("./husky");
const Controller = require('./controller');
const Explosion = require('./explosion');

function Game(ctx) {
     this.husky = new Husky();
     this.explosion = new Explosion;
     this.controller = new Controller(this.husky)


     this.updateObjects = [this.husky]
     this.gameObjects = [this.husky, this.explosion]
}


// let gameObjects = [
//     this.husky,
//     this.explosion,
// ]

// let updateObjects = [
//     this.husky
// ]



Game.prototype.draw = function (ctx) {
    this.gameObjects.forEach(object => {
        object.draw(ctx)
    })
}

Game.prototype.update = function (deltaTime) {
    this.updateObjects.forEach(object => {
        // debugger
        object.update(deltaTime)
    })
    
}
let lastTime = 0;
Game.prototype.loop = function (timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp
        
        ctx.clearRect(0,0,800,800);
        // husky.draw(ctx);
        // explosion.draw(ctx);
        this.update(deltaTime)
        this.draw(ctx)
        requestAnimationFrame(this.loop.bind(this))
    }

module.exports = Game;