const { Card } = require("./card.ts")

test('instantiates a proper card, only red seeds are red', () => {
  let card = new Card("a", "X");
  expect(card.getCard()).toEqual("10<br>a");
  expect(card.getColor()).toEqual("BLACK");
})