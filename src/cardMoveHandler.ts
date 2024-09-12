const { Card } = require("./card.ts");
const { Stack } = require("./stack.ts");

exports.CardMoveHandler = class CardMoveHandler {
  private selectedCard: any | undefined;
  private sourceStack: any | undefined;
  private gameContainer;

  constructor(gameContainer: HTMLDivElement) {
    this.gameContainer = gameContainer;
  }

  private setCardPosition(event: { clientX: number; clientY: number }) {
    if (this.selectedCard) {
      this.selectedCard.getDomElement().style.top = event.clientY + 20 + "px";
      this.selectedCard.getDomElement().style.left = event.clientX + 90 + "px";
    }
  }

  private mousemove(event: any) {
    this.setCardPosition(event);
  }

  private stackClick(event: any) {
    const { stack, card, clickEvent } = event.detail;

    const isNewClick = card == stack.peekTopCard() && !this.selectedCard;
    const isClickOnDestinationStack = this.selectedCard && stack.size() < 3;

    console.log("so what's going on here", {
      stack,
      card,
      selectedCard: this.selectedCard,
      sourceStack: this.sourceStack,
      isNewClick,
      isClickOnDestinationStack,
    });
    if (isNewClick) {
      this.selectNewCard(card, stack, clickEvent);
    } else if (isClickOnDestinationStack) {
      this.stackCardOn(stack);
    }
  }

  private selectNewCard(card: typeof Card, stack: typeof Stack, clickEvent: any) {
    stack.removeTopCard();
    this.sourceStack = stack;
    this.selectedCard = card;
    const cardDomElement = card.getDomElement();
    cardDomElement.style.position = "fixed";
    this.setCardPosition(clickEvent);
    this.gameContainer.appendChild(cardDomElement);
  }

  private stackCardOn(stack: typeof Stack) {
    const cardDomElement = this.selectedCard.getDomElement();
    cardDomElement.style.position = "";
    stack.stackTopCard(this.selectedCard);
    this.sourceStack = undefined;
    this.selectedCard = undefined;
  }

  public getHandlers() {
    const self = this;
    return function (event: any) {
      if (event.type === "mousemove") {
        return self.mousemove(event);
      } else if (event.type === "stackClick") {
        return self.stackClick(event);
      }
    };
  }
};
