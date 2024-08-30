import { sidebar } from "vuepress-theme-hope";

export const jaSidebar = sidebar({
  "/ja/": [
    {
      text: "ゲーム開発ガイド",
      // prefix: "/",
      children: [
        "getting-started",
        "resources",
        "config",
        "publish",
        "faq",
        "live2D",
        "migration",
        "derivative",
      ],
    },
    {
      text: "WebGAL Script チュートリアル",
      prefix: "webgal-script/",
      children: [
        "base",
        "dialogue",
        "bg-and-figure",
        "audio",
        "video",
        "scenes",
        "variable",
        "animation",
        "special-effect",
      ]
    },
    {
      text: "開発情報",
      children: [
        "developers",
        "tech",
        "info",
        "sponsor",
        "developers/joinus",
        "developers/terre",
      ]
    },
  ],
});
