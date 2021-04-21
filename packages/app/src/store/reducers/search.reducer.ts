import { AppReducer } from "../../types/reducer.class";
import { ReducerMap } from "../../types/store/reducer-map.interface";
import { defaultSearchState, SearchState } from "../default-state";
import { SEARCH_ACTION_TYPES, SEARCH_ACTIONS } from "../actions/search.actions";
import { AppAction } from "../app-action.class";


class SearchReducer extends AppReducer<SEARCH_ACTION_TYPES, SearchState> {
  reduce(state= defaultSearchState, action: AppAction<SEARCH_ACTION_TYPES>) {
    return super.reduce(state, action);
  }
}

const reducers: ReducerMap<SEARCH_ACTION_TYPES> = {
  [SEARCH_ACTION_TYPES.clearSearchResult]: (state = defaultSearchState) => {
    state.search.result = {};
    return state;
  },

  [SEARCH_ACTION_TYPES.disableSearch]: (state = defaultSearchState) => {
    state.search.enabled = false;
    return state;
  },

  [SEARCH_ACTION_TYPES.enableSearch]: (state = defaultSearchState) => {
    state.search.enabled = true;
    return state;
  },

  [SEARCH_ACTION_TYPES.resetSearch]: (state = defaultSearchState) => {
    state.search.result = <any>{};
    state.search.error = false;
    return state;
  },

  [SEARCH_ACTION_TYPES.saveSearchResult]: (state = defaultSearchState, action: typeof SEARCH_ACTIONS.saveSearchResult) => {
    state.search.result = action.data;
    return state;
  },

  [SEARCH_ACTION_TYPES.searchError]: (state = defaultSearchState) => {
    state.search.error = true;
    return state;
  },

  [SEARCH_ACTION_TYPES.searchStop]: (state = defaultSearchState) => {
    return state;
  },
}

export const searchReducer = new SearchReducer(reducers);
