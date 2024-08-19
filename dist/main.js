/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("const { constants } = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\")\r\n\r\n\r\nexports.Card = class Card {\r\n    #seed;\r\n    #value;\r\n    constructor(seed, value) {\r\n        this.#seed = seed;\r\n        this.#value = value == 'X' ? \"10\" : value;\r\n    }\r\n\r\n    getColor() {\r\n        return \"♥♦\".includes(this.#seed) ? constants.RED : constants.BLACK;\r\n    }\r\n\r\n    getValue() {\r\n        return this.value; // could cast to number?\r\n    }\r\n\r\n    getSeed() {\r\n        return this.#seed;\r\n    }\r\n\r\n    getCard() {\r\n        return this.#value + \"<br>\" + this.#seed;\r\n    }\r\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/card.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.constants = {\r\n    BLACK: \"BLACK\",\r\n    RED: \"RED\",\r\n    SEEDS: \"♥♦♠♣\",\r\n    VALUES: \"A23456789XJQK\"\r\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { log } = __webpack_require__(/*! ./logger.js */ \"./src/logger.js\")\r\nconst { Card } = __webpack_require__(/*! ./card.js */ \"./src/card.js\")\r\nconst { constants } = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\")\r\n\r\nlog(\"Hello World!\");\r\nlog('hehehe15');\r\n\r\ndocument.getElementsByTagName(\"body\")[0].innerHTML = \"<div id='game'></div>\";\r\n\r\nlet cards = [];\r\nfor (let seed of constants.SEEDS) {\r\n  for (let value of constants.VALUES) {\r\n    cards.push(new Card(seed, value));\r\n  }\r\n}\r\n\r\nfor (let card of cards) {\r\n  let cardDiv = document.createElement(\"div\");\r\n  cardDiv.classList.add(\"card\");\r\n  cardDiv.classList.add(card.getColor());\r\n  cardDiv.innerHTML = card.getCard();\r\n  cardDiv.addEventListener(\"click\", () => console.log(card));\r\n  document.getElementById(\"game\").appendChild(cardDiv);\r\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("function log(msg, ...args) {\r\n  console.log(msg, args);\r\n  return 3;\r\n}\r\n\r\nexports.log = log;\n\n//# sourceURL=webpack://my-webpack-project/./src/logger.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;