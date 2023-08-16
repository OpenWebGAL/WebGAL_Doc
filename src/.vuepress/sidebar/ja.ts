import { sidebar } from "vuepress-theme-hope";

export const jaSidebar = sidebar({
  "/ja/": [
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
