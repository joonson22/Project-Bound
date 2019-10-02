
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
}

Util.inherits(Explosion, StillObject);





module.exports = Explosion;