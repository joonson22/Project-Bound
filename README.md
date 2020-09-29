# README

## Project Bound
[Live Demo](https://joonson22.github.io/Project-Bound/)

This JavaScript game is based off a mini-game in an old starcraft custom-map. The game is designed on a 5x5 grid where PokeBalls constantly appear. The objective of the game is for the user to figure out the patterns of the PokeBalls and to navigate through to the next level without getting caught. When the players run out of lives, the game is over. Each level is designed by me with the idea of the first few levels being beginner levels and the later levels becoming more advanced. The patterns repeat themselves each level so that users can get the timing and the route they need to use to get to the next level.

## Architecture and Technologies
  * Pure JavaScript for game loop and character movement
  * HTML Canvas for rendering
  * Webpack to bundle scripts together and convert JavaScript
  
## MVP and Features
 
### Instruction Modal

  # ![](/dist/modal.png)
   
 I created an instruction modal that explains the goal of the game and how to move your character. To achieve this modal I used DOM manipulation to grab the IDs of the modal, open button, and close button. I added an EventListener so when the page loads the instruction modal is already shown. I added an on click event to the start game button to set the modal display to "none" so users can close the modal. When the user wants to read the instructions again, they can click on the instruction buttons which sets the modal display to "block" so the modal shows up again.
   
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
### Character Movement and Collision
# ![](/dist/gameplay.gif)

Users can move in every direction using wasd keys, including diagonals. User movement is calculated by their current position plus/minus the velocity of the character and direction of the input divided by the delta time. User collision is detected through the user's position is within the bounds of the object's position such as the Pokeballs or the walls in the game. If a user positions overlaps with a Pokeball, the user will reset to the starting position.
  
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

