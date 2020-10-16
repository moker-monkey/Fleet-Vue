import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import api from '@/api'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tags-view'
import store from '@/store'

interface menu {
    path: string;
    title: string;
    children: menu[];
}

interface versions {
    date: string;
    description: string;
    unread: boolean;
}

interface notify {
    date: string;
    description: string;
    unread: boolean;
}

interface unread_length {
    total: number;
    versions: number;
    notify: number;
}

export interface IUserState {
    token: string
    name: string
    avatar: string
    introduction: string
    email: string
    menu: menu[]
}

const { login, getUserInfo, user, logout } = api;

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
    public token = getToken() as string;
    public name = ''
    public avatar = ''
    public introduction = ''
    public email = ''
    public menu: menu[] = [];
    public unread_length?: unread_length;
    public notify: notify[] = [];
    public versions: versions[] = [];

    @Action
    public async Login(userInfo: { username: string, password: string }) {
        // tslint:disable-next-line: prefer-const
        let { username, password } = userInfo
        username = username.trim()
        const { data } = await login.GET({ username, password })
        // 两种方式都支持，cookie模式与localstorage模式
        setToken(data.token)
        this.SET_TOKEN(data.token)
    }

    @Action
    public ResetToken() {
        removeToken()
        this.SET_TOKEN('')
    }

    @Action
    public async GetUserInfo() {
        if (this.token === '') {
            throw Error('GetUserInfo: token is undefined!')
        }

        const { data } = await api.getUserInfo.GET() // 后端通过header中的token自动判断应该返回的数据
        if (!data) {
            throw Error('Verification failed, please Login again.')
        }
        const { name, avatar, introduction, email, menus } = data

        this.SET_USERNAME(name)
        this.SET_AVATAR(avatar)
        this.SET_MENU(menus)
        this.SET_INTRODUCTION(introduction)
        this.SET_EMAIL(email)
    }

    @Action
    public async GetNotify() {
        if (this.token === '') {
            throw Error('GetUserInfo: token is undefined!')
        }
        const { data } = await api.getNotify.GET()
        const { versions, notify } = data
        this.SET_VERSIONS(versions)
        this.SET_NOTIFY(notify)
        const unread_versions_length = versions.filter((item: any) => item.unread).length
        const unread_notify_length = notify.filter((item: any) => item.unread).length
        this.SET_UNREAD_LENGTH({ total: (unread_versions_length + unread_notify_length), versions: unread_versions_length, notify: unread_notify_length })
    }

    @Action
    public async LogOut() {
        if (this.token === '') {
            throw Error('LogOut: token is undefined!')
        }
        // await logout.GET()
        removeToken()
        resetRouter()

        // Reset visited views and cached views
        TagsViewModule.delAllViews()
        this.SET_TOKEN('')
    }

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }

    @Mutation
    private SET_USERNAME(name: string) {
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
    private SET_EMAIL(email: string) {
        this.email = email
    }
    @Mutation
    private SET_MENU(menu: menu[]) {
        this.menu = menu
    }
    @Mutation
    private SET_VERSIONS(versions: versions[]) {
        this.versions = versions
    }
    @Mutation
    private SET_NOTIFY(notify: notify[]) {
        this.notify = notify
    }
    @Mutation
    private SET_UNREAD_LENGTH(unread_length: unread_length) {
        this.unread_length = unread_length
    }
}

export const UserModule = getModule(User)
