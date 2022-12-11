const { Console, Random } = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();
  app.play();
  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('경주 테스트', () => {
  test('기능 테스트', () => {
    mockRandoms([1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6]);
    mockQuestions(['강철원, 이예슬, 김민재, 유은지', '3']);
    const logs = [
      '실행 결과',
      '강철원: ',
      '이예슬: ',
      '김민재: ',
      '유은지: -',
      '강철원: ',
      '이예슬: ',
      '김민재: -',
      '유은지: --',
      '강철원: ',
      '이예슬: -',
      '김민재: --',
      '유은지: ---',
      '최종 우승자: 유은지',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', () => {
    runException(['a']);
  });
});
