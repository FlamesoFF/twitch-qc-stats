import Component from "vue-class-component";
import { API } from "../../api/restApi";
import { NQuakeAPI } from "../../api/types";
import { getRankIcon } from "../../shared/ranks";
import { TwitchConfiguration } from "../../shared/TwitchConfiguration";
import { AppView } from "../../shared/View";
import { MUTATIONS } from "../../store/mutations";
import { store } from "../../store/store";
import AppPlayerCard from "../player-card/player-card.vue";
import AppPlayerDetails from "../player-details/player-details.vue";
import AppSearch from "../search/search.vue";


@Component({
    name: 'Panel',

    components: {
        'app-search': AppSearch,
        'app-player-card': AppPlayerCard,
        'app-player-details': AppPlayerDetails,
    }
})
export default class App extends AppView {
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
        let leaders = await API.getLeaders();
        leaders.data.entries = leaders.data.entries.slice(0, 10);

        this.players = leaders.data.entries;
    }

    async loadStreamerStats() {
        try {
            let stats = (await API.getPlayerStats(this.config.streamerName)).data;

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
        const leaders = await API.getLeaders();

        this.players = leaders.data.entries.slice(0, 10);

        return true;
    }
}
