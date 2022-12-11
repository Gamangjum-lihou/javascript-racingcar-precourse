const { Random } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = {
  generate(size) {
    return Array.from({ length: size }, () => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      return randomNumber;
    });
  },
};

module.exports = RandomNumberGenerator;
