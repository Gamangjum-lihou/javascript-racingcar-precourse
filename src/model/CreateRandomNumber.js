const { Random } = require('@woowacourse/mission-utils');
const { GAME_NUMBER } = require('../Constant');

const CreateRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(
    GAME_NUMBER.randomStart,
    GAME_NUMBER.randomEnd
  );

  return randomNumber;
};

module.exports = CreateRandomNumber;
