import { RANKS } from "../constants";

export function getRankIcon(rating: number) {
  const min = 700;
  const max = 2200;
  const step = 75;

  const rank = Math.round(
    ((rating - min) - ((rating - min) % step)) / step
  );

  if (rank <= 21) {
    return RANKS[rank];
  } else {
    return RANKS[RANKS.length - 1];
  }
}
