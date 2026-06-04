import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Game Development Guide",
      // prefix: "/en/",
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
      text: "WebGAL Script Tutorial",
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
      text: "Development Information",
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
      text: "Script Reference",
      prefix: "script-reference/",
      children: [
        {
          text: "Commands",
          prefix: "commands/",
          children: [
            "global",
            "say",
            "changeBg",
            "changeFigure",
            "bgm",
            "intro",
            "changeScene",
            "choose",
            "label",
            "jumpLabel",
            "setVar",
            "setTextbox",
            "setAnimation",
            "playEffect",
            "setTempAnimation",
            "setTransform",
            "getUserInput",
            "applyStyle",
            "callSteam",
          ],
        },
        {
          text: "Other",
          prefix: "others/",
          children: [
            "transform-reference",
            "animation-reference",
          ],
        },
      ],
    },
  ],
});
