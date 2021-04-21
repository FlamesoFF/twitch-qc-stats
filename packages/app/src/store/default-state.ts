export const defaultBusyState = {
  busy: false
};

export const defaultSearchState = {
  enabled: false,
  result: undefined,
  error: false
};

export const defaultStreamerState = {
  userName: '',
  profileIconId: '',
  eloRating: 0,
  namePlateId: ''
};

export type BusyState = typeof defaultBusyState;
export type SearchState = typeof defaultSearchState;
export type StreamerState = typeof defaultStreamerState;

export type AppState = BusyState | SearchState | StreamerState;
