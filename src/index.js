const { log } = require("./logger.js")
const { Card } = require("./card.js")
const { constants } = require("./constants.js")

log("Hello World!");
log('hehehe15');

document.getElementsByTagName("body")[0].innerHTML = "<div id='game'></div>";

let cards = [];
for (let seed of constants.SEEDS) {
  for (let value of constants.VALUES) {
    cards.push(new Card(seed, value));
  }
}

for (let card of cards) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.classList.add(card.getColor());
  cardDiv.innerHTML = card.getCard();
  cardDiv.addEventListener("click", () => console.log(card));
  document.getElementById("game").appendChild(cardDiv);
}