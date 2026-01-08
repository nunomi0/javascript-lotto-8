import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
    static async printLottoHeader(count) {
      Console.print(`${count}개를 구매했습니다.`);
    }

    static async printLottoNumbers(lottos) {
      for (let i = 0; i<lottos.length; i++){
        Console.print(lottos[i].getNumbers());
      }
    }

    static async printResultHeader() {
      Console.print("당첨 통계");
      Console.print("---");
    }

    static async printRanks(ranks) {
      Console.print(`3개 일치 (5,000원) - ${ranks[5]}개`)
      Console.print(`4개 일치 (50,000원) - ${ranks[4]}개`)
      Console.print(`5개 일치 (1,500,000원) - ${ranks[3]}개`)
      Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${ranks[2]}개`)
      Console.print(`6개 일치 (2,000,000,000원) - ${ranks[1]}개`)
    }

    static async printProfitRate(profitRate) {
      Console.print(`총 수익률은 ${profitRate}%입니다.`);
    }
}