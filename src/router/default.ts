
import Home from '../views/Home.vue';
import Global from '../layout/Global.vue'
import About from '../views/About.vue';
import Login from '../views/login/index.vue'
import ApiGenerate from '../example/apiManager/index.vue'

// 默认的页面是固定的不会从api中拉取路由控制

import { RouteConfig } from 'vue-router';
const routes: RouteConfig[] = [
    {
        path: '/dashboard',
        component: Global,
        redirect: 'dashboard',
        meta: { showBreadcrumb: true, title: 'dashboard', isHome: true, },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'dashboard',
                    icon: 'fa fa-tachometer',
                    affix: true
                }
            }
        ]
    },
    {
        path: '/redirect',
        name: 'redirect',
        component: Global,
        meta: { hidden: true },
        children: [
            {
                path: '/redirect/:path*',
                component: () => import(/* webpackChunkName: "redirect" */ '@/layout/components/redirect/index.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'login',
            icon: 'mail',
            hidden: true
        },
        component: Login
    },
    {
        path: '/api',
        name: 'api',
        meta: {
            title: 'api',
            icon: 'api',
            hidden: true
        },
        component: ApiGenerate
    },
];
export default routes
