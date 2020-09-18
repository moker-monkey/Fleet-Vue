import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import api from '@/api'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tags-view'
import store from '@/store'

export interface IUserState {
    token: string
    name: string
    avatar: string
    introduction: string
    roles: string[]
    email: string
}

const { login, getUserInfo, user, logout } = api;

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
    public token = getToken() || ''
    public name = ''
    public avatar = ''
    public introduction = ''
    public roles: string[] = []
    public email = ''

    @Action
    public async Login(userInfo: { username: string, password: string }) {
        let { username, password } = userInfo
        username = username.trim()
        const { data } = await login.GET({ username, password })
        setToken(data.accessToken)
        this.SET_TOKEN(data.accessToken)
    }

    @Action
    public ResetToken() {
        removeToken()
        this.SET_TOKEN('')
        this.SET_ROLES([])
    }

    @Action
    public async GetUserInfo() {
        if (this.token === '') {
            throw Error('GetUserInfo: token is undefined!')
        }
        const { data } = await getUserInfo.GET({ /* Your params here */ })
        if (!data) {
            throw Error('Verification failed, please Login again.')
        }
        const { roles, name, avatar, introduction, email } = data.user
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
            throw Error('GetUserInfo: roles must be a non-null array!')
        }
        this.SET_ROLES(roles)
        this.SET_NAME(name)
        this.SET_AVATAR(avatar)
        this.SET_INTRODUCTION(introduction)
        this.SET_EMAIL(email)
    }

    @Action
    public async ChangeRoles(role: string) {
        // Dynamically modify permissions
        const token = role + '-token'
        this.SET_TOKEN(token)
        setToken(token)
        await this.GetUserInfo()
        resetRouter()
        // Generate dynamic accessible routes based on roles
        PermissionModule.GenerateRoutes(this.roles)
        // Add generated routes
        router.addRoutes(PermissionModule.dynamicRoutes)
        // Reset visited views and cached views
        TagsViewModule.delAllViews()
    }

    @Action
    public async LogOut() {
        if (this.token === '') {
            throw Error('LogOut: token is undefined!')
        }
        await logout.GET()
        removeToken()
        resetRouter()

        // Reset visited views and cached views
        TagsViewModule.delAllViews()
        this.SET_TOKEN('')
        this.SET_ROLES([])
    }

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }

    @Mutation
    private SET_NAME(name: string) {
        this.name = name
    }

    @Mutation
    private SET_AVATAR(avatar: string) {
        this.avatar = avatar
    }

    @Mutation
    private SET_INTRODUCTION(introduction: string) {
        this.introduction = introduction
    }

    @Mutation
    private SET_ROLES(roles: string[]) {
        this.roles = roles
    }

    @Mutation
    private SET_EMAIL(email: string) {
        this.email = email
    }

}

export const UserModule = getModule(User)
