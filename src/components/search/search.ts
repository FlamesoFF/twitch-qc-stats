import Vue from "vue";
import Component from "vue-class-component";
import {API} from "../../api/restApi";
import {NQuakeAPI} from "../../api/types";
import {store} from "../../store/store";
import {MUTATIONS} from "../../store/mutations";
import {getRankIcon} from "../../shared/ranks";
import AppPlayerCard from "../player-card/player-card.vue";

@Component({
    name: 'app-search',

    components: {
        'app-player-card': AppPlayerCard
    }
})
export default class AppSearch extends Vue {
    model: string = '';
    progress = false;
    valid = false;
    rules = {
        nickname: value => {
            return /^[\d|\w|\.| ]*$/.test(value) || 'Invalid format';
        }
    };


    get enabled() {
        return store.state.search.enabled;
    }

    get result() {
        return store.state.search.result;
    }

    get error() {
        return store.state.search.error;
    }

    get getRankIcon() {
        return getRankIcon;
    }


    beforeCreate() {
    }

    reset() {
        this.stop();
        store.commit(MUTATIONS.resetSearch);
    }

    enable() {
        store.commit(MUTATIONS.enableSearch);
    }

    disable() {
        store.commit(MUTATIONS.disableSearch);
        this.clear();
        this.reset();
    }

    clear() {
        this.model = '';
    }

    submit() {
        //@ts-ignore
        this.$refs.form.validate();
    }

    start() {
        this.progress = true;
    }

    stop() {
        this.progress = false;
    }

    async searchPlayer(name: string) {
        if (this.valid) {
            this.reset();
            this.enable();
            this.start();

            try {
                const response = await API.searchPlayer(name);
                const {data} = response;

                let stats: NQuakeAPI.ILeaderboardItem = {
                    userName: data.name,
                    eloRating: data.playerRatings.duel.rating,
                    profileIconId: data.playerLoadOut.iconId,
                    namePlateId: data.playerLoadOut.namePlateId
                };


                store.commit(MUTATIONS.saveSearchResult, stats);
                this.$nextTick();
            } catch (error) {
                store.commit(MUTATIONS.clearSearchResult);
                store.commit(MUTATIONS.searchError);
            }

            this.stop();
        }
    }
}