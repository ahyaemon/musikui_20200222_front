import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as generalRoutes } from '../general/router/index'
import { routes as managerRoutes } from '../manager/router/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'General',
        component: () => import(/* webpackChunkName: "general" */ '../general/General.vue'),
        children: generalRoutes
    },
    {
        path: '/manager',
        name: 'Manager',
        component: () => import(/* webpackChunkName: "about" */ '../manager/Manager.vue'),
        children: managerRoutes
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
