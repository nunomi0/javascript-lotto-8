import ResultCalculator from "../src/ResultCalculator.js";

function createLottoMock(numbers) {
  return {
    getNumbers() {
      return numbers;
    },
  };
}

describe("ResultCalculator", () => {
  test("등수 집계가 정상적으로 된다", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const purchaseAmount = 5_000;

    const lottos = [
      createLottoMock([1, 2, 3, 4, 5, 6]),      // 1등 (6개)
      createLottoMock([1, 2, 3, 4, 5, 7]),      // 2등 (5개 + 보너스)
      createLottoMock([1, 2, 3, 4, 5, 8]),      // 3등 (5개)
      createLottoMock([1, 2, 3, 4, 9, 10]),     // 4등 (4개)
      createLottoMock([1, 2, 3, 11, 12, 13]),   // 5등 (3개)
    ];

    const calculator = new ResultCalculator(
      winningNumbers,
      bonusNumber,
      lottos,
      purchaseAmount
    );

    expect(calculator.getRanks()).toEqual({
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
    });
  });

  test("당첨이 하나도 없으면 ranks는 전부 0이다", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const purchaseAmount = 3_000;

    const lottos = [
      createLottoMock([10, 11, 12, 13, 14, 15]),
      createLottoMock([16, 17, 18, 19, 20, 21]),
      createLottoMock([22, 23, 24, 25, 26, 27]),
    ];

    const calculator = new ResultCalculator(
      winningNumbers,
      bonusNumber,
      lottos,
      purchaseAmount
    );

    expect(calculator.getRanks()).toEqual({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    });
  });

  test("profitRate가 1자리 소수 문자열로 계산된다", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    // 1등 1장만 당첨시키기
    const lottos = [createLottoMock([1, 2, 3, 4, 5, 6])];

    const purchaseAmount = 1_000; // 1장 구매했다고 가정

    const calculator = new ResultCalculator(
      winningNumbers,
      bonusNumber,
      lottos,
      purchaseAmount
    );

    // profit = 2,000,000,000
    // rate = 2,000,000,000 / 1,000 * 100 = 200,000,000,000.0
    expect(calculator.getProfitRate()).toBe("200000000000.0");
  });
});