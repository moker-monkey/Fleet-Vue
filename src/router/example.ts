// 删除也不影响业务功能的路由写在此处

import Api from '@/example/api-generate/index.vue'

import { RouteConfig } from 'vue-router'
const routes: RouteConfig[] = [{
    path: '/api',
    component: Api,
    meta: {
        hidden: true, showBreadcrumb: false, title: 'API-manage'
    }
}]