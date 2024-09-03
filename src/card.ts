let { constants } = require("./constants.ts")


exports.Card = class Card {
    #seed;
    #value;
    constructor(seed: string, value: string) {
        this.#seed = seed;
        this.#value = value == 'X' ? "10" : value;
    }

    getColor() {
        return "♥♦".includes(this.#seed) ? constants.RED : constants.BLACK;
    }

    getValue() {
        return this.#value; // could cast to number?
    }

    getSeed() {
        return this.#seed;
    }

    getCard() {
        return this.#value + "<br>" + this.#seed;
    }
}