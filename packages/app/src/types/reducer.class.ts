import { AppAction } from "../store/app-action.class";
import { ReducerMap } from "./store/reducer-map.interface";
import { AppState } from "../store/default-state";

export class AppReducer<TYPE extends string, STATE extends AppState = any, T extends AppAction<TYPE> = AppAction<TYPE>> {
  constructor(private reducers: ReducerMap<TYPE, STATE>) {}

  reduce(state: STATE | undefined, action: T) {
    const operation = this.reducers[action.type];

    if (operation) operation(state, action);

    return state;
  }
}
