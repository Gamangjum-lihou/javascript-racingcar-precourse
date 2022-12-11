const ValidationError = require('../Error/ValidationError');

const MESSAGE = {
  wrong_seperator: '올바르지 않은 구분자입니다.\n',
  wrong_length: '자동차의 이름은 5자 이하여야합니다.\n',
  duplication: '자동차의 이름은 중복될 수 없습니다.\n',
};

const carName = {
  check(input) {
    carName.checkCorrectSeperator(input);
    carName.checkCorrectNameLength(input);
    carName.checkDuplication(input);
  },

  checkCorrectSeperator(input) {
    const splitInput = input.split(', ');
    if (splitInput.length === 1) throw new ValidationError(MESSAGE.wrong_seperator);
  },

  checkCorrectNameLength(input) {
    const splitInput = input.split(', ');
    splitInput.forEach((value) => {
      if (value.length > 5) throw new ValidationError(MESSAGE.wrong_length);
    });
  },

  checkDuplication(input) {
    const splitInput = input.split(', ');
    const inputSet = new Set(splitInput);
    if (splitInput.length !== inputSet.size) throw new ValidationError(MESSAGE.duplication);
  },
};

module.exports = carName;
