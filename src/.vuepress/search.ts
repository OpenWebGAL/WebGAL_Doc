import { searchPlugin } from "@vuepress/plugin-search";
import type { Plugin } from "vuepress";

export const contentSearchPlugin = (): Plugin => {
  let decodeEntity: (entity: string) => string;

  return {
    ...searchPlugin({
      locales: {
        "/": { placeholder: "Search" },
        "/zh/": { placeholder: "搜索" },
      },
      // 标题由插件索引；正文包含 @include 内容，去掉标签后还原 HTML 实体。
      getExtraFields: (page) => [
        page.contentRendered
          .replace(/<h[1-6]\b[^>]*>[\s\S]*?<\/h[1-6]>/gi, "")
          .replace(/<!--[\s\S]*?-->|<[^>]*>/g, "")
          .replace(/&(?:#x[\da-f]+|#\d+|[a-z][\da-z]*);/gi, decodeEntity)
          .replace(/\s+/g, " ")
          .trim(),
      ],
    }),
    name: "@vuepress/plugin-search",
    // Markdown 配置先于搜索索引生成，复用其实体解码，不新增依赖。
    extendsMarkdown(markdown) {
      decodeEntity = markdown.utils.unescapeAll;
    },
  };
};
