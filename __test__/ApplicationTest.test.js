const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((_, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('자동차 경주 테스트', () => {
  test('기능 테스트', () => {
    mockRandoms([4, 1, 2, 5, 8, 9]);
    mockQuestions(['철수, 민수, 영희', '2']);

    const logs = [
      '철수: -',
      '민수: ',
      '영희: ',
      '',
      '철수: --',
      '민수: -',
      '영희: -',
      '최종 우승자 : 철수',
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
