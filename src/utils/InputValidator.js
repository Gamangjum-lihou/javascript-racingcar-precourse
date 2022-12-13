const { NUMBER_RANGE } = require('../constants/Number');
const CustomError = require('./CustomError');

const InputValidator = {
  checkCarNameFormat(input) {
    input
      .split(' ')
      .join('')
      .split(',')
      .forEach((car) => {
        if (car.length >= NUMBER_RANGE.middle) {
          throw new CustomError('자동차 이름은 4글자 이하여야 합니다.');
        }
      });
  },
  checkNumber(number) {
    const RegExp = /^[0-9]+$/g;
    if (!RegExp.test(number)) {
      throw new CustomError('입력값이 숫자가 아닙니다.');
    }
  },
};

module.exports = InputValidator;
