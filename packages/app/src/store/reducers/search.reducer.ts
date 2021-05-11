import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILeaderboardItem } from "../../types/quake-api/leaderboard-item.interface";


const searchSlice = createSlice({
  name: 'search',

  initialState: {
    enabled: false,
    error: false,
    result: undefined as unknown as ILeaderboardItem
  },

  reducers: {
    enableSearch(state) {
      state.enabled = true;
      return state;
    },

    disableSearch(state) {
      state.enabled = false;
      return state;
    },

    clearSearchResult(state) {
      state.result = {} as ILeaderboardItem;
      return state;
    },

    saveSearchResult(state,  action: PayloadAction<ILeaderboardItem>) {
      state.result = action.payload;
      return state;
    },

    resetSearch(state) {
      state.result = {} as ILeaderboardItem;
      state.error = false;

      return state;
    },
    searchError(state) {
      state.error = true;
      return state;
    },

    searchStop(state) {
      return state;
    }
  }
});

export default searchSlice;
export const {
  enableSearch,
  searchStop,
  searchError,
  saveSearchResult,
  disableSearch,
  clearSearchResult,
  resetSearch
} = searchSlice.actions;
