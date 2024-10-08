const { Card } = require("./card.ts");
const { Dom } = require("./dom");
const { constants } = require("./constants.ts");

exports.Stack = class Stack {
  protected STACK_LIMIT: number = 3;
  private cards: Array<typeof Card> = [];
  private domElement: any;
  private stackType = constants.CLICK_TYPES.STACK;

  constructor(cards: Array<typeof Card> = []) {
    if (cards.length > this.STACK_LIMIT) {
      throw new Error("too many cards!");
    }
    cards.forEach((card) => this.cards.push(card));
    this.setupDomElement();
    console.log("stack", this);
  }

  public peekTopCard(): typeof Card {
    return this.cards[this.cards.length - 1];
  }

  public removeTopCard(): typeof Card {
    const card = this.cards.pop();
    this.populateDomChildren();
    return card;
  }

  public stackTopCard(card: typeof Card) {
    console.log("stacking on super?");
    if (this.cards.length == this.STACK_LIMIT) {
      throw new Error("too many cards!");
    }
    this.cards.push(card);
    this.populateDomChildren();
  }

  public size(): number {
    return this.cards.length;
  }

  public getDomElement(): any {
    return this.domElement;
  }

  protected setupDomElement() {
    if (!this.domElement) {
      this.domElement = Dom.createElement("div");
    }
    if (!this.domElement) {
      return;
    }
    this.domElement.classList.add("stack");
    this.domElement.addEventListener("cardClick", this.handleCardClick.bind(this));
    this.domElement.addEventListener("click", this.handleStackClick.bind(this));

    this.populateDomChildren();
  }

  private populateDomChildren() {
    if (this.domElement) {
      this.domElement.replaceChildren();
      for (let card of this.cards) {
        this.domElement.appendChild(card.getDomElement());
      }
    }
  }

  protected handleCardClick(event: CustomEvent) {
    event.stopPropagation();
    this.domElement.dispatchEvent(
      new CustomEvent("stackClick", {
        bubbles: true,
        detail: {
          card: event.detail.card,
          clickEvent: event.detail.clickEvent,
          stack: this,
          clickType: constants.CLICK_TYPES.CARD,
        },
      })
    );
  }

  protected handleStackClick(event: MouseEvent) {
    // handle click on empty stack to return card from source to it
    if (event.target !== this.domElement) {
      event.stopPropagation();
      return;
    }
    event.stopPropagation();
    this.domElement.dispatchEvent(
      new CustomEvent("stackClick", {
        bubbles: true,
        detail: {
          clickEvent: event,
          stack: this,
          clickType: this.stackType
        },
      })
    );
  }
};
