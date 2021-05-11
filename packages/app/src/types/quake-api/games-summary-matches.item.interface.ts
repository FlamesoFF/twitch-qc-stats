import { IGamesSummaryWeaponAccuracy } from "./games-summary-weapon.accuracy.interface";

export interface IGamesSummaryMatchesItem {
    id: string;
    time: string;
    mapName: string;
    rank: number;
    score: number[];
    gameMode: string;
    won: boolean;
    xp: number;
    kdr: number;
    totalDamage: number;
    weaponAccuracy: IGamesSummaryWeaponAccuracy;
}
