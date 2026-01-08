import InputView from "./view/InputView.js";
import { validatePurchaseAmount, validateWinningNumbers, validateBonusNumber } from "./Validator.js";
import LottoMachine from "./LottoMachine.js";
import OutputView from "./view/OutputView.js";
import ResultCalculator from "./ResultCalculator.js";

class App {
  async run() {

    const purchaseAmount = await InputView.readPurchaseAmount();
    validatePurchaseAmount(purchaseAmount);
    
    const lottoCount = purchaseAmount/1000;

    const rawWinningNumbers = await InputView.readWinningNumbers();
    const winningNumbers = validateWinningNumbers(rawWinningNumbers);

    const bonusNumber = await InputView.readBonusNumber();
    validateBonusNumber(bonusNumber, winningNumbers);

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
}

export default App;
