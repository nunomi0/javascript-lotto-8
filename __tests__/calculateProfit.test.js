import calculateProfit from "../src/model/calculateProfit.js";

describe("calculateProfit", () => {
  test("당첨 내역이 없으면 수익률은 0%", () => {
    const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const purchaseAmount = 10000;
    const rate = calculateProfit(result, purchaseAmount);

    expect(rate).toBe(0);
  });

  test("1등 1개면 200,000,000%", () => {
    const result = { 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 };
    const purchaseAmount = 1000;
    const rate = calculateProfit(result, purchaseAmount);
  
    const expected = Number(((2000000000 / 1000) * 100).toFixed(1));
    expect(rate).toBe(expected);
  });

  test("3등 2개면 (1,500,000 × 2) / 10,000 * 100 = 30,000%", () => {
    const result = { 1: 0, 2: 0, 3: 2, 4: 0, 5: 0 };
    const purchaseAmount = 10000;
    const rate = calculateProfit(result, purchaseAmount);

    expect(rate).toBe(30000);
  });

  test("5등 5개면 (5,000 × 5) / 5,000 * 100 = 500%", () => {
    const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 5 };
    const purchaseAmount = 5000;
    const rate = calculateProfit(result, purchaseAmount);

    expect(rate).toBe(500);
  });

  test("1등 1명, 3등 2명, 5등 3명일 때 총 상금은 2,003,015,000원이다.", () => {
    const result = { 1: 1, 2: 0, 3: 2, 4: 0, 5: 3 };
    const purchaseAmount = 10000;
    const expected = Number(((2003015000 / purchaseAmount) * 100).toFixed(1));
    const rate = calculateProfit(result, purchaseAmount);
  
    expect(rate).toBe(expected);
  });

  test("결과값은 소수점 한 자리까지 반올림된다.", () => {
    const result = { 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 };
    const purchaseAmount = 3333;
    const rate = calculateProfit(result, purchaseAmount);

    const expected = Number(((30000000 / 3333) * 100).toFixed(1));
    expect(rate).toBe(expected);
  });
});