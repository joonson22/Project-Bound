function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.color = options.color;
    
}

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(200, 100, 16, 16); 
    ctx.fill();
}

MovingObject.prototype.move = function (ctx) {
    this.pos[0] = this.pos[0] + this.vel[0]
    this.pos[1] = this.pos[1] + this.vel[1]
    this.draw(ctx);
}

module.exports = MovingObject;