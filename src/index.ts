const { log } = require("./logger.ts");
const { Card } = require("./card.ts");
const { Stack } = require("./stack.ts");
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

const cardMoveHandler = (function () {
  let selectedCard: any | undefined;
  const handlers: any = {};

  function setCardPosition(event: { clientX: number; clientY: number }) {
    if (selectedCard) {
      selectedCard.style.top = event.clientY + 20 + "px";
      selectedCard.style.left = event.clientX + 90 + "px";
    }
  }

  handlers.mousemove = function (event: any) {
    setCardPosition(event);
  };

  handlers.stackClick = function (event: any) {
    const { stack, card, clickEvent } = event.detail;
    if (card == stack.peekTopCard()) {
      stack.removeTopCard();
      const cardDomElement = card.getDomElement();
      selectedCard = cardDomElement;
      selectedCard.style.position = "fixed";
      setCardPosition(clickEvent);
      gameContainer.appendChild(cardDomElement);
    }
  };

  return (event: any) => {
    return handlers[event.type](event);
  };
})();

gameContainer.addEventListener("mousemove", cardMoveHandler);
gameContainer.addEventListener("stackClick", cardMoveHandler);
for (let stack of stacks) {
  gameContainer.appendChild(stack.getDomElement());
}
