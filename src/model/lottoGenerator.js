import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export function generateLottos(purchaseAmount) {
  const count = purchaseAmount / 1000;
  return Array.from({ length: count }, () => {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    return new Lotto(numbers);
  });
}

export default generateLottos;