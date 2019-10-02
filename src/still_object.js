function StillObject (options) {
    this.pos = options.pos;
    this.color = options.color;
    this.width = options.width;
    this.height = options.height;
}

StillObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    ctx.fill();
}

module.exports = StillObject;