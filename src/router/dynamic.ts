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

                }
            }, {
                path: 'realtime',
                name: 'realtime',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'realtime',

                }
            }, {
                path: 'rankingList',
                name: 'rankingList',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'rankingList',

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
                path: 'registrationAnalysis',
                name: 'registrationAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'registrationAnalysis',
                }
            }, {
                path: 'rechargeActive',
                name: 'rechargeActive',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'rechargeActive',

                }
            }, {
                path: 'rechargeAnalysis',
                name: 'rechargeAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'rechargeAnalysis',

                }
            }, {
                path: 'consumeAnalysis',
                name: 'consumeAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'consumeAnalysis',

                }
            }, {
                path: 'balanceAnalysis',
                name: 'balanceAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'balanceAnalysis',

                }
            }, {
                path: 'channelAnalysis',
                name: 'channelAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'channelAnalysis',

                }
            }, {
                path: 'agencyAnalysis',
                name: 'agencyAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'agencyAnalysis',

                }
            }, {
                path: 'terminalAnalysis',
                name: 'terminalAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'terminalAnalysis',

                }
            },
        ]
    }, {
        path: '/financialAnalysis',
        component: Global,
        redirect: 'financialAnalysis',
        meta: { showBreadcrumb: true, title: 'financialAnalysis', icon: 'fa fa-road', isHome: true, },
        children: [
            {
                path: 'rechargeAnalysis',
                name: 'rechargeAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'rechargeAnalysis',

                }
            }, {
                path: 'withdrawalAnalysis',
                name: 'withdrawalAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'withdrawalAnalysis',

                }
            }, {
                path: 'antiWaterAnalysis',
                name: 'antiWaterAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'antiWaterAnalysis',

                }
            }, {
                path: 'breakEvenAnalysis',
                name: 'breakEvenAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'breakEvenAnalysis',

                }
            }, {
                path: 'thirdAnalysis',
                name: 'thirdAnalysis',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'thirdAnalysis',

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
