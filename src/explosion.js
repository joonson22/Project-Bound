
const StillObject = require("./still_object")
const Util = require('./util');

const DEFAULTS = {
    color: "#505050",
    pos: [
        10,10
    ],
    width: 100,
    height: 100,
};

function Explosion(options) {
    this.color = options.color
    this.pos = options.pos
    this.width = 133
    this.height = 114
    // options = options || {};
    // options.color = DEFAULTS.COLOR;
    // options.pos = DEFAULTS.pos;
    // options.width = DEFAULTS.width;
    // options.height = DEFAULTS.height;
    // StillObject.call(this, options);
    // this.pulse = this.pulse.bind(this);
    this.active = true;
    this.timer = options.timer

}

// Util.inherits(Explosion, StillObject);
Explosion.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    ctx.fill();
}

Explosion.prototype.update = function (deltaTime) {
    
    // console.log(this.timer)
    // console.log(deltaTime);
    this.timer -= 1
    if (this.timer < 0 && this.active === true) {
        this.active = false;
        this.timer = 100
    }
    
    if (this.timer < 0 && this.active === false) {
        this.active = true;
        this.timer = 70
    }
}




module.exports = Explosion;