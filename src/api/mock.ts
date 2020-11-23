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
api.notice.setMock('GET', {
    results: {
        message: [{
            content: '支持使用图标',
            timestamp: '2018-04-12 20:46',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-more'
        }, {
            content: '支持自定义颜色',
            timestamp: '2018-04-03 20:46',
            color: '#0bbd87'
        }, {
            content: '支持自定义尺寸',
            timestamp: '2018-04-03 20:46',
            size: 'large'
        }, {
            content: '默认样式的节点',
            timestamp: '2018-04-03 20:46'
        }]
    }
})


