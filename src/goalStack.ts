const { Stack } = require("./stack.ts");
const { Card } = require("./card.ts");

exports.GoalStack = class GoalStack extends Stack {
  constructor() {
    super([]);
    this.STACK_LIMIT = 13;
    console.log("goalstack", this);
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

  protected handleCardClick(event: CustomEvent) {
    const card = event.detail.card;
    if (this.size() > 0) {
      const topCard = this.peekTopCard();
      if (topCard.getIntValue() + 1 == card.getIntValue() && topCard.getSeed() == card.getSeed()) {
        this.stackTopCard(card);
        this.emitStackClick({ event, card });
      }
    } else {
      if (card.getRank() == 1) {
        this.stackTopCard(card);
        this.emitStackClick({ event, card });
      }
    }
  }

  protected handleStackClick(event: MouseEvent) {
    this.emitStackClick({ event, card: undefined });
  }

  public emitStackClick(args: { event: any | null; card: typeof Card | null } = { event: undefined, card: undefined }) {
    const { event, card } = args;
    this.domElement.dispatchEvent(
      new CustomEvent("stackClick", {
        bubbles: true,
        detail: {
          clickEvent: event,
          stack: this,
          card: card,
        },
      })
    );
  }

  protected setupDomElement() {
    super.setupDomElement();
    if (this.domElement) {
      this.domElement.classList.add("goalStack");
    }
  }
};
