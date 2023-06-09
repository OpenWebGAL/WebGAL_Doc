module.exports = {
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-6XPF6Q2WY0' // UA-00000000-0
      }
    ]
  ],
  title: 'WebGAL',
  description: '界面美观、功能强大、易于开发的全新网页端视觉小说引擎',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {text: '主页', link: '/'},                      // 根路径
      {text: '使用 WebGAL 制作游戏', link: '/guide/'},
      {
        text: '更多',
        items: [
          {
            text: 'WebGAL 情报',
            items: [
              {text: '更新情报', link: '/info/'},
            ],
          },
          {
            text: '参与开发',
            items: [
              {text: '开发与贡献者指引', link: '/developers/'},
              {text: 'WebGAL 技术介绍', link: '/tech/'}],
          },
          {
            text: '加入讨论社区',
            items: [
              {
                text: 'QQ群：709293432',
                link: 'https://jq.qq.com/?_wv=1027&k=gYVremLy',
              },
              {text: 'Discord', link: 'https://discord.gg/kPrQkJttJy'},
            ],
          },
          {
            text: '关注开发者',
            items: [
              {text: 'Bilibili', link: 'https://space.bilibili.com/7321105'},
              {text: 'Github', link: 'https://github.com/MakinoharaShoko'},
            ],
          },
          {
            text: '赞助本项目',
            items: [
              {text: '赞助', link: '/sponsor/'},
            ],
          },
        ],
      },
      {
        text: 'Other Languages',
        items: [
          {
            text: '日本語版',
            link: 'https://webgal.site/dev/',
          },
        ],
      },
      {text: 'Github', link: 'https://github.com/MakinoharaShoko/WebGAL'}, // 外部链接

    ],
  },
};
