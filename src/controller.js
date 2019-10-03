const husky = require('./husky');

function Controller(husky){
    document.addEventListener('keydown', (e) => {
        
        switch (e.keyCode) {
            case 65:
               return husky.moveLeft();
                

            case 87:
              return  husky.moveUp();
                

            case 68:
               return husky.moveRight();
                
            case 83:
              return  husky.moveDown();
            
        }
    })

    document.addEventListener('keyup', (e) => {
      
        switch (e.keyCode) {
            case 65:
              if (husky.speed[0] < 0) {
                return husky.stop();
              }
                

            case 87:
            if (husky.speed[1] < 0) {
              return  husky.stop();
            }

            case 68:
            if (husky.speed[0] > 0) {
               return husky.stop();
            }
            case 83:
            if (husky.speed[1] > 0) {
              return husky.stop();
            }
        }
    })
}

module.exports = Controller;