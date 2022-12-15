const { Console, Random } = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
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

describe('Car 클래스 테스트', () => {
  test('기능 테스트 1', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 1, 4, 1, 4]);
    mockQuestions(['사과,바나나', 2]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '사과:',
      '바나나: -',
      '사과:',
      '바나나: --',
      '최종 우승자: 바나나',
    ]);
  });

  test('기능 테스트 2', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 1, 4, 4, 1, 4, 4, 4, 4, 4]);
    mockQuestions(['사과,바나나,대추', 3]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '사과:',
      '바나나: -',
      '대추: -',
      '사과:',
      '바나나: --',
      '대추: --',
      '사과: -',
      '바나나: ---',
      '대추: ---',
      '최종 우승자: 바나나, 대추',
    ]);
  });

  test('예외 테스트1', () => {
    runException(['글자길이5,글자길이는6']);
  });

  test('예외 테스트2', () => {
    runException(['사과,바나나', '21']);
  });

  test('예외 테스트3', () => {
    runException(['사과,바나나', '1.1']);
  });

  test('예외 테스트4', () => {
    runException(['사과,', '1']);
  });

  test('예외 테스트5', () => {
    runException(['사과,', '']);
  });
});
