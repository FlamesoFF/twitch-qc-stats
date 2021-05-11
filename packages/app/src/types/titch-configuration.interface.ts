import { ILeaderboardItem } from "./quake-api/leaderboard-item.interface";

export interface TwitchConfiguration {
  broadcaster: {
    content: ILeaderboardItem
  }
}
