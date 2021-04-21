import "../../app/src/main.scss";
import "./index.scss";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import Vue from "vue";
import Vuetify from "vuetify";

import Config from "./view/config.vue";

declare global {
    interface Window {
        Twitch: any;
    }
}

Vue.use(Vuetify);

new Vue({
    el: "#root",

    template: "<Config/>",
    render: h => h(Config),

    beforeCreate() {
    }
});
