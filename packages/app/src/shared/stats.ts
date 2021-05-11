import { GamesSummary } from "../types/quake-api/games.summary.interface";

export const calculateAverageAccuracy = (playerStats: GamesSummary) => {
    const {matches} = playerStats;

    const accuracies = Object.values(matches[0].weaponAccuracy);
};

export const calculateAverageDamage = (playerStats: GamesSummary) => {
    const {matches} = playerStats;

    const accuracies = Object.values(matches[0].weaponAccuracy);
};
