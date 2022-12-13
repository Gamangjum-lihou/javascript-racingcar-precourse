const { MissionUtils } = require('@woowacourse/mission-utils');
const { checkCarNameFormat, checkNumber } = require('../src/utils/InputValidator');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

describe('유효성 검사 테스트', () => {
  test('올바른 자동차 이름이 아니면 에러를 반환한다.', () => {
    expect(() => {
      const logSpy = getLogSpy();
      checkCarNameFormat('123, 456, 768, 897898');
      expectLogContains(getOutput(logSpy), ['[ERROR]']);
    });
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      const logSpy = getLogSpy();
      checkNumber('a23');
      expectLogContains(getOutput(logSpy), ['[ERROR]']);
    });
  });
});
