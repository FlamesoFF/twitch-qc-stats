import {TwitchConfiguration} from "./TwitchConfiguration";
import {Vue} from "vue-class-component";

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
