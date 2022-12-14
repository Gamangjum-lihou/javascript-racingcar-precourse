const { GAME_STRING } = require('../Constant');
const Car = require('../model/Car');
const CreateRandomNumber = require('../model/CreateRandomNumber');
const Validation = require('../Validation');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  #car;

  startGame() {
    CreateRandomNumber();
    InputView.readCarName(this.checkName.bind(this));
  }

  checkName(names) {
    try {
      const nameArray = GameController.convertNameArray(names);
      Validation.name(nameArray);
      this.createCarAndInputCount(nameArray);
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readCarName(this.checkName.bind(this));
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
    InputView.readCount(this.checkCount.bind(this));
  }

  checkCount(number) {
    try {
      Validation.count(Number(number));
      this.progressGame(number);
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readCount(this.checkCount.bind(this));
    }
  }

  progressGame(number) {
    OutputView.printResult();
    this.startRaceAndShowResult(number);
    this.showWinners();
    GameController.endGame();
  }

  startRaceAndShowResult(number) {
    Array.from({ length: number }).forEach(() => {
      this.#car.racing();
      const result = this.#car.getResult();
      OutputView.printMap(result);
    });
  }

  showWinners() {
    const winners = this.#car.calculateWinners();
    OutputView.printWinners(winners);
  }

  static endGame() {
    OutputView.close();
  }
}

module.exports = GameController;
