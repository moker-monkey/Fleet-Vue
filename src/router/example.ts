// 删除也不影响业务功能的路由写在此处

import Global from '../layout/Global.vue'

import { RouteConfig } from 'vue-router'
const exampleRouter: RouteConfig[] = [{
    path: '/example',
    component: Global,
    redirect: 'animation',
    meta: {
        showBreadcrumb: false, title: 'example', icon: 'fa fa-css3'
    },
    children: [{
        path: 'animation',
        name: 'animation',
        component: () => import(/* webpackChunkName: "example" */
            '@/example/animation/index.vue'),
        meta: {
            title: 'animation',

        }
    }, {
        path: 'chartsCard',
        name: 'chartsCard',
        component: () => import(/* webpackChunkName: "example" */
            '@/example/charts-card/doc.vue'),
        meta: {
            title: 'chartsCard',
        }
    }]
}]

export default exampleRouter;
