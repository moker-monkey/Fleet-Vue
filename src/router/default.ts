import { RouterItem } from './index.d'
import Home from '../views/Home.vue';
import Global from '../layout/Global.vue'
import About from '../views/About.vue';
import Login from '../views/login/index.vue'
const routes: RouterItem[] = [
    {
        path: '/',
        component: Global,
        redirect: 'dashboard',
        meta: { hidden: false, title: '首页' },
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/Home.vue'),
                meta: {
                    title: 'dashboard',
                    icon: 'dashboard',
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
            alwaysShow: true
        },
        redirect: 'about',
        component: Global,
        children: [
            {
                path: 'login',
                name: 'login',
                meta: { title: 'login' },
                component: Login,
            }
        ]
    },

    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];
export default routes
