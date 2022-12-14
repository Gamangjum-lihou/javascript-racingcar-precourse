const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');

const InputView = {
  readCarName(callback) {
    Console.readLine(GAME_MESSAGE.inputName, callback);
  },
};

module.exports = InputView;
