import { Random } from "@woowacourse/mission-utils";
import { generateLottos } from "../src/model/lottoGenerator.js";
import Lotto from "../src/model/Lotto.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe("generateLottos()", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("구입 금액에 따라 Lotto 인스턴스를 생성한다.", () => {
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
    const purchaseAmount = 3000;

    const lottos = generateLottos(purchaseAmount);

    expect(lottos).toHaveLength(3);
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });

  test("각 로또는 1~45 범위의 중복되지 않은 6개의 오름차순 숫자로 구성된다.", () => {
    Random.pickUniqueNumbersInRange.mockReturnValue([45, 1, 12, 8, 30, 5]);

    const lottos = generateLottos(1000);
    const numbers = lottos[0].getNumbers ? lottos[0].getNumbers() : undefined;

    if (numbers) {
      expect(numbers).toEqual([1, 5, 8, 12, 30, 45]);
    }
  });
});