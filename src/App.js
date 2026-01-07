import InputView from "./view/InputView.js";
import { validatePurchaseAmount, validateWinningNumbers, validateBonusNumber } from "./Validator.js";

class App {
  async run() {

    const purchaseAmount = await InputView.readPurchaseAmount();
    validatePurchaseAmount(purchaseAmount);

    const rawWinningNumbers = await InputView.readWinningNumbers();
    const winningNumbers = validateWinningNumbers(rawWinningNumbers);

    const bonusNumber = await InputView.readBonusNumber();
    validateBonusNumber(bonusNumber, winningNumbers);
  }
}

export default App;
