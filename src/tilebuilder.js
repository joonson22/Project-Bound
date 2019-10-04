function TileBuilder () {
    this.sprite_size = 16;
    this.tile_sheet = new Image();
    this.tile_sheet.src = "pokemon.png";
}

TileBuilder.prototype.draw  = function(ctx) {
    ctx.drawImage(this.tile_sheet, 14, 19, 50, 64,0,0,100,100)
}

module.exports = TileBuilder;