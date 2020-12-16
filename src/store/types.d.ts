import {NQuakeAPI} from "@/api/types";

export interface ISearch {
    enabled: boolean;
    result: NQuakeAPI.ILeaderboardItem;
    error: boolean;
}

export interface IAppStoreState {
    search: ISearch
    streamer: NQuakeAPI.ILeaderboardItem
}
