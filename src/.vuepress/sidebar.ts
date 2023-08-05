/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-05 21:41:57
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-08-06 01:24:01
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "指南",
      icon: "laptop-code",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "插件开发",
      icon: "book",
      prefix: "plugin/",
      children: "structure",
    },
  ],
});
