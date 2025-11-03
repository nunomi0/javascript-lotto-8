import { PRIZE_TABLE } from "./constants.js";

export default function calculateProfit(result, purchaseAmount) {
  let totalPrize = 0;
  Object.keys(result).forEach((rank) => {
    const count = result[rank];
    const prize = PRIZE_TABLE.find((p) => p.rank === Number(rank));
    if (prize) totalPrize += prize.amount * count;
  });
  const rate = (totalPrize / purchaseAmount) * 100;
  return Number(rate.toFixed(1));
}