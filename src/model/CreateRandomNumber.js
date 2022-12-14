const { Random } = require('@woowacourse/mission-utils');
const { GAME_NUMBER } = require('../Constant');

const CreateRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(
    GAME_NUMBER.randomStart,
    GAME_NUMBER.randomEnd
  );
  
  console.log(randomNumber);
};

module.exports = CreateRandomNumber;
