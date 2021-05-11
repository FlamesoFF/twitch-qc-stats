import { PlayerRatings } from "./player-ratings.interface";
import { PlayerLoadOut } from "./player-loadout.interface";
import { PlayerProfileStats } from "./player-profile-stats.interface";
import { PlayerLevelState } from "./player-level.state.interface";
import { Match } from "./matches.item.interface";

export interface PlayerStats {
    name: string;
    playerRatings: PlayerRatings;
    playerLoadOut: PlayerLoadOut;
    playerProfileStats: PlayerProfileStats;
    playerLevelState: PlayerLevelState;
    matches: Match[];
}
