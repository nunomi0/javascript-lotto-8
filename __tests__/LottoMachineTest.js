import { Random } from "@woowacourse/mission-utils";
import LottoMachine from "../src/LottoMachine.js";

describe("LottoMachine", () => {
  test("lottoCount만큼 Lotto 객체를 생성한다", () => {
    jest
      .spyOn(Random, "pickUniqueNumbersInRange")
      .mockReturnValue([1, 2, 3, 4, 5, 6]);

    const machine = new LottoMachine(5);
    const lottos = machine.getLottos();

    expect(lottos).toHaveLength(5);
    expect(lottos.every((lotto) => typeof lotto.getNumbers === "function")).toBe(true);
  });

  test("각 로또는 6개 번호를 가진다", () => {
    jest
      .spyOn(Random, "pickUniqueNumbersInRange")
      .mockReturnValue([11, 12, 13, 14, 15, 16]);

    const machine = new LottoMachine(3);
    const lottos = machine.getLottos();

    for (const lotto of lottos) {
      expect(lotto.getNumbers()).toEqual([11, 12, 13, 14, 15, 16]);
    }
  });

  test("Random.pickUniqueNumbersInRange가 lottoCount번 호출된다", () => {
    const spy = jest
      .spyOn(Random, "pickUniqueNumbersInRange")
      .mockReturnValue([1, 2, 3, 4, 5, 6]);

    new LottoMachine(4);

    expect(spy).toHaveBeenCalledTimes(4);
    expect(spy).toHaveBeenCalledWith(1, 45, 6);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});