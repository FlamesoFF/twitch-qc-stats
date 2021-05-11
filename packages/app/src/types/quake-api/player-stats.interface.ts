import { IPlayerRatings } from "./player-ratings.interface";
import { IPlayerLoadOut } from "./player-loadout.interface";
import { IPlayerProfileStats } from "./player-profile-stats.interface";
import { IPlayerLevelState } from "./player-level.state.interface";
import { IMatchesItem } from "./matches.item.interface";

export interface IPlayerStats {
    name: string;
    playerRatings: IPlayerRatings;
    playerLoadOut: IPlayerLoadOut;
    playerProfileStats: IPlayerProfileStats;
    playerLevelState: IPlayerLevelState;
    matches: IMatchesItem[];
}