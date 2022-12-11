const carNameValidation = require('../src/Validation/carName');
const tryCountValidation = require('../src/Validation/tryCount');

describe('Validation 테스트', () => {
  test.each(['a.b.c.d.e', 'ab;cd;ef;gh'])('carName 구분자 테스트', () => {
    expect((input) => {
      carNameValidation.checkCorrectSeperator(input);
    }).toThrow();
  });
  test.each(['abc, defghijk, lmnopqrtsu, vwxyzz', '그냥존나긴이름테스트용, 테스트짜는거개귀찮아진짜, TDD죽어제발'])(
    'carName 길이 테스트',
    () => {
      expect((input) => {
        carNameValidation.checkCorrectNameLength(input);
      }).toThrow();
    },
  );
  test.each(['abc, abc, abc, abc', 'bc, bc, bc, ci'])('carName 중복 테스트', () => {
    expect((input) => {
      carNameValidation.checkDuplication(input);
    });
  });
  test.each(['a', '오류ㅋ'])('tryCount 숫자 테스트', () => {
    expect((input) => {
      tryCountValidation.checkNumber(input);
    }).toThrow();
  });
});
