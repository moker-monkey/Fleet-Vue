import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

import { dynamicRoutes, allStaticRouter } from '@/router'
import store from '@/store'
import { RouteConfig } from 'vue-router'

// 有两种模式
// 1. 是api模式，api模式需要后端配合，配置便捷，在产品级的项目中（权限与角色需要用户自定义的场景下）使用,但是可能有安全问题，为了最大化的减少安全问题，使用allow而非disallow的逻辑，后端也需要做权限控制。
// 2. 是本地模式，即由开发人员预设好角色允许访问的路由，后端只要配置角色即可
const localHasPermission = (roles: string[], route: RouteConfig) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => ((route.meta as any).roles as string[]).includes(role))
  } else {
    return true
  }
}
const apiHasPermission = (allowPath: string[], route: RouteConfig) => {
  return allowPath.includes(route.path)
}

export const filterAsyncRoutes = (routes: RouteConfig[], menus: any[]) => {
  const res: RouteConfig[] = []
  // menus为后端返回
  // routes为全部的动态路由
  if (menus.length <= 0) {
    return [{
      path: '/', redirect: {
        name: 'welcome'
      }
    }]
  } else {
    // 否则就跳转到第一个路径
    res.push({ path: '/', redirect: { path: `${menus[0].path}/${menus[0].children[0].path}` } })
  }
  const id_Obj: any = {}
  // 首先将list转化为obj，并且以route.path为key
  menus.forEach((route) => {
    if (route.children) {
      id_Obj[route.path] = route.children.map((item: any) => {
        return item.path
      })
    }
  })
  // 然后使用menus将routes隐藏
  routes.forEach((route: any) => {
    menus.forEach((item: any) => {
      if (route.path === item.path) {
        if (route.children) {
          route.children.forEach((_item: any, _index: number) => {
            if (id_Obj[item.path].indexOf(_item.path)) {
              // tslint:disable-next-line: no-string-literal
              (route.children || [])[_index]['meta']['hidden'] = true;
            }
          })
        }
        res.push(route)
      }
    })
  })
  return res
}




export interface IPermissionState {
  routes: RouteConfig[]
  dynamicRoutes: RouteConfig[],
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteConfig[] = []
  public dynamicRoutes: RouteConfig[] = []
  @Action
  public GenerateRoutes(type: string, menus: any[] = []) {
    // 不再有角色之分，只有开发(local)和生产(online)的环境之分
    // 
    if (type === 'online') {
      filterAsyncRoutes(dynamicRoutes, menus)
    } else {
      this.SET_ROUTES(dynamicRoutes)
    }

  }
  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = allStaticRouter.concat(routes)
    this.dynamicRoutes = routes
  }
}


export const PermissionModule = getModule(Permission)
