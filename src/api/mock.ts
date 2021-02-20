import * as api from './api'
import { Random } from 'mockjs'
import '@/utils'

api.empty.setMock('GET', { message: 'ok' })

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
        onlineTrend: {
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
        dailyNewRegister: {
            title: '整体 | 日新注册用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        newAddUser: {
            title: '整体 | 新增用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        activeUser: {
            title: '整体 | 活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        recharge: {
            title: '整体 | 日新增充值用户&日充值用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        consume: {
            title: '整体 | 日新增消费用户&日消费用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        dailyRecharge: {
            title: '整体 | 日累计充值金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        dailyConsume: {
            title: '整体 | 日累计消费金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        dailyRechargeAndConsume: {
            title: '整体 | 日人均充值金额&日人均消费金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        dailyRechargePenetrance: {
            title: '整体 | 日充值渗透率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        dailyConsumePenetrance: {
            title: '整体 | 日消费渗透率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
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

api.topCard.setMock('GET', {
    results: {
        activeUser: {
            title: 'TOP | 累计活跃用户',
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
        rechargeUser: {
            title: 'TOP | 累计充值用户',
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
        extractUser: {
            title: 'TOP | 累计提现用户',
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
        newUser: {
            title: 'TOP | 累计新增用户',
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

api.top.setMock('GET', {
    results: {
        bigBonus: {
            title: 'TOP | 大奖榜',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '实时',
            table: [{
                ord: 1,
                name: 'zhangshan001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 2,
                name: 'lisi001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 3,
                name: 'wangwu001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }]
        },
        freezeMoney: {
            title: 'TOP | 冻结金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '实时',
            table: [{
                ord: 1,
                name: 'zhangshan001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 2,
                name: 'lisi001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 3,
                name: 'wangwu001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }]
        }, rechargeUser: {
            title: 'TOP | 充值最多用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '实时',
            table: [{
                ord: 1,
                name: 'zhangshan001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 2,
                name: 'lisi001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 3,
                name: 'wangwu001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }]
        }, extractUser: {
            title: 'TOP | 提现最多用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '实时',
            table: [{
                ord: 1,
                name: 'zhangshan001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 2,
                name: 'lisi001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 3,
                name: 'wangwu001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }]
        }, antiWaterUser: {
            title: 'TOP | 反水最多用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '实时',
            table: [{
                ord: 1,
                name: 'zhangshan001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 2,
                name: 'lisi001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 3,
                name: 'wangwu001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }]
        }, preferentialUser: {
            title: 'TOP | 优惠最多用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '实时',
            table: [{
                ord: 1,
                name: 'zhangshan001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 2,
                name: 'lisi001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 3,
                name: 'wangwu001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }]
        }, rechargeAgency: {
            title: 'TOP | 充值最多代理',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '实时',
            table: [{
                ord: 1,
                name: 'zhangshan001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 2,
                name: 'lisi001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 3,
                name: 'wangwu001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }]
        }, humanNumAgency: {
            title: 'TOP | 人数最多代理',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '实时',
            table: [{
                ord: 1,
                name: 'zhangshan001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 2,
                name: 'lisi001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }, {
                ord: 3,
                name: 'wangwu001',
                time: new Date().Format('yyyy-MM-dd hh:mm:ss'),
                money: 3000,
            }]
        },
    }

})

api.registrationAnalysisCard.setMock('GET', {
    results: {
        dailyRegistration: {
            title: '注册 | 日新增注册用户',
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
        weekRegistration: {
            title: '注册 | 周新增注册用户',
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
        monthRegistration: {
            title: '注册 | 月新增注册用户',
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
        dayUser: {
            title: '注册 | 日累计用户',
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

api.registrationAnalysis.setMock('GET', {
    results: {
        peopleNumber: {
            title: '注册 | 注册人数',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 589,
            unit: '人',
            mtm: 56,
            yty: 21,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 1766,
            avgCount: 370,
        },
        monthNewRegister: {
            title: '注册 | 月新增用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '过去7天',
        },
        stayUser: {
            title: '注册 | 留存用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        monthStayUserRate: {
            title: '注册 | 月用户留存率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        weightedStayUserRate: {
            title: '注册 | 加权留存率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        lostUser: {
            title: '注册 | 流失用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        lostUserRate: {
            title: '注册 | 用户流失率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        weightedLostUserRate: {
            title: '注册 | 加权流失率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        usefulStayUser: {
            title: '注册 | 有效留存用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        usefulStayUserRate: {
            title: '注册 | 有效用户留存率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        loginRate: {
            title: '注册 | 登录比率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
    }

})

api.rechargeActiveCard.setMock('GET', {
    results: {
        activeUser: {
            title: '活跃 | 活跃用户',
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
        newRegisterUser: {
            title: '活跃 | 新增注册用户',
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
        weekActiveUser: {
            title: '活跃 | 周活用户',
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
        weekLostUser: {
            title: '活跃 | 周流失用户',
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

api.rechargeActive.setMock('GET', {
    results: {
        monthNewRegister: {
            title: '注册 | 月新增用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '过去7天',
        },
        activeUser: {
            title: '注册 | 活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        activeOnlineDays: {
            title: '注册 | 活跃用户在线天数',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        activeUserDailyRate: {
            title: '注册 | 活跃用户每天活跃率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        weightedActiveRate: {
            title: '注册 | 加权活跃率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        rechargePeople: {
            title: '注册 | 充值人数',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        rechargeTransformRate: {
            title: '注册 | 充值转换率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        avgRecharge: {
            title: '注册 | 人均充值',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
    }

})

api.activeAnalysisCard.setMock('GET', {
    results: {
        activeUser: {
            title: '充值 | 活跃用户',
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
        rechargeMoney: {
            title: '充值 | 充值金额',
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
        firstRechargeUser: {
            title: '充值 | 首充用户',
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
        firstRechargeMoney: {
            title: '充值 | 首充金额',
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

api.activeAnalysis.setMock('GET', {
    results: {
        dailyRechargeMoney: {
            title: '充值 | 日充值金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 589,
            unit: '人',
            mtm: 56,
            yty: 21,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 1766,
            avgCount: 370,
        },
        dailyActiveUser: {
            title: '充值 | 日活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '过去7天',
        },
        dailyRechargeUser: {
            title: '充值 | 日充值用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        dailyNewRechargeUser: {
            title: '充值 | 日新增充值用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        dailyRechargePermeateRate: {
            title: '充值 | 日充值渗透率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        weekActiveUser: {
            title: '充值 | 周活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        weekRechargeUser: {
            title: '充值 | 周充值用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        weekRechargePermeateRate: {
            title: '充值 | 周充值渗透率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        monthActiveUser: {
            title: '充值 | 月活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        monthRechargeUser: {
            title: '充值 | 月充值用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        monthRechargePermeateRate: {
            title: '充值 | 月充值渗透率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        }
    }

})

api.consumeAnalysisCard.setMock('GET', {
    results: {
        activeUser: {
            title: '消费 | 活跃用户',
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
        rechargeMoney: {
            title: '消费 | 消费用户',
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
        firstRechargeUser: {
            title: '消费 | 新增用户',
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
        firstRechargeMoney: {
            title: '消费 | 新增消费用户',
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

api.consumeAnalysis.setMock('GET', {
    results: {
        dailyRechargeMoney: {
            title: '消费 | 日消费金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 589,
            unit: '人',
            mtm: 56,
            yty: 21,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 1766,
            avgCount: 370,
        },
        dailyActiveUser: {
            title: '消费 | 日活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '过去7天',
        },
        dailyRechargeUser: {
            title: '消费 | 日消费用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        dailyNewRechargeUser: {
            title: '消费 | 日新增消费用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        dailyRechargePermeateRate: {
            title: '消费 | 日充值渗透率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        weekActiveUser: {
            title: '消费 | 周活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        weekRechargeUser: {
            title: '消费 | 周消费用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        weekRechargePermeateRate: {
            title: '消费 | 周消费渗透率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        monthActiveUser: {
            title: '消费 | 月活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        monthRechargeUser: {
            title: '消费 | 月消费用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        monthRechargePermeateRate: {
            title: '消费 | 月消费渗透率',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        }
    }

})

api.balanceAnalysisCard.setMock('GET', {
    results: {
        activeUser: {
            title: '余额 | 活跃用户',
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
        rechargeUser: {
            title: '余额 | 充值用户',
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
        rechargeMoney: {
            title: '余额 | 充值金额',
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
        consumeMoney: {
            title: '余额 | 消费金额',
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

api.balanceAnalysis.setMock('GET', {
    results: {
        rechargeAndConsumeMoney: {
            title: '余额 | 充值金额&消费金额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
            count: 589,
            unit: '人',
            mtm: 56,
            yty: 21,
            mtm_unit: 'up',
            yty_unit: 'up',
            allCount: 1766,
            avgCount: 370,
        },
        activeUser: {
            title: '余额 | 活跃用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '过去7天',
        },
        rechargeUser: {
            title: '余额 | 充值用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        consumeUser: {
            title: '余额 | 消费用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        haveBalanceUser: {
            title: '余额 | 有余额用户',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        allBalance: {
            title: '余额 | 账户总余额',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
        balanceChange: {
            title: '余额 | 余额浮动',
            date: new Date().Format('yyyy-MM-dd hh:mm:ss'),
            subTime: '今日',
            subTitle: '今日',
        },
    }

})
