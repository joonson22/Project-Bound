const Explosion = require('./explosion');

function buildLevel(level) {
    let blasts = [];
    
    level.forEach((row, rowIndex) => {
        row.forEach((explosion, explosionIndex) => {
            if (explosion === 5) {
                let x = 160 * explosionIndex
                let y = 92 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    start: 700,
                    delay: 2500,
                    timer: 100,
                    reset: false
                }))
            }
            else if (explosion === 4) {
                let x = 160 * explosionIndex
                let y = 92 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    start: 550,
                    delay: 2500,
                    timer: 100,
                    reset: false
                }))
            }
            else if (explosion === 3) {
                let x = 160 * explosionIndex
                let y = 92 * rowIndex
                blasts.push(new Explosion({
                    color: "#FF5733",
                    pos: [
                        x, y
                    ],
                    start: 400,
                    delay: 2500,
                    timer: 100,
                    reset: false
                }))
            }
            else if (explosion === 2) {
                let x = 160 * explosionIndex
                let y = 92 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    start: 250,
                    delay: 2500,
                    timer: 100,
                    reset: false
                }))
            }
            else if (explosion === 1) {
                
                let x = 160 * explosionIndex
                let y = 92 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    start: 100,
                    delay: 2500,
                    timer: 100,
                    reset: true
                }))
            }
            else if (explosion === 6) {
                
                let x = 160 * explosionIndex
                let y = 92 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    start: 350,
                    delay: 2500,
                    timer: 100,
                    reset: false
                }))
            }
            else if (explosion === 7) {
                
                let x = 160 * explosionIndex
                let y = 92 * rowIndex
                blasts.push(new Explosion({
                    color: "#505050",
                    pos: [
                        x, y
                    ],
                    start: 800,
                    delay: 2500,
                    timer: 100,
                    reset: false
                }))
            }
        })
    })
    
    return blasts;
}

module.exports.buildLevel = buildLevel