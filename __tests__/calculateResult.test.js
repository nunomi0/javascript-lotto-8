import calculateResult from "../src/model/calculateResult.js";

const createLotto = (numbers) => ({
  getNumbers: () => numbers,
});

describe("calculateResult", () => {
  test("6개 번호가 모두 일치하면 1등 1개를 반환한다.", () => {
    const lottos = [createLotto([1, 2, 3, 4, 5, 6])];
    const result = calculateResult(lottos, [1, 2, 3, 4, 5, 6], 7);

    expect(result).toEqual({ 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 });
  });

  test("5개 번호 + 보너스 번호가 일치하면 2등 1개를 반환한다.", () => {
    const lottos = [createLotto([1, 2, 3, 4, 5, 7])];
    const result = calculateResult(lottos, [1, 2, 3, 4, 5, 6], 7);

    expect(result).toEqual({ 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 });
  });

  test("5개 번호가 일치하면 3등 1개를 반환한다.", () => {
    const lottos = [createLotto([1, 2, 3, 4, 5, 9])];
    const result = calculateResult(lottos, [1, 2, 3, 4, 5, 6], 7);

    expect(result).toEqual({ 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 });
  });

  test("4개 번호가 일치하면 4등 1개를 반환한다.", () => {
    const lottos = [createLotto([1, 2, 3, 4, 10, 11])];
    const result = calculateResult(lottos, [1, 2, 3, 4, 5, 6], 7);

    expect(result).toEqual({ 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 });
  });

  test("3개 번호가 일치하면 5등 1개를 반환한다.", () => {
    const lottos = [createLotto([1, 2, 3, 10, 11, 12])];
    const result = calculateResult(lottos, [1, 2, 3, 4, 5, 6], 7);

    expect(result).toEqual({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 });
  });

  test("2개 이하로 일치하면 등수에 포함되지 않는다.", () => {
    const lottos = [createLotto([1, 2, 10, 11, 12, 13])];
    const result = calculateResult(lottos, [1, 2, 3, 4, 5, 6], 7);

    expect(result).toEqual({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  });

  test("여러 장의 로또 결과가 등수별로 누적된다.", () => {
    const lottos = [
      createLotto([1, 2, 3, 4, 5, 6]),  // 1등
      createLotto([1, 2, 3, 4, 5, 7]),  // 2등
      createLotto([1, 2, 3, 4, 5, 9]),  // 3등
      createLotto([1, 2, 3, 4, 10, 11]), // 4등
      createLotto([1, 2, 3, 10, 11, 12]), // 5등
    ];

    const result = calculateResult(lottos, [1, 2, 3, 4, 5, 6], 7);

    expect(result).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
  });
});