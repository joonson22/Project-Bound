const Husky = require("./husky");
const Controller = require('./controller');
// const Explosion = require('./explosion');
const Ending = require('./ending')
const levels = require('./levels')
const builder = require("./builder");
const tilebuilder = require("./tilebuilder");

// const TileBuilder = require('./tilebuilder');

function Game(ctx) {
     this.husky = new Husky();
     this.controller = new Controller(this.husky)
     this.ending = new Ending();
     this.lives = 99
    //  this.tilebuilder = new TileBuilder;
     this.updateObjects = [this.husky]
     this.gameObjects = [this.husky, this.ending]
     this.allExplosions = builder.buildLevel(levels.level1.level)
     this.allTiles = tilebuilder.tilebuilder(levels.level1.level)
     this.nonTiles = tilebuilder.nontilebuilder(levels.level1.level)
     this.currentLevel = 1
     this.count = 0;
     this.gameOver = this.gameOver.bind(this);
     this.resetLives = this.resetLives.bind(this);
}

Game.prototype.draw = function (ctx) {
    // let img = new Image ();
    // img.src = "dist/pokemontile.png"
    // ctx.imageSmoothingEnabled = false;
    // ctx.drawImage(img, 2, 2, 315, 249, 0, 0, 800, 650)


    this.allTiles.forEach(tile => {
        tile.draw(ctx);
    })
    this.nonTiles.forEach(tile => {
        tile.draw2(ctx)
    })
    
    if (this.currentLevel === 10) return;
    if (this.lives === 0) return;
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
    if (this.currentLevel === 10) return;
    if (this.lives === 0) return;
    this.updateObjects.forEach(object => {
        object.update(deltaTime)
    })

    for (let i = 0; i < this.allExplosions.length; i++) {
        this.allExplosions[i].update(deltaTime)

    }

    // this.allExplosions.forEach(explosion => {
    //     explosion.update(deltaTime)
    // })
    
}

Game.prototype.loadGame = function(ctx, deltaTime) {
    this.draw(ctx)
    this.update(deltaTime)
}

Game.prototype.loadLevel = function () {
    this.count = 0;
    this.currentLevel += 1
    // this.allExplosions = [];
    this.allExplosions = builder.buildLevel(levels[`level${this.currentLevel}`].level)
}

Game.prototype.resetLevel = function () {
    
    // this.currentLevel += 1
    // this.allExplosions = [];
    this.allExplosions = builder.buildLevel(levels[`level${this.currentLevel}`].level)
}

Game.prototype.checkCollisions = function () {
    for (let i = 0; i < this.allExplosions.length; i++) {
        if (this.husky.checkCollision(this.allExplosions[i]) && this.allExplosions[i].active) {
            this.reset();
        
        }
    }
    if (this.husky.checkCollision(this.ending)) {

        this.loadLevel();
        this.husky.reset();
    }
}

Game.prototype.reset = function () {
    this.lives -= 1
    // console.log(this.lives)
    this.husky.reset();
    
}

Game.prototype.handleCount = function() {
        this.count += 1
        // console.log(this.count)
    
    if (this.count === levels[`level${this.currentLevel}`].count) {
        this.count = 0
        // console.log('it has reset')
        this.resetLevel();
    }
}

Game.prototype.resetLives = function() {
    this.lives = 99
}

Game.prototype.gameOver = function() {
    // get game over modal elements
    let gameOverModal = document.getElementById("gameOver");
    let gameOverbtn = document.getElementById("gameOverBtn");
    // if 0 lives open game over modal
    if (this.lives === 0) {
        // console.log(this.lives)
        gameOverModal.style.display = "block";
        let lives = document.getElementById('gameover-lives')
        lives.innerHTML = 'You made it to level ' + this.currentLevel
    } 
    let that = this;
    // reset lives and close game over modal
    gameOverbtn.onclick = function () {
        that.resetLives()
        gameOverModal.style.display = "none";
        // debugger
    }
    
    

    // get win modal elements
    let winModal = document.getElementById("win");
    
    // if pass last level open modal
    if (this.currentLevel === 8) {
        winModal.style.display = "block";
    } 
  
}



let lastTime = 0;
Game.prototype.loop = function (timestamp) {
    
    this.gameOver();
    // console.log(this.lives)
    let lives = document.getElementById('lives')
    lives.innerHTML = this.lives + ' lives'
    this.handleCount();
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp
    ctx.clearRect(0,0,800,800);
    this.checkCollisions();
    this.update(deltaTime)
    this.draw(ctx)
    requestAnimationFrame(this.loop.bind(this))
}

module.exports = Game;