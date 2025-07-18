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
        {
          text: "ビジュアルノベルをデプロイまたは公開する？",
          link: "publish/",
          collapsible: true,
          prefix: "publish/",
          children: [
            "web",
            "desktop",
            "android",
          ]
        },
        "faq",
        "live2D",
        "spine",
        "migration",
        "derivative",
      ],
    },
    {
      text: "WebGAL Script チュートリアル",
      prefix: "webgal-script/",
      children: [
        {
          text: "基本機能",
          collapsible: true,
          children: [
            "base",
            "dialogue",
          ]
        },
        {
          text: "視覚コンテンツ",
          collapsible: true,
          children: [
            "bg-and-figure",
            "animation",
            "special-effect",
          ]
        },
        {
          text: "音声・映像",
          collapsible: true,
          children: [
            "audio",
            "video",
          ]
        },
        {
          text: "インタラクション・フロー",
          collapsible: true,
          children: [
            "scenes",
            "variable",
          ]
        },
        {
          text: "高度な機能",
          collapsible: true,
          children: [
            "intro",
            "other-features",
          ]
        },
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
