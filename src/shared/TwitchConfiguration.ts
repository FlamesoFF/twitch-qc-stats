export class TwitchConfiguration {
  streamerName?: string = '';

  constructor(configData: {}) {
    Object.assign(this, configData);
  }
}
