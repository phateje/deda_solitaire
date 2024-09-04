let { constants } = require("./constants.ts")


exports.Card = class Card {
    private seed: string;
    private value: string;
    
    constructor(seed: string, value: string) {
        this.seed = seed;
        this.value = value == 'X' ? "10" : value;
    }

    getColor() {
        return "♥♦".includes(this.seed) ? constants.RED : constants.BLACK;
    }

    getValue(): string {
        return this.value; // could cast to number?
    }

    getSeed(): string {
        return this.seed;
    }

    getCard(): string { // could be another class
        return this.value + "<br>" + this.seed;
    }
}