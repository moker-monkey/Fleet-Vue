import { RouterItem } from './index.d'
import Home from '../views/Home.vue';
const routes: RouterItem[] = [
    {
        path: '/',
        name: 'Home',
        meta: { title: '首页' },
        component: Home,
    }, {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import('@/views/login/index.vue')
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
