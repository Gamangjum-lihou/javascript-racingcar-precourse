const { GAME_NUMBER } = require('../Constant');
const CreateRandomNumber = require('./CreateRandomNumber');

class Car {
  #name;

  #result = {};

  constructor(name) {
    this.#name = name;
    this.#name.forEach((element) => {
      this.#result[element] = '';
    });
  }

  calculateWinners() {
    const winners = [];
    const maxLength = this.calculateMaxLength();
    this.#name.forEach((element) => {
      if (this.#result[element].length === maxLength) {
        winners.push(element);
      }
    });
    return winners;
  }

  calculateMaxLength() {
    const marks = Object.values(this.#result);
    let maxLength = 0;
    marks.forEach((mark) => {
      maxLength = Math.max(maxLength, mark.length);
    });

    return maxLength;
  }

  racing() {
    this.#name.forEach((name) => {
      if (Car.isForward(CreateRandomNumber())) {
        this.goForward(name);
      }
    });
  }

  getResult() {
    return this.#result;
  }

  static isForward(number) {
    if (number >= GAME_NUMBER.standard) {
      return true;
    }

    return false;
  }

  goForward(name) {
    this.#result[name] += '-';
  }
}

module.exports = Car;
