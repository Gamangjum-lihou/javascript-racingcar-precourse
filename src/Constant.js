const GAME_NUMBER = Object.freeze({
  nameLimit: 5,
});

const GAME_MESSAGE = Object.freeze({
  inputName: `자동차 이름을 ${GAME_NUMBER.nameLimit}자 이하로 콤마로 구분하여 입력해주세요.`,
  inputCount: '시도할 횟수를 입력해주세요.',
  result: '실행 결과',
  showWinners: (winners) => `최종 우승자: ${winners}`,
});

module.exports = {
  GAME_MESSAGE,
};
