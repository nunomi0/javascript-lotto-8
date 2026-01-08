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
}