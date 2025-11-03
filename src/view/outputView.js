import { Console } from "@woowacourse/mission-utils";

const outputView = {
  printPurchasedLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },
};

export default outputView;