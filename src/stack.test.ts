const { Card } = require("./card.ts")
const { Stack } = require("./stack.ts")

test('simple stack 1 card', () => {
  const card = new Card("a", "2");
  const stack = new Stack([card]);
  expect(stack.peekTopCard()).toEqual(card);
  expect(stack.size()).toEqual(1);
})

test('peek empty stack', () => {
  const stack = new Stack([]);
  expect(stack.peekTopCard()).toEqual(undefined);
  expect(stack.size()).toEqual(0);
})

test('pops from stack', () => {
  const topCard = new Card("a", "2");
  const bottomCard = new Card("b", "4");
  const stack = new Stack([bottomCard, topCard]);
  
  expect(stack.size()).toEqual(2);
  expect(stack.peekTopCard()).toEqual(topCard);
  expect(stack.removeTopCard()).toEqual(topCard);
  expect(stack.peekTopCard()).toEqual(bottomCard);
  expect(stack.size()).toEqual(1);
})

test('pushes on stack', () => {
  const topCard = new Card("a", "2");
  const bottomCard = new Card("b", "4");
  const stack = new Stack([bottomCard]);
  
  expect(stack.size()).toEqual(1);
  expect(stack.peekTopCard()).toEqual(bottomCard);
  stack.stackTopCard(topCard);
  expect(stack.size()).toEqual(2);
  expect(stack.peekTopCard()).toEqual(topCard);
})

test('cannot push more than 3 cards', () => {
  const card = new Card("a", "2");
  let expectedError;
  try {
    const stack = new Stack([card, card, card, card]);
  } catch (err) {
    expectedError = err;
  }
  expect(expectedError).not.toBeUndefined();
})

test('cannot push more than 3 cards, again', () => {
  const card = new Card("a", "2");
  let expectedError;
  const stack = new Stack([card, card, card]);
  try {
    stack.stackTopCard(card);
  } catch (err) {
    expectedError = err;
  }
  expect(expectedError).not.toBeUndefined();
})