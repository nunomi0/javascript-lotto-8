import { Console } from "@woowacourse/mission-utils";
import inputView from "../view/inputView.js";
import outputView from "../view/outputView.js";
import validator from "../model/validator.js";
import generateLottos from "../model/lottoGenerator.js";
import calculateResult from "../model/calculateResult.js";
import calculateProfit from "../model/calculateProfit.js";

class LottoController {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottos = generateLottos(purchaseAmount);
    outputView.printPurchasedLottos(lottos);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const result = calculateResult(lottos, winningNumbers, bonusNumber);
    const profitRate = calculateProfit(result, purchaseAmount);

    outputView.printResult(result, profitRate);
  }

  async getPurchaseAmount() {
    try {
      const input = await inputView.readPurchaseAmount();
      const purchaseAmount = Number(input);
      validator.validatePurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      Console.print(error.message);
      return this.getPurchaseAmount();
    }
  }

  async getWinningNumbers() {
    try {
      const input = await inputView.readWinningNumbers();
      const winningNumbers = input.split(",").map((num) => Number(num.trim()));
      validator.validateWinningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.getWinningNumbers();
    }
  }

  async getBonusNumber(winningNumbers) {
    try {
      const input = await inputView.readBonusNumber();
      const bonusNumber = Number(input);
      validator.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return this.getBonusNumber(winningNumbers);
    }
  }
}

export default LottoController;