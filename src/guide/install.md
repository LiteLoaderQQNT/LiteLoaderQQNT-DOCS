<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-06 00:45:35
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-08-06 01:33:08
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
-->
# 安装教程

请先去官网安装QQNT最新版：[https://im.qq.com/](https://im.qq.com/)
支持Windows, Linux, MacOS的32位与64位QQNT

> Windows QQNT 9.9.1 版本，需根据 Release 的说明来使用LiteLoaderQQNT

安装位置：
- Windows：`QQNT的根目录/resources/app`
- Linux：`QQNT的根目录/resources/app`
- MacOS：`/Applications/QQ.app/Contents/Resources/app`

### 使用Release安装（推荐）

1. 下载[Release](https://github.com/mo-jinran/LiteLoaderQQNT/releases/latest)中的`iteLoaderQQNT.zip`，解压出`LiteLoader`文件夹并放到`安装位置`
2. 编辑`安装位置/package.json`文件，将`main`键值改为`LiteLoader`（如果使用Launcher请跳过）
3. 重新启动QQNT，享受LiteLoaderQQNT带来的乐趣吧！

### 使用Clone安装（不推荐）

1. 克隆`Repo`并拉取`submodule`，将文件夹放到`安装位置`，重命名文件夹为`LiteLoader`
2. 编辑`安装位置/package.json`文件，将`main`键值改为`LiteLoader`（如果使用Launcher请跳过）
3. 重新启动QQNT，享受LiteLoaderQQNT带来的乐趣吧！
::: warning 注意
是`安装位置`下的package.json文件，不是`LiteLoader`下的package.json文件
:::

**LiteLoader**应与**app_launcher**文件同级：
```
├─app_launcher
├─LiteLoader    <--在这
│  ├─builtins
│  ├─src
│  ├─package.json <--错误的位置
│  └─...
├─package.json <--这是需要修改main值的位置
└─...
```

QQNT的package.json文件示例：
```
{
    ...
    "homepage": "https://im.qq.com",
    "sideEffects": true,
    "main": "LiteLoader",   <- 修改这里（只需要指向文件夹即可）
    ...
}
```
::: details QQ文件损坏
> 如果 Launcher 或 Patch 失败请先尝试申请管理员权重试

## 使用 Launcher （推荐，闭源）
- 先在下面根据自己版本下载Launche，x86更加通用
- 将文件移动到QQ.exe同级目录（可以只用x86版本）
- 将LiteLoaderQQNT安装，文件夹名必须是LiteLoader
- 将QQ的package.json内容全部还原，不要修改main

运行LiteLoaderQQNT-Launcher即可使用LiteLoader
每次运行都需要运行Launcher而不是QQ
建议各位将QQ的快捷方式指向Launcher
或修改注册表配置映像劫持更加方便使用

## 使用 Patch （不推荐，开源）
- 先在下面下载最新的LiteLoaderQQNT版本压缩包
- 将LiteLoaderQQNT安装，文件夹名必须是LiteLoader
- 进入LiteLoader/patch，打开PowerShell运行对应脚本
- 等待修补完成，运行QQ即可使用LiteLoaderQQNT

只需要修补一次QQ.exe即可永久生效
一些用户运行ps1脚本可能会出现报错
可以根据patch目录内的脚本手动修改
:::
