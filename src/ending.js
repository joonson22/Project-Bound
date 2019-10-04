

function Ending (options) {
    this.color = "#505050";
    this.pos = [
        800 / 2 - 80 / 2,
        10
    ]
    this.width = 80
    this.height = 80
}

Ending.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    ctx.fill();
}

module.exports = Ending;