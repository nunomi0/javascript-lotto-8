import { PRIZE_TABLE } from "./constants.js";

export default function calculateResult(lottos, winningNumbers, bonusNumber) {
  const result = initResult();

  lottos.forEach((lotto) => {
    const { matchCount, hasBonus } = analyzeLotto(lotto, winningNumbers, bonusNumber);
    const prize = findPrize(matchCount, hasBonus);
    if (prize) result[prize.rank]++;
  });

  return result;
}

function initResult() {
  return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
}

function analyzeLotto(lotto, winningNumbers, bonusNumber) {
  const lottoNumbers = lotto.getNumbers();
  const matchCount = lottoNumbers.filter((num) => winningNumbers.includes(num)).length;
  const hasBonus = lottoNumbers.includes(bonusNumber);
  return { matchCount, hasBonus };
}

function findPrize(matchCount, hasBonus) {
  return PRIZE_TABLE.find(
    (p) => p.match === matchCount && (!!p.bonus === hasBonus)
  );
}