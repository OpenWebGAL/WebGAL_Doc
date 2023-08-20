import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "WebGAL Game Development Guide",
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
      text: "Contributing",
      children: [
        "developers/",
        "tech/"
      ]
    },
  ],
});
