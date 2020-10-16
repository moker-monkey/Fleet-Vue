import { RouteConfig } from 'vue-router';
import Global from '../layout/Global.vue'

const routes: RouteConfig[] = [
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Global,
        redirect: 'me',
        meta: {
            title: 'about',
            icon: 'none'
        },
        children: [
            {
                path: 'me',
                name: 'me',
                meta: {
                    title: 'me'
                },
                component: () => import('@/example/about/me.vue')
            },
            {
                path: 'compony',
                name: 'compony',
                meta: {
                    title: 'compony'
                },
                component: () => import('@/example/about/compony.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        meta: { hidden: true }
    },
    { path: '/', redirect: { name: 'dashboard' } }
];
export default routes
