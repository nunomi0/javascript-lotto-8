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

describe("Validator.validateWinningNumbers()", () => {
  test("정상 입력일 경우 에러가 발생하지 않는다.", () => {
    expect(() => validator.validateWinningNumbers([1, 5, 12, 23, 34, 45])).not.toThrow();
  });

  test("번호가 6개가 아닐 경우 에러가 발생한다.", () => {
    expect(() => validator.validateWinningNumbers([1, 2, 3, 4, 5])).toThrow("[ERROR] 당첨 번호는 6개여야 합니다.");
    expect(() => validator.validateWinningNumbers([1, 2, 3, 4, 5, 6, 7])).toThrow("[ERROR] 당첨 번호는 6개여야 합니다.");
  });

  test("숫자가 아닌 값이 있을 경우 에러가 발생한다.", () => {
    expect(() => validator.validateWinningNumbers([1, 2, "3", 4, 5, 6])).toThrow("[ERROR] 당첨 번호는 숫자여야 합니다.");
    expect(() => validator.validateWinningNumbers([1, 2, null, 4, 5, 6])).toThrow("[ERROR] 당첨 번호는 숫자여야 합니다.");
  });

  test("1 미만의 번호가 있을 경우 에러가 발생한다.", () => {
    expect(() => validator.validateWinningNumbers([0, 2, 3, 4, 5, 6])).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    expect(() => validator.validateWinningNumbers([-1, 2, 3, 4, 5, 6])).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("45 초과의 번호가 있을 경우 에러가 발생한다.", () => {
    expect(() => validator.validateWinningNumbers([1, 2, 3, 4, 5, 46])).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("중복된 번호가 있을 경우 에러가 발생한다.", () => {
    expect(() => validator.validateWinningNumbers([1, 2, 3, 3, 4, 5])).toThrow("[ERROR] 중복된 당첨 번호가 있습니다.");
  });
});

describe("Validator.validateBonusNumber()", () => {
  test("정상 입력일 경우 에러가 발생하지 않는다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => validator.validateBonusNumber(7, winningNumbers)).not.toThrow();
    expect(() => validator.validateBonusNumber(45, winningNumbers)).not.toThrow();
  });

  test("보너스 번호가 1 미만일 경우 에러가 발생한다.", () => {
    const winningNumbers = [10, 20, 30, 40, 41, 42];
    expect(() => validator.validateBonusNumber(0, winningNumbers))
      .toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    expect(() => validator.validateBonusNumber(-5, winningNumbers))
      .toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("보너스 번호가 45 초과일 경우 에러가 발생한다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => validator.validateBonusNumber(46, winningNumbers))
      .toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    expect(() => validator.validateBonusNumber(100, winningNumbers))
      .toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("보너스 번호가 당첨 번호와 중복될 경우 에러가 발생한다.", () => {
    const winningNumbers = [7, 8, 9, 10, 11, 12];
    expect(() => validator.validateBonusNumber(9, winningNumbers))
      .toThrow("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  });
});