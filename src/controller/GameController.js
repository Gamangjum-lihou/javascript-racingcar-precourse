const { GAME_STRING } = require('../Constant');
const Car = require('../model/Car');
const CreateRandomNumber = require('../model/CreateRandomNumber');
const Validation = require('../Validation');
const { readCarName, readCount } = require('../view/InputView');
const {
  close,
  printMessage,
  printResult,
  printMap,
  printWinners,
} = require('../view/OutputView');

class GameController {
  #car;

  startGame() {
    CreateRandomNumber();
    readCarName(this.checkName.bind(this));
  }

  checkName(names) {
    try {
      const nameArray = GameController.convertNameArray(names);
      Validation.name(nameArray);
      this.createCarAndInputCount(nameArray);
    } catch (error) {
      printMessage(error.message);
      readCarName(this.checkName.bind(this));
    }
  }

  createCarAndInputCount(nameArray) {
    this.createCar(nameArray);
    this.inputCount();
  }

  static convertNameArray(names) {
    const nameArray = names
      .split(GAME_STRING.dividingLine)
      .map((name) => name.trim());

    return nameArray;
  }

  createCar(nameArray) {
    this.#car = new Car(nameArray);
  }

  inputCount() {
    readCount(this.checkCount.bind(this));
  }

  checkCount(number) {
    try {
      Validation.count(Number(number));
      this.progressGame(number);
    } catch (error) {
      printMessage(error.message);
      readCount(this.checkCount.bind(this));
    }
  }

  progressGame(number) {
    printResult();
    this.startRaceAndShowResult(number);
    this.showWinners();
    GameController.endGame();
  }

  startRaceAndShowResult(number) {
    Array.from({ length: number }).forEach(() => {
      this.#car.racing();
      const result = this.#car.getResult();
      printMap(result);
    });
  }

  showWinners() {
    const winners = this.#car.calculateWinners();
    printWinners(winners);
  }

  static endGame() {
    close();
  }
}

module.exports = GameController;
