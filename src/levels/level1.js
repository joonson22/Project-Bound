const Explosion = require("../explosion")

function buildLevel (level) {
    let blasts = [];
    level.forEach((row, rowIndex) => {
        row.forEach((explosion, explosionIndex) => {
            if (explosion === 5) {
                let x = 133 * explosionIndex
                let y = 114 
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 300
                }))
            }
            else if (explosion === 4) {
                let x = 133 * explosionIndex
                let y = 228
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 250
                }))
            }
            else if (explosion === 3) {
                let x = 133 * explosionIndex
                let y = 342
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 200
                }))
            }
            else if (explosion === 2) {
                let x = 133 * explosionIndex
                let y = 456
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 150
                }))
            }
           else if (explosion === 1) {
                let x = 133 * explosionIndex
                let y = 570
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 100
                }))
            }
        })
    })
    return blasts;
}

const level1 = [
    [0,0,0,0,0,0],
    [5,5,5,5,5,5],
    [4,4,4,4,4,4],
    [3,3,3,3,3,3],
    [2,2,2,2,2,2],
    [1,1,1,1,1,1],
    [0,0,0,0,0,0]
]

module.exports.level1 = level1;
module.exports.buildLevel = buildLevel;
