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

const whiteList = ['/login', '/auth-redirect']

const getPageTitle = (key: string) => {
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    return `${pageName} - ${settings.system_name}`
  }
  return `${settings.system_name}`
}

router.beforeEach(async (to: Route, _: Route, next: any) => {
  next()
  // Start progress bar
  NProgress.start()

  // // Determine whether the user has logged in
  if (UserModule.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      if (UserModule.roles.length === 0) {
        try {
          // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
          // 两种配置：1. 本地模式，本地模式主要是用于开发，2. 在线模式，在线模式用于有后端后进行在线配置，权限判断在于后端，返回什么展示什么即可
          await UserModule.GetUserInfo()
          const roles = UserModule.roles
          // Generate accessible routes map based on role
          PermissionModule.GenerateRoutes(roles)
          // Dynamically add accessible routes
          router.addRoutes(PermissionModule.dynamicRoutes)
          // Hack: ensure addRoutes is complete
          // Set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (err) {
          // Remove token and redirect to login page
          UserModule.ResetToken()
          Message.error(err || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        next()
      }
    }
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
})

router.afterEach((to: Route) => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  console.log(to.path)
  // TagsViewModule.setActivePath(to.path)
  NProgress.done()

  // set page title
  document.title = getPageTitle(to.meta.title)
})
