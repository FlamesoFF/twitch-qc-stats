import "../../libs/twitch-ext.min.js";
import "vuetify/dist/vuetify.min.css";

import Vue from "vue";
import Component from "vue-class-component";
import Auth from "../../api/Auth";
import { AppView } from "../../shared/View";

@Component({})
export default class Config extends AppView {
  private auth: Auth;

  streamer = {
    name: undefined
  };

  // hooks
  beforeMount() {
    this.twitchAPI.onAuthorized(authData => {
      this.auth = new Auth(authData);
    });

    this.twitchAPI.configuration.onChanged(() => {
      if (
        this.twitchAPI.configuration.broadcaster &&
        this.twitchAPI.configuration.broadcaster.content
      ) {
        try {
          this.config = JSON.parse(
            this.twitchAPI.configuration.broadcaster.content
          );
          this.streamer.name = this.config.streamerName;
        } catch (error) {
          console.error("EXTENSION ERROR: Invalid configuration");
        }
      }
    });
  }

  async saveConfig() {
    const segment = "broadcaster";
    const version = "1.0";
    const content = JSON.stringify({
      streamerName: this.streamer.name
    });

    this.twitchAPI.configuration.set(segment, version, content);
  }
}
