import { ILeaderboardItem } from "./leaderboard-item.interface";

export interface Leaderboard {
    boardType: string;
    entries: ILeaderboardItem[];
    totalEntries: number;
}
