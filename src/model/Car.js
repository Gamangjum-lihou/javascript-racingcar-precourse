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
