export function validatePurchaseAmount(amount) {
  if (amount%1000!==0) throw new Error("[ERROR]");
}

// 당첨 번호는 로또인가? -> X: 당첨 번호 조건이 로또와는 다르게 바뀔 수 있음
export function validateWinningNumbers(rawNumbers) {
  const numbers = rawNumbers.split(",");
  const set = new Set(numbers);
  if (numbers.length!==set.size) throw new Error("[ERROR]");
  if (numbers.length!==6) throw new Error("[ERROR]");
  for (const number of numbers){
    if (!(0<=number && number<=45)) throw new Error("[ERROR]");
  }
  return numbers;
}

export function validateBonusNumber(bonusNumber, winningNumbers) {
  if (!(1<=bonusNumber && bonusNumber <=45)) throw new Error("[ERROR]");
  for (const num of winningNumbers){
    if (bonusNumber==num) throw new Error("[ERROR]");
  }
}