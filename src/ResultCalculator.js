export default class ResultCalculator {
  
  constructor(winningNumbers, bonusNumber, lottos, purchaseAmount) {
    this.ranks = {1:0, 2:0, 3:0, 4:0, 5:0};
    for (const lotto of lottos){
      const rank = this.#calculateRank(winningNumbers, bonusNumber, lotto.getNumbers());
      if (rank!==0) this.ranks[rank]++;
    }
    this.profitRate = this.#calculateProfitRate(purchaseAmount);
  }

  #compareWinningNumbers(winningNumbers, lottoNumbers) {
    let count = 0;
    for (const number of lottoNumbers){
      if (winningNumbers.includes(number)) count++;
    }
    return count;
  }

  #compareBonusNumber(bonusNumber, lottoNumbers) {
    if (lottoNumbers.includes(bonusNumber)) return true;
    return false;
  }

  #calculateRank(winningNumbers, bonusNumber, lottoNumbers) {
    const matchCount = this.#compareWinningNumbers(winningNumbers, lottoNumbers);
    const matchBonus = this.#compareBonusNumber(bonusNumber, lottoNumbers)

    if (matchCount == 6) return 1;
    if (matchCount == 5 && matchBonus) return 2;
    if (matchCount == 5) return 3;
    if (matchCount == 4) return 4;
    if (matchCount == 3) return 5;
    return 0;
  }

  #calculateProfitRate(purchaseAmount) {
    const profit = this.ranks[1]*2_000_000_000 + this.ranks[2]*30_000_000 + this.ranks[3]*1_500_000 + this.ranks[4]*50_000 + this.ranks[5]*5_000;
    return (profit/purchaseAmount*100).toFixed(1);
  }

  getRanks() {
    return this.ranks;
  }

  getProfitRate() {
    return this.profitRate;
  }
}