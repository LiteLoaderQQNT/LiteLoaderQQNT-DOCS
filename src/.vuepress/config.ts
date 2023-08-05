/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-05 21:41:57
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-08-06 01:13:55
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档",
  description: "LiteLoader 的文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
