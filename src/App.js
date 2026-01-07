import InputView from "./view/InputView.js";
import { validatePurchaseAmount, validateWinningNumbers } from "./Validator.js";

class App {
  async run() {

    const purchaseAmount = await InputView.readPurchaseAmount();
    validatePurchaseAmount(purchaseAmount);

    const winningNumbers = await InputView.readWinningNumbers();
    validateWinningNumbers(winningNumbers);
  }
}

export default App;
