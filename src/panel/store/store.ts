import Vue from 'vue';
import Vuex from 'vuex';
import {MUTATIONS} from "./mutations";
import {NQuakeAPI} from "../../api/types";

Vue.use(Vuex);

interface ISearch {
    enabled: false;
    result: undefined;
    error: false;
}

interface IAppStoreState {
    search: ISearch
    streamer: NQuakeAPI.ILeaderboardItem
}


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
    };

    mutations = {
        [MUTATIONS.enableSearch](state) {
            state.search.enabled = true;
        },

        [MUTATIONS.disableSearch](state) {
            state.search.enabled = false;
        },

        [MUTATIONS.saveSearchResult](state, payload : NQuakeAPI.ILeaderboardItem) {
            state.search.result = payload;
        },

        [MUTATIONS.clearSearchResult](state) {
            state.search.result = undefined;
        },

        [MUTATIONS.searchError](state) {
            state.search.error = true;
        },

        [MUTATIONS.setStreamer](state, payload : NQuakeAPI.ILeaderboardItem) {
            state.streamer = payload;
        },

        [MUTATIONS.resetSearch](state) {
            state.search.result = undefined;
            state.search.error = false;
        }
    }
};


const store = new Vuex.Store(appStore);

export {store};