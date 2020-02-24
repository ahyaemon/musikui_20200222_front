import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as generalRoutes } from '../general/router/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'General',
        component: () => import(/* webpackChunkName: "general" */ '../general/General.vue'),
        children: generalRoutes
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../general/views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
