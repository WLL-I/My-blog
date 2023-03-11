import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/My-blog/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mr.冰的前端",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,
  plugins: [
    searchPlugin({}),
  ],

  shouldPrefetch: false,
});
