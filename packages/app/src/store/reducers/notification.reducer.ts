import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const notificationSlice = createSlice({
  name: 'notification',

  initialState: {
    visible: false,
    text: '',
    type: "warn",
    variant: "primary"
  },

  reducers: {
    showWarn(state, action: PayloadAction<string>) {
      state.visible = true;
      state.variant = 'primary';
      state.type = 'warn';
      state.text = action.payload;

      return state;
    },

    showErr(state, action: PayloadAction<string>) {
      state.visible = true;
      state.variant = 'primary';
      state.type = 'error';
      state.text = action.payload;

      return state;
    },

    hide(state) {
      state.visible = false;

      return state;
    }
  }
});

export default notificationSlice;
export const {
  hide,
  showErr,
  showWarn
} = notificationSlice.actions;
