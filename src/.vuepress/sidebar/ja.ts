import { sidebar } from "vuepress-theme-hope";

export const jaSidebar = sidebar({
  "/ja/": [
    {
      text: "ゲーム開発ガイド",
      prefix: "guide/",
      children: [
        "getting-started",
        "manage-game-resources",
        "customize-game-info",
        {
          text: "WebGAL Script チュートリアル",
          children: [
            "special-scripts",
            "base-scripts",
            "advanced-scripts",
          ]
        },
        "publish",
        "faq",
      ],
    },
    {
      text: "コントリビューション",
      children: [
        "developers/",
        "tech/"
      ]
    },
  ],
});
