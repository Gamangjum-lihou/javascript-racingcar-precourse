const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');

const OutputView = {
  printResult() {
    Console.print(`${GAME_MESSAGE.result}\n`);
  },
  printMap(result) {
    const names = Object.keys(result);
    const mark = Object.values(result);
    let message = '';
    names.forEach((name, index) => {
      message += `${name}: ${mark[index]}\n`;
    });

    Console.print(message);
  },
  printWinners(winners) {
    const stringWinners = winners.join(', ');
    Console.print(GAME_MESSAGE.showWinners(stringWinners));
  },
  close() {
    Console.close();
  },
};

module.exports = OutputView;
