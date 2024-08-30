import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "游戏开发指引",
      // prefix: "/",
      children: [
        "getting-started",
        "resources",
        "config",
        {
          text: "部署或发布我的视觉小说？",
          link: "publish/",
          collapsible: true, // 是否可折叠
          prefix: "publish/",
          children: [
            "web",
            "desktop",
            "android",
          ]
        },
        "faq", 
        "live2D",
        "migration",
        "derivative",
      ],
    },
    {
      text: "WebGAL 脚本教程",
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
      text: "开发信息",
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
