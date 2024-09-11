exports.CardMoveHandler = class CardMoveHandler {
  private selectedCard: any | undefined;
  private previousStack: any | undefined;
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
    if (card == stack.peekTopCard()) {
      // clear previous card
      if (this.selectedCard && this.previousStack && stack != this.previousStack) {
        console.log("should restore card");
        this.selectedCard.getDomElement().style.position = "";
        this.previousStack.stackTopCard(this.selectedCard);
      }

      stack.removeTopCard();
      this.previousStack = stack;
      this.selectedCard = card;
      const cardDomElement = card.getDomElement();
      cardDomElement.style.position = "fixed";
      this.setCardPosition(clickEvent);
      this.gameContainer.appendChild(cardDomElement);
    }
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
