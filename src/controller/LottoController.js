import inputView from "../view/inputView.js";
import validator from "../model/validator.js";
import generateLottos from "../model/lottoGenerator.js";

class LottoController {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const lottos = generateLottos(purchaseAmount);
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

  async getBonusNumber(winningNumbers) {
    const input = await inputView.readBonusNumber();
    const bonusNumber = Number(input);
    validator.validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }
}

export default LottoController;