

function Ending (options) {
    this.color = "#505050";
    this.pos = [
        800 / 2 - 50 / 2,
        10
    ]
    this.width = 50
    this.height = 50
}

Ending.prototype.draw = function (ctx) {
    let img = new Image();
    img.src = "dist/berries.png"
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 161, 372, 39, 34, this.pos[0], this.pos[1], this.width, this.height)
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    // ctx.fill();
}

module.exports = Ending;