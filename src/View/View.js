const { Console } = require('@woowacourse/mission-utils');
const carNameValidation = require('../Validation/carName');
const tryCountValidation = require('../Validation/tryCount');
const errorHandler = require('../Util/errorHandler');

const MESSAGE = {
  read_car_name: '자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.\n',
  read_try_count: '\n시도할 횟수를 입력해주세요.\n',
  print_move_result: '\n실행 결과\n',
  print_game_result: '최종 우승자: ',
};

const view = {
  readCarName(callback) {
    Console.readLine(MESSAGE.read_car_name, (input) => {
      const check = errorHandler(() => carNameValidation.check(input), view.readCarName, callback);
      if (check) callback(input);
    });
  },

  readTryCount(callback) {
    Console.readLine(MESSAGE.read_try_count, (input) => {
      const check = errorHandler(() => tryCountValidation.check(input), view.readCarName, callback);
      if (check) callback(input);
    });
  },

  printResultMesage() {
    Console.print(MESSAGE.print_move_result);
  },

  printMoveResult(name, current) {
    Console.print(`${name}: ${current}`);
  },

  printGameResult(winner) {
    Console.print(`${MESSAGE.print_game_result}${winner}`);
  },

  printNewLine() {
    Console.print('');
  },

  exit() {
    return Console.close();
  },
};

module.exports = view;
