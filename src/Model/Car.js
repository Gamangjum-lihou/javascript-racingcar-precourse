class Car {
  #info = {
    name: null,
    current: '',
  };

  constructor(name) {
    this.#info.name = name;
  }
}

module.exports = Car;
