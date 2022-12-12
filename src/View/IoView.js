const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE, OUTPUT_MESSAGE } = require('../constants/Message');
const { checkCarNameFormat, checkNumber } = require('../utils/InputValidator');

const IoView = {
  readCarName(callback) {
    Console.readLine(INPUT_MESSAGE.car_name, (input) => {
      try {
        checkCarNameFormat(input);
        callback(input);
      } catch (error) {
        Console.print(error.message);
        IoView.readCarName(callback);
      }
    });
  },
  readTryNumber(callback) {
    Console.readLine(INPUT_MESSAGE.try_number, (input) => {
      try {
        checkNumber(input);
        callback(input);
      } catch (error) {
        Console.print(error.message);
        IoView.readTryNumber(callback);
      }
    });
  },
  printResultTitle() {
    Console.print(OUTPUT_MESSAGE.result);
  },
  printResult(name, distance) {
    Console.print(OUTPUT_MESSAGE.move(name, distance));
  },
  printWinner(names) {
    Console.print(OUTPUT_MESSAGE.winner(names));
  },
  printNewLine() {
    Console.print(OUTPUT_MESSAGE.blank);
  },
};

module.exports = IoView;
