import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "/",
    {
      text: "js",
      collapsable: true,
      prefix: "js/",
      children: [
        '数组',
      ],
    },
    {
      text: "css",
      collapsable: true,
      prefix: "css/",
      children: ['flex布局', "Grid布局", "slides"],
    },
  ],
});
