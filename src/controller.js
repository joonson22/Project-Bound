const husky = require('./husky');

function Controller(husky){
    document.addEventListener('keydown', (e) => {
      
        switch (e.keyCode) {
            case 37:
               return husky.moveLeft();
                

            case 38:
              return  husky.moveUp();
                

            case 39:
               return husky.moveRight();
                
            case 40:
              return  husky.moveDown();
            
        }
    })
}

module.exports = Controller;