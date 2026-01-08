import InputView from "./view/InputView.js";
import { validatePurchaseAmount, validateWinningNumbers, validateBonusNumber } from "./Validator.js";
import LottoMachine from "./LottoMachine.js";
import OutputView from "./view/OutputView.js";
import ResultCalculator from "./ResultCalculator.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    const purchaseAmount = await this.getPurchaseAmount();    
    const lottoCount = purchaseAmount/1000;

    const winningNumbers = await this.getWinningNumbers();    
    const bonusNumber = await this.getBonusNumber(winningNumbers);    

    const lottoMachine = new LottoMachine(lottoCount);
    const lottos = lottoMachine.getLottos();

    OutputView.printLottoHeader(lottoCount);
    OutputView.printLottoNumbers(lottos);

    const resultCalculator = new ResultCalculator(winningNumbers, bonusNumber, lottos, purchaseAmount);
    const ranks = resultCalculator.getRanks();
    const profitRate = resultCalculator.getProfitRate();

    OutputView.printResultHeader();
    OutputView.printRanks(ranks);
    OutputView.printProfitRate(profitRate);
  }

  async getPurchaseAmount(){
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      validatePurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      Console.print(error.message);
      return this.getPurchaseAmount();
    }
  }

  async getWinningNumbers(){
    try {
      const rawWinningNumbers = await InputView.readWinningNumbers();
      const winningNumbers = validateWinningNumbers(rawWinningNumbers);  
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumbers){
    try {
      const bonusNumber = await InputView.readBonusNumber();
      validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber();
    }
  }
}

export default App;
