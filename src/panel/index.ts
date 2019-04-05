/**
 * Data:
 *
 * const clientId = '1rv1hm526g57f4b5wbpw1l9shthv8i';
 * const accessToken = 'kekH1wSSZ5Hlob6a/iFdAxZXH1aErv56Z1lemaZGgvw=';
 * const twitchClient = Twitch.withCredentials(clientId, accessToken);
 */

import "../main.scss";
import "./index.scss";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "../libs/twitch-ext.min.js";

import Vue from "vue";
import Vuetify from "vuetify";
import Panel from "./view/panel.vue";
// import restWorkerPath from 'file-loader?name=[name].js!../api/rest.worker.js'

const restWorker: Worker = new Worker('./worker.bundle.js');

Vue.use(Vuetify);

new Vue({
    el: "#root",

    template: "<Panel/>",
    render: h => h(Panel)
});


export {restWorker};

