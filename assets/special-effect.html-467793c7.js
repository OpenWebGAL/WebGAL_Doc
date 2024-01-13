import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e}from"./app-dac030e0.js";const t={},i=e(`<h1 id="エフェクト" tabindex="-1"><a class="header-anchor" href="#エフェクト" aria-hidden="true">#</a> エフェクト</h1><p>現在、WebGAL のエフェクトシステムは PixiJS で実装されています。</p><h2 id="エフェクトを使用する" tabindex="-1"><a class="header-anchor" href="#エフェクトを使用する" aria-hidden="true">#</a> エフェクトを使用する</h2><h3 id="pixi-を初期化する" tabindex="-1"><a class="header-anchor" href="#pixi-を初期化する" aria-hidden="true">#</a> Pixi を初期化する</h3><p><code>pixiInit</code> を使用して Pixi を初期化します。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>pixiInit;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>エフェクトを使用する場合は、このコマンドを最初に実行して Pixi を初期化する必要があります。</p><p>すでに適用されているエフェクトを消去したい場合は、この構文を使用してエフェクトをクリアできます。</p></div><h3 id="エフェクトを追加する" tabindex="-1"><a class="header-anchor" href="#エフェクトを追加する" aria-hidden="true">#</a> エフェクトを追加する</h3><p><code>pixiPerform</code> を使用してエフェクトを追加します。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>pixiPerform:rain; // 雨のエフェクトを追加する
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：エフェクトを適用した後、初期化しないと、エフェクトは常に実行されます。</p><h3 id="プリセットエフェクト一覧" tabindex="-1"><a class="header-anchor" href="#プリセットエフェクト一覧" aria-hidden="true">#</a> プリセットエフェクト一覧</h3><table><thead><tr><th style="text-align:left;">エフェクト</th><th style="text-align:left;">コマンド</th></tr></thead><tbody><tr><td style="text-align:left;">雨</td><td style="text-align:left;">pixiPerform:rain;</td></tr><tr><td style="text-align:left;">雪</td><td style="text-align:left;">pixiPerform:snow;</td></tr><tr><td style="text-align:left;">桜</td><td style="text-align:left;">pixiPerform:cherryBlossoms;</td></tr></tbody></table><h3 id="エフェクトを重ねる" tabindex="-1"><a class="header-anchor" href="#エフェクトを重ねる" aria-hidden="true">#</a> エフェクトを重ねる</h3><p>2 つ以上エフェクトを重ねたい場合は、<code>pixiInit</code> コマンドを使用せずに異なるエフェクトを重ねることができます。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>pixiPerform:rain;
pixiPerform:snow;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重ねたエフェクトをクリアする" tabindex="-1"><a class="header-anchor" href="#重ねたエフェクトをクリアする" aria-hidden="true">#</a> 重ねたエフェクトをクリアする</h3><p><code>pixiInit</code> を使用して初期化します。これにより、適用されているすべてエフェクトを消去できます。</p><h2 id="カスタムエフェクトを追加する" tabindex="-1"><a class="header-anchor" href="#カスタムエフェクトを追加する" aria-hidden="true">#</a> カスタムエフェクトを追加する</h2><p>ソースコードをダウンロードして <code>/Core/gameScripts/pixiPerformScripts/</code> に移動し、必要なエフェクトを作成するために <code>PIXI.Container</code> を新規作成します。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 現在の Pixi エフェクト Container を取得する</span>
<span class="token keyword">const</span> effectsContainer <span class="token operator">=</span> <span class="token constant">RUNTIME_GAMEPLAY</span><span class="token punctuation">.</span>pixiStage<span class="token operator">!</span><span class="token punctuation">.</span>effectsContainer<span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">// Pixi App の呼び出し方法で、画面のサイズなどを決定するのに役立ちます</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token constant">RUNTIME_GAMEPLAY</span><span class="token punctuation">.</span>pixiStage<span class="token operator">!</span><span class="token punctuation">.</span>currentApp<span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">// カスタムエフェクトのコンテナを作成する</span>
<span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">PIXI</span></span><span class="token punctuation">.</span><span class="token function">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// エフェクトを追加する</span>
effectsContainer<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>テクスチャ ファイルは <code>game/tex</code> ディレクトリに配置できます。</p><p>次に、ファイルの先頭で <code>エフェクト登録メソッド</code> をインポートして、新しく記述したエフェクトを登録します。</p><p>ファイルの末尾で登録したエフェクトを使用します。最初のパラメータはエフェクト名、2 番目のパラメータはエフェクトを呼び出すメソッドです。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>registerPerform<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../pixiPerformManager&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// これがエフェクトだと仮定します</span>
<span class="token keyword">function</span> <span class="token function">myPerform</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 登録する</span>
<span class="token function">registerPerform</span><span class="token punctuation">(</span><span class="token string">&#39;myPerform&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">myPerform</span><span class="token punctuation">(</span>パラメータ<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最後に、カスタムエフェクトをサポートする WebGAL をコンパイルします。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run build<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>これで、スクリプトでエフェクトを呼び出すことができます。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>pixiPerform:新しいエフェクト;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),p=[i];function c(o,r){return a(),s("div",null,p)}const u=n(t,[["render",c],["__file","special-effect.html.vue"]]);export{u as default};
