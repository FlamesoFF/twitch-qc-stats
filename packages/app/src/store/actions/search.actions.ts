import { ActionMapper } from "../action-mapper.class";
import { ILeaderboardItem } from "../../types/quake-api/leaderboard-item.interface";
import { AppAction } from "../app-action.class";

export enum SEARCH_ACTION_TYPES {
  enableSearch = 'enableSearch',
  saveSearchResult = 'saveSearchResult',
  clearSearchResult = 'clearSearchResult',
  disableSearch = 'disableSearch',
  searchError = 'searchError',
  searchStop = 'searchStop',
  resetSearch = 'resetSearch',
}

export const SEARCH_ACTIONS = ActionMapper.map([
  new AppAction<SEARCH_ACTION_TYPES.enableSearch>(),
  new AppAction<SEARCH_ACTION_TYPES.clearSearchResult, number>(),
  new AppAction<SEARCH_ACTION_TYPES.disableSearch>(),
  new AppAction<SEARCH_ACTION_TYPES.saveSearchResult, ILeaderboardItem>(),
  new AppAction<SEARCH_ACTION_TYPES.searchError>(),
  new AppAction<SEARCH_ACTION_TYPES.searchStop>(),
  new AppAction<SEARCH_ACTION_TYPES.resetSearch>(),
]);
