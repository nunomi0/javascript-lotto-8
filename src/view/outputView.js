import { Console } from "@woowacourse/mission-utils";
import { PRIZE_TABLE } from "../model/constants.js";

const outputView = {
  printPurchasedLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },

  printResult(result, profitRate) {
    Console.print("\n당첨 통계");
    Console.print("----------");
    this.printStatistics(result);
    this.printProfitRate(profitRate);
  },

  printStatistics(result) {
    PRIZE_TABLE.forEach(({ match, bonus, amount, rank }) => {
      let label = `${match}개 일치`;
      if (bonus) {
        label += ", 보너스 볼 일치";
      }
      label += ` (${amount.toLocaleString()}원) - ${result[rank]}개`;
    
      Console.print(label);
    });
  },

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },
};

export default outputView;