export function validatePurchaseAmount(amount) {
  if (amount%1000!==0) throw new Error("[ERROR]");
}