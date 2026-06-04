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
    {
      text: "スクリプトリファレンス",
      prefix: "script-reference/",
      children: [
        {
          text: "コマンド",
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
          text: "その他",
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
