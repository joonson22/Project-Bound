const Explosion = require("../explosion")

function buildLevel(level) {
    let blasts = [];
    level.forEach((row, rowIndex) => {
        row.forEach((explosion, explosionIndex) => {
            if (explosion === 5) {
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 300,
                    delay: 290
                }))
            }
            else if (explosion === 4) {
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 250,
                    delay: 280
                }))
            }
            else if (explosion === 3) {
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#FF5733",
                    pos: [
                        x, y
                    ],
                    timer: 200,
                    delay: 270
                }))
            }
            else if (explosion === 2) {
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 150,
                    delay: 260
                }))
            }
            else if (explosion === 1) {
                // console.log(rowIndex)
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#0F0F0F",
                    pos: [
                        x, y
                    ],
                    timer: 100,
                    delay: 250
                }))
            }
            else if (explosion === 6) {
                // console.log(rowIndex)
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 100,
                    delay: 50
                }))
            }
            else if (explosion === 7) {
                // console.log(rowIndex)
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    timer: 200,
                    delay: 120
                }))
            }
        })
    })
    // debugger
    return blasts;
}

const level1 = [
    [0, 0, 0, 0, 0],
    [5, 5, 5, 5, 5],
    [4, 4, 4, 4, 4],
    [3, 3, 3, 3, 3],
    [2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
]
const level2 = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    [2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
]

const level3 = [
    [0, 0, 0, 0, 0],
    [3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
]
const level4 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6],
    [0, 0, 0, 0, 0]
]


module.exports.level1 = level1;
module.exports.level2 = level2;
module.exports.level3 = level3;
module.exports.buildLevel = buildLevel;
