const MovingObject = require("./moving_object");
const Util = require('./util');

const DEFAULTS = {
    color: "#505050",
    pos: [
        800 / 2 - 50 / 2,
        800 - 50 - 10
    ],
    vel: [50,50],
    width: 50,
    height: 50,
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
