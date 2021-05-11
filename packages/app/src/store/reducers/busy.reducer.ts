import { createSlice } from "@reduxjs/toolkit";


const busySlice = createSlice({
  name: 'busy',

  initialState: {
    busy: false
  },

  reducers: {
    disableBusy(state) {
      state.busy = false;
      return state;
    },

    enableBusy(state) {
      state.busy = true;
      return state;
    }
  }
});

export default busySlice;
export const {disableBusy, enableBusy} = busySlice.actions;
