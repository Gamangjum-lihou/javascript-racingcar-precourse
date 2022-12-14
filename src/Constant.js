const GAME_STRING = Object.freeze({
  dividingLine: ',',
});

const GAME_NUMBER = Object.freeze({
  nameLimit: 5,
  countRangeStart: 1,
  countRangeEnd: 20,
});

const GAME_MESSAGE = Object.freeze({
  inputName: `자동차 이름을 ${GAME_NUMBER.nameLimit}자 이하로 콤마로 구분하여 입력해주세요.`,
  inputCount: '시도할 횟수를 입력해주세요.',
  result: '실행 결과',
  showWinners: (winners) => `최종 우승자: ${winners}`,
});

const ERROR_SUBJECT = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  nameLength: `${ERROR_SUBJECT} 자동차 이름은 ${GAME_NUMBER.nameLimit} 이하로만 가능합니다.`,
  nameOverlap: `${ERROR_SUBJECT} 자동차 이름 중 중복되는 이름이 있습니다. 다르게 설정해주세요.`,
  nameNonexistent: `${ERROR_SUBJECT} 자동차 이름이 설정되지 않았습니다. 이름을 설정해주세요.`,
  interger: `${ERROR_SUBJECT} 시도할 횟수는 정수만 가능합니다.`,
  countRange: `${ERROR_SUBJECT} 시도할 횟수는 ${GAME_NUMBER.countRangeStart}이상 ${GAME_NUMBER.countRangeEnd}이하만 가능합니다.`,
});

module.exports = {
  GAME_MESSAGE,
  GAME_NUMBER,
  GAME_STRING,
  ERROR_MESSAGE,
  ERROR_SUBJECT,
};
