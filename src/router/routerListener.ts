import router from '.'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'
import { PermissionModule } from '@/store/modules/permission'
import { TagsViewModule } from '@/store/modules/tags-view'
import i18n from '@/lang' // Internationalization
import settings from '@/setting'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect', '/welcome']

const getPageTitle = (key: string) => {
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    return `${pageName} - ${settings.system.name}`
  }
  return `${settings.system.name}`
}
async function setRoute() {
  await UserModule.GetUserInfo();
  PermissionModule.GenerateRoutes(settings.system.menuType, UserModule.menu);
  // Dynamically add accessible routes
  setTimeout(() => {
    // 这个地方只是改变了内部router的指向，但是侧边栏还有没有生成
    router.addRoutes(PermissionModule.dynamicRoutes);
  }, 200);
}
router.beforeEach(async (to: Route, _: Route, next: any) => {
  next()
  // Start progress bar
  NProgress.start()

  // // Determine whether the user has logged in
  if (UserModule.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      try {
        // 两种配置：1. 动态路由只有两种

        // Generate accessible routes map based on role

        // Hack: ensure addRoutes is complete
        // Set the replace: true, so the navigation will not leave a history record

        // next({ ...to, replace: true })

      } catch (err) {
        // Remove token and redirect to login page
        UserModule.ResetToken()
        Message.error(err || 'Has Error')
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
      next()
      // next({ path: '/' })
    }

    NProgress.done()
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
  setRoute();
})

router.afterEach((to: Route) => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  // TagsViewModule.setActivePath(to.path)
  NProgress.done()

  // set page title
  document.title = getPageTitle(to.meta.title)
})
