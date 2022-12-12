const CarStore = require('../model/CarStore');
const RandomNumbersPicker = require('../utils/RandomNumbersPicker');
const WinnerFinder = require('../utils/WinnerFinder');
const {
  readCarName,
  readTryNumber,
  printResultTitle,
  printResult,
  printWinner,
  printNewLine,
} = require('../view/IoView');

class CarGameController {
  #carStore;

  run() {
    readCarName((input) => {
      const cars = input.split(' ').join('').split(',');
      this.#carStore = new CarStore(cars);
      this.#repeatMove(cars.length);
    });
  }

  #repeatMove(carsNumber) {
    readTryNumber((input) => {
      for (let i = 0; i < input; i += 1) {
        this.#move(carsNumber);
      }
      this.#showWinner();
    });
  }

  #move(carsNumber) {
    this.#carStore.move(RandomNumbersPicker(carsNumber));
    this.#carStore.getStore().forEach((car) => {
      printResult(car.getName(), car.getDistance());
    });
    printNewLine();
  }

  #showWinner() {
    printWinner(WinnerFinder(this.#carStore.getStore()));
  }
}

module.exports = CarGameController;
