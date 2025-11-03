import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,d as e}from"./app-12284b0b.js";const l={},i=e(`<h1 id="カスタムエンジンを使用する方法" tabindex="-1"><a class="header-anchor" href="#カスタムエンジンを使用する方法" aria-hidden="true">#</a> カスタムエンジンを使用する方法</h1><h2 id="カスタムエンジンのファイル構造" tabindex="-1"><a class="header-anchor" href="#カスタムエンジンのファイル構造" aria-hidden="true">#</a> カスタムエンジンのファイル構造</h2><p>カスタムエンジンは通常、圧縮ファイル形式で配布されます。解凍すると、カスタムエンジンを名前とするディレクトリが得られ、ディレクトリ構造はおおよそ次のようになります（name は WebGAL Terre で表示されるカスタムエンジンの名前です）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki dracula" style="background-color:#282A36;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">name</span></span>
<span class="line"><span style="color:#F8F8F2;">├── assets</span></span>
<span class="line"><span style="color:#F8F8F2;">├── game</span></span>
<span class="line"><span style="color:#F8F8F2;">├── icons</span></span>
<span class="line"><span style="color:#F8F8F2;">├── index.html</span></span>
<span class="line"><span style="color:#F8F8F2;">├── manifest.json</span></span>
<span class="line"><span style="color:#F8F8F2;">└── webgal-serviceworker.js</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>次に、このようなディレクトリを WebGAL Terre の assets/templates/Derivative_Engine に配置し、次のようなファイル構造にします（そうしないと、正常にゲームを作成できません）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki dracula" style="background-color:#282A36;" tabindex="0"><code><span class="line"><span style="color:#F8F8F2;">Derivative_Engine</span></span>
<span class="line"><span style="color:#F8F8F2;">└── name</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── assets</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── game</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── icons</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── index.html</span></span>
<span class="line"><span style="color:#F8F8F2;">    ├── manifest.json</span></span>
<span class="line"><span style="color:#F8F8F2;">    └── webgal-serviceworker.js</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>WebGAL Terre を起動すると、ゲームを作成するときにカスタムエンジンを使用してゲームを作成できるようになります。</p>`,7),c=[i];function r(p,d){return n(),a("div",null,c)}const F=s(l,[["render",r],["__file","derivative.html.vue"]]);export{F as default};
