import { RouteConfig } from 'vue-router';
import Global from '../layout/Global.vue'

const routes: RouteConfig[] = [
    {
        path: '/overview',
        component: Global,
        redirect: 'overview',
        meta: { showBreadcrumb: true, title: 'overview', icon: 'fa fa-road', isHome: true, },
        children: [
            {
                path: 'overview',
                name: 'overview',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'overview',
                    affix: true
                }
            }, {
                path: 'realtime',
                name: 'realtime',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'realtime',
                    affix: true
                }
            }, {
                path: 'rankingList',
                name: 'rankingList',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'rankingList',
                    affix: true
                }
            },
        ]
    }, {
        path: '/basicData',
        component: Global,
        redirect: 'basicData',
        meta: { showBreadcrumb: true, title: 'basicData', icon: 'fa fa-database', isHome: true, },
        children: [
            {
                path: 'registrationData',
                name: 'registrationData',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'registrationData',
                    affix: true
                }
            }, {
                path: 'realtime',
                name: 'realtime',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'realtime',
                    affix: true
                }
            }, {
                path: 'rankingList',
                name: 'rankingList',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'rankingList',
                    affix: true
                }
            },
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
