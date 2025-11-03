import inputView from "../view/inputView.js";
import validator from "../model/validator.js";

class LottoController {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const winningNumbers = await this.getWinningNumbers();
  }

  async getPurchaseAmount() {
    const input = await inputView.readPurchaseAmount();
    const purchaseAmount = Number(input);
    validator.validatePurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }

  async getWinningNumbers() {
    const input = await inputView.readWinningNumbers();
    const winningNumbers = input.split(",").map((num) => Number(num.trim()));
    validator.validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }
}

export default LottoController;