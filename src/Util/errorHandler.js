const { Console } = require('@woowacourse/mission-utils');

function errorHandler(tryFunc, catchFunc, callback) {
  try {
    tryFunc();
  } catch (error) {
    Console.print(error.message);
    catchFunc(callback);
  }
}

module.exports = errorHandler;
