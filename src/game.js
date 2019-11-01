const Husky = require("./husky");
const Controller = require('./controller');
// const Explosion = require('./explosion');
const Ending = require('./ending')
const levels = require('./levels')
const builder = require("./builder")
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
     this.currentLevel = 1
     this.count = 0;
     this.gameOver = this.gameOver.bind(this);
}

Game.prototype.draw = function (ctx) {
    let img = new Image ();
    img.src = "dist/pokemontile.png"
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 2, 2, 315, 249, 0, 0, 800, 650)
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

Game.prototype.gameOver = function() {
    // Get the modal
    let gamemodal = document.getElementById("gameOver");

    // Get the button that opens the modal
    let gamebtn = document.getElementById("gameOverBtn");


    gamebtn.onclick = function () {
        this.lives = 99
        gamemodal.style.display = "none";
    }
    if (this.lives === 0) {
        // console.log(this.lives)
        gamemodal.style.display = "block";
        let lives = document.getElementById('gameover-lives')
        lives.innerHTML = 'You made it to level ' + this.currentLevel
    } else {
        gamemodal.style.display = "none";
    }
    // When the user clicks on the button, open the modal

  
}



let lastTime = 0;
Game.prototype.loop = function (timestamp) {
    this.gameOver();
    // console.log(this.lives)
    // let lives = document.getElementById('lives')
    // lives.innerHTML = this.lives + ' lives'
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