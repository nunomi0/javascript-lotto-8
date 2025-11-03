import validator from "../src/model/validator.js";

describe("Validator.validatePurchaseAmount()", () => {
  test("정상 입력(1000원 단위의 양의 정수)일 경우 에러가 발생하지 않는다.", () => {
    expect(() => validator.validatePurchaseAmount(1000)).not.toThrow();
    expect(() => validator.validatePurchaseAmount(8000)).not.toThrow();
  });

  test("숫자가 아닐 경우 에러가 발생한다.", () => {
    expect(() => validator.validatePurchaseAmount(NaN)).toThrow("[ERROR] 구입 금액은 숫자여야 합니다.");
  });

  test("정수가 아닐 경우 에러가 발생한다.", () => {
    expect(() => validator.validatePurchaseAmount(1000.5)).toThrow("[ERROR] 구입 금액은 정수여야 합니다.");
  });

  test("0 이하일 경우 에러가 발생한다.", () => {
    expect(() => validator.validatePurchaseAmount(0)).toThrow("[ERROR] 구입 금액은 0보다 커야 합니다.");
    expect(() => validator.validatePurchaseAmount(-5000)).toThrow("[ERROR] 구입 금액은 0보다 커야 합니다.");
  });

  test("1000원 단위가 아닐 경우 에러가 발생한다.", () => {
    expect(() => validator.validatePurchaseAmount(1500)).toThrow("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    expect(() => validator.validatePurchaseAmount(123456)).toThrow("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
  });
});