const { Stack } = require("./stack.ts");
const { Card } = require("./card.ts");

exports.GoalStack = class GoalStack extends Stack {
  constructor() {
    super([]);
    this.STACK_LIMIT = 13;
  }

  public stackTopCard(card: typeof Card) {
    if (this.size() > 0) {
      const topCard = this.peekTopCard();
      if (topCard.getIntValue() + 1 == card.getIntValue() && topCard.getSeed() == card.getSeed()) {
        super.stackTopCard(card);
      }
    } else {
      if (card.getIntValue() == 1) {
        super.stackTopCard(card);
      }
    }
  }

  public handleCardClick(event: any) {
    const card = event.detail.card;
    if (this.size() > 0) {
      const topCard = this.peekTopCard();
      if (topCard.getIntValue() + 1 == card.getIntValue() && topCard.getSeed() == card.getSeed()) {
        this.stackTopCard(card);
        this.emitStackClick();
      }
    } else {
      if (card.getRank() == 1) {
        this.stackTopCard(card);
        this.emitStackClick();
      }
    }
  }

  public handleStackClick(event: any) {
    this.emitStackClick();
  }

  public emitStackClick() {
    this.getDomElement().dispatchEvent(new CustomEvent("stackClick", { detail: { stack: this } }));
  }
};
