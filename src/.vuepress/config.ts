import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'WebGAL',
      description: '全新的网页端视觉小说引擎'
    },
    '/en/': {
      lang: 'en-US',
      title: 'WebGAL',
      description: 'A brand new web Visual Novel engine'
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'WebGAL',
      description: '未だかつてない Web ベースビジュアルノベルエンジン'
    }
  },

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,

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
});
