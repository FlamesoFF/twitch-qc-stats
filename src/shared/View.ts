import Vue from "vue";
import { TwitchConfiguration } from "./TwitchConfiguration";

export class AppView extends Vue {
  twitchAPI = window.Twitch.ext;
  config: TwitchConfiguration = undefined;
  protected busy: boolean = false;

  enableBusy() {
    this.busy = true;
  }

  disableBusy() {
    this.busy = false;
  }
}
