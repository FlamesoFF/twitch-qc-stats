import { ILeaderboardItem } from "../quake-api/leaderboard-item.interface";

export interface PlayerSearchResult {
    list: ILeaderboardItem[]
    index: number
}
