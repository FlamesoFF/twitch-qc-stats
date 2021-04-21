import { combineReducers } from "redux";
import { busyReducer } from "./busy.reducer";
import { searchReducer } from './search.reducer';
import { streamerReducer } from "./streamer.reducer";

export default combineReducers({
  busy: busyReducer.reduce.bind(busyReducer),
  search: searchReducer.reduce.bind(searchReducer),
  streamer: streamerReducer.reduce.bind(streamerReducer),
});
