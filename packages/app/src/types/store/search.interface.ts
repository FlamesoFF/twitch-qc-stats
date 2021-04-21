import { ILeaderboardItem } from "../quake-api/leaderboard-item.interface";

export interface ISearch {
    enabled: boolean;
    result: ILeaderboardItem;
    error: boolean;
}
