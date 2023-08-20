import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: 'HOME', link: 'https://openwebgal.com/en/' },
  // { text: 'DOCUMENT', link: '/en/' },
  {
    text: 'MORE',
    children: [
      {
        text: 'WebGAL Infomations',
        children: [
          { text: 'Version Updates', link: '/en/info/' },
        ],
      },
      {
        text: 'Contributing',
        children: [
          '/en/developers/',
          '/en/tech/',
        ],
      },
      {
        text: 'Join Discuss Community',
        children: [
          {
            text: 'QQ Group: 709293432',
            link: 'https://jq.qq.com/?_wv=1027&k=gYVremLy',
          },
          { text: 'Discord', link: 'https://discord.gg/kPrQkJttJy' },
        ],
      },
      {
        text: 'Follow Developer',
        children: [
          { text: 'Bilibili', link: 'https://space.bilibili.com/7321105' },
          { text: 'Github', link: 'https://github.com/MakinoharaShoko' },
        ],
      },
      {
        text: 'Sponsor the project',
        children: [
          { text: 'Sponsor', link: '/en/sponsor/' },
        ],
      },
    ],
  },
]);
