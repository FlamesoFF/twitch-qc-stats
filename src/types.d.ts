declare module '*.vue' {
    import Vue from "vue";
    export default Vue;
}

declare module 'vue/types/vue' {
    // 3. Объявите расширение для Vue
    interface Vue {
        $myProperty: string
    }
}

interface Window {
    Twitch: any;
}