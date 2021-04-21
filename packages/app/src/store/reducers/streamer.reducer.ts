import { AppReducer } from "../../types/reducer.class";
import { ReducerMap } from "../../types/store/reducer-map.interface";
import { defaultStreamerState, StreamerState } from "../default-state";
import { STREAMER_ACTION_TYPES, STREAMER_ACTIONS } from "../actions/streamer.actions";
import { AppAction } from "../app-action.class";


class StreamerReducer extends AppReducer<STREAMER_ACTION_TYPES, StreamerState> {
  reduce(state= defaultStreamerState, action: AppAction<STREAMER_ACTION_TYPES>) {
    return super.reduce(state, action);
  }
}


const reducers: ReducerMap<STREAMER_ACTION_TYPES> = {
  setStreamer(state = defaultStreamerState, {data}: typeof STREAMER_ACTIONS.setStreamer) {
    if(data) {
      state.userName = data.name;
      state.eloRating = data.playerRatings.duel.rating;
      state.profileIconId = data.playerLoadOut.iconId;
      state.namePlateId = data.playerLoadOut.namePlateId;
    }

    return state;
  }
}

export const streamerReducer = new StreamerReducer(reducers);
