import { validateWinningNumbers, validateBonusNumber } from "../src/Validator.js";

describe("당첨 번호 테스트", () => {

  test("당첨 번호의 개수가 6개가 미만이면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers("1,2,3,4,5");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers("1, 2, 3, 4, 5, 6, 7");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers("1, 2, 3, 4, 5, 5");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 숫자가 45초과이면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers("1, 2, 3, 4, 5, 46");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호의 숫자가 1미만이면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers("-1, 2, 3, 4, 5, 6");
    }).toThrow("[ERROR]");
  });

});


describe("보너스 번호 테스트", () => {

  test("보너스 번호가 45초과이면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(46, [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1미만이면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(-1, [1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(1,[1,2,3,4,5,6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1 이상 45 이하이고, 당첨 번호와 중복되지 않으면 정상 통과한다.", () => {
    expect(() => {
      validateBonusNumber(7,[1,2,3,4,5,6]);
    }).not.toThrow("[ERROR]");
  });
});
