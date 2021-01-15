const path = require('path')

module.exports = {
    plugins: ['vuepress-plugin-typescript', { tsLoaderOptions: {} }, 'demo-container'],
    title: 'Fleet Vue',
    description: 'Just playing around',
    themeConfig: {
        logo: '/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '指引', link: '/guide/' },
            { text: '文档', link: '/doc/' },
            { text: 'github', link: 'https://github.com/moker-monkey/vue2-ts-element-api-admin' },
        ],
        sidebar: [
            {
                title: '指引',
                children: ['/guide/'],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '文档使用',   // 必要的
                path: '/doc/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/doc/'
                ]
            },

        ]

    },

}