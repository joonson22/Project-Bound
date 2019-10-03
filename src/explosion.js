
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
    options = options || {};
    options.color = DEFAULTS.COLOR;
    options.pos = DEFAULTS.pos;
    options.width = DEFAULTS.width;
    options.height = DEFAULTS.height;
    StillObject.call(this, options);
    // this.pulse = this.pulse.bind(this);
    this.active = true;
    this.timer = 70;
}

Util.inherits(Explosion, StillObject);

Explosion.prototype.update = function (deltaTime) {
    
    console.log(this.timer)
    console.log(deltaTime);
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

// Explosion.prototype.pulse = function (ctx) {
//     // console.log('pulse')
//     // this.draw(ctx);
//     setInterval(() => {
//         this.draw(ctx)
//         console.log('drawing')
//     }, 1000)

    // setTimeout(
    //     setInterval(() => {
    //         ctx.clearRect(this.pos[0], this.pos[1], this.width, this.height)
    //         console.log('erasing')
    //     }, 1000), 1000  
    // )
// }

// Explosion.prototype.redraw = function (ctx) {
//     ctx.clearRect(this.pos[0], this.pos[1], this.width, this.height)
//     this.draw(ctx)
//     console.log('drawing')
// }


module.exports = Explosion;