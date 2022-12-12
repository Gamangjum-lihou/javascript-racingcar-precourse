class Car {
  #name;

  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move(moveValue) {
    if (moveValue >= 4) {
      this.#distance += 1;
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
