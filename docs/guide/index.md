<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 15:45:31
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-08-04 22:14:36
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
-->
# LiteLoaderQQNT

LiteLoaderQQNT是一个QQNT的插件加载器  
它可以让你自由地为QQNT添加各种插件  
比如：美化主题，增加功能，做任何事情 等...

Telegram闲聊群：[https://t.me/LiteLoaderQQNT](https://t.me/LiteLoaderQQNT)


## 注意事项
::: tip 注意
- 本项目仍在开发当中，可能会存在一些问题和不足
- 仅为个人兴趣而制作，开发目的在于学习和探索
- 能力有限，随缘更新。不过也欢迎各位来提交PR
- 由于项目特殊性，必要时会停止开发或删除仓库
:::

## 安装方法

[安装教程](install)

## 插件开发

如需上架插件市场，要使用最新的manifest格式（建议参考已上架插件，文件来源可使用仓库源码，也可用Release指定文件）  
并在Github开源，需要打包的插件请在仓库发布Release，文件尽量使用Github Actions打包  
插件模板：[LiteLoaderQQNT-Plugin-Template](https://github.com/mo-jinran/LiteLoaderQQNT-Plugin-Template)  
插件仓库：[LiteLoaderQQNT-Plugin-List](https://github.com/mo-jinran/LiteLoaderQQNT-Plugin-List)

> Windows QQNT 9.8.5版本及以上暂时无法打开自身的DevTools  
> 请安装Chii Devtools插件（推荐）或QQNT vConsole插件进行调试


## 数据目录

LiteLoaderQQNT的默认数据文件夹在`用户目录/Documents/LiteLoaderQQNT`  
修改环境变量`LITELOADERQQNT_PROFILE`可指定目录位置

数据目录结构：
```
LiteLoaderQQNT
    ├─plugins           // 插件本体目录
    │   ├─my-plugin         // 插件本体
    │   └─...
    ├─plugins_cache     // 插件缓存目录
    │   ├─my-plugin
    │   └─...
    ├─plugins_data      // 插件数据目录
    │   ├─my-plugin
    │   └─...
    └─config.json       // LiteLoader配置文件
```


## 开源协议

[MIT License](./LICENSE)  
Copyright (c) 2023 沫烬染