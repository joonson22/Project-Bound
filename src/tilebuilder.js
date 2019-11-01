const Explosion = require('./explosion');
const Tile = require('./tile');

function tilebuilder(level) {
    let tiles = [];

    level.forEach((row, rowIndex) => {
        row.forEach((tile, tileIndex) => {
            if (tile) {
                let x = 160 * tileIndex
                let y = 92 * rowIndex
                tiles.push(new Tile({
                    pos: [
                        x, y
                    ],
                }))
            } 
            
        })
    })

    return tiles;
}

function nontilebuilder(level) {
    let tiles = [];

    level.forEach((row, rowIndex) => {
        row.forEach((tile, tileIndex) => {
            if (!tile) {
                let x = 160 * tileIndex
                let y = 92 * rowIndex
                tiles.push(new Tile({
                    pos: [
                        x, y
                    ],
                }))
            } 
            
        })
    })

    return tiles;
}

module.exports.tilebuilder = tilebuilder
module.exports.nontilebuilder = nontilebuilder