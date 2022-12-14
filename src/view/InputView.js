const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');

const InputView = {
  readCarName(callback) {
    Console.readLine(GAME_MESSAGE.inputName, callback);
  },
  readCount(callback) {
    Console.readLine(GAME_MESSAGE.inputCount, callback);
  },
};

module.exports = InputView;
