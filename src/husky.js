const MovingObject = require("./moving_object");
const Util = require('./util');

const DEFAULTS = {
    color: "#505050",
    pos: [
        800 / 2 - 100 / 2,
        800 - 100 - 10
    ],
    vel: [30, 30],
    width: 100,
    height: 100,
};

function Husky(options) {
    options = options || {};
    options.color = DEFAULTS.COLOR;
    options.pos = DEFAULTS.pos;
    options.vel = DEFAULTS.vel;
    options.width = DEFAULTS.width;
    options.height = DEFAULTS.height;
    
    MovingObject.call(this, options);
}

Util.inherits(Husky, MovingObject);





module.exports = Husky;
