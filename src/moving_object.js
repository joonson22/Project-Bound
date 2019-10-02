
function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;
}


    MovingObject.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
        ctx.fill();
    }

    MovingObject.prototype.moveLeft = function() {
        this.pos[0] = this.pos[0] - this.vel[0]
    }

    MovingObject.prototype.moveRight = function() {
        this.pos[0] = this.pos[0] + this.vel[0]
    }
    MovingObject.prototype.moveUp = function() {
        this.pos[1] = this.pos[1] - this.vel[1]
    }
    MovingObject.prototype.moveDown = function() {
        this.pos[1] = this.pos[1] + this.vel[1]
    }


    MovingObject.prototype.update = function (deltaTime) {

        // if (!deltaTime) return;
            if (this.pos[0] < 0) {this.pos[0] = 0}
            if (this.pos[0] > 750) {this.pos[0] = 750}
            if (this.pos[1] < 0) {this.pos[1] = 0}
            if (this.pos[1] > 750) {this.pos[1] = 750}
        this.pos[0] / deltaTime;
        this.pos[1] / deltaTime;

    }


module.exports = MovingObject;