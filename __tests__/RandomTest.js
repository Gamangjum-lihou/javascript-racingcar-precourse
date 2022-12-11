const { Random } = require('@woowacourse/mission-utils');
const { generate } = require('../src/Util/RandomNumberGenerator');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('RandomNumberGenerator 테스트', () => {
  test('', () => {
    // 조건
    const correctRandom = [1, 2, 3, 4, 5];
    mockRandoms(correctRandom);

    // 실행
    const expectRandom = generate(5);

    // 평가
    expect(expectRandom).toEqual(correctRandom);
  });
});
