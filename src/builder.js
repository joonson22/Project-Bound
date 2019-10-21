const Explosion = require('./explosion');

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
                    start: 700,
                    delay: 3000,
                    timer: 100,
                    reset: false
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
                    start: 550,
                    delay: 3000,
                    timer: 100,
                    reset: false
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
                    start: 400,
                    delay: 3000,
                    timer: 100,
                    reset: false
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
                    start: 250,
                    delay: 3000,
                    timer: 100,
                    reset: false
                }))
            }
            else if (explosion === 1) {
                
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    start: 100,
                    delay: 3000,
                    timer: 100,
                    reset: true
                }))
            }
            else if (explosion === 6) {
                
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    start: 0,
                    delay: 3000,
                    timer: 500
                }))
            }
            else if (explosion === 7) {
                
                let x = 160 * explosionIndex
                let y = 114 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    start: 0,
                    delay: 2000,
                    timer: 500
                }))
            }
        })
    })
    
    return blasts;
}

module.exports.buildLevel = buildLevel