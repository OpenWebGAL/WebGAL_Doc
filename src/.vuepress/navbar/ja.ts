import { navbar } from "vuepress-theme-hope";

export const jaNavbar = navbar([
  { text: 'トップページ', link: '/ja/' },
  { text: 'ゲーム開発ガイド', link: '/ja/guide/' },
  {
    text: 'コントリビューション',
    children: [
      '/ja/developers/',
      '/ja/tech/',
    ],
  },
  {
    text: 'その他',
    children: [
      {
        text: 'WebGAL 情報',
        children: [
          { text: '最新情報', link: '/ja/info/' },
        ],
      },
      {
        text: 'コンミュニティ',
        children: [
          {
            text: 'QQ グループ: 709293432',
            link: 'https://jq.qq.com/?_wv=1027&k=gYVremLy',
          },
          { text: 'Discord', link: 'https://discord.gg/kPrQkJttJy' },
        ],
      },
      {
        text: '開発者',
        children: [
          { text: 'Bilibili', link: 'https://space.bilibili.com/7321105' },
          { text: 'Github', link: 'https://github.com/MakinoharaShoko' },
        ],
      },
      {
        text: 'スポンサー',
        children: [
          { text: 'スポンサーとなる', link: '/ja/sponsor/' },
        ],
      },
    ],
  },
]);
