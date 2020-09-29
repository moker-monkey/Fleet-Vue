import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './default'
import dynamicRouter from './dynamic'

Vue.use(Router);

export let staticRouter = routerConfig
export let dynamicRoutes = dynamicRouter


const createRouter = () => new Router({
  // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to: any, from: any, savedPosition: any) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: staticRouter,
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}
export default router
