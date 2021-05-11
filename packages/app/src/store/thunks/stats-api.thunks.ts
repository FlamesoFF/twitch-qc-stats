import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlayerStats } from "../../types/quake-api/player-stats.interface";
import { statsApi } from "../../api/api.class";
import { showWarn } from "../reducers/notification.reducer";
import { setActiveUserStats } from "../reducers/stats.reducer";
import { selectStreamer } from "../selectors/streamer.selectors";
import { setLeaders } from "../reducers/stats.reducer";


export const loadStreamerStats = createAsyncThunk('stats/loadBroadcasterStats',
  async (data, thunkAPI) => {
    const {name = 'flamesoff'} = selectStreamer() ?? {};
    let stats = undefined as unknown as PlayerStats;

    try {
      stats = await statsApi.getPlayerStats(name);
    } catch (e) {
      thunkAPI.dispatch(showWarn('Unable to load player info!'));
    }

    if (stats) {
      thunkAPI.dispatch(setActiveUserStats(stats));
    }

    return stats;
  });

export const getLeaders = createAsyncThunk('stats/getLeaders',
  async (data, thunkAPI) => {
    const leaders = await statsApi.getLeaders();

    if (leaders) {
      setLeaders(leaders.entries.slice(0, 10));
    }
  });
