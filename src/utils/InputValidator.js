const InputValidator = {
  checkCarNameFormat(input) {
    input
      .split(' ')
      .join('')
      .split(',')
      .forEach((car) => {
        if (car.length >= 5) {
          throw new Error('자동차 이름은 4글자 이하여야 합니다.');
        }
      });
  },
  checkNumber(number) {
    const RegExp = /^[0-9]+$/g;
    if (!RegExp.test(number)) {
      throw new Error('입력값이 숫자가 아닙니다.');
    }
  },
};

module.exports = InputValidator;
