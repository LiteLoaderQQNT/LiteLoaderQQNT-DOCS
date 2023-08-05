/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 22:27:40
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-08-04 21:28:15
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
 */
import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
export default {
    title: 'LiteLoaderQQNT文档',
    description: 'LiteLoaderQQNT文档',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    plugins: [
        copyCodePlugin({
            // 插件选项
        }),
    ],
    theme: defaultTheme({
        navbar: [
            { text: "首页", link: "/" },
            { text: "介绍", link: "/guide/" },
            { text: "安装", link: "/guide/install" },
            { text: "插件开发", link: "/plugin/" },
            {
                text: "反馈",
                children: [
                    { text: "Telegram Group", link: "https://t.me/LiteLoaderQQNT" }
                ]
            },
            { text: "Github", link: "https://github.com/mo-jinran/LiteLoaderQQNT" },
        ],
        sidebar: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "介绍",
                children: [
                    { text: "介绍", link: "/guide/" },
                    { text: "安装", link: "/guide/install" }
                ]
            },
        ]
    })
}
