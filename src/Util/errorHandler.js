const { Console } = require('@woowacourse/mission-utils');

function errorHandler(tryFunc, catchFunc, nextFunc) {
  try {
    tryFunc();
    return true;
  } catch (error) {
    Console.print(error.message);
    catchFunc(nextFunc);
    return false;
  }
}

module.exports = errorHandler;
