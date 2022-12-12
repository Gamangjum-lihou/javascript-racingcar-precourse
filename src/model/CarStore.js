const Car = require('./Car');

class CarStore {
  #store = [];

  constructor(names) {
    names.forEach((name) => {
      this.#store.push(new Car(name));
    });
  }

  move(numbers) {
    this.#store.forEach((car, index) => {
      car.move(numbers[index]);
    });
  }

  getStore() {
    return this.#store;
  }
}

module.exports = CarStore;
