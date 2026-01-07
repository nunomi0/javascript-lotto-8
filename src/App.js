import InputView from "./view/InputView.js";
import { validatePurchaseAmount } from "./Validator.js";

class App {
  async run() {

    const purchaseAmount = await InputView.readPurchaseAmount();
    validatePurchaseAmount(purchaseAmount);

  }
}

export default App;
