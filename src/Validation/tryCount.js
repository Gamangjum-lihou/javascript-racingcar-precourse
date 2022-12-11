const ValidationError = require('../Error/ValidationError');

const MESSAGE = {
  wrong_number: '시행 횟수는 숫자만 입력할 수 있습니다.\n',
  no_zero: '시행 횟수는 0을 입력하실 수 없습니다.\n',
};

const tryCount = {
  check(input) {
    tryCount.checkNumber(input);
  },

  checkNumber(input) {
    const RegExp = /^[0-9]$/;
    if (input === 0) throw new ValidationError(MESSAGE.no_zero);
    if (!RegExp.test(input)) throw new ValidationError(MESSAGE.wrong_number);
  },
};

module.exports = tryCount;
