const INPUT_MESSAGE = Object.freeze({
  car_name: '자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.\n',
  try_number: '시도할 횟수를 입력해주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  result: '실행 결과\n',
  move: (name, distance) => `${name}: ${'-'.repeat(distance)}`,
  winner: (names) => `최종 우승자: ${names.join(', ')}`,
  blank: '',
});

const ERROR_MESSAGE_PREFIX = '[ERROR]';

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE_PREFIX };
