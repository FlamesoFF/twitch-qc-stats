import Vue from "vue";
import { TwitchConfiguration } from "./TwitchConfiguration";

export class AppView extends Vue {
  protected busy: boolean = false;
  
  twitchAPI = window.Twitch.ext;
  config: TwitchConfiguration = {};

  enableBusy() {
    this.busy = true;
  }

  disableBusy() {
    this.busy = false;
  }
}
