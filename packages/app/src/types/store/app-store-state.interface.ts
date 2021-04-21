import { ISearch } from "./search.interface";
import { ILeaderboardItem } from "../quake-api/leaderboard-item.interface";

export interface IAppStoreState {
    search: ISearch
    streamer: ILeaderboardItem
}
