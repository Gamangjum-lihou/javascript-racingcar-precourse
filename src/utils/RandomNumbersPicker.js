const { Random } = require('@woowacourse/mission-utils');
const { NUMBER_RANGE } = require('../constants/Number');

const RandomNumbersPicker = (number) => {
  const randomNumbers = [];
  const { min, max } = NUMBER_RANGE;
  while (randomNumbers.length < Number(number)) {
    randomNumbers.push(Random.pickNumberInRange(min, max));
  }
  return randomNumbers;
};

module.exports = RandomNumbersPicker;
