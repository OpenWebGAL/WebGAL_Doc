module.exports = {
  /*  plugins: [
      [
        '@vuepress/google-analytics',
        {
          'ga': 'G-6XPF6Q2WY0' // UA-00000000-0
        }
      ]
    ],*/
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-6XPF6Q2WY0',
      },
      ''],
    [
      'script', {}, `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6XPF6Q2WY0');
    `],
    [
      'script', {}, `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NP6X74J');
    `],
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
