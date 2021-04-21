import { IGamesSummary } from "../types/quake-api/i-games.summary.interface";

export const calculateAverageAccuracy = (playerStats: IGamesSummary) => {
    const {matches} = playerStats;

    const accuracies = Object.values(matches[0].weaponAccuracy);
};

export const calculateAverageDamage = (playerStats: IGamesSummary) => {
    const {matches} = playerStats;

    const accuracies = Object.values(matches[0].weaponAccuracy);
};
