import store from "../store";

export const selectIsEnabled = () => store.getState().search.enabled;
