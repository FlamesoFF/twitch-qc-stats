import { ActionMapper } from "../action-mapper.class";
import { AppAction } from "../app-action.class";
import { IPlayerStats } from "../../types/quake-api/player-stats.interface";

export enum STREAMER_ACTION_TYPES {
  setStreamer = 'setStreamer'
}

export const STREAMER_ACTIONS = ActionMapper.map([
  new AppAction<STREAMER_ACTION_TYPES.setStreamer, IPlayerStats>()
]);
