const { constants } = require("./constants.ts");
const { Dom } = require("./dom");

exports.Card = class Card {
  private seed: string;
  private value: string;
  private domElement: any;

  constructor(seed: string, value: string) {
    this.seed = seed;
    this.value = value == "X" ? "10" : value;
    this.setupDomElement();
  }

  public getColor() {
    return "♥♦".includes(this.seed) ? constants.RED : constants.BLACK;
  }

  public getValue(): string {
    return this.value; // could cast to number?
  }

  public getIntValue(): number {
    switch (this.value) {
      case "A":
        return 1;
      case "J":
        return 11;
      case "Q":
        return 12;
      case "K":
        return 13;
      default:
        return parseInt(this.value);
    }
  }

  public getSeed(): string {
    return this.seed;
  }

  public getCard(): string {
    // could be another class
    return this.value + "<br>" + this.seed;
  }

  public getDomElement(): any {
    return this.domElement;
  }

  private setupDomElement() {
    this.domElement = Dom.createElement("div");
    if (this.domElement) {
      this.domElement.classList.add("card");
      this.domElement.classList.add(this.getColor());
      this.domElement.innerHTML = this.getCard();
      this.domElement.addEventListener("click", (event: any) => {
        this.domElement.dispatchEvent(
          new CustomEvent("cardClick", { bubbles: true, detail: { card: this, clickEvent: event } })
        );
      });
      this.domElement.addEventListener("mouseover", (event: any) => {
        event.target.style.backgroundColor = "#aaa";
      });
      this.domElement.addEventListener("mouseleave", (event: any) => {
        event.target.style.backgroundColor = "";
      });
    }
  }
};
