import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Panel from '../components/panel/Panel.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Panel',
    component: Panel
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
