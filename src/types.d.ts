declare module '*.vue' {
    import Vue from "vue";
    export default Vue;
}

declare module 'vue/types/vue' {
    interface Vue {
        validate: Function
    }

}

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