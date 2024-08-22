import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,d as s}from"./app-2e04d68d.js";const a={},d=s(`<h1 id="如何使用定制引擎" tabindex="-1"><a class="header-anchor" href="#如何使用定制引擎" aria-hidden="true">#</a> 如何使用定制引擎</h1><p>定制引擎功能是 WebGAL Terre 4.5.0 版本加入的功能。相比于只能使用 WebGAL 官方模板创建一个新的游戏项目，定制引擎允许你在创建游戏项目时使用你自己开发或他人开发的，针对某种类型游戏的定制版本。</p><h2 id="定制引擎的文件结构" tabindex="-1"><a class="header-anchor" href="#定制引擎的文件结构" aria-hidden="true">#</a> 定制引擎的文件结构</h2><p>定制引擎一般以压缩包的形式分发。解压后，得到以定制引擎为名称的一个目录，目录结构大致是这样的（name 是定制引擎在 WebGAL Terre 中显示的名称）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name
├── assets
├── game
├── icons
├── index.html
├── manifest.json
└── webgal-serviceworker.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，将这样的目录放入 WebGAL Terre 的 assets/templates/Derivative_Engine 下，形成形如如下文件结构（否则不能正常创建游戏）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Derivative_Engine
└── name
    ├── assets
    ├── game
    ├── icons
    ├── index.html
    ├── manifest.json
    └── webgal-serviceworker.js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 WebGAL Terre，你应该可以在创建游戏时选择使用定制引擎创建游戏。</p>`,8),r=[d];function l(t,v){return i(),n("div",null,r)}const u=e(a,[["render",l],["__file","derivative.html.vue"]]);export{u as default};
