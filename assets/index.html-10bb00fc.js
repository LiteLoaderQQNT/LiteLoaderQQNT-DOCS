import{_ as n,o as s,c as a,a as e}from"./app-b5ca2a48.js";const t={},i=e(`<h1 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h1><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><h3 id="文件列表" tabindex="-1"><a class="header-anchor" href="#文件列表" aria-hidden="true">#</a> 文件列表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>└─ plugins
    └─ sra_plugins_name
        │ 
        ├─ __init__.py
        │
        └─ main.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PS：</strong><code>__init__.py</code>和<code>main.py</code>为必须文件</p><h3 id="init-py示例" tabindex="-1"><a class="header-anchor" href="#init-py示例" aria-hidden="true">#</a> <strong>init</strong>.py示例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pluggy

plugin_name <span class="token operator">=</span> <span class="token string">&quot;名称&quot;</span>
plugin_ver <span class="token operator">=</span> <span class="token string">&quot;版本&quot;</span>

hookimpl <span class="token operator">=</span> pluggy<span class="token punctuation">.</span>HookimplMarker<span class="token punctuation">(</span><span class="token string">&quot;SRA&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 注册插件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main-py示例" tabindex="-1"><a class="header-anchor" href="#main-py示例" aria-hidden="true">#</a> main.py示例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 点击菜单是触发</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;开始&quot;</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@hookimpl</span>
<span class="token keyword">def</span> <span class="token function">add_option</span><span class="token punctuation">(</span>SRA<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 启动脚本时触发</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;启动&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> SRA<span class="token punctuation">.</span>add_option<span class="token punctuation">(</span><span class="token string">&quot;菜单&quot;</span><span class="token punctuation">,</span> main<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># 添加菜单选项，main为点击后触发的函数，2为菜单插入到第3行</span>

<span class="token decorator annotation punctuation">@hookimpl</span>
<span class="token keyword">def</span> <span class="token function">stop</span><span class="token punctuation">(</span>SRA<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 终止脚本时触发</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;终止&quot;</span><span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@hookimpl</span>
<span class="token keyword">def</span> <span class="token function">end</span><span class="token punctuation">(</span>SRA<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 脚本运行结束时触发</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;脚本运行结束&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PS：</strong><code>SRA</code>未入口函数的实例</p>`,10),o=[i];function p(c,l){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","index.html.vue"]]);export{u as default};
