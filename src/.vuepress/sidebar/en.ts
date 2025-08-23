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
        {
          text: "Deploy or Publish My Visual Novel?",
          link: "publish/",
          collapsible: true,
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
      text: "WebGAL Script Tutorial",
      prefix: "webgal-script/",
      children: [
        {
          text: "Basic Features",
          collapsible: true,
          children: [
            "base",
            "dialogue",
          ]
        },
        {
          text: "Visual Content",
          collapsible: true,
          children: [
            "bg-and-figure",
            "animation",
            "special-effect",
          ]
        },
        {
          text: "Audio & Video",
          collapsible: true,
          children: [
            "audio",
            "video",
          ]
        },
        {
          text: "Interaction & Flow",
          collapsible: true,
          children: [
            "scenes",
            "variable",
          ]
        },
        {
          text: "Advanced Features",
          collapsible: true,
          children: [
            "intro",
            "other-features",
          ]
        },
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
  ],
});
