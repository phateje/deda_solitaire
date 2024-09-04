const { Card } = require("./card.ts")

exports.Stack = class Stack {
  private cards: Array<typeof Card> = [];
  private static readonly STACK_LIMIT: number = 3;

  constructor(cards: Array<typeof Card>) {
    if (cards.length > Stack.STACK_LIMIT) {
      throw new Error("too many cards!");
    }
    cards.forEach(card => this.cards.push(card));
  }

  public peekTopCard(): typeof Card {
    return this.cards[this.cards.length - 1];
  }

  public removeTopCard(): typeof Card {
    return this.cards.pop();
  }

  public stackTopCard(card: typeof Card) {
    if (this.cards.length == Stack.STACK_LIMIT) {
      throw new Error("too many cards!");
    }
    this.cards.push(card);
  }

  public size(): number {
    return this.cards.length;
  }
}
