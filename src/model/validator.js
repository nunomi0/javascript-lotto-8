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
}

export default validator;