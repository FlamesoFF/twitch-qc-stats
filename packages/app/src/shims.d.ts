declare module "file-loader?name=[name].js!*" {
    const value: string;
    export = value;
}

declare module "*.worker.ts" {
    export default class WorkerModule extends Worker{
        constructor();
    }
}

interface Window {
    Twitch: any;
}
