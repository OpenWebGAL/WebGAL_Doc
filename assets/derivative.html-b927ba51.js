import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,d as s}from"./app-4ae5ed81.js";const a={},t=s(`<h1 id="how-to-use-custom-engine" tabindex="-1"><a class="header-anchor" href="#how-to-use-custom-engine" aria-hidden="true">#</a> How to use custom engine</h1><p>Custom engine feature is added in WebGAL Terre 4.5.0. Compared with creating a new game project using only official WebGAL templates, custom engine allows you to use your own developed or other people&#39;s developed customized versions for certain types of games when creating game projects.</p><h2 id="file-structure-of-custom-engine" tabindex="-1"><a class="header-anchor" href="#file-structure-of-custom-engine" aria-hidden="true">#</a> File structure of custom engine</h2><p>Custom engines are usually distributed in the form of compressed packages. After decompression, you will get a directory named after the custom engine. The directory structure is roughly as follows (name is the name of the custom engine displayed in WebGAL Terre):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name
├── assets
├── game
├── icons
├── index.html
├── manifest.json
└── webgal-serviceworker.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, put such a directory under WebGAL Terre&#39;s assets/templates/Derivative_Engine, forming a file structure like the following (otherwise, the game cannot be created normally):</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Derivative_Engine
└── name
    ├── assets
    ├── game
    ├── icons
    ├── index.html
    ├── manifest.json
    └── webgal-serviceworker.js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start WebGAL Terre, you should be able to choose to create a game using a custom engine when creating a game.</p>`,8),r=[t];function o(d,l){return n(),i("div",null,r)}const m=e(a,[["render",o],["__file","derivative.html.vue"]]);export{m as default};
