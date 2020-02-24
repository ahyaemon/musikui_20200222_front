export const routes = [
    {
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]
