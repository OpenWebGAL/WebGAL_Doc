import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,d as a}from"./app-5750d778.js";const t={},i=a(`<h1 id="effects" tabindex="-1"><a class="header-anchor" href="#effects" aria-hidden="true">#</a> Effects</h1><p>Currently, WebGAL&#39;s effect system is powered by PixiJS.</p><h2 id="using-effects" tabindex="-1"><a class="header-anchor" href="#using-effects" aria-hidden="true">#</a> Using Effects</h2><h3 id="initialize-pixi" tabindex="-1"><a class="header-anchor" href="#initialize-pixi" aria-hidden="true">#</a> Initialize Pixi</h3><p>Initialize Pixi using <code>pixiInit</code>.</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>pixiInit;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>If you want to use effects, you must run this command to initialize Pixi first.</p><p>If you want to clear the effects that have already taken effect, you can use this syntax to clear the effects.</p></div><h3 id="add-effects" tabindex="-1"><a class="header-anchor" href="#add-effects" aria-hidden="true">#</a> Add Effects</h3><p>Add effects using <code>pixiPerform</code>.</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>pixiPerform:rain; // Add a rain effect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note: After the effect takes effect, if it is not initialized, the effect will continue to run.</p><h3 id="list-of-built-in-effects" tabindex="-1"><a class="header-anchor" href="#list-of-built-in-effects" aria-hidden="true">#</a> List of Built-in Effects</h3><table><thead><tr><th style="text-align:left;">Effect</th><th style="text-align:left;">Command</th></tr></thead><tbody><tr><td style="text-align:left;">Rain</td><td style="text-align:left;">pixiPerform:rain;</td></tr><tr><td style="text-align:left;">Snow</td><td style="text-align:left;">pixiPerform:snow;</td></tr><tr><td style="text-align:left;">Cherry Blossoms</td><td style="text-align:left;">pixiPerform:cherryBlossoms;</td></tr></tbody></table><h3 id="superimpose-effects" tabindex="-1"><a class="header-anchor" href="#superimpose-effects" aria-hidden="true">#</a> Superimpose Effects</h3><p>If you want to superimpose two or more effects, you can superimpose different effects without using the <code>pixiInit</code> command.</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>pixiPerform:rain;
pixiPerform:snow;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clear-superimposed-effects" tabindex="-1"><a class="header-anchor" href="#clear-superimposed-effects" aria-hidden="true">#</a> Clear Superimposed Effects</h3><p>Initialize using <code>pixiInit</code> to clear all effects that have been applied.</p><h2 id="adding-custom-effects" tabindex="-1"><a class="header-anchor" href="#adding-custom-effects" aria-hidden="true">#</a> Adding Custom Effects</h2><p>You can download the source code, then find <code>/Core/gameScripts/pixiPerformScripts/</code> and create a new <code>PIXI.Container</code> to create the effects you need.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Get the current Pixi effect Container</span>
<span class="token keyword">const</span> effectsContainer <span class="token operator">=</span> <span class="token constant">RUNTIME_GAMEPLAY</span><span class="token punctuation">.</span>pixiStage<span class="token operator">!</span><span class="token punctuation">.</span>effectsContainer<span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">// Call the Pixi App method, which may be useful for determining screen size, etc.</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token constant">RUNTIME_GAMEPLAY</span><span class="token punctuation">.</span>pixiStage<span class="token operator">!</span><span class="token punctuation">.</span>currentApp<span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">// Create a container for custom effects</span>
<span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">PIXI</span></span><span class="token punctuation">.</span><span class="token function">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Add effects</span>
effectsContainer<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Texture files can be placed in the <code>game/tex</code> directory.</p><p>Then, import the <code>effect registration method</code> at the beginning of the file to register the new effect you wrote.</p><p>At the end of the file, use it to register your effect, the first parameter is the effect name, and the second parameter is the method to call the effect.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>registerPerform<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../pixiPerformManager&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Let&#39;s say this is your effect</span>
<span class="token keyword">function</span> <span class="token function">myPerform</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Register</span>
<span class="token function">registerPerform</span><span class="token punctuation">(</span><span class="token string">&#39;myPerform&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">myPerform</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, compile WebGAL with support for your custom effects</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run build<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This way, you can call your effects in the script</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>pixiPerform:your new effect;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),c=[i];function o(r,p){return n(),s("div",null,c)}const u=e(t,[["render",o],["__file","special-effect.html.vue"]]);export{u as default};