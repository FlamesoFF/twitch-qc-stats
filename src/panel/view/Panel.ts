import Component from "vue-class-component";

import {API} from "../../api/restApi";
import {NQuakeAPI} from "../../api/types";
import {AppView} from "../../shared/View";
import {TwitchConfiguration} from "../../shared/TwitchConfiguration";
import {store} from "../store/store";
import {getRankIcon} from "../../shared/ranks";
import AppSearch from "./search/search.vue";
import AppPlayerCard from "./player-card/player-card.vue";
import {MUTATIONS} from "../store/mutations";

@Component({
    name: 'Panel',

    components: {
        'app-search': AppSearch,
        'app-player-card': AppPlayerCard
    }
})
export default class App extends AppView {
    private API = new API();

    players: NQuakeAPI.ILeaderboardItem[] = [];
    listOffset: number = 0;
    config = new TwitchConfiguration({});
    search = undefined;
    connecting = {
        message: 'Connecting to stats.quake.com',
        dots: '.'
    };

    scrollOptions = {
        duration: 100,
        offset: 200,
        easing: 'easeInOutCubic'
    };


    get searchEnabled() {
        return store.state.search.enabled;
    }

    get getRankIcon() {
        return getRankIcon;
    }

    get streamer(): NQuakeAPI.ILeaderboardItem {
        return store.state.streamer;
    }


    // hooks
    created() {
        this.twitchAPI.configuration.onChanged(() => {
            if (
                this.twitchAPI.configuration.broadcaster &&
                this.twitchAPI.configuration.broadcaster.content
            ) {
                try {
                    this.config = JSON.parse(
                        this.twitchAPI.configuration.broadcaster.content
                    );

                    this.loadStreamerStats().then((streamer) => {
                        store.commit(MUTATIONS.setStreamer, streamer);
                    });
                } catch (error) {
                    console.error("EXTENSION ERROR: Invalid configuration");
                }
            }
        });
    }

    beforeMount() {
    }

    mounted() {
        this.preloadData();
    }

    async preloadData() {
        this.enableBusy();

        const load = async () => {
            try {
                let result = await this.getLeaders();
                return true;
            } catch (error) {
                await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                    }, 5000);
                });

                return await load();
            }
        };

        await load();

        // await this.loadStreamerStats();
        // await this.getLeaders();
        // await this.loadPlayerInfo();

        this.disableBusy();

        return true;
    }

    async loadPlayerInfo() {
        let leaders = await this.API.getLeaders();
        leaders.data.entries = leaders.data.entries.slice(0, 10);

        this.players = leaders.data.entries;
    }

    async loadStreamerStats() {
        try {
            let stats = (await this.API.getUserInfo(this.config.streamerName)).data;

            let streamer: NQuakeAPI.ILeaderboardItem = {
                userName: stats.name,
                eloRating: stats.playerRatings.duel.rating,
                profileIconId: stats.playerLoadOut.iconId,
                namePlateId: stats.playerLoadOut.namePlateId
            };

            return streamer;
        } catch (error) {
        }
    }

    async getLeaders() {
        const leaders = await this.API.getLeaders();

        this.players = leaders.data.entries.slice(0, 10);

        return true;
    }
}
