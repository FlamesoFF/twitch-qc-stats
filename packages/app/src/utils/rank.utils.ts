import { defaults } from "../static/defaults";

export function getRankIcon(rating: number) {
  const min = 700;
  const max = 2200;
  const step = 75;

  const rank = Math.round(
    ((rating - min) - ((rating - min) % step)) / step
  );

  if (rank <= 21) {
    return defaults.ranks[rank];
  } else {
    return defaults.ranks[defaults.ranks.length - 1];
  }
}
