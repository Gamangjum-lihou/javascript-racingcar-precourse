const isMove = require('../Util/isMove');

const MOVE = '-';

class Car {
  #info = {
    name: null,
    current: '',
  };

  constructor(name) {
    this.#info.name = name;
  }

  storeMove(move) {
    if (isMove(move)) this.#info.current += MOVE;
  }

  getName() {
    return this.#info.name;
  }

  getCurrent() {
    return this.#info.current;
  }
}

module.exports = Car;
