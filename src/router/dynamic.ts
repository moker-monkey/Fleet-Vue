import { RouterItem } from './index.d'
const routes: RouterItem[] = [
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: 'about',
            icon: 'none'
        }
    },
];
export default routes
