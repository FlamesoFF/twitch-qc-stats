import { AppReducer } from "../../types/reducer.class";
import { ReducerMap } from "../../types/store/reducer-map.interface";
import { BUSY_ACTION_TYPES, BUSY_ACTIONS } from "../actions/busy.actions";
import { BusyState, defaultBusyState } from "../default-state";
import { AppAction } from "../app-action.class";


class BusyReducer extends AppReducer<BUSY_ACTION_TYPES, BusyState>{
  reduce(state = defaultBusyState, action: AppAction<BUSY_ACTION_TYPES>) {
    return super.reduce(state, action);
  }
}


const reducers: ReducerMap<BUSY_ACTION_TYPES> = {
  [BUSY_ACTION_TYPES.enableBusy]: (state = defaultBusyState, action: typeof BUSY_ACTIONS.enableBusy) => {
    if (action.data) state = true;
    return state;
  },

  [BUSY_ACTION_TYPES.disableBusy]: (state = defaultBusyState, action: typeof BUSY_ACTIONS.disableBusy) => {
    if (action.data) state = false;
    return state;
  },
}

export const busyReducer = new BusyReducer(reducers);
