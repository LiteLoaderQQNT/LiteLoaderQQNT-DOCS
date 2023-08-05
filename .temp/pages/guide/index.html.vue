<template><div><!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2023-05-23 15:45:31
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2023-08-04 22:14:36
 * @Description: 
 * 
 * Copyright (c) 2023 by Night-stars-1, All Rights Reserved. 
-->
<h1 id="liteloaderqqnt" tabindex="-1"><a class="header-anchor" href="#liteloaderqqnt" aria-hidden="true">#</a> LiteLoaderQQNT</h1>
<p>LiteLoaderQQNT是一个QQNT的插件加载器<br>
它可以让你自由地为QQNT添加各种插件<br>
比如：美化主题，增加功能，做任何事情 等...</p>
<p>Telegram闲聊群：<a href="https://t.me/LiteLoaderQQNT" target="_blank" rel="noopener noreferrer">https://t.me/LiteLoaderQQNT<ExternalLinkIcon/></a></p>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<ul>
<li>本项目仍在开发当中，可能会存在一些问题和不足</li>
<li>仅为个人兴趣而制作，开发目的在于学习和探索</li>
<li>能力有限，随缘更新。不过也欢迎各位来提交PR</li>
<li>由于项目特殊性，必要时会停止开发或删除仓库</li>
</ul>
</div>
<h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法" aria-hidden="true">#</a> 安装方法</h2>
<p><a href="install">安装教程</a></p>
<h2 id="插件开发" tabindex="-1"><a class="header-anchor" href="#插件开发" aria-hidden="true">#</a> 插件开发</h2>
<p>如需上架插件市场，要使用最新的manifest格式（建议参考已上架插件，文件来源可使用仓库源码，也可用Release指定文件）<br>
并在Github开源，需要打包的插件请在仓库发布Release，文件尽量使用Github Actions打包<br>
插件模板：<a href="https://github.com/mo-jinran/LiteLoaderQQNT-Plugin-Template" target="_blank" rel="noopener noreferrer">LiteLoaderQQNT-Plugin-Template<ExternalLinkIcon/></a><br>
插件仓库：<a href="https://github.com/mo-jinran/LiteLoaderQQNT-Plugin-List" target="_blank" rel="noopener noreferrer">LiteLoaderQQNT-Plugin-List<ExternalLinkIcon/></a></p>
<blockquote>
<p>Windows QQNT 9.8.5版本及以上暂时无法打开自身的DevTools<br>
请安装Chii Devtools插件（推荐）或QQNT vConsole插件进行调试</p>
</blockquote>
<h2 id="数据目录" tabindex="-1"><a class="header-anchor" href="#数据目录" aria-hidden="true">#</a> 数据目录</h2>
<p>LiteLoaderQQNT的默认数据文件夹在<code v-pre>用户目录/Documents/LiteLoaderQQNT</code><br>
修改环境变量<code v-pre>LITELOADERQQNT_PROFILE</code>可指定目录位置</p>
<p>数据目录结构：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>LiteLoaderQQNT
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开源协议" tabindex="-1"><a class="header-anchor" href="#开源协议" aria-hidden="true">#</a> 开源协议</h2>
<p><a href="./LICENSE">MIT License</a><br>
Copyright (c) 2023 沫烬染</p>
</div></template>


