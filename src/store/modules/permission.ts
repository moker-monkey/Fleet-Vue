import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

import { dynamicRoutes, staticRouter } from '@/router'
import store from '@/store'
import { RouterItem } from '@/router/index.d'

const hasPermission = (roles: string[], route: RouterItem) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => (route.meta.roles as string[]).includes(role))
  } else {
    return true
  }
}

export const filterAsyncRoutes = (routes: RouterItem[], roles: string[]) => {
  const res: RouterItem[] = []
  routes.forEach(route => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

export interface IPermissionState {
  routes: RouterItem[]
  dynamicRoutes: RouterItem[]
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouterItem[] = []
  public dynamicRoutes: RouterItem[] = []
  @Action
  public GenerateRoutes(roles: string[]) {
    let accessedRoutes
    if (roles.includes('admin')) {
      accessedRoutes = dynamicRoutes
    } else {
      accessedRoutes = filterAsyncRoutes(dynamicRoutes, roles)
    }
    this.SET_ROUTES(accessedRoutes)
  }
  @Mutation
  private SET_ROUTES(routes: RouterItem[]) {
    this.routes = staticRouter.concat(routes)
    this.dynamicRoutes = routes
  }


}

export const PermissionModule = getModule(Permission)