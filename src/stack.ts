const { Card } = require("./card.ts");
const { Dom } = require("./dom");

exports.Stack = class Stack {
  private cards: Array<typeof Card> = [];
  private static readonly STACK_LIMIT: number = 3;
  private domElement: any;
  private emptyStackClickHandler;

  constructor(cards: Array<typeof Card> = []) {
    if (cards.length > Stack.STACK_LIMIT) {
      throw new Error("too many cards!");
    }
    cards.forEach((card) => this.cards.push(card));
    this.setupDomElement();
    this.emptyStackClickHandler = function (event: any) {
      console.log('click on stack event', event)
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
    this.emptyStackClickHandler.bind(this);
  }

  public peekTopCard(): typeof Card {
    return this.cards[this.cards.length - 1];
  }

  public removeTopCard(): typeof Card {
    const card = this.cards.pop();
    this.populateDomChildren();
    this.setEmptyStackClickHandler();
    return card;
  }

  public stackTopCard(card: typeof Card) {
    if (this.cards.length == Stack.STACK_LIMIT) {
      throw new Error("too many cards!");
    }
    this.cards.push(card);
    this.populateDomChildren();
    this.setEmptyStackClickHandler();

  }

  public size(): number {
    return this.cards.length;
  }

  public getDomElement(): any {
    return this.domElement;
  }

  private setupDomElement() {
    if (!this.domElement) {
      this.domElement = Dom.createElement("div");
    }
    if (this.domElement) {
      this.domElement.classList.add("stack");
      this.setEmptyStackClickHandler();
      this.domElement.addEventListener("cardClick", (event: any) => {
        console.log('card click on stack', event.detail.clickEvent)
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
      });

      this.populateDomChildren();
    }
  }

  private setEmptyStackClickHandler() {
    if (this.size() == 0) {
      this.domElement.addEventListener("click", this.emptyStackClickHandler);
    } else {
      this.domElement.removeEventListener("click", this.emptyStackClickHandler);
    }
  }

  private populateDomChildren() {
    if (this.domElement) {
      this.domElement.replaceChildren();
      for (let card of this.cards) {
        this.domElement.appendChild(card.getDomElement());
      }
    }
  }
};
