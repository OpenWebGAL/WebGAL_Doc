import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "WebGAL 游戏开发指引",
      prefix: "guide/",
      children: [
        "how-to-start",
        "manage-game-resources",
        "customize-game-info",
        {
          text: "WebGAL 脚本编写教程",
          children: [
            "special-script",
            "webgal-script",
            "advanced-script",
          ]
        },
        "how-to-deploy-or-publish",
        "faq",
      ],
    },
  ],
});
