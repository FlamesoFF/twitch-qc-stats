import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit"
import { statsApi } from "../../api/api.class";
import { twitchAPI } from "../../static/twitch";
import { STREAMER_ACTION_TYPES } from "../actions/streamer.actions";

export const loadStreamerStats = createAsyncThunk('streamer/loadStats',
  () => async (dispatch: Dispatch) => {


  }
);
