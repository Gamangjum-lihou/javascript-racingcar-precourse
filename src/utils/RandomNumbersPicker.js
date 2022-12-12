const { Random } = require('@woowacourse/mission-utils');

const RandomNumbersPicker = (number) => {
  const randomNumbers = [];
  while (randomNumbers.length < Number(number)) {
    randomNumbers.push(Random.pickNumberInRange(0, 9));
  }
  return randomNumbers;
};

module.exports = RandomNumbersPicker;
