import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
