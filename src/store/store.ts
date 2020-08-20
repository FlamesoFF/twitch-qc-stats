import Vue from 'vue';
import Vuex from 'vuex';
import {MUTATIONS} from "./mutations";
import {NQuakeAPI} from "../api/types";
import {RANKS} from '../shared/ranks';
import {IAppStoreState} from "./types";

Vue.use(Vuex);


const appStore = new class {
    state: IAppStoreState = {
        search: {
            enabled: false,
            result: undefined,
            error: false
        },
        streamer: {
            userName: undefined,
            profileIconId: undefined,
            eloRating: undefined,
            namePlateId: undefined
        }
    }

    mutations = {
        [MUTATIONS.enableSearch](state) {
            state.search.enabled = true;
        },

        [MUTATIONS.disableSearch](state) {
            state.search.enabled = false;
        },

        [MUTATIONS.saveSearchResult](state, payload: NQuakeAPI.ILeaderboardItem) {
            state.search.result = payload;
        },

        [MUTATIONS.clearSearchResult](state) {
            state.search.result = undefined;
        },

        [MUTATIONS.searchError](state) {
            state.search.error = true;
        },

        [MUTATIONS.setStreamer](state, payload: NQuakeAPI.ILeaderboardItem) {
            state.streamer = payload;
        },

        [MUTATIONS.resetSearch](state) {
            state.search.result = undefined;
            state.search.error = false;
        }
    }

    getters = {
        getRankIcon: store => rating => {
            const min = 700;
            const max = 2200;
            const step = 75;

            const rank = Math.round(
                ((rating - min) - ((rating - min) % step)) / step
            );

            if (rank <= 21) {
                return RANKS[rank];
            } else {
                return RANKS[RANKS.length - 1];
            }
        },

        defaultAvatar: store => $event => {
            $event.target.src = "./assets/images/profile_icon_01.png";
        },

        defaultPlate: store => $event => {
            $event.target.src = "./assets/images/nameplate_default.png";
        }

    }
};


const store = new Vuex.Store(appStore);

export { store };