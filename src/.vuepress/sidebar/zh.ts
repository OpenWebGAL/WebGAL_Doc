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
        "spine",
        "migration",
        "derivative",
      ],
    },
    {
      text: "WebGAL 脚本教程",
      prefix: "webgal-script/",
      children: [
        {
          text: "基础功能",
          collapsible: true,
          children: [
            "base",
            "dialogue",
          ]
        },
        {
          text: "视觉内容",
          collapsible: true,
          children: [
            "bg-and-figure",
            "animation",
            "special-effect",
          ]
        },
        {
          text: "音视频",
          collapsible: true,
          children: [
            "audio",
            "video",
          ]
        },
        {
          text: "交互与流程",
          collapsible: true,
          children: [
            "scenes",
            "variable",
          ]
        },
        {
          text: "高级功能",
          collapsible: true,
          children: [
            "intro",
            "other-features",
          ]
        },
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
    {
      text: "脚本参考",
      prefix: "script-reference/",
      children: [
        {
          text: "命令",
          prefix: "commands/",
          children:[
            "global",
            "say",
            "changeBg",
            "changeFigure",
            "bgm",
            "playVideo",
            "pixiPerform",
            "pixiInit",
            "intro",
            "miniAvatar",
            "changeScene",
            "choose",
            "end",
            "setComplexAnimation",
            "label",
            "jumpLabel",
            "setVar",
            "callScene",
            "showVars",
            "unlockCg",
            "unlockBgm",
            "filmMode",
            "setTextbox",
            "setAnimation",
            "playEffect",
            "setTempAnimation",
            "comment",
            "setTransform",
            "setTransition",
            "getUserInput",
            "applyStyle",
            "wait",
          ]
        },
        {
          text: "其他",
          prefix: "others/",
          children:[
            "transform-reference",
            "animation-reference",
          ]
        },
      ],
    },
  ],
});
