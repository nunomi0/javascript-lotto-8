import { Console } from "@woowacourse/mission-utils";

export default class InputView {
    static async readPurchaseAmount() {
      return Console.readLineAsync("구입금액을 입력해 주세요.");
    }
}