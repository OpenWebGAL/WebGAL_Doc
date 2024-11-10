import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,d as s}from"./app-cc4eff7a.js";const a={},d=s(`<h1 id="カスタムエンジンを使用する方法" tabindex="-1"><a class="header-anchor" href="#カスタムエンジンを使用する方法" aria-hidden="true">#</a> カスタムエンジンを使用する方法</h1><h2 id="カスタムエンジンのファイル構造" tabindex="-1"><a class="header-anchor" href="#カスタムエンジンのファイル構造" aria-hidden="true">#</a> カスタムエンジンのファイル構造</h2><p>カスタムエンジンは通常、圧縮ファイル形式で配布されます。解凍すると、カスタムエンジンを名前とするディレクトリが得られ、ディレクトリ構造はおおよそ次のようになります（name は WebGAL Terre で表示されるカスタムエンジンの名前です）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name
├── assets
├── game
├── icons
├── index.html
├── manifest.json
└── webgal-serviceworker.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>次に、このようなディレクトリを WebGAL Terre の assets/templates/Derivative_Engine に配置し、次のようなファイル構造にします（そうしないと、正常にゲームを作成できません）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Derivative_Engine
└── name
    ├── assets
    ├── game
    ├── icons
    ├── index.html
    ├── manifest.json
    └── webgal-serviceworker.js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>WebGAL Terre を起動すると、ゲームを作成するときにカスタムエンジンを使用してゲームを作成できるようになります。</p>`,7),r=[d];function l(t,v){return i(),n("div",null,r)}const u=e(a,[["render",l],["__file","derivative.html.vue"]]);export{u as default};
