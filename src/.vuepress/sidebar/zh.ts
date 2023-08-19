import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "WebGAL 游戏开发指引",
      prefix: "guide/",
      children: [
        "getting-started",
        "resources",
        "config",
        "publish",
        "faq",
      ],
    },
    {
      text: "WebGAL 脚本教程",
      prefix: "webgal-script/",
      children: [
        "base",
        "dialogue",
        "images",
        "audio",
        "video",
        "scenes",
        "variable",
        "animation",
        "special-effects",
      ]
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
