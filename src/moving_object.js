
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
        this.pos[0] = this.pos[1] - this.vel[0]
    }
    MovingObject.prototype.moveDown = function() {
        this.pos[0] = this.pos[0] + this.vel[0]
    }


    MovingObject.prototype.update = function (deltaTime) {
        if (!deltaTime) return;
        this.pos[0] += 5 / deltaTime;
    }


module.exports = MovingObject;