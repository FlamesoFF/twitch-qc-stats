export const twitchAPI = window.Twitch?.ext ??
  {
    configuration: {
      onChanged() {
      },
      broadcaster: {},
      name: 'Tester'
    }
  };
