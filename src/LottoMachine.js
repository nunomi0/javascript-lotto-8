import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export default class LottoMachine {

  constructor(lottoCount) {
    this.lottos = this.#generateLotto(lottoCount);
  }

  #generateLotto(count) {
    const lottos=[];
    for (let i = 0; i<count; i++){
      lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
    return lottos;
  }

  getLottos(){
    return this.lottos;
  }
}