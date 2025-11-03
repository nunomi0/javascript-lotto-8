const validator = {
  validatePurchaseAmount(purchaseAmount) {
    if (Number.isNaN(purchaseAmount)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
    if (!Number.isInteger(purchaseAmount)) {
      throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
    }
    if (purchaseAmount <= 0) {
      throw new Error("[ERROR] 구입 금액은 0보다 커야 합니다.");
    }
    if (purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }
  },

  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    winningNumbers.forEach((num) => {
      if (!Number.isInteger(num)) {
        throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
      }
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });

    const hasDuplicate = new Set(winningNumbers).size !== winningNumbers.length;
    if (hasDuplicate) {
      throw new Error("[ERROR] 중복된 당첨 번호가 있습니다.");
    }
  },
}

export default validator;