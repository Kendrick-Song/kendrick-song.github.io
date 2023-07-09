module.exports = {
    // 基本配置
    base: '/',
    title: 'Kendrick Song\'s Blog',
    description: 'Kendrick Song 的个人学习记录',
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon1.ico' }]
    ],
    markdown: {
        lineNumbers: true
    },
    // 默认主题配置
    themeConfig: {
        // 平滑滚动
        smoothScroll: true,
        // 右上角 Github 仓库链接
        repo: 'Kendrick-Song/kendrick-song.github.io',
        // 底部编辑链接
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        docsBranch: 'main',
        docsDir: 'docs',
        // 最后更新时间
        lastUpdated: '最后更新', // string | boolean
        // 导航栏配置
        nav: [
            { text: '首页', link: '/' },
            { text: '🐳 Docker', link: '/🐳 Docker/Get started/Part 7：多容器应用（Multi-container apps)' },
            { text: '📚 博客搭建', link: '/📚 博客搭建/构建 VuePress 容器镜像' },
            {
                text: '关于',
                items: [
                    { text: 'Github', link: 'https://github.com/Kendrick-Song' },
                ]
            }
        ],
        // 侧边栏配置
        sidebar: {
            '/🐳 Docker/': [
                {
                    title: 'Get started',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 3,    // 可选的, 默认值是 1
                    children: [
                        'Get started/Part 7：多容器应用（Multi-container apps)',
                    ],
                },
                {
                    title: '原理',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 3,    // 可选的, 默认值是 1
                    children: [
                        'test/test',
                    ],
                }
            ],
            '/📚 博客搭建/': [
                {
                    title: '📚 博客搭建',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 3,    // 可选的, 默认值是 1
                    children: [
                        '构建 VuePress 容器镜像',
                        'VuePress 相关配置',
                        'VuePress 部署',
                        '踩坑记录',
                        '相关参考',
                    ],
                }
            ]
        }
    },
    // 插件配置
    plugins: [
        [
            'vuepress-plugin-mathjax',
            {
                target: 'svg',
                macros: {
                    '*': '\\times',
                },
            },
        ],
    ],
}