const Husky = require("./husky");
const Controller = require('./controller');
const Explosion = require('./explosion');
// const level1 = require("./levels/level1")
// import {buildLevel, level1} from "./levels/level1"
const levels = require('./levelss/level1')

function Game(ctx) {
     this.husky = new Husky();
    //  this.explosion = new Explosion;
     this.controller = new Controller(this.husky)
     //  this.allExplosions.push(this.explosion)
     this.lives = 99
     this.updateObjects = [this.husky]
     this.gameObjects = [this.husky]
     this.allExplosions = levels.buildLevel(levels.level1);
     
}

Game.prototype.draw = function (ctx) {
    this.gameObjects.forEach(object => {
        object.draw(ctx)
    })

    this.allExplosions.forEach(explosion => {
        if (explosion.active) {
            explosion.draw(ctx)
        }
    })

}


Game.prototype.update = function (deltaTime) {
    this.updateObjects.forEach(object => {
        object.update(deltaTime)
    })

  
    this.allExplosions.forEach(explosion => {
        explosion.update(deltaTime)
    })
    
}



Game.prototype.checkCollisions = function () {
    for (let i = 0; i < this.allExplosions.length; i++) {
        if (this.husky.checkCollision(this.allExplosions[i]) && this.allExplosions[i].active) {
            this.reset();
        }
    }
}

Game.prototype.reset = function () {
    this.lives -= 1
    console.log(this.lives)
    this.husky.reset();
    
}



let lastTime = 0;
Game.prototype.loop = function (timestamp) {
    let deltaTime = timestamp - lastTime;
    console.log(timestamp)
    lastTime = timestamp
    ctx.clearRect(0,0,800,800);
    this.checkCollisions();
    this.update(deltaTime)
    this.draw(ctx)
    requestAnimationFrame(this.loop.bind(this))
}

module.exports = Game;