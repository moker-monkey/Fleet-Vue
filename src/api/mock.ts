import * as api from './api'
import { Random } from 'mockjs'
import '@/utils'

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

api.realtimeCard.setMock('GET', {
    results: {
        newUser: {
            title: '实时 | 累计新增用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 656,
            unit: '人',
            mtm: 56,
            yty: 21,
            mtm_unit: 'up',
            yty_unit: 'up',
        },
        oldUser: {
            title: '实时 | 累计老用户活跃',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 335,
            unit: '人',
            mtm: 96,
            mtm_unit: 'up',
            yty: 83,
            yty_unit: 'up',
        },
        dayActiveUser: {
            title: '实时 | 累计日活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 922,
            unit: '人',
            mtm: 4,
            yty: 40,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        visitCount: {
            title: '实时 | 累计访问次数',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 225,
            unit: '人',
            mtm: 74,
            yty: 61,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        recharge: {
            title: '实时 | 充值金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 4615,
            unit: '',
            mtm: 17,
            yty: 65,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        extract: {
            title: '实时 | 提现金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 2680,
            unit: '',
            mtm: 87,
            yty: 52,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        draw: {
            title: '实时 | 已领取反水金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 6296,
            unit: '',
            mtm: 65,
            yty: 36,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        discount: {
            title: '实时 | 优惠金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 3210,
            unit: '',
            mtm: 95,
            yty: 46,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
    }

})


api.realtime.setMock('GET', {
    results: {
        newUser: {
            title: '实时 | 累计新增用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '过去24小时',
            count: 411,
            unit: '人',
            mtm: 58,
            yty: 74,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 84492,
            avgCount: 2702,
        },
        sharingAddUser: {
            title: '实时 | 分时新增用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '过去24小时',
            count: 344,
            unit: '人',
            mtm: 72,
            yty: 16,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 11,
            avgCount: 6,
        },
        sharingOldUser: {
            title: '实时 | 分时活跃老用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '过去24小时',
            count: 499,
            unit: '人',
            mtm: 23,
            yty: 74,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 36,
            avgCount: 58,
        },
        sharingUser: {
            title: '实时 | 分时活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '过去24小时',
            count: 499,
            unit: '人',
            mtm: 23,
            yty: 74,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 36,
            avgCount: 58,
        },
        sharingCount: {
            title: '实时 | 分时访问次数',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '过去24小时',
            count: 499,
            unit: '人',
            mtm: 23,
            yty: 74,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 36,
            avgCount: 58,
        },
        recharge: {
            title: '实时 | 充值金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '过去24小时',
        },
        draw: {
            title: '实时 | 提现金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '过去24小时',
        }
    }

})

api.overview.setMock('GET', {
    results: {
        newUser: {
            title: '整体 |在线趋势',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 2882246,
            unit: '万',
            mtm: 56,
            yty: 21,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 1766,
            avgCount: 370,
        },
        oldUser: {
            title: '整体 | 日新注册用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 335,
            unit: '人',
            mtm: 96,
            mtm_unit: 'up',
            yty: 83,
            yty_unit: 'up',
        },
        dayActiveUser: {
            title: '整体 | 新增用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        visitCount: {
            title: '实时 | 累计访问次数',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 225,
            unit: '人',
            mtm: 74,
            yty: 61,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        recharge: {
            title: '实时 | 充值金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 4615,
            unit: '',
            mtm: 17,
            yty: 65,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        extract: {
            title: '实时 | 提现金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 2680,
            unit: '',
            mtm: 87,
            yty: 52,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        draw: {
            title: '实时 | 已领取反水金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 6296,
            unit: '',
            mtm: 65,
            yty: 36,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        discount: {
            title: '实时 | 优惠金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 3210,
            unit: '',
            mtm: 95,
            yty: 46,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
    }

})

api.overviewCard.setMock('GET', {
    results: {
        newUser: {
            title: '整体 | 新增用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 423,
            unit: '人',
            mtm: 58,
            yty: 79,
            mtm_unit: 'up',
            yty_unit: 'up',
        },
        active: {
            title: '整体 | 活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 633,
            unit: '人',
            mtm: 72,
            yty: 16,
            mtm_unit: 'up',
            yty_unit: 'up',
        },
        dayActiveUser: {
            title: '整体 | 付费用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 351,
            unit: '人',
            mtm: 74,
            yty: 77,
            mtm_unit: 'down',
            yty_unit: 'up',
        },
        visitCount: {
            title: '整体 | 付费金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 499,
            unit: '人',
            mtm: 23,
            yty: 74,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 36,
            avgCount: 58,
        },
    }

})
