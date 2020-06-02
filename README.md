# README

## Project Bound
[Live Demo](https://joonson22.github.io/Project-Bound/)

This JavaScript game is based off a mini-game in an old starcraft custom-map. It was made using raw JavaScript and HTML 5 Canvas

## Features
  * Instuction modal that teaches users how to play
  * Users can move in every direction using wasd keys, including diagonals.
  * Users must figure out patterns of explosions to reach the next level.
  * Collisions with explosions will cause the player to reset.
  * When player runs out of lives the game is over.
  
   ![](/dist/modal.png)
   
```javascript
document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext('2d');
  
    let game = new Game(ctx);
    window.game = game;
    game.loop(0);
 
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }
    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let introModal = document.getElementById("introModal");
    let introbtn = document.getElementById("introBtn");
 
    introbtn.onclick = function () {
        introModal.style.display = "none";
    }    
})
```
# ![](/dist/gameplay.gif)
   
```javascript
MovingObject.prototype.checkCollision = function (object) {
    if (object.pos[0] < this.pos[0] + this.width &&
        object.pos[0] + object.width > this.pos[0] &&
        object.pos[1] < this.pos[1] + this.height &&
        object.pos[1] + object.height > this.pos[1]
        ) {
            return true;
        } else {
            return false;
        }
}

MovingObject.prototype.update = function (deltaTime) {
    if (!deltaTime) return;

    let velocityScaleX = this.speedLeft / deltaTime;
    let velocityScaleX2 = this.speedRight / deltaTime;
    let velocityScaleY = this.speedUp / deltaTime;
    let velocityScaleY2 = this.speedDown / deltaTime;

    if (this.pos[0] < 0) {this.pos[0] = 0}
    if (this.pos[0] > 750) {this.pos[0] = 750}
    if (this.pos[1] < 0) {this.pos[1] = 0}
    if (this.pos[1] > 600) {this.pos[1] = 600}

    if (this.movement.left) {
        this.pos[0] += velocityScaleX
    }
    if (this.movement.right) {
        this.pos[0] += velocityScaleX2
    }
    if (this.movement.up) {
        this.pos[1] += velocityScaleY
    }
    if (this.movement.down) {
        this.pos[1] += velocityScaleY2
    }
}
```
 

## Technologies

This game was made entirely using raw JavaScript and HTML 5 Canvas.
