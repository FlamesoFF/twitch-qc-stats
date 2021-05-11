import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import busySlice from './reducers/busy.reducer';
import searchSlice from "./reducers/search.reducer";
import notificationSlice from "./reducers/notification.reducer";
import statsSlice from "./reducers/stats.reducer";

const store = configureStore({
  reducer: combineReducers({
    busy: busySlice.reducer,
    search: searchSlice.reducer,
    stats: statsSlice.reducer,
    notification: notificationSlice.reducer,
  })
});

export default store;
