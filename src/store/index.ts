import {createStore} from 'vuex';
import {NQuakeAPI} from "@/api/types";
import {RANKS} from '@/shared/ranks';
import {IAppStoreState} from "@/store/types";


export enum MUTATIONS {
    enableSearch = 'enableSearch',
    saveSearchResult = 'saveSearchResult',
    clearSearchResult = 'clearSearchResult',
    disableSearch = 'disableSearch',
    searchError = 'searchError',
    searchStop = 'searchStop',
    setStreamer = 'setStreamer',
    resetSearch = 'resetSearch',
}

export default createStore<IAppStoreState>({
    state: {
        search: {
            enabled: false,
            result: <any>{},
            error: false
        },
        streamer: {
            userName: '',
            profileIconId: '',
            eloRating: 0,
            namePlateId: ''
        }
    },

    mutations: {
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
            state.search.result = <any>{};
        },

        [MUTATIONS.searchError](state) {
            state.search.error = true;
        },

        [MUTATIONS.setStreamer](state, payload: NQuakeAPI.ILeaderboardItem) {
            state.streamer = payload;
        },

        [MUTATIONS.resetSearch](state) {
            state.search.result = <any>{};
            state.search.error = false;
        }
    },

    getters: {
        getRankIcon: store => (rating: number) => {
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

        defaultAvatar: store => ($event: any) => {
            $event.target.src = "./assets/images/profile_icon_01.png";
        },

        defaultPlate: store => ($event: any) => {
            $event.target.src = "./assets/images/nameplate_default.png";
        }

    }
});
