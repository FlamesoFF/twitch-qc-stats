declare module '*.vue' {
    import {defineComponent} from 'vue'
    const component: ReturnType<typeof defineComponent>
    export default component
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
