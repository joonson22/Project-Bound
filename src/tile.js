function Tile(options) {
    this.pos = options.pos
    this.width = 160
    this.height = 93

}

Tile.prototype.draw = function (ctx) {
    let img = new Image();
    img.src = "dist/pokemontile.png"
    ctx.imageSmoothingEnabled = false;
    ctx.strokeStyle = '#03FA7F';  // some color/style
    ctx.lineWidth = 1; 
    ctx.drawImage(img, 2, 2, 315, 249, this.pos[0], this.pos[1], this.width, this.height)
    ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
}

Tile.prototype.draw2 = function (ctx) {
    let img = new Image();
    img.src = "dist/pokemontile.png"
    ctx.imageSmoothingEnabled = false;
    // ctx.strokeStyle = '#000';  // some color/style
    // ctx.lineWidth = 1; 
    ctx.drawImage(img, 2, 2, 315, 249, this.pos[0], this.pos[1], this.width, this.height)
    // ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
}



module.exports = Tile;