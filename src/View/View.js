const { Console } = require('@woowacourse/mission-utils');

const view = {
  readCarName(callback) {
    Console.readLine('', (input) => {
      callback(input);
    });
  },

  readTryCount(callback) {
    Console.readLine('', (input) => {
      callback(input);
    });
  },

  printMoveResult() {},

  printGameResult() {},
};

module.exports = view;
