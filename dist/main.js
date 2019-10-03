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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const husky = __webpack_require__(/*! ./husky */ \"./src/husky.js\");\n\nfunction Controller(husky){\n    document.addEventListener('keydown', (e) => {\n        \n        switch (e.keyCode) {\n            case 65:\n               husky.movement.left = true;\n               husky.moveLeft();\n               break;\n\n            case 87:\n              husky.movement.up = true;\n              husky.moveUp();\n              break;\n\n            case 68:\n              husky.movement.right = true;\n              husky.moveRight();\n              break;\n            case 83:\n              husky.movement.down = true;\n              husky.moveDown();\n              break;\n        }\n    })\n\n    document.addEventListener('keyup', (e) => {\n      \n        switch (e.keyCode) {\n            case 65:\n              return husky.movement.left = false;  \n            case 87:\n            return husky.movement.up = false;  \n\n            case 68:\n            return husky.movement.right = false;  \n            case 83:\n            return husky.movement.down = false;  \n        }\n    })\n}\n\nmodule.exports = Controller;\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/explosion.js":
/*!**************************!*\
  !*** ./src/explosion.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst StillObject = __webpack_require__(/*! ./still_object */ \"./src/still_object.js\")\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst DEFAULTS = {\n    color: \"#505050\",\n    pos: [\n        10,10\n    ],\n    width: 100,\n    height: 100,\n};\n\nfunction Explosion(options) {\n    options = options || {};\n    options.color = DEFAULTS.COLOR;\n    options.pos = DEFAULTS.pos;\n    options.width = DEFAULTS.width;\n    options.height = DEFAULTS.height;\n    StillObject.call(this, options);\n    // this.pulse = this.pulse.bind(this);\n    this.active = true;\n    this.timer = 70;\n}\n\nUtil.inherits(Explosion, StillObject);\n\nExplosion.prototype.update = function (deltaTime) {\n    \n    console.log(this.timer)\n    console.log(deltaTime);\n    this.timer -= 1\n    if (this.timer < 0 && this.active === true) {\n        this.active = false;\n        this.timer = 100\n    }\n    \n    if (this.timer < 0 && this.active === false) {\n        this.active = true;\n        this.timer = 70\n    }\n}\n\n// Explosion.prototype.pulse = function (ctx) {\n//     // console.log('pulse')\n//     // this.draw(ctx);\n//     setInterval(() => {\n//         this.draw(ctx)\n//         console.log('drawing')\n//     }, 1000)\n\n    // setTimeout(\n    //     setInterval(() => {\n    //         ctx.clearRect(this.pos[0], this.pos[1], this.width, this.height)\n    //         console.log('erasing')\n    //     }, 1000), 1000  \n    // )\n// }\n\n// Explosion.prototype.redraw = function (ctx) {\n//     ctx.clearRect(this.pos[0], this.pos[1], this.width, this.height)\n//     this.draw(ctx)\n//     console.log('drawing')\n// }\n\n\nmodule.exports = Explosion;\n\n//# sourceURL=webpack:///./src/explosion.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Husky = __webpack_require__(/*! ./husky */ \"./src/husky.js\");\nconst Controller = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\nconst Explosion = __webpack_require__(/*! ./explosion */ \"./src/explosion.js\");\n\nfunction Game(ctx) {\n     this.husky = new Husky();\n     this.explosion = new Explosion;\n     this.controller = new Controller(this.husky)\n     this.allExplosions = [];\n     this.allExplosions.push(this.explosion)\n     this.lives = 99\n     this.updateObjects = [this.husky]\n     this.gameObjects = [this.husky]\n}\n\n\nGame.prototype.draw = function (ctx) {\n    this.gameObjects.forEach(object => {\n        object.draw(ctx)\n    })\n\n    this.allExplosions.forEach(explosion => {\n        if (explosion.active) {\n            explosion.draw(ctx)\n        }\n    })\n\n}\n\nGame.prototype.update = function (deltaTime) {\n    this.updateObjects.forEach(object => {\n        object.update(deltaTime)\n    })\n\n    this.allExplosions.forEach(explosion => {\n        explosion.update(deltaTime)\n    })\n    \n}\n\n// Game.prototype.explode = function (ctx) {\n//     this.allExplosions.forEach(explosion => {\n//         explosion.pulse(ctx)\n//     })\n// }\n\n\nGame.prototype.checkCollisions = function () {\n    for (let i = 0; i < this.allExplosions.length; i++) {\n        if (this.husky.checkCollision(this.allExplosions[i]) && this.allExplosions[i].active) {\n            this.reset();\n        }\n    }\n}\n\nGame.prototype.reset = function () {\n    this.lives -= 1\n    console.log(this.lives)\n    this.husky.reset();\n    \n}\n\n\n\nlet lastTime = 0;\nGame.prototype.loop = function (timestamp) {\n    let deltaTime = timestamp - lastTime;\n    lastTime = timestamp\n    ctx.clearRect(0,0,800,800);\n    this.checkCollisions();\n    this.update(deltaTime)\n    this.draw(ctx)\n    requestAnimationFrame(this.loop.bind(this))\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/husky.js":
/*!**********************!*\
  !*** ./src/husky.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst DEFAULTS = {\n    color: \"#505050\",\n    pos: [\n        800 / 2 - 50 / 2,\n        800 - 50 - 10\n    ],\n    vel: [50,50],\n    width: 50,\n    height: 50,\n};\n\nfunction Husky(options) {\n    options = options || {};\n    options.color = DEFAULTS.COLOR;\n    options.pos = DEFAULTS.pos;\n    options.vel = DEFAULTS.vel;\n    options.width = DEFAULTS.width;\n    options.height = DEFAULTS.height;\n    MovingObject.call(this, options);\n}\n\n\n\nUtil.inherits(Husky, MovingObject);\n\n\n\n\n\nmodule.exports = Husky;\n\n\n//# sourceURL=webpack:///./src/husky.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst StillObject = __webpack_require__(/*! ./still_object */ \"./src/still_object.js\");\nconst Husky = __webpack_require__(/*! ./husky */ \"./src/husky.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Controller = __webpack_require__(/*! ./controller */ \"./src/controller.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    let canvas = document.getElementById(\"game-canvas\");\n    ctx = canvas.getContext('2d');\n  \n    let game = new Game(ctx);\n    // game.explode(ctx);\n    game.loop();\n\n    \n\n    console.log(\"webpack is working\")\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(options) {\n    this.originalPos = options.pos\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.color = options.color;\n    this.width = options.width;\n    this.height = options.height;\n    this.speedLeft = 0;\n    this.speedRight = 0;\n    this.speedUp = 0;\n    this.speedDown = 0;\n    this.movement = {\n        left: true,\n        right: true,\n        up: true,\n        down: true\n    }\n    this.reset = this.reset.bind(this);\n    this.draw = this.draw.bind(this);\n}\n\n    MovingObject.prototype.reset = function () {\n        this.pos = [375,740]\n        // debugger\n    }\n\n    MovingObject.prototype.draw = function (ctx) {\n        ctx.fillStyle = this.color;\n        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n        ctx.fill();\n    }\n\n    MovingObject.prototype.moveLeft = function() {\n       this.speedLeft = -this.vel[0]\n    }\n\n    MovingObject.prototype.moveRight = function() {\n       this.speedRight = this.vel[0]\n    }\n    MovingObject.prototype.moveUp = function() {\n        this.speedUp = -this.vel[0]\n    }\n    MovingObject.prototype.moveDown = function() {\n        this.speedDown = this.vel[0]\n    }\n\n    MovingObject.prototype.checkCollision = function (object) {\n        if (object.pos[0] < this.pos[0] + this.width &&\n            object.pos[0] + object.width > this.pos[0] &&\n            object.pos[1] < this.pos[1] + this.height &&\n            object.pos[1] + object.height > this.pos[1]\n            ) {\n                return true;\n            } else {\n                return false;\n            }\n    }\n\n    MovingObject.prototype.update = function (deltaTime) {\n        if (!deltaTime) return;\n        \n        let velocityScaleX = this.speedLeft / deltaTime;\n        let velocityScaleX2 = this.speedRight / deltaTime;\n        let velocityScaleY = this.speedUp / deltaTime;\n        let velocityScaleY2 = this.speedDown / deltaTime;\n\n        if (this.pos[0] < 0) {this.pos[0] = 0}\n        if (this.pos[0] > 750) {this.pos[0] = 750}\n        if (this.pos[1] < 0) {this.pos[1] = 0}\n        if (this.pos[1] > 750) {this.pos[1] = 750}\n        \n\n        if (this.movement.left) {\n            this.pos[0] += velocityScaleX\n        }\n        if (this.movement.right) {\n            this.pos[0] += velocityScaleX2\n        }\n        if (this.movement.up) {\n            this.pos[1] += velocityScaleY\n        }\n        if (this.movement.down) {\n            this.pos[1] += velocityScaleY2\n        }\n        \n      \n        // this.pos[0] += velocityScaleX\n        // this.pos[1] += velocityScaleY\n\n    }\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/still_object.js":
/*!*****************************!*\
  !*** ./src/still_object.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function StillObject (options) {\n    this.pos = options.pos;\n    this.color = options.color;\n    this.width = options.width;\n    this.height = options.height;\n}\n\nStillObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n    ctx.fill();\n}\n\nmodule.exports = StillObject;\n\n//# sourceURL=webpack:///./src/still_object.js?");

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