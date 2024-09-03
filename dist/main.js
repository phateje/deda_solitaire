/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.ts":
/*!*********************!*\
  !*** ./src/card.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Card_seed, _Card_value, _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nlet { constants } = __webpack_require__(/*! ./constants.ts */ \"./src/constants.ts\");\nexports.Card = (_a = class Card {\n        constructor(seed, value) {\n            _Card_seed.set(this, void 0);\n            _Card_value.set(this, void 0);\n            __classPrivateFieldSet(this, _Card_seed, seed, \"f\");\n            __classPrivateFieldSet(this, _Card_value, value == 'X' ? \"10\" : value, \"f\");\n        }\n        getColor() {\n            return \"♥♦\".includes(__classPrivateFieldGet(this, _Card_seed, \"f\")) ? constants.RED : constants.BLACK;\n        }\n        getValue() {\n            return __classPrivateFieldGet(this, _Card_value, \"f\"); // could cast to number?\n        }\n        getSeed() {\n            return __classPrivateFieldGet(this, _Card_seed, \"f\");\n        }\n        getCard() {\n            return __classPrivateFieldGet(this, _Card_value, \"f\") + \"<br>\" + __classPrivateFieldGet(this, _Card_seed, \"f\");\n        }\n    },\n    _Card_seed = new WeakMap(),\n    _Card_value = new WeakMap(),\n    _a);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/card.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.constants = {\n    BLACK: \"BLACK\",\n    RED: \"RED\",\n    SEEDS: \"♥♦♠♣\",\n    VALUES: \"A23456789XJQK\"\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/constants.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst { log } = __webpack_require__(/*! ./logger.ts */ \"./src/logger.ts\");\nconst { Card } = __webpack_require__(/*! ./card.ts */ \"./src/card.ts\");\nconst { constants } = __webpack_require__(/*! ./constants.ts */ \"./src/constants.ts\");\nlog(\"Hello World!\");\nlog('hehehe15');\ndocument.getElementsByTagName(\"body\")[0].innerHTML = \"<div id='game'></div>\";\nlet cards = [];\nfor (let seed of constants.SEEDS) {\n    for (let value of constants.VALUES) {\n        cards.push(new Card(seed, value));\n    }\n}\nfor (let card of cards) {\n    let cardDiv = document.createElement(\"div\");\n    cardDiv.classList.add(\"card\");\n    cardDiv.classList.add(card.getColor());\n    cardDiv.innerHTML = card.getCard();\n    cardDiv.addEventListener(\"click\", () => console.log(card));\n    document.getElementById(\"game\").appendChild(cardDiv);\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/logger.ts":
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction log(msg, ...args) {\n    console.log(msg, args);\n    return 3;\n}\nexports.log = log;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/logger.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;