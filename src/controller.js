const husky = require('./husky');

function Controller(husky){
    document.addEventListener('keydown', (e) => {
        
        switch (e.keyCode) {
            case 65:
               husky.movement.left = true;
               husky.moveLeft();
               break;

            case 87:
              husky.movement.up = true;
              husky.moveUp();
              break;

            case 68:
              husky.movement.right = true;
              husky.moveRight();
              break;
            case 83:
              husky.movement.down = true;
              husky.moveDown();
              break;
        }
    })

    document.addEventListener('keyup', (e) => {
      
        switch (e.keyCode) {
            case 65:
              return husky.movement.left = false;  
            case 87:
            return husky.movement.up = false;  

            case 68:
            return husky.movement.right = false;  
            case 83:
            return husky.movement.down = false;  
        }
    })
}

module.exports = Controller;