import {IRestWorkerParams, IRestWorkerResponse, NQuakeAPI, TermSearchResult} from "./types";
import axios from 'axios';


export class RestWorkerParams<T> {
    constructor(params: IRestWorkerParams) {
        Object.assign(this, params);
    }
}


class API {
    baseUrl = "https://stats.quake.com/api/v2";
    // private restWorker = restWorker;

    async getLeaders(): Promise<IRestWorkerResponse<NQuakeAPI.ILeaderboard>> {
        const url = `${this.baseUrl}/Leaderboard`;

        return await axios.get(url, {
            params: {
                from: 0,
                board: 'duel',
                season: 'current'
            }
        });
    }

    async searchPlayer(name: string): Promise<IRestWorkerResponse<NQuakeAPI.IPlayerStats>> {
        const url = `${this.baseUrl}/Player/Stats`;

        return await axios.get(url, {
            params: {
                name: encodeURIComponent(name)
            }
        });
    }

    async searchTerm(name: string): Promise<IRestWorkerResponse<TermSearchResult>> {

        const url = `${this.baseUrl}/Player/Search`;

        return await axios.get(url, {
            params: {
                term: encodeURIComponent(name)
            }
        });

    }

    async getPlayerStats(name: string): Promise<IRestWorkerResponse<NQuakeAPI.IPlayerStats>> {
        const url = `${this.baseUrl}/Player/Stats`;

        return await axios.get(url, {
            params: { name }
        });
    }

    async getGamesSummary(name: string): Promise<IRestWorkerResponse<NQuakeAPI.IGamesSummary>> {
        // https://stats.quake.com/api/v2/Player/GamesSummary?name
        const url = `${this.baseUrl}/Player/GamesSummary`;

        // this.restWorker.postMessage(parameters);

        return await axios.get(url, {
            params: { name }
        });

    }

}

const api = new API();

export { api as API };