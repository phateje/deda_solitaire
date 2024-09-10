const { log } = require("./logger.ts");
const { Card } = require("./card.ts");
const { Stack } = require("./stack.ts");
const { constants } = require("./constants.ts");
const { Dom } = require("./dom");

log("Hello World!");

Dom.getElementsByTagName("body")[0].innerHTML = "<div id='game'><div id='overlay'></div></div>";

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

let selectedCard: any;
function setCardPosition(event: { clientX: number; clientY: number }) {
  if (selectedCard) {
    selectedCard.style.top = event.clientY + 20 + "px";
    selectedCard.style.left = event.clientX + 90 + "px";
  }
}

const gameContainer = Dom.getElementById("game");
gameContainer.addEventListener("mousemove", (event: any) => {
  setCardPosition(event);
});
gameContainer.addEventListener("stackClick", (event: any) => {
  const { stack, card, clickEvent } = event.detail;
  if (card == stack.peekTopCard()) {
    stack.removeTopCard();
    const cardDomElement = card.getDomElement();
    selectedCard = cardDomElement;
    selectedCard.style.position = "fixed";
    setCardPosition(clickEvent);
    gameContainer.appendChild(cardDomElement);
  }
});
for (let stack of stacks) {
  gameContainer.appendChild(stack.getDomElement());
}
