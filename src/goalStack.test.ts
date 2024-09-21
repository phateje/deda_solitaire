const { GoalStack } = require("./goalStack");
const { Card } = require("./card");

describe("GoalStack", () => {
  let goalStack: any;
  let aceCard: any;
  let twoCard: any;

  beforeEach(() => {
    goalStack = new GoalStack();
    aceCard = new Card("hearts", 1);
    twoCard = new Card("hearts", 2);
  });

  test("should stack card if stack is empty and card is an Ace", () => {
    goalStack.stackTopCard(aceCard);
    expect(goalStack.size()).toBe(1);
    expect(goalStack.peekTopCard()).toBe(aceCard);
  });

  test("should not stack card if stack is empty and card is not an Ace", () => {
    const nonAceCard = new Card(2, "hearts");
    goalStack.stackTopCard(nonAceCard);
    expect(goalStack.size()).toBe(0);
  });

  test("should stack card if top card is one less in value and same seed", () => {
    goalStack.stackTopCard(aceCard); // Stack an Ace first
    goalStack.stackTopCard(twoCard);
    expect(goalStack.size()).toBe(2);
    expect(goalStack.peekTopCard()).toBe(twoCard);
  });

  test("should not stack card if top card is not one less in value", () => {
    goalStack.stackTopCard(aceCard); // Stack an Ace first
    const invalidCard = new Card(3, "hearts");
    goalStack.stackTopCard(invalidCard);
    expect(goalStack.size()).toBe(1);
    expect(goalStack.peekTopCard()).toBe(aceCard);
  });

  test("should not stack card if top card is not the same seed", () => {
    goalStack.stackTopCard(aceCard); // Stack an Ace first
    const differentSeedCard = new Card(2, "spades");
    goalStack.stackTopCard(differentSeedCard);
    expect(goalStack.size()).toBe(1);
    expect(goalStack.peekTopCard()).toBe(aceCard);
  });
});
