import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

import { dynamicRoutes, staticRouter } from '@/router'
import store from '@/store'
import { RouterItem } from '@/router/index.d'

// 有两种模式
// 1. 是api模式，api模式需要后端配合，配置便捷，在产品级的项目中（权限与角色需要用户自定义的场景下）使用,但是可能有安全问题，为了最大化的减少安全问题，使用allow而非disallow的逻辑，后端也需要做权限控制。
// 2. 是本地模式，即由开发人员预设好角色允许访问的路由，后端只要配置角色即可
const localHasPermission = (roles: string[], route: RouterItem) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => ((route.meta as any).roles as string[]).includes(role))
  } else {
    return true
  }
}
const apiHasPermission = (allowPath: string[], route: RouterItem) => {
  return allowPath.includes(route.path)
}

export const filterAsyncRoutes = (routes: RouterItem[], roles: string[], allowPath: string[] = [], type: string = 'local') => {
  const res: RouterItem[] = []
  if (type === 'local') {
    routes.forEach((route) => {
      const r = { ...route }
      if (localHasPermission(roles, r)) {
        if (r.children) {
          r.children = filterAsyncRoutes(r.children, roles)
        }
        res.push(r)
      }
    })
  } else if (type === 'api') {
    routes.forEach((route) => {
      const r = { ...route }
      if (apiHasPermission(allowPath, r)) {
        if (r.children) {
          r.children = filterAsyncRoutes(r.children, roles, allowPath, 'api')
        }
      }
    })
  }

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
  public GenerateRoutes(roles?: string[], type: string = 'local', allowPath: string[] = []) {
    let accessedRoutes
    if (type === 'local') {
      if (roles && !roles.includes('admin')) {
        accessedRoutes = filterAsyncRoutes(dynamicRoutes, roles)
      } else {
        accessedRoutes = dynamicRoutes
      }
    } else if (type === 'api') {
      accessedRoutes = filterAsyncRoutes(dynamicRoutes, [], allowPath, 'api')
    } else {
      accessedRoutes = dynamicRoutes
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
