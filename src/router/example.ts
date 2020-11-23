// 用于编写示例的路由

import Api from '@/example/api-generate/index.vue'

import { RouteConfig } from 'vue-router'
const routes: RouteConfig[] = [{
    path: '/api',
    component: Api,
    meta: {
        hidden: true, showBreadcrumb: false, title: 'API-manage'
    }
}]