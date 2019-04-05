import {NQuakeAPI} from "./types";
import {IError, IRestWorkerParams, IRestWorkerResponse} from './rest.worker';
import {restWorker} from '../panel/index';


export interface PlayerSearchResult {
    list: NQuakeAPI.ILeaderboardItem[]
    index: number
}

export interface TermSearchResult {
    entityId: string
    entityName: string
}


export class RestWorkerParams<T> {
    constructor(params: IRestWorkerParams) {
        Object.assign(this, params);
    }
}


export class API {
    baseUrl = "https://stats.quake.com/api/v2";
    private restWorker = restWorker;

    async getLeaders(): Promise<IRestWorkerResponse<NQuakeAPI.ILeaderboard>> {
        const url = `${this.baseUrl}/Leaderboard?from=0&board=duel&season=current`;
        const type = 'leaders';

        const parameters = new RestWorkerParams<NQuakeAPI.ILeaderboard>({
            method: 'GET',
            type,
            url
        });

        this.restWorker.postMessage(parameters);

        return this.workerResponse<NQuakeAPI.ILeaderboard>(type);
    }

    async searchPlayer(name: string): Promise<IRestWorkerResponse<NQuakeAPI.IPlayerStats>> {
        const url = `${this.baseUrl}/Player/Stats?name=${encodeURIComponent(name)}`;
        const type = 'searchPlayer';

        let parameters = new RestWorkerParams<NQuakeAPI.IPlayerStats>({
            method: 'GET',
            type,
            url
        });

        this.restWorker.postMessage(parameters);

        return this.workerResponse<NQuakeAPI.IPlayerStats>(type);
    }

    async searchTerm(name: string): Promise<IRestWorkerResponse<TermSearchResult>> {
        const url = `${this.baseUrl}/Player/Search?term=${encodeURIComponent(name)}`;
        const type = 'searchTerm';

        let parameters = new RestWorkerParams<NQuakeAPI.IPlayerStats>({
            method: 'GET',
            type,
            url
        });

        this.restWorker.postMessage(parameters);

        return this.workerResponse<TermSearchResult>(type);
    }

    async getUserInfo(name: string): Promise<IRestWorkerResponse<NQuakeAPI.IPlayerStats>> {
        const url = `${this.baseUrl}/Player/Stats?name=${name}`;
        const type = 'userInfo';

        let parameters = new RestWorkerParams<NQuakeAPI.IPlayerStats>({
            method: 'GET',
            type,
            url
        });

        this.restWorker.postMessage(parameters);

        return this.workerResponse<NQuakeAPI.IPlayerStats>(type);
    }

    private workerResponse<T>(type: string): Promise<IRestWorkerResponse<T>> {
        return new Promise<IRestWorkerResponse<T>>((resolve, reject) => {
            const listener = (event) => {
                const {data} = event;

                if (data.type === type) {
                    if (!data.error) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                    this.restWorker.removeEventListener("message", listener);
                }
            };

            this.restWorker.addEventListener("message", listener);
        });
    }
}
