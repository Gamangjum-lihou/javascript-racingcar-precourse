const { ZERO, MOVE_STANDARD, ONE } = require('../constants/Number');

class Car {
  #name;

  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = ZERO;
  }

  move(moveValue) {
    if (moveValue >= MOVE_STANDARD) {
      this.#distance += ONE;
    }
  }

  getDistance() {
    return this.#distance;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Car;
