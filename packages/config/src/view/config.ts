import "../../../shared/libs/twitch-ext.min.js";
import "vuetify/dist/vuetify.min.css";
import Auth from "../../../app/src/api/auth.class";
import React from "react";
import { twitchAPI } from '../static/twitch';

export default class Config extends React.Component {
    private auth: Auth;

    streamer = {name: undefined};
    alert: boolean = false;

    // hooks
    created() {
        twitchAPI.onAuthorized(authData => {
            this.auth = new Auth(authData);
        });

        twitchAPI.configuration.onChanged(() => {
            if (
                twitchAPI.configuration.broadcaster &&
                twitchAPI.configuration.broadcaster.content
            ) {
                try {
                    this.config = JSON.parse(
                        twitchAPI.configuration.broadcaster.content
                    );
                    this.streamer.name = this.config.streamerName;
                } catch (error) {
                    console.error("EXTENSION ERROR: Invalid configuration");
                }
            }
        });
    }

    beforeMount() {

    }

    async saveConfig() {
        const segment = "broadcaster";
        const version = "1.0";
        const content = JSON.stringify({
            streamerName: this.streamer.name
        });

        twitchAPI.configuration.set(segment, version, content);

        this.showAlert();
    }

    async showAlert() {
        this.alert = true;

        setTimeout(() => {
            this.alert = false;
        }, 2000);
    }

    render() {
      return undefined;
    }
}
