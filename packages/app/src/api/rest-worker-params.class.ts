import { IRestWorkerParams } from "../types/api/rest-worker-params.interface";

export class RestWorkerParams<T> implements IRestWorkerParams {
    method?: "GET";
    type?: string;
    url?: string;

    constructor(params: IRestWorkerParams) {
        ({
            url: this.url,
            type: this.type,
            method: this.method
        } = params);
    }
}
