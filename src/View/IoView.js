const { Console } = require('@woowacourse/mission-utils');
const { checkCarNameFormat, checkNumber } = require('../utils/InputValidator');

const IoView = {
  readCarName(callback) {
    Console.readLine('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.\n', (input) => {
      try {
        checkCarNameFormat(input);
        callback(input);
      } catch (error) {
        Console.print(`[ERROR] ${error.message}`);
        IoView.readCarName(callback);
      }
    });
  },
  readTryNumber(callback) {
    Console.readLine('시도할 횟수를 입력해주세요.\n', (input) => {
      try {
        checkNumber(input);
        callback(input);
      } catch (error) {
        Console.print(`[ERROR] ${error.message}`);
        IoView.readTryNumber(callback);
      }
    });
  },
  printResultTitle() {
    Console.print('실행결과\n');
  },
  printResult(name, distance) {
    Console.print(`${name}: ${'-'.repeat(distance)}`);
  },
  printWinner(names) {
    Console.print(`최종 우승자: ${names.join(', ')}`);
  },
  printNewLine() {
    Console.print('');
  },
};

module.exports = IoView;
