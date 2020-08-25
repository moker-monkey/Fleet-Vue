import { RouterItem } from './index.d'
import Home from '../views/Home.vue';
const routes: RouterItem[] = [
    {
        path: '/',
        name: 'Home',
        meta: { title: 'hello', hidden: false },
        component: Home,
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
