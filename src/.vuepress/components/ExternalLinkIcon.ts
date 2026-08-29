import { useRouteLocale } from "@vuepress/client";
import { defineComponent, h } from "vue";

const localeText: Record<string, string> = {
  "/": "(opens in new tab)",
  "/en/": "(opens in new tab)",
  "/ja/": "新しいウィンドウで開く",
};

const svg = h(
  "svg",
  {
    class: "external-link-icon",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 100 100",
    width: "15",
    height: "15",
  },
  [
    h("path", {
      fill: "currentColor",
      d: "M18.8,85.1h56c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32c-2.2,0-4,1.8-4,4v56c0,2.2,1.8,4,4,4z",
    }),
    h("polygon", {
      fill: "currentColor",
      points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
    }),
  ],
);

export const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  setup() {
    const routeLocale = useRouteLocale();

    return () =>
      h("span", [
        svg,
        h("span", { class: "external-link-icon-sr-only" }, localeText[routeLocale.value] ?? localeText["/"]),
      ]);
  },
});
