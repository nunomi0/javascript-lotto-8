import { PRIZE_TABLE } from "./constants.js";

export default function calculateResult(lottos, winningNumbers, bonusNumber) {
  const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  lottos.forEach((lotto) => {
    const lottoNumbers = lotto.getNumbers();
    const matchCount = lottoNumbers.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    const hasBonus = lottoNumbers.includes(bonusNumber);

    const prize = PRIZE_TABLE.find(
      (prize) => prize.match === matchCount && (!!prize.bonus === hasBonus)
    );

    if (prize) result[prize.rank]++;
  });

  return result;
}