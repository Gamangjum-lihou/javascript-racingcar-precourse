const InputView = require('../view/InputView');

class GameController {
  startGame() {
    InputView.readCarName(this.checkName.bind(this));
  }

  checkName(names) {
    console.log(names);
  }
}

module.exports = GameController;
