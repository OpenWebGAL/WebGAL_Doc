import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import path from 'path'
export default defineUserConfig({
  base: "/",
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
    shikiPlugin({
      theme: "dracula",
      langs: [
        {
          id: "webgal",
          aliases: [
            "webgal",
            "WebGAL",
            "Webgal",
            "ws",
            "webgal-script",
            "WebgalScript",
            "Webgal Script",
            "WebGAL Script",
          ],
          scopeName: "source.webgal",
          path: path.resolve(__dirname, "../grammar/webgal.tmLanguage.json"),
        },
        "ts", "bash", "json", "xml", "kotlin", "yaml"
      ],
      
    }),
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "WebGAL 文档",
      description: "全新的网页端视觉小说引擎",
    },
    "/en/": {
      lang: "en-US",
      title: "WebGAL Doc",
      description: "A brand new web Visual Novel engine",
    },
    "/ja/": {
      lang: "ja-JP",
      title: "WebGAL Doc",
      description: "未だかつてない Web ベースビジュアルノベルエンジン",
    },
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
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-6XPF6Q2WY0",
      },
      "",
    ],
    [
      "script",
      {},
      `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6XPF6Q2WY0');
    `,
    ],
    [
      "script",
      {},
      `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NP6X74J');
    `,
    ],
  ],
});
