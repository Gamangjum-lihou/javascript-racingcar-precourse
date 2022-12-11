const Car = require('../Model/Car');
const {
  readCarName,
  readTryCount,
  printResultMesage,
  printMoveResult,
  printGameResult,
  printNewLine,
  exit,
} = require('../View/View');
const { generate } = require('../Util/RandomNumberGenerator');
const checkWinner = require('../Util/checkWinner');

class GameController {
  #carList = [];

  getCarName() {
    readCarName(this.initializeCar.bind(this));
  }

  initializeCar(input) {
    const nameList = input.split(', ');
    nameList.forEach((name) => {
      const car = new Car(name);
      this.#carList.push(car);
    });
    this.getTryCount();
  }

  getTryCount() {
    readTryCount(this.startGame.bind(this));
  }

  startGame(input) {
    printResultMesage();
    Array.from({ length: input }, () => {
      this.move();
    });
    this.gameResult();
  }

  move() {
    const moveList = generate(this.#carList.length);
    this.#carList.forEach((car, index) => {
      car.storeMove(moveList[index]);
    });
    this.moveResult();
  }

  moveResult() {
    this.#carList.forEach((car) => {
      const name = car.getName();
      const current = car.getCurrent();
      printMoveResult(name, current);
    });
    printNewLine();
  }

  gameResult() {
    const winner = checkWinner(this.#carList).join(',').replace(/,/gi, ', ');
    printGameResult(winner);
    exit();
  }
}

module.exports = GameController;
