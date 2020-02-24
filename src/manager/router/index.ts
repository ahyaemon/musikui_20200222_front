export const routes = [
    {
        path: '',
        component: () => import(/* webpackChunkName: "contest-manager" */ '../views/ContestManager.vue')
    },
    {
        path: 'contest',
        component: () => import(/* webpackChunkName: "contest-manager" */ '../views/ContestManager.vue')
    }
]
