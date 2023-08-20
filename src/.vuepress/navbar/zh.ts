import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: '主页', link: 'https://openwebgal.com/zh-cn/' },
  // { text: '文档', link: '/' },
  {
    text: '更多',
    children: [
      {
        text: 'WebGAL 情报',
        children: [
          { text: '更新情报', link: '/info/' },
        ],
      },
      {
        text: '参与开发',
        children: [
          '/developers/',
          '/tech/',
        ],
      },
      {
        text: '加入讨论社区',
        children: [
          {
            text: 'QQ群：709293432',
            link: 'https://jq.qq.com/?_wv=1027&k=gYVremLy',
          },
          { text: 'Discord', link: 'https://discord.gg/kPrQkJttJy' },
        ],
      },
      {
        text: '关注开发者',
        children: [
          { text: 'Bilibili', link: 'https://space.bilibili.com/7321105' },
          { text: 'Github', link: 'https://github.com/MakinoharaShoko' },
        ],
      },
      {
        text: '赞助本项目',
        children: [
          { text: '赞助', link: '/sponsor/' },
        ],
      },
    ],
  },
]);
