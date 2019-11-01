
function MovingObject(options) {
    this.originalPos = options.pos
    this.pos = options.pos;
    this.vel = options.vel;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;
    this.speedLeft = 0;
    this.speedRight = 0;
    this.speedUp = 0;
    this.speedDown = 0;
    this.movement = {
        left: true,
        right: true,
        up: true,
        down: true
    }
    this.reset = this.reset.bind(this);
    this.draw = this.draw.bind(this);
}

    MovingObject.prototype.reset = function () {
        this.pos = [375,590]

    }

    MovingObject.prototype.draw = function (ctx) {
        let img = new Image();
        // img.src = "dist/snorlax.png"
        // img.src = "dist/pika.png"
        img.src = "dist/pika5.png"
        ctx.imageSmoothingEnabled = false;
        // ctx.drawImage(img, 1, 3, 63, 66, this.pos[0], this.pos[1], this.width, this.height)
        // ctx.drawImage(img, 250, 150, 478, 564, this.pos[0], this.pos[1], this.width, this.height)
        ctx.drawImage(img, 30, 26, 41, 47, this.pos[0], this.pos[1], this.width, this.height)
        // ctx.drawImage(img,this.pos[0], this.pos[1], this.width, this.height)
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
        // ctx.fill();
    }

    MovingObject.prototype.moveLeft = function() {
       this.speedLeft = -this.vel[0]
    }

    MovingObject.prototype.moveRight = function() {
       this.speedRight = this.vel[0]
    }
    MovingObject.prototype.moveUp = function() {
        this.speedUp = -this.vel[0]
    }
    MovingObject.prototype.moveDown = function() {
        this.speedDown = this.vel[0]
    }

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
        
      
        // this.pos[0] += velocityScaleX
        // this.pos[1] += velocityScaleY

    }


module.exports = MovingObject;