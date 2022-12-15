const { ERROR_SUBJECT } = require('../src/Constant');
const { name, count } = require('../src/Validation');

describe('예외 조건 함수 테스트', () => {
  test.each([
    [['사과', '']],
    [['']],
    [['사과바나나코끼리', '코끼리']],
    [['사과', '사과']],
  ])('%s : 이름이 잘못 되었을 경우 예외가 발생한다.', (nameArray) => {
    expect(() => name(nameArray)).toThrow(ERROR_SUBJECT);
  });

  test.each([['0'], ['1.1'], ['188'], ['-15']])(
    '%s : 시도 횟수가 잘못 되었을 경우 예외가 발생한다.',
    (nameArray) => {
      expect(() => count(nameArray)).toThrow(ERROR_SUBJECT);
    }
  );
});
