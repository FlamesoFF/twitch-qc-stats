import { ILeaderboardItem } from "./leaderboard-item.interface";

export interface ILeaderboard {
    boardType: string;
    entries: ILeaderboardItem[];
    totalEntries: number;
}
