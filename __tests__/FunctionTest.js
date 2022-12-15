const { convertNameArray } = require('../src/controller/GameController');
const CreateRandomNumber = require('../src/model/CreateRandomNumber');
const { GAME_NUMBER } = require('../src/Constant');

describe('게임 함수 테스트', () => {
  test.each([
    ['사과,', ['사과', '']],
    ['코끼리,사과', ['코끼리', '사과']],
    ['코끼리,사과,   랑랑', ['코끼리', '사과', '랑랑']],
    ['코끼리,사과,바  나나', ['코끼리', '사과', '바  나나']],
    ['', ['']],
  ])('%s : 이름을 배열로 변경시키는 함수 테스트', (strName, arrayName) => {
    expect(convertNameArray(strName)).toEqual(arrayName);
  });

  test('랜덤 숫자 생성 함수 테스트', () => {
    const number = CreateRandomNumber();
    expect(number).toBeGreaterThanOrEqual(GAME_NUMBER.randomStart);
    expect(number).toBeLessThanOrEqual(GAME_NUMBER.randomEnd);
  });
});
