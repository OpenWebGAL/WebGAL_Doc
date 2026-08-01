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
        "custom-ui",
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
            "return",
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
            "callSteam",
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
    {
      text: "模板参考",
      prefix: "template-reference/",
      children: [
        {
          text: "用户界面",
          prefix: "ui/",
          children: [
            "choose",
            "textbox",
            "title",
          ],
        },
        {
          text: "其他",
          prefix: "others/",
          children: [
            "config",
          ],
        },
      ]
    },
  ],
});
