import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "WebGAL Game Development Guide",
      prefix: "guide/",
      children: [
        "getting-started",
        "manage-game-resources",
        "customize-game-info",
        {
          text: "WebGAL Script Tutorial",
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
      text: "Contributing",
      children: [
        "developers/",
        "tech/"
      ]
    },
  ],
});
