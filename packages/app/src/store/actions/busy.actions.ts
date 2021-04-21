import { ActionMapper } from "../action-mapper.class";
import { AppAction } from "../app-action.class";

export enum BUSY_ACTION_TYPES {
  enableBusy = 'enableBusy',
  disableBusy = 'disableBusy'
}

export const BUSY_ACTIONS = ActionMapper.map([
  new AppAction<BUSY_ACTION_TYPES.enableBusy>(),
  new AppAction<BUSY_ACTION_TYPES.disableBusy>()
]);
