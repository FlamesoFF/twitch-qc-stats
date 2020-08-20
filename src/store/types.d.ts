import {NQuakeAPI} from "../api/types";

export interface ISearch {
    enabled: false;
    result: undefined;
    error: false;
}

export interface IAppStoreState {
    search: ISearch
    streamer: NQuakeAPI.ILeaderboardItem
}