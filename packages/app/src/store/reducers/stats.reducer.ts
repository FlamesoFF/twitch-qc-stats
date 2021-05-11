import { PlayerStats } from "../../types/quake-api/player-stats.interface";
import { ILeaderboardItem } from "../../types/quake-api/leaderboard-item.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const statsSlice = createSlice({
    initialState: {
        leaders: [] as ILeaderboardItem[],
        user: {} as PlayerStats
    },

    name: 'stats',

    reducers: {
        setActiveUserStats(state, action: PayloadAction<PlayerStats>) {
            state.user = action.payload;
            return state;
        },

        setLeaders(state, action: PayloadAction<ILeaderboardItem[]>) {
            state.leaders = action.payload;
            return state;
        }
    }
});

export default statsSlice;
export const {setLeaders, setActiveUserStats} = statsSlice.actions;
