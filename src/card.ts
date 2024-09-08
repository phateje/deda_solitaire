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
      this.domElement.addEventListener("click", () => console.log(this));
      this.domElement.addEventListener("mouseover", (event: any) => {
        event.target.style.backgroundColor = "#aaa";
        console.log(event.target.style);
      });
      this.domElement.addEventListener("mouseleave", (event: any) => {
        event.target.style.backgroundColor = "";
        console.log(event.target.style);
      });
    }
  }
};
