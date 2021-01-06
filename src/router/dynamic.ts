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
                component: () => import('@/views/overview/overview.vue'),
                meta: {
                    title: 'overview',

                }
            }, {
                path: 'realtime',
                name: 'realtime',
                component: () => import('@/views/overview/realtime.vue'),
                meta: {
                    title: 'realtime',

                }
            }, {
                path: 'rankingList',
                name: 'rankingList',
                component: () => import('@/views/overview/top.vue'),
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
                component: () => import('@/views/basicData/registrationAnalysis.vue'),
                meta: {
                    title: 'registrationAnalysis',
                }
            }, {
                path: 'rechargeActive',
                name: 'rechargeActive',
                component: () => import('@/views/basicData/rechargeActive.vue'),
                meta: {
                    title: 'rechargeActive',

                }
            }, {
                path: 'activeAnalysis',
                name: 'activeAnalysis',
                component: () => import('@/views/basicData/activeAnalysis.vue'),
                meta: {
                    title: 'activeAnalysis',

                }
            },{
                path: 'rechargeAnalysis',
                name: 'rechargeAnalysis',
                component: () => import('@/views/basicData/rechargeAnalysis.vue'),
                meta: {
                    title: 'rechargeAnalysis',

                }
            }, {
                path: 'consumeAnalysis',
                name: 'consumeAnalysis',
                component: () => import('@/views/basicData/consumeAnalysis.vue'),
                meta: {
                    title: 'consumeAnalysis',

                }
            }, {
                path: 'balanceAnalysis',
                name: 'balanceAnalysis',
                component: () => import('@/views/basicData/balanceAnalysis.vue'),
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
    }, {
        path: '/activityAnalysis',
        component: Global,
        redirect: 'activityAnalysis',
        meta: { showBreadcrumb: true, title: 'activityAnalysis', icon: 'fa fa-road', isHome: true, },
        children: [
            {
                path: 'firstCharge',
                name: 'firstCharge',
                component: () => import('@/views/activityAnalysis/firstCharge.vue'),
                meta: {
                    title: 'firstCharge',

                }
            }, {
                path: 'commend',
                name: 'commend',
                component: () => import('@/views/activityAnalysis/commend.vue'),
                meta: {
                    title: 'commend',

                }
            }, {
                path: 'activeTracking',
                name: 'activeTracking',
                component: () => import('@/views/activityAnalysis/activeTracking.vue'),
                meta: {
                    title: 'activeTracking',

                }
            }
        ]
    }, {
        path: '/drawUser',
        component: Global,
        redirect: 'drawUser',
        meta: { showBreadcrumb: true, title: 'drawUser', icon: 'fa fa-road', isHome: true, },
        children: [
            {
                path: 'userRelationship',
                name: 'userRelationship',
                component: () => import('@/views/drawUser/userRelationship.vue'),
                meta: {
                    title: 'userRelationship',

                }
            }, {
                path: 'areaAnalysis',
                name: 'areaAnalysis',
                component: () => import('@/views/drawUser/areaAnalysis.vue'),
                meta: {
                    title: 'areaAnalysis',

                }
            }, {
                path: 'userGroup',
                name: 'userGroup',
                component: () => import('@/views/drawUser/userGroup.vue'),
                meta: {
                    title: 'userGroup',
                }
            }
        ]
    }, {
        path: '/gameCheats',
        component: Global,
        redirect: 'gameCheats',
        meta: { showBreadcrumb: true, title: 'gameCheats', icon: 'fa fa-road', isHome: true, alwaysShow: true },
        children: [
            {
                path: 'cheatsAnalysis',
                name: 'cheatsAnalysis',
                component: () => import('@/views/gameCheats/cheatsAnalysis.vue'),
                meta: {
                    title: 'cheatsAnalysis',
                }
            },
        ]
    }, {
        path: '/refinedOperations',
        component: Global,
        redirect: 'refinedOperations',
        meta: { showBreadcrumb: true, title: 'refinedOperations', icon: 'fa fa-road', isHome: true, },
        children: [
            {
                path: 'aipl',
                name: 'aipl',
                component: () => import('@/views/refinedOperations/aipl.vue'),
                meta: {
                    title: 'aipl',
                }
            }, {
                path: 'fast',
                name: 'fast',
                component: () => import('@/views/refinedOperations/fast.vue'),
                meta: {
                    title: 'fast',
                }
            }, {
                path: 'grow',
                name: 'grow',
                component: () => import('@/views/refinedOperations/grow.vue'),
                meta: {
                    title: 'grow',
                }
            },
        ]
    }, {
        path: '/arithmeticAnalysis',
        component: Global,
        redirect: 'arithmeticAnalysis',
        meta: { showBreadcrumb: true, title: 'arithmeticAnalysis', icon: 'fa fa-road', isHome: true, },
        children: [
            {
                path: 'arithmeticAnalysis',
                name: 'arithmeticAnalysis',
                component: () => import('@/views/arithmeticAnalysis/arithmeticAnalysis.vue'),
                meta: {
                    title: 'arithmeticAnalysis',
                }
            }
        ]
    }, {
        path: '/reports',
        component: Global,
        redirect: 'reports',
        meta: { showBreadcrumb: true, title: 'reports', icon: 'fa fa-road', isHome: true, },
        children: [
            {
                path: 'daily',
                name: 'daily',
                component: () => import('@/views/dayWeekReport/dailyReport.vue'),
                meta: {
                    title: 'daily',
                }
            }, {
                path: 'month',
                name: 'month',
                component: () => import('@/views/reports/month.vue'),
                meta: {
                    title: 'month',
                }
            }
        ]
    }, {
        path: '/userManage',
        component: Global,
        redirect: 'userManage',
        meta: { showBreadcrumb: true, title: 'userManage', icon: 'fa fa-road', isHome: true, },
        children: [
            {
                path: 'userCenter',
                name: 'userCenter',
                component: () => import('@/views/userManage/userCenter.vue'),
                meta: {
                    title: 'userCenter',
                }
            }, {
                path: 'userManage',
                name: 'userManage',
                component: () => import('@/views/userManage/userManage.vue'),
                meta: {
                    title: 'userManage',
                }
            }, {
                path: 'authority',
                name: 'authority',
                component: () => import('@/views/userManage/authority.vue'),
                meta: {
                    title: 'authority',
                }
            }, {
                path: 'record',
                name: 'record',
                component: () => import('@/views/userManage/record.vue'),
                meta: {
                    title: 'record',
                }
            }, {
                path: 'message',
                name: 'message',
                component: () => import('@/views/userManage/message.vue'),
                meta: {
                    title: 'message',
                }
            }, {
                path: 'password',
                name: 'password',
                component: () => import('@/views/userManage/password.vue'),
                meta: {
                    title: 'password',
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
