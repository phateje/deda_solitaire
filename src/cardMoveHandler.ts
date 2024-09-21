const { Card } = require("./card.ts");
const { Stack } = require("./stack.ts");

exports.CardMoveHandler = class CardMoveHandler {
  private selectedCard: any | undefined;
  private sourceStack: any | undefined;
  private gameContainer;

  constructor(gameContainer: HTMLDivElement) {
    this.gameContainer = gameContainer;
    const self = this;
    if (gameContainer) {
      gameContainer.addEventListener("mousemove", self.mousemove.bind(self));
      gameContainer.addEventListener("stackClick", self.stackClick.bind(self));
    }
  }

  private mousemove(event: any) {
    this.setCardPosition(event);
  }

  private stackClick(event: any) {
    const { stack, card, clickEvent } = event.detail;
    const isNewClick = card == stack.peekTopCard() && !this.selectedCard;
    const isClickOnDestinationStack = this.selectedCard && stack.size() < 3;
    // todo moving card to empty stack that's not the source stack is not allowed

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

  private setCardPosition(event: { clientX: number; clientY: number }) {
    if (this.selectedCard) {
      const domElement = this.selectedCard.getDomElement();
      domElement.style.top = event.clientY + 10 + "px";
      domElement.style.left =
        event.clientX + domElement.getBoundingClientRect().width - domElement.style.marginLeft + "px";
    }
  }
};
