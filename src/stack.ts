const { Card } = require("./card.ts");
const { Dom } = require("./dom");

exports.Stack = class Stack {
  protected STACK_LIMIT: number = 3;
  private cards: Array<typeof Card> = [];
  private domElement: any;

  constructor(cards: Array<typeof Card> = []) {
    if (cards.length > this.STACK_LIMIT) {
      throw new Error("too many cards!");
    }
    cards.forEach((card) => this.cards.push(card));
    this.setupDomElement();
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

  private handleCardClick(event: CustomEvent) {
    console.log("card click");
    event.stopPropagation();
    this.domElement.dispatchEvent(
      new CustomEvent("stackClick", {
        bubbles: true,
        detail: {
          card: event.detail.card,
          clickEvent: event.detail.clickEvent,
          stack: this,
        },
      })
    );
  }

  private handleStackClick(event: MouseEvent) {
    console.log("stack click");
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
        },
      })
    );
  }
};
