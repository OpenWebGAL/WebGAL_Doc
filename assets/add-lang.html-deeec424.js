import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,a as n,t as p,d as o,e as s}from"./app-7008dfd5.js";const l={},i=s('<h1 id="webgalのuiを他の言語に書き換える" tabindex="-1"><a class="header-anchor" href="#webgalのuiを他の言語に書き換える" aria-hidden="true">#</a> WebGALのUIを他の言語に書き換える</h1><h2 id="ソースコードを取得する" tabindex="-1"><a class="header-anchor" href="#ソースコードを取得する" aria-hidden="true">#</a> ソースコードを取得する</h2><p><a href="./README###%E3%81%9D%E3%81%AE3%EF%BC%9A%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89%E3%81%8B%E3%82%89%E3%83%87%E3%83%90%E3%83%83%E3%82%B0%EF%BC%88%E9%AB%98%E3%81%84%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E6%80%A7%E3%82%92%E6%9C%9B%E3%82%80%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E9%96%8B%E7%99%BA%E8%80%85%E5%90%91%E3%81%91%EF%BC%89">こちら</a>を参照してください。</p><h2 id="言語設定ファイルの作成" tabindex="-1"><a class="header-anchor" href="#言語設定ファイルの作成" aria-hidden="true">#</a> 言語設定ファイルの作成</h2><ol><li>フォルダー <strong>WebGal/packages/webgal/src/translations</strong> をオープンする</li><li><em>en.ts</em> をコピーし、<em>yourlang.ts</em> のようにファイル名を変更する。</li></ol><h2 id="翻訳" tabindex="-1"><a class="header-anchor" href="#翻訳" aria-hidden="true">#</a> 翻訳</h2><p>言語設定ファイルの内容を翻訳する。</p>',7),c={class:"hint-container warning"},r=n("p",{class:"hint-container-title"},"警告",-1),u=s(`<h2 id="あなたの言語をwebgalに追加する" tabindex="-1"><a class="header-anchor" href="#あなたの言語をwebgalに追加する" aria-hidden="true">#</a> あなたの言語をWebGALに追加する</h2><ol><li><p>ファイル <strong>WebGal/packages/webgal/src/config/language.ts</strong> をオープンする。</p></li><li><p>あなたの言語をこれに追加する。</p><p>たとえば、<em>myLang</em> という言語を追加します。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> myLang <span class="token keyword">from</span> <span class="token string">&#39;@/translations/my-lang&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> language <span class="token punctuation">{</span>
  zhCn<span class="token punctuation">,</span>
  en<span class="token punctuation">,</span>
  jp<span class="token punctuation">,</span>
  myLang
<span class="token punctuation">}</span>

<span class="token keyword">const</span> languages<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  zhCn<span class="token operator">:</span> <span class="token string">&#39;中文&#39;</span><span class="token punctuation">,</span>
  en<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
  jp<span class="token operator">:</span> <span class="token string">&#39;日本語&#39;</span><span class="token punctuation">,</span>
  myLang<span class="token operator">:</span> <span class="token string">&#39;Example Lang&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> i18nTranslationResources<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> translation<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  en<span class="token operator">:</span> <span class="token punctuation">{</span> translation<span class="token operator">:</span> en <span class="token punctuation">}</span><span class="token punctuation">,</span>
  zhCn<span class="token operator">:</span> <span class="token punctuation">{</span> translation<span class="token operator">:</span> zhCn <span class="token punctuation">}</span><span class="token punctuation">,</span>
  jp<span class="token operator">:</span> <span class="token punctuation">{</span> translation<span class="token operator">:</span> jp <span class="token punctuation">}</span><span class="token punctuation">,</span>
  myLang<span class="token operator">:</span> <span class="token punctuation">{</span>translation<span class="token operator">:</span> myLang<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="デフォルト言語の変更" tabindex="-1"><a class="header-anchor" href="#デフォルト言語の変更" aria-hidden="true">#</a> デフォルト言語の変更</h3><p><strong>WebGAL/packages/webgal/src/config/language.ts</strong> で変数 <strong>defaultLanguage</strong> を編集します。変数の値は <strong>language</strong> のキーである必要があります。</p><ul><li><p>Example:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> language <span class="token punctuation">{</span>
  zhCn<span class="token punctuation">,</span>
  en<span class="token punctuation">,</span>
  jp<span class="token punctuation">,</span>
  myLang
<span class="token punctuation">}</span>

<span class="token keyword">const</span> languages<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  zhCn<span class="token operator">:</span> <span class="token string">&#39;中文&#39;</span><span class="token punctuation">,</span>
  en<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
  jp<span class="token operator">:</span> <span class="token string">&#39;日本語&#39;</span><span class="token punctuation">,</span>
  myLang<span class="token operator">:</span> <span class="token string">&#39;Example Lang&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> i18nTranslationResources<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> translation<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  en<span class="token operator">:</span> <span class="token punctuation">{</span> translation<span class="token operator">:</span> en <span class="token punctuation">}</span><span class="token punctuation">,</span>
  zhCn<span class="token operator">:</span> <span class="token punctuation">{</span> translation<span class="token operator">:</span> zhCn <span class="token punctuation">}</span><span class="token punctuation">,</span>
  jp<span class="token operator">:</span> <span class="token punctuation">{</span> translation<span class="token operator">:</span> jp <span class="token punctuation">}</span><span class="token punctuation">,</span>
  myLang<span class="token operator">:</span> <span class="token punctuation">{</span>translation<span class="token operator">:</span> myLang<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> defaultLanguage<span class="token operator">:</span> language <span class="token operator">=</span> language<span class="token punctuation">.</span>mylang<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="最後に、webgalをビルドする" tabindex="-1"><a class="header-anchor" href="#最後に、webgalをビルドする" aria-hidden="true">#</a> 最後に、WebGALをビルドする</h2><p>プロジェクトのルートフォルダーで次のコマンドを実行します。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>その後、<em>packages/parser/</em> に <strong>build</strong> というフォルダーがアウトプットされ、<em>packages/webgal/</em> に <strong>dist</strong> という別のフォルダーが表示され、それがビルドされた WebGAL だ。</p>`,9);function d(k,g){return e(),t("div",null,[i,n("div",c,[r,n("p",null,[n("strong",null,p(),1),o(" の内容は変更しないでください、それは変数です。")])]),u])}const b=a(l,[["render",d],["__file","add-lang.html.vue"]]);export{b as default};
