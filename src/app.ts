import "./main.scss";
import "./app.scss";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "../libs/twitch-ext.min.js";

import Vue from "vue";
import Vuetify from "vuetify";
import Panel from "../components/panel.vue";

Vue.use(Vuetify);

new Vue({
    el: "#root",

    template: "<Panel/>",
    render: h => h(Panel)
});

