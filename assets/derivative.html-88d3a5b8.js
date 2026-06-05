import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,d as a}from"./app-db6fe934.js";const l={},i=a(`<h1 id="如何使用定制引擎" tabindex="-1"><a class="header-anchor" href="#如何使用定制引擎" aria-hidden="true">#</a> 如何使用定制引擎</h1><p>定制引擎功能是 WebGAL Terre 4.5.0 版本加入的功能。相比于只能使用 WebGAL 官方模板创建一个新的游戏项目，定制引擎允许你在创建游戏项目时使用你自己开发或他人开发的，针对某种类型游戏的定制版本。</p><p>从 WebGAL Terre 4.6 开始，定制引擎应放在用户数据目录的 <code>derivative-engines</code> 下，而不是旧版安装目录中的 <code>assets/templates/Derivative_Engine</code>。</p><h2 id="定制引擎的文件结构" tabindex="-1"><a class="header-anchor" href="#定制引擎的文件结构" aria-hidden="true">#</a> 定制引擎的文件结构</h2><p>定制引擎一般以压缩包的形式分发。解压后，得到以定制引擎为名称的一个目录，目录结构大致是这样的（name 是定制引擎在 WebGAL Terre 中显示的名称）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki dracula" style="background-color:#282A36;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">name</span></span>
<span class="line"><span style="color:#F8F8F2;">├── assets</span></span>
<span class="line"><span style="color:#F8F8F2;">├── game</span></span>
<span class="line"><span style="color:#F8F8F2;">├── icons</span></span>
<span class="line"><span style="color:#F8F8F2;">├── index.html</span></span>
<span class="line"><span style="color:#F8F8F2;">├── manifest.json</span></span>
<span class="line"><span style="color:#F8F8F2;">└── webgal-serviceworker.js</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在 WebGAL Terre 设置中打开用户数据目录，将这样的目录放入其中的 <code>derivative-engines</code> 下，形成形如如下文件结构（否则不能正常创建游戏）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki dracula" style="background-color:#282A36;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">derivative-engines</span></span>
<span class="line"><span style="color:#F8F8F2;">└── name</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── assets</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── game</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── icons</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── index.html</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── manifest.json</span></span>
<span class="line"><span style="color:#F8F8F2;">    └── webgal-serviceworker.js</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你使用 portable 模式，用户数据目录是 WebGAL Terre 安装目录下的 <code>data</code> 文件夹，此时应放到 <code>data/derivative-engines/name</code>。</p><p>启动 WebGAL Terre，你应该可以在创建游戏时选择使用定制引擎创建游戏。</p>`,10),c=[i];function r(d,p){return e(),n("div",null,c)}const v=s(l,[["render",r],["__file","derivative.html.vue"]]);export{v as default};
