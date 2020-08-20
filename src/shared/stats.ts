import { NQuakeAPI } from 'src/api/types';

export const calculateAverageAccuracy = (playerStats: NQuakeAPI.IGamesSummary) => {
    const {matches} = playerStats;

    const accuracies = Object.values(matches[0].weaponAccuracy);
};

export const calculateAverageDamage = (playerStats: NQuakeAPI.IGamesSummary) => {
    const {matches} = playerStats;

    const accuracies = Object.values(matches[0].weaponAccuracy);
};