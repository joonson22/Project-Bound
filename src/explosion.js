const Util = require('./util');

function Explosion(options) {
    this.color = options.color
    this.pos = options.pos
    this.width = 160
    this.height = 92
    this.reset = options.reset
    this.active = false;
    

    this.start = options.start
    this.delay = options.delay
    this.timer = options.timer

}

Explosion.prototype.draw = function (ctx) {
    // let img = new Image();
    // img.src = "dist/pokeball.png"
    // ctx.drawImage(img,8,12,63,58,this.pos[0], this.pos[1],this.width, this.height)
    let img = new Image();
    img.src = "dist/ultraball.png"
    ctx.drawImage(img,4,4,60,58,this.pos[0], this.pos[1],this.width, this.height)
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    // ctx.fill();
}

Explosion.prototype.update = function (deltaTime) {
    
   
    this.start -= deltaTime
    if (this.start < 0 && this.active === true) {
        this.active = false;
        this.start = this.delay
    }
    
    if (this.start < 0 && this.active === false) {
        this.active = true;
        this.start = this.timer
    }
}




module.exports = Explosion;