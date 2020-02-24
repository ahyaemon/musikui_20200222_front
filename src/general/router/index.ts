export const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "general" */ '../views/About.vue')
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "general" */ '../views/About.vue')
    }
]
