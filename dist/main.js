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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst { constants } = __webpack_require__(/*! ./constants.ts */ \"./src/constants.ts\");\nconst { Dom } = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\nexports.Card = class Card {\n    constructor(seed, value) {\n        this.seed = seed;\n        this.value = value == \"X\" ? \"10\" : value;\n        this.setupDomElement();\n    }\n    getColor() {\n        return \"♥♦\".includes(this.seed) ? constants.RED : constants.BLACK;\n    }\n    getValue() {\n        return this.value; // could cast to number?\n    }\n    getIntValue() {\n        switch (this.value) {\n            case \"A\":\n                return 1;\n            case \"J\":\n                return 11;\n            case \"Q\":\n                return 12;\n            case \"K\":\n                return 13;\n            default:\n                return parseInt(this.value);\n        }\n    }\n    getSeed() {\n        return this.seed;\n    }\n    getCard() {\n        // could be another class\n        return this.value + \"<br>\" + this.seed;\n    }\n    getDomElement() {\n        return this.domElement;\n    }\n    setupDomElement() {\n        this.domElement = Dom.createElement(\"div\");\n        if (this.domElement) {\n            this.domElement.classList.add(\"card\");\n            this.domElement.classList.add(this.getColor());\n            this.domElement.innerHTML = this.getCard();\n            this.domElement.addEventListener(\"click\", (event) => {\n                this.domElement.dispatchEvent(new CustomEvent(\"cardClick\", { bubbles: true, detail: { card: this, clickEvent: event } }));\n            });\n            this.domElement.addEventListener(\"mouseover\", (event) => {\n                event.target.style.backgroundColor = \"#aaa\";\n            });\n            this.domElement.addEventListener(\"mouseleave\", (event) => {\n                event.target.style.backgroundColor = \"\";\n            });\n        }\n    }\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/card.ts?");

/***/ }),

/***/ "./src/cardMoveHandler.ts":
/*!********************************!*\
  !*** ./src/cardMoveHandler.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst { Card } = __webpack_require__(/*! ./card.ts */ \"./src/card.ts\");\nconst { Stack } = __webpack_require__(/*! ./stack.ts */ \"./src/stack.ts\");\nexports.CardMoveHandler = class CardMoveHandler {\n    constructor(gameContainer) {\n        this.gameContainer = gameContainer;\n        const self = this;\n        if (gameContainer) {\n            gameContainer.addEventListener(\"mousemove\", self.mousemove.bind(self));\n            gameContainer.addEventListener(\"stackClick\", self.stackClick.bind(self));\n        }\n    }\n    mousemove(event) {\n        this.setCardPosition(event);\n    }\n    stackClick(event) {\n        const { stack, card, clickEvent } = event.detail;\n        const isNewClick = card == stack.peekTopCard() && !this.selectedCard;\n        const isClickOnDestinationStack = this.selectedCard && stack.size() < 3;\n        // todo moving card to empty stack that's not the source stack is not allowed\n        if (isNewClick) {\n            this.selectNewCard(card, stack, clickEvent);\n        }\n        else if (isClickOnDestinationStack) {\n            this.stackCardOn(stack);\n        }\n    }\n    selectNewCard(card, stack, clickEvent) {\n        stack.removeTopCard();\n        this.sourceStack = stack;\n        this.selectedCard = card;\n        const cardDomElement = card.getDomElement();\n        cardDomElement.style.position = \"fixed\";\n        this.setCardPosition(clickEvent);\n        this.gameContainer.appendChild(cardDomElement);\n    }\n    stackCardOn(stack) {\n        const cardDomElement = this.selectedCard.getDomElement();\n        cardDomElement.style.position = \"\";\n        stack.stackTopCard(this.selectedCard);\n        this.sourceStack = undefined;\n        this.selectedCard = undefined;\n    }\n    setCardPosition(event) {\n        if (this.selectedCard) {\n            const domElement = this.selectedCard.getDomElement();\n            domElement.style.top = event.clientY + 10 + \"px\";\n            domElement.style.left =\n                event.clientX + domElement.getBoundingClientRect().width - domElement.style.marginLeft + \"px\";\n        }\n    }\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/cardMoveHandler.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.constants = {\n    BLACK: \"BLACK\",\n    RED: \"RED\",\n    SEEDS: \"♥♦♠♣\",\n    VALUES: \"A23456789XJQK\"\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/constants.ts?");

/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction isDomAvailable() {\n    try {\n        return document && 1;\n    }\n    catch (err) {\n        return false;\n    }\n}\nexports.Dom = class Dom {\n    static createElement(...args) {\n        if (isDomAvailable()) {\n            return document.createElement(args[0], args[1]);\n        }\n    }\n    static getElementsByTagName(tagName) {\n        if (isDomAvailable()) {\n            return document.getElementsByTagName(tagName);\n        }\n    }\n    static getElementById(id) {\n        if (isDomAvailable()) {\n            return document.getElementById(id);\n        }\n    }\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/dom.ts?");

/***/ }),

/***/ "./src/goalStack.ts":
/*!**************************!*\
  !*** ./src/goalStack.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst { Stack } = __webpack_require__(/*! ./stack.ts */ \"./src/stack.ts\");\nconst { Card } = __webpack_require__(/*! ./card.ts */ \"./src/card.ts\");\nexports.GoalStack = class GoalStack extends Stack {\n    constructor() {\n        super([]);\n        this.STACK_LIMIT = 13;\n    }\n    stackTopCard(card) {\n        if (this.size() > 0) {\n            const topCard = this.peekTopCard();\n            if (topCard.getIntValue() + 1 == card.getIntValue() && topCard.getSeed() == card.getSeed()) {\n                super.stackTopCard(card);\n            }\n        }\n        else {\n            if (card.getIntValue() == 1) {\n                super.stackTopCard(card);\n            }\n        }\n    }\n    handleCardClick(event) {\n        const card = event.detail.card;\n        if (this.size() > 0) {\n            const topCard = this.peekTopCard();\n            if (topCard.getIntValue() + 1 == card.getIntValue() && topCard.getSeed() == card.getSeed()) {\n                this.stackTopCard(card);\n                this.emitStackClick();\n            }\n        }\n        else {\n            if (card.getRank() == 1) {\n                this.stackTopCard(card);\n                this.emitStackClick();\n            }\n        }\n    }\n    handleStackClick(event) {\n        this.emitStackClick();\n    }\n    emitStackClick() {\n        this.getDomElement().dispatchEvent(new CustomEvent(\"stackClick\", { detail: { stack: this } }));\n    }\n    setupDomElement() {\n        super.setupDomElement();\n        if (this.domElement) {\n            this.domElement.classList.add(\"goalStack\");\n        }\n    }\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/goalStack.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst { log } = __webpack_require__(/*! ./logger.ts */ \"./src/logger.ts\");\nconst { Card } = __webpack_require__(/*! ./card.ts */ \"./src/card.ts\");\nconst { Stack } = __webpack_require__(/*! ./stack.ts */ \"./src/stack.ts\");\nconst { GoalStack } = __webpack_require__(/*! ./goalStack.ts */ \"./src/goalStack.ts\");\nconst { CardMoveHandler } = __webpack_require__(/*! ./cardMoveHandler.ts */ \"./src/cardMoveHandler.ts\");\nconst { constants } = __webpack_require__(/*! ./constants.ts */ \"./src/constants.ts\");\nconst { Dom } = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\nlog(\"Hello World!\");\nDom.getElementsByTagName(\"body\")[0].innerHTML = \"<div id='game'><div id='overlay'></div></div>\";\nconst gameContainer = Dom.getElementById(\"game\");\nlet cards = [];\nlet i = 0;\nlet currStack = new Stack();\nlet stacks = [new GoalStack(), new GoalStack(), new GoalStack(), new GoalStack(), currStack];\nfor (let seed of constants.SEEDS) {\n    for (let value of constants.VALUES) {\n        let newCard = new Card(seed, value);\n        cards.push(newCard);\n        i++;\n        currStack.stackTopCard(newCard);\n        if (i == 3) {\n            i = 0;\n            currStack = new Stack();\n            stacks.push(currStack);\n        }\n    }\n}\nfor (let stack of stacks) {\n    gameContainer.appendChild(stack.getDomElement());\n}\n// sets moving handlers + logic on the dom object\nnew CardMoveHandler(gameContainer);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/logger.ts":
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction log(msg, ...args) {\n    console.log(msg, args);\n    return 3;\n}\nexports.log = log;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/logger.ts?");

/***/ }),

/***/ "./src/stack.ts":
/*!**********************!*\
  !*** ./src/stack.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst { Card } = __webpack_require__(/*! ./card.ts */ \"./src/card.ts\");\nconst { Dom } = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\nexports.Stack = class Stack {\n    constructor(cards = []) {\n        this.STACK_LIMIT = 3;\n        this.cards = [];\n        if (cards.length > this.STACK_LIMIT) {\n            throw new Error(\"too many cards!\");\n        }\n        cards.forEach((card) => this.cards.push(card));\n        this.setupDomElement();\n    }\n    peekTopCard() {\n        return this.cards[this.cards.length - 1];\n    }\n    removeTopCard() {\n        const card = this.cards.pop();\n        this.populateDomChildren();\n        return card;\n    }\n    stackTopCard(card) {\n        if (this.cards.length == this.STACK_LIMIT) {\n            throw new Error(\"too many cards!\");\n        }\n        this.cards.push(card);\n        this.populateDomChildren();\n    }\n    size() {\n        return this.cards.length;\n    }\n    getDomElement() {\n        return this.domElement;\n    }\n    setupDomElement() {\n        if (!this.domElement) {\n            this.domElement = Dom.createElement(\"div\");\n        }\n        if (!this.domElement) {\n            return;\n        }\n        this.domElement.classList.add(\"stack\");\n        this.domElement.addEventListener(\"cardClick\", this.handleCardClick.bind(this));\n        this.domElement.addEventListener(\"click\", this.handleStackClick.bind(this));\n        this.populateDomChildren();\n    }\n    populateDomChildren() {\n        if (this.domElement) {\n            this.domElement.replaceChildren();\n            for (let card of this.cards) {\n                this.domElement.appendChild(card.getDomElement());\n            }\n        }\n    }\n    handleCardClick(event) {\n        console.log(\"card click\");\n        event.stopPropagation();\n        this.domElement.dispatchEvent(new CustomEvent(\"stackClick\", {\n            bubbles: true,\n            detail: {\n                card: event.detail.card,\n                clickEvent: event.detail.clickEvent,\n                stack: this,\n            },\n        }));\n    }\n    handleStackClick(event) {\n        console.log(\"stack click\");\n        // handle click on empty stack to return card from source to it\n        if (event.target !== this.domElement) {\n            event.stopPropagation();\n            return;\n        }\n        event.stopPropagation();\n        this.domElement.dispatchEvent(new CustomEvent(\"stackClick\", {\n            bubbles: true,\n            detail: {\n                clickEvent: event,\n                stack: this,\n            },\n        }));\n    }\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/stack.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;