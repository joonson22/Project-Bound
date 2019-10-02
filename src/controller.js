const husky = require('./husky');

function Controller(husky){
    document.addEventListener('keydown', (e) => {
      
        switch (e.keyCode) {
            case 37:
                husky.moveLeft();
                break;

            case 38:
                husky.moveUp();
                break;

            case 39:
                husky.moveRight();
                break;
            case 40:
                husky.moveDown();
                break;
        
            
        }
    })
}

module.exports = Controller;