const { log } = require("./logger.ts");
const { Card } = require("./card.ts");
const { Stack } = require("./stack.ts");
const { CardMoveHandler } = require("./cardMoveHandler.ts");
const { constants } = require("./constants.ts");
const { Dom } = require("./dom");

log("Hello World!");

Dom.getElementsByTagName("body")[0].innerHTML = "<div id='game'><div id='overlay'></div></div>";
const gameContainer = Dom.getElementById("game");

let cards = [];
let i = 0;
let currStack = new Stack();
let stacks = [currStack];
for (let seed of constants.SEEDS) {
  for (let value of constants.VALUES) {
    let newCard = new Card(seed, value);
    cards.push(newCard);
    i++;
    currStack.stackTopCard(newCard);
    if (i == 3) {
      i = 0;
      currStack = new Stack();
      stacks.push(currStack);
    }
  }
}
for (let stack of stacks) {
  gameContainer.appendChild(stack.getDomElement());
}

// sets moving handlers + logic on the dom object
new CardMoveHandler(gameContainer);
