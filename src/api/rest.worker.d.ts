declare const self: Worker;

export interface IError {
    code?: number
    message?: string
}

export interface IRestWorkerResponse<T> {
    type?: string
    message?: string
    data? : T
    error?: IError
}

export interface IRestWorkerParams {
    type?: string
    method?: 'GET'
    url?: string
}