const { Random } = require('@woowacourse/mission-utils');
const RandomNumbersPicker = require('../src/utils/RandomNumbersPicker');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

test('랜덤한 숫자를 넘긴 인수만큼 생성한 배열을 반환한다.', () => {
  mockRandoms([1, 3, 4, 5, 6]);
  expect(RandomNumbersPicker('5')).toEqual([1, 3, 4, 5, 6]);
});
