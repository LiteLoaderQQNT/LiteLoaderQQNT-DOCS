import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as d,a as r,b as e,d as a,e as n,f as o}from"./app-2d2f7363.js";const c={},u=e("h1",{id:"安装教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装教程","aria-hidden":"true"},"#"),a(" 安装教程")],-1),h={href:"https://im.qq.com/",target:"_blank",rel:"noopener noreferrer"},p=e("br",null,null,-1),m=o('<blockquote><p>Windows QQNT 9.9.1 版本，需根据 Release 的说明来使用LiteLoaderQQNT</p></blockquote><p>安装位置：</p><ul><li>Windows：<code>QQNT的根目录/resources/app</code></li><li>Linux：<code>QQNT的根目录/resources/app</code></li><li>MacOS：<code>/Applications/QQ.app/Contents/Resources/app</code></li></ul><h3 id="使用release安装-推荐" tabindex="-1"><a class="header-anchor" href="#使用release安装-推荐" aria-hidden="true">#</a> 使用Release安装（推荐）</h3>',4),L={href:"https://github.com/mo-jinran/LiteLoaderQQNT/releases/latest",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"iteLoaderQQNT.zip",-1),v=e("code",null,"LiteLoader",-1),b=e("code",null,"安装位置",-1),_=e("li",null,[a("编辑"),e("code",null,"安装位置/package.json"),a("文件，将"),e("code",null,"main"),a("键值改为"),e("code",null,"LiteLoader"),a("（如果使用Launcher请跳过）")],-1),g=e("li",null,"重新启动QQNT，享受LiteLoaderQQNT带来的乐趣吧！",-1),N=o(`<h3 id="使用clone安装-不推荐" tabindex="-1"><a class="header-anchor" href="#使用clone安装-不推荐" aria-hidden="true">#</a> 使用Clone安装（不推荐）</h3><ol><li>克隆<code>Repo</code>并拉取<code>submodule</code>，将文件夹放到<code>安装位置</code>，重命名文件夹为<code>LiteLoader</code></li><li>编辑<code>安装位置/package.json</code>文件，将<code>main</code>键值改为<code>LiteLoader</code>（如果使用Launcher请跳过）</li><li>重新启动QQNT，享受LiteLoaderQQNT带来的乐趣吧！</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>是<code>安装位置</code>下的package.json文件，不是<code>LiteLoader</code>下的package.json文件</p></div><p><strong>LiteLoader</strong>应与<strong>app_launcher</strong>文件同级：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─app_launcher
├─LiteLoader    &lt;--在这
│  ├─builtins
│  ├─src
│  ├─package.json &lt;--错误的位置
│  └─...
├─package.json &lt;--这是需要修改main值的位置
└─...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>QQNT的package.json文件示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    ...
    &quot;homepage&quot;: &quot;https://im.qq.com&quot;,
    &quot;sideEffects&quot;: true,
    &quot;main&quot;: &quot;LiteLoader&quot;,   &lt;- 修改这里（只需要指向文件夹即可）
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>QQ文件损坏</summary><blockquote><p>如果 Launcher 或 Patch 失败请先尝试申请管理员权重试</p></blockquote><h2 id="使用-launcher-推荐-闭源" tabindex="-1"><a class="header-anchor" href="#使用-launcher-推荐-闭源" aria-hidden="true">#</a> 使用 Launcher （推荐，闭源）</h2><ul><li>先在下面根据自己版本下载Launche，x86更加通用</li><li>将文件移动到QQ.exe同级目录（可以只用x86版本）</li><li>将LiteLoaderQQNT安装，文件夹名必须是LiteLoader</li><li>将QQ的package.json内容全部还原，不要修改main</li></ul><p>运行LiteLoaderQQNT-Launcher即可使用LiteLoader<br> 每次运行都需要运行Launcher而不是QQ<br> 建议各位将QQ的快捷方式指向Launcher<br> 或修改注册表配置映像劫持更加方便使用</p><h2 id="使用-patch-不推荐-开源" tabindex="-1"><a class="header-anchor" href="#使用-patch-不推荐-开源" aria-hidden="true">#</a> 使用 Patch （不推荐，开源）</h2><ul><li>先在下面下载最新的LiteLoaderQQNT版本压缩包</li><li>将LiteLoaderQQNT安装，文件夹名必须是LiteLoader</li><li>进入LiteLoader/patch，打开PowerShell运行对应脚本</li><li>等待修补完成，运行QQ即可使用LiteLoaderQQNT</li></ul><p>只需要修补一次QQ.exe即可永久生效<br> 一些用户运行ps1脚本可能会出现报错<br> 可以根据patch目录内的脚本手动修改</p></details>`,8);function x(f,q){const i=l("ExternalLinkIcon");return s(),d("div",null,[r(`
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-08-06 00:45:35
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-08-06 01:33:08
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
`),u,e("p",null,[a("请先去官网安装QQNT最新版："),e("a",h,[a("https://im.qq.com/"),n(i)]),p,a(" 支持Windows, Linux, MacOS的32位与64位QQNT")]),m,e("ol",null,[e("li",null,[a("下载"),e("a",L,[a("Release"),n(i)]),a("中的"),Q,a("，解压出"),v,a("文件夹并放到"),b]),_,g]),N])}const j=t(c,[["render",x],["__file","install.html.vue"]]);export{j as default};
