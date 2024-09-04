const { Card } = require("./card.ts")

test('silly test 2', () => {
  let card = new Card("a", "X");
  expect(card.getCard()).toEqual("10<br>a");
})