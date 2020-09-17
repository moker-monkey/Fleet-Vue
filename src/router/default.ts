import { RouterItem } from './index.d'
import Home from '../views/Home.vue';
const routes: RouterItem[] = [
    {
        path: '/',
        name: 'Home',
        meta: { title: '首页', icon: 'mail' },
        component: Home,
    }, {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            icon: 'mail'
        },
        component: () => import(/* webpackChunkName: "staticRoute" */ '@/views/login/index.vue'),
        children: [
            {
                path: '/home',
                name: 'Home1',
                meta: { title: '首页1', icon: 'mail' },
                component: Home,
                children: [{
                    path: '/home1',
                    name: 'Home12',
                    meta: { title: '首页2', icon: 'mail' },
                    component: Home,
                }]
            }
        ]
    }
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
