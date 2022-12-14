const { GAME_STRING } = require('../Constant');
const Validation = require('../Validation');
const InputView = require('../view/InputView');

class GameController {
  startGame() {
    InputView.readCarName(this.checkName.bind(this));
  }

  checkName(names) {
    const nameArray = names
      .split(GAME_STRING.dividingLine)
      .map((name) => name.trim());
    Validation.name(nameArray);
    console.log(names);
  }
}

module.exports = GameController;
