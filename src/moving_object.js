
function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;
    this.speed = [0,0]
    
}


    MovingObject.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
        ctx.fill();
    }

    MovingObject.prototype.moveLeft = function() {
       this.speed[0] = -this.vel[0]
       this.speed[1] = 0;
        console.log(this.speed)
    }

    MovingObject.prototype.moveRight = function() {
        this.speed[0] = this.vel[0]
        this.speed[1] = 0
        console.log(this.speed)
    }
    MovingObject.prototype.moveUp = function() {
        this.speed[0] = 0;
        this.speed[1] = -this.vel[1]
        console.log(this.speed)
    }
    MovingObject.prototype.moveDown = function() {
        this.speed[0] = 0;
        this.speed[1] = this.vel[1]
        console.log(this.speed)
    }

    MovingObject.prototype.stop = function() {
        this.speed[0] = 0;
        this.speed[1] = 0;
    }
    MovingObject.prototype.update = function (deltaTime) {
        if (!deltaTime) return;
        
        let velocityScaleX = this.speed[0] / deltaTime;
        let velocityScaleY = this.speed[1] / deltaTime;

            if (this.pos[0] < 0) {this.pos[0] = 0}
            if (this.pos[0] > 750) {this.pos[0] = 750}
            if (this.pos[1] < 0) {this.pos[1] = 0}
            if (this.pos[1] > 750) {this.pos[1] = 750}

      
        this.pos[0] += velocityScaleX
        this.pos[1] += velocityScaleY

    }


module.exports = MovingObject;