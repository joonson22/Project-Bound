/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/builder.js":
/*!************************!*\
  !*** ./src/builder.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Explosion = __webpack_require__(/*! ./explosion */ \"./src/explosion.js\");\n\nfunction buildLevel(level) {\n    let blasts = [];\n    console.log(level)\n    level.forEach((row, rowIndex) => {\n        row.forEach((explosion, explosionIndex) => {\n            if (explosion === 5) {\n                let x = 160 * explosionIndex\n                let y = 114 * rowIndex\n                blasts.push(new Explosion({\n                    color: \"#505050\",\n                    pos: [\n                        x, y\n                    ],\n                    start: 700,\n                    delay: 3000,\n                    timer: 100\n                }))\n            }\n            else if (explosion === 4) {\n                let x = 160 * explosionIndex\n                let y = 114 * rowIndex\n                blasts.push(new Explosion({\n                    color: \"#505050\",\n                    pos: [\n                        x, y\n                    ],\n                    start: 550,\n                    delay: 3000,\n                    timer: 100\n                }))\n            }\n            else if (explosion === 3) {\n                let x = 160 * explosionIndex\n                let y = 114 * rowIndex\n                blasts.push(new Explosion({\n                    color: \"#FF5733\",\n                    pos: [\n                        x, y\n                    ],\n                    start: 400,\n                    delay: 3000,\n                    timer: 100\n                }))\n            }\n            else if (explosion === 2) {\n                let x = 160 * explosionIndex\n                let y = 114 * rowIndex\n                blasts.push(new Explosion({\n                    color: \"#505050\",\n                    pos: [\n                        x, y\n                    ],\n                    start: 250,\n                    delay: 3000,\n                    timer: 100\n                }))\n            }\n            else if (explosion === 1) {\n                // console.log(rowIndex)\n                let x = 160 * explosionIndex\n                let y = 114 * rowIndex\n                blasts.push(new Explosion({\n                    color: \"#505050\",\n                    pos: [\n                        x, y\n                    ],\n                    start: 100,\n                    delay: 3000,\n                    timer: 100\n                }))\n            }\n            else if (explosion === 6) {\n                // console.log(rowIndex)\n                let x = 160 * explosionIndex\n                let y = 114 * rowIndex\n                blasts.push(new Explosion({\n                    color: \"#505050\",\n                    pos: [\n                        x, y\n                    ],\n                    start: 0,\n                    delay: 3000,\n                    timer: 500\n                }))\n            }\n            else if (explosion === 7) {\n                // console.log(rowIndex)\n                let x = 160 * explosionIndex\n                let y = 114 * rowIndex\n                blasts.push(new Explosion({\n                    color: \"#505050\",\n                    pos: [\n                        x, y\n                    ],\n                    start: 0,\n                    delay: 2000,\n                    timer: 500\n                }))\n            }\n        })\n    })\n    // debugger\n    return blasts;\n}\n\nmodule.exports.buildLevel = buildLevel\n\n//# sourceURL=webpack:///./src/builder.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const husky = __webpack_require__(/*! ./husky */ \"./src/husky.js\");\n\nfunction Controller(husky){\n    document.addEventListener('keydown', (e) => {\n        \n        switch (e.keyCode) {\n            case 65:\n               husky.movement.left = true;\n               husky.moveLeft();\n               break;\n\n            case 87:\n              husky.movement.up = true;\n              husky.moveUp();\n              break;\n\n            case 68:\n              husky.movement.right = true;\n              husky.moveRight();\n              break;\n            case 83:\n              husky.movement.down = true;\n              husky.moveDown();\n              break;\n        }\n    })\n\n    document.addEventListener('keyup', (e) => {\n      \n        switch (e.keyCode) {\n            case 65:\n              return husky.movement.left = false;  \n            case 87:\n            return husky.movement.up = false;  \n\n            case 68:\n            return husky.movement.right = false;  \n            case 83:\n            return husky.movement.down = false;  \n        }\n    })\n}\n\nmodule.exports = Controller;\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/ending.js":
/*!***********************!*\
  !*** ./src/ending.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nfunction Ending (options) {\n    this.color = \"#505050\";\n    this.pos = [\n        800 / 2 - 80 / 2,\n        10\n    ]\n    this.width = 80\n    this.height = 80\n}\n\nEnding.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n    ctx.fill();\n}\n\nmodule.exports = Ending;\n\n//# sourceURL=webpack:///./src/ending.js?");

/***/ }),

/***/ "./src/explosion.js":
/*!**************************!*\
  !*** ./src/explosion.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Explosion(options) {\n    this.color = options.color\n    this.pos = options.pos\n    this.width = 160\n    this.height = 114\n\n    this.active = false;\n    this.start = options.start\n    this.delay = options.delay\n    this.timer = options.timer\n\n}\n\nExplosion.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n    ctx.fill();\n}\n\nExplosion.prototype.update = function (deltaTime) {\n    \n    // console.log(this.timer)\n    // console.log(deltaTime);\n    this.start -= deltaTime\n    // debugger\n    // console.log(this.start)\n    if (this.start < 0 && this.active === true) {\n        this.active = false;\n        this.start = this.delay\n    }\n    \n    if (this.start < 0 && this.active === false) {\n        this.active = true;\n        this.start = this.timer\n    }\n}\n\n\n\n\nmodule.exports = Explosion;\n\n//# sourceURL=webpack:///./src/explosion.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Husky = __webpack_require__(/*! ./husky */ \"./src/husky.js\");\nconst Controller = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n// const Explosion = require('./explosion');\nconst Ending = __webpack_require__(/*! ./ending */ \"./src/ending.js\")\nconst levels = __webpack_require__(/*! ./levels */ \"./src/levels.js\")\nconst builder = __webpack_require__(/*! ./builder */ \"./src/builder.js\")\nconst TileBuilder = __webpack_require__(/*! ./tilebuilder */ \"./src/tilebuilder.js\");\n\nfunction Game(ctx) {\n     this.husky = new Husky();\n     this.controller = new Controller(this.husky)\n     this.ending = new Ending();\n     this.lives = 99\n     this.tilebuilder = new TileBuilder;\n     this.updateObjects = [this.husky]\n     this.gameObjects = [this.husky, this.ending, this.tilebuilder]\n     this.allExplosions = builder.buildLevel(levels.level1)\n     this.currentLevel = 1\n     \n}\n\nGame.prototype.draw = function (ctx) {\n    this.gameObjects.forEach(object => {\n        object.draw(ctx)\n    })\n\n    this.allExplosions.forEach(explosion => {\n        if (explosion.active) {\n            explosion.draw(ctx)\n        }\n    })\n\n}\n\n\nGame.prototype.update = function (deltaTime) {\n    this.updateObjects.forEach(object => {\n        object.update(deltaTime)\n    })\n\n  \n    this.allExplosions.forEach(explosion => {\n        explosion.update(deltaTime)\n    })\n    \n}\n\nGame.prototype.loadLevel = function () {\n    \n    this.currentLevel += 1\n    // this.allExplosions = [];\n    this.allExplosions = builder.buildLevel(levels[`level${this.currentLevel}`])\n}\n\nGame.prototype.checkCollisions = function () {\n    for (let i = 0; i < this.allExplosions.length; i++) {\n        if (this.husky.checkCollision(this.allExplosions[i]) && this.allExplosions[i].active) {\n            this.reset();\n        }\n    }\n    if (this.husky.checkCollision(this.ending)) {\n        // debugger\n        this.loadLevel();\n        this.husky.reset();\n    }\n}\n\nGame.prototype.reset = function () {\n    this.lives -= 1\n    console.log(this.lives)\n    this.husky.reset();\n    \n}\n\n\n\nlet lastTime = 0;\nGame.prototype.loop = function (timestamp) {\n    let deltaTime = timestamp - lastTime;\n    lastTime = timestamp\n    ctx.clearRect(0,0,800,800);\n    this.checkCollisions();\n    this.update(deltaTime)\n    this.draw(ctx)\n    requestAnimationFrame(this.loop.bind(this))\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/husky.js":
/*!**********************!*\
  !*** ./src/husky.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst DEFAULTS = {\n    color: \"#505050\",\n    pos: [\n        800 / 2 - 50 / 2,\n        800 - 50 - 10\n    ],\n    vel: [60,60],\n    width: 50,\n    height: 50,\n};\n\nfunction Husky(options) {\n    options = options || {};\n    options.color = DEFAULTS.COLOR;\n    options.pos = DEFAULTS.pos;\n    options.vel = DEFAULTS.vel;\n    options.width = DEFAULTS.width;\n    options.height = DEFAULTS.height;\n    MovingObject.call(this, options);\n}\n\n\n\nUtil.inherits(Husky, MovingObject);\n\n\n\n\n\nmodule.exports = Husky;\n\n\n//# sourceURL=webpack:///./src/husky.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    let canvas = document.getElementById(\"game-canvas\");\n    ctx = canvas.getContext('2d');\n  \n    let game = new Game(ctx);\n   \n    game.loop(0);\n\n    \n\n    console.log(\"webpack is working\")\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nconst base = [\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0]\n]\nconst level1 = [\n    [0, 0, 0, 0, 0],\n    [5, 5, 5, 5, 5],\n    [4, 4, 4, 4, 4],\n    [3, 3, 3, 3, 3],\n    [2, 2, 2, 2, 2],\n    [1, 1, 1, 1, 1],\n    [0, 0, 0, 0, 0]\n]\nconst level2 = [\n    [0, 0, 0, 0, 0],\n    [6, 6, 6, 6, 6],\n    [7, 7, 7, 7, 7],\n    [6, 6, 6, 6, 6],\n    [7, 7, 7, 7, 7],\n    [6, 6, 6, 6, 6],\n    [0, 0, 0, 0, 0]\n]\n\nmodule.exports.base = base;\nmodule.exports.level1 = level1;\nmodule.exports.level2 = level2;\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(options) {\n    this.originalPos = options.pos\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.color = options.color;\n    this.width = options.width;\n    this.height = options.height;\n    this.speedLeft = 0;\n    this.speedRight = 0;\n    this.speedUp = 0;\n    this.speedDown = 0;\n    this.movement = {\n        left: true,\n        right: true,\n        up: true,\n        down: true\n    }\n    this.reset = this.reset.bind(this);\n    this.draw = this.draw.bind(this);\n}\n\n    MovingObject.prototype.reset = function () {\n        this.pos = [375,740]\n        // debugger\n    }\n\n    MovingObject.prototype.draw = function (ctx) {\n        ctx.fillStyle = this.color;\n        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n        ctx.fill();\n    }\n\n    MovingObject.prototype.moveLeft = function() {\n       this.speedLeft = -this.vel[0]\n    }\n\n    MovingObject.prototype.moveRight = function() {\n       this.speedRight = this.vel[0]\n    }\n    MovingObject.prototype.moveUp = function() {\n        this.speedUp = -this.vel[0]\n    }\n    MovingObject.prototype.moveDown = function() {\n        this.speedDown = this.vel[0]\n    }\n\n    MovingObject.prototype.checkCollision = function (object) {\n        if (object.pos[0] < this.pos[0] + this.width &&\n            object.pos[0] + object.width > this.pos[0] &&\n            object.pos[1] < this.pos[1] + this.height &&\n            object.pos[1] + object.height > this.pos[1]\n            ) {\n                return true;\n            } else {\n                return false;\n            }\n    }\n\n    MovingObject.prototype.update = function (deltaTime) {\n        if (!deltaTime) return;\n        \n        let velocityScaleX = this.speedLeft / deltaTime;\n        let velocityScaleX2 = this.speedRight / deltaTime;\n        let velocityScaleY = this.speedUp / deltaTime;\n        let velocityScaleY2 = this.speedDown / deltaTime;\n\n        if (this.pos[0] < 0) {this.pos[0] = 0}\n        if (this.pos[0] > 750) {this.pos[0] = 750}\n        if (this.pos[1] < 0) {this.pos[1] = 0}\n        if (this.pos[1] > 750) {this.pos[1] = 750}\n        \n\n        if (this.movement.left) {\n            this.pos[0] += velocityScaleX\n        }\n        if (this.movement.right) {\n            this.pos[0] += velocityScaleX2\n        }\n        if (this.movement.up) {\n            this.pos[1] += velocityScaleY\n        }\n        if (this.movement.down) {\n            this.pos[1] += velocityScaleY2\n        }\n        \n      \n        // this.pos[0] += velocityScaleX\n        // this.pos[1] += velocityScaleY\n\n    }\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/tilebuilder.js":
/*!****************************!*\
  !*** ./src/tilebuilder.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const levels = __webpack_require__(/*! ./levels */ \"./src/levels.js\")\n\nfunction TileBuilder () {\n    this.sprite_size = 16;\n    this.tile_sheet = new Image();\n    this.tile_sheet.src = \"pokemon.png\";\n    this.base = levels.base;\n}\n\nTileBuilder.prototype.draw  = function(ctx) {\n\n    this.base.forEach((row, rowIndex) => {\n        row.forEach((tile, tileIndex) => {\n            let x = 160 * tileIndex\n            let y = 114 * rowIndex\n            ctx.drawImage(this.tile_sheet, 112, 4112, 176, 4176,x,y,400,400)\n        })\n    })\n    \n}\n\n\n\nmodule.exports = TileBuilder;\n\n//# sourceURL=webpack:///./src/tilebuilder.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits: function inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype)\n        childClass.prototype.constructor = childClass;\n    }\n};\n\nmodule.exports = Util\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });