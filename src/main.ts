import {createApp} from 'vue'
import Panel from './components/panel/Panel.vue';
import router from './router'
import store from './store/index'

createApp(Panel)
    .use(store)
    .use(router)
    .mount('#app')
