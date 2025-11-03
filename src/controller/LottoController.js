import inputView from "../view/inputView.js";
import validator from "../model/validator.js";

class LottoController {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
  }

  async getPurchaseAmount() {
    const input = await inputView.readPurchaseAmount();
    const purchaseAmount = Number(input);
    validator.validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }
}

export default LottoController;