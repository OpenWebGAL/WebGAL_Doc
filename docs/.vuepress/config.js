module.exports = {
  title: 'WebGAL',
  description: '界面美观、功能强大、易于开发的全新网页端视觉小说引擎',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },                      // 根路径
      { text: '制作游戏', link: '/guide/' },
      { text: '更新情报',link: '/info/'},
      { text: '开发者指引', link: '/developers/' },
      { text: 'WebGAL 技术介绍', link: '/tech/' },
      { text: 'Github', link: 'https://github.com/MakinoharaShoko/WebGAL' }, // 外部链接
      {
        text: '更多',
        items: [
          {
            text: '加入讨论群',
            items: [
              { text: '709293432', link: 'https://jq.qq.com/?_wv=1027&k=gYVremLy' },
            ]
          },
          {
            text: '关注开发者',
            items: [
              { text: 'Bilibili', link: 'https://space.bilibili.com/7321105' },
              { text: 'Github', link: 'https://github.com/MakinoharaShoko' },
            ]
          },
          {
            text: '赞助本项目',
            items: [
              { text: '赞助', link: '/sponsor/' },
            ]
          },
        ]
      }
    ]
  }
}
