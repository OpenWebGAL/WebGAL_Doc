import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "WebGAL 游戏开发指引",
      prefix: "guide/",
      children: [
        "getting-started",
        "manage-game-resources",
        "customize-game-info",
        {
          text: "WebGAL 脚本编写教程",
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
      text: "参与开发",
      children: [
        "developers/",
        "tech/"
      ]
    },
  ],
});
