import { twitchAPI } from "../../static/twitch";
import store from "../store";

export const selectStreamer = (): any => JSON.parse(twitchAPI.configuration?.broadcaster?.content ?? '{}');
export const selectActiveUserStats = () => store.getState().stats.user;
