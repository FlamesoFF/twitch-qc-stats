import { ILeaderboardItem } from "../quake-api/leaderboard-item.interface";

export interface SearchState {
  enabled: boolean;
  error: boolean;
  result?: ILeaderboardItem;
}
