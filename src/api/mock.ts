import * as api from './api'
import { Random } from 'mockjs'

api.user.setMock('GET', { good: 'mock' })
api.login.setMock('GET', {
    token: Random.guid(),
})
api.getUserInfo.setMock('GET', {
    username: {},
    avatar: Random.image('100x100', Random.color(), Random.cfirst()),
    introduction: '他很懒什么都没写。',
    email: 'lkjhuy@sina.com',
    menus: [{
        path: '/about',
        title: '关于',
        children: [
            {
                path: 'me',
                title: '我'
            },
            {
                path: 'compony',
                title: '公司'
            }
        ]
    }]
})
api.route.setMock('GET', {
    name: 'role1',

})


