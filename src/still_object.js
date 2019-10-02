function StillObject (options) {
    this.pos = options.pos;
    this.color = options.color;
}

StillObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(10, 20, 100, 100);
    ctx.fill();
}

module.exports = StillObject;