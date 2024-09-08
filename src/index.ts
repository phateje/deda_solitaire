const { log } = require("./logger.ts");
const { Card } = require("./card.ts");
const { Stack } = require("./stack.ts");
const { constants } = require("./constants.ts");
const { Dom } = require("./dom");

log("Hello World!");

Dom.getElementsByTagName("body")[0].innerHTML = "<div id='game'></div>";

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

const gameContainer = Dom.getElementById("game");
gameContainer.addEventListener("cardClick", (event: any) => {
  console.log("cardClick", event)
})
for (let stack of stacks) {
  gameContainer.appendChild(stack.getDomElement());
}
