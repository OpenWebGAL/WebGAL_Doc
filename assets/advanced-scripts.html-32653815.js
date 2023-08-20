import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,e as s}from"./app-7008dfd5.js";const i={},t=s(`<h1 id="上級スクリプト" tabindex="-1"><a class="header-anchor" href="#上級スクリプト" aria-hidden="true">#</a> 上級スクリプト</h1><h2 id="ステートメントジャンプと選択肢ジャンプ-同じtxtファイル内" tabindex="-1"><a class="header-anchor" href="#ステートメントジャンプと選択肢ジャンプ-同じtxtファイル内" aria-hidden="true">#</a> ステートメントジャンプと選択肢ジャンプ(同じTXTファイル内)</h2><p>分岐を作成したいが、新しい TXT ファイルを作成するのが面倒だと感じた場合は、以下を読んでみてください。</p><p><strong>注意:分岐が非常に長い場合は、1 つの TXT の行数が長すぎてはいけないため、この方法を使用することはお勧めしません。</strong></p><h3 id="まず、ラベルを作成する" tabindex="-1"><a class="header-anchor" href="#まず、ラベルを作成する" aria-hidden="true">#</a> まず、ラベルを作成する</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>......
jumpLabel:label_1; 
; // 次の行は無視される。
...... 
......
......
; // 次に、ラベルを作成する。
label:label_1;
ゲームはここで継続して実行されます。;
......
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>つまり、<code>jumpLabel</code> は <code>goto</code> ステートメントに似ており、スクリプトをシーン内の任意の位置(TXT ファイル)にすぐにジャンプさせることができ、この位置は ラベルを使用して作成する必要があります。</p><p><code>jumpLabel</code> を任意のゲートと比較すると、この任意のゲートの終点はラベルが配置されている位置になります。</p><h3 id="次に、選択肢を作成する" tabindex="-1"><a class="header-anchor" href="#次に、選択肢を作成する" aria-hidden="true">#</a> 次に、選択肢を作成する</h3><p>choose コマンドを使用して選択肢を作成することができます。オプションを選択して、対応するラベルの位置にジャンプします。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WebGAL: 選択肢ジャンプをテストしましょう！;
choose:テスト 1:label_1|テスト 2:label_2;
label:label_1;  
ここは分岐 1 です。;
jumpLabel:end;
label:label_2;
ここは分岐 2 です。;
jumpLabel:end; 
label:end;
分岐はここで統一されます;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各分岐の最後に、<code>jumpLabel</code> を使用して目的の場所にジャンプする必要があることに注意してください。ゲームは直線的に実行されるため、分岐の最後にジャンプしないと、ゲームは次のように継続して実行されます。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WebGAL: 選択肢ジャンプをテストしましょう！;
choose:テスト 1:label_1|テスト 2:label_2;  
label:label_1;
ここは分岐 1 です。;
label:label_2;
ここは分岐 2 です。;
分岐はここで統一されます;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>このスクリプトでは、テスト 2 を選択すると、すべて問題ないように見えます。ただし、テスト 1 を選択すると、テスト 1 の実行後にテスト 2 が実行されることに驚かれることでしょう。これは、ゲームが順番に継続して実行され、分岐の終了後にジャンプするラベルを指定しなかったためです。</p><h2 id="変数の使用" tabindex="-1"><a class="header-anchor" href="#変数の使用" aria-hidden="true">#</a> 変数の使用</h2><p><strong>注意: ラベルの作成と選択肢ジャンプを理解する前に、混乱を招く可能性があるため、変数を軽々しく使用しないでください。</strong></p><p>変数を設定します。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setVar:a=1; // 数値の設定が可能
setVar:a=true // ブール値の設定が可能
setVar:a=Character name // 文字列の設定が可能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以前に変数を設定した場合でも、変数を設定するときに再利用できます。</p><h2 id="条件付き実行" tabindex="-1"><a class="header-anchor" href="#条件付き実行" aria-hidden="true">#</a> 条件付き実行</h2><p>ステートメントの後に <code>-when=(condition)</code> を追加することで、条件に基づいて現在のステートメントを実行するかどうかを決定します。</p><p>例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setVar:a=1;
changeScene:1.txt -when=a&gt;1; // a &gt; 1 の場合、シーン 1 にジャンプする
changeScene:2.txt -when=a==1; // a が 1 の場合にのみジャンプし、等価演算子は == であることに注意してください
changeScene:3.txt; // a &lt; 1 の場合, 上記のステートメントは実行されないので、当然これは実行される
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意: <code>=</code> は代入記号であり、条件付き実行には使用できません。<code>==</code> は等値演算子です。</strong></p><p><code>-when</code> パラメータを任意のステートメントに追加して、実行するかどうかを制御できます。<code>-when</code> パラメータと <code>jumpLabel</code> <code>callScene</code> <code>changeScene</code> を組み合わせることで、条件付き実行による実行制御を実現できます。</p><h2 id="会話文に効果を追加する" tabindex="-1"><a class="header-anchor" href="#会話文に効果を追加する" aria-hidden="true">#</a> 会話文に効果を追加する</h2><p>キャラクターが話している間に表情などを切り替えたい場合があります。<br><code>-notend</code> と <code>-concat</code> パラメータを使用して、会話に任意のステートメントを挿入することができます。</p><p><code>-concat</code> は、このセリフは前のセリフの後につながっていることを意味します。</p><p><code>-notend</code> は、このセリフはまだ終わっておらず、後で効果やセリフがつながることを意味します。</p><p>例: 会話の進行中に立ち絵と表情を切り替える。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WebGAL: 会話の進行中に立ち絵の切り替えをテストしてみましょう!今すぐに...... -notend;
changeFigure:k1.png -next;
立ち絵の切り替えが成功しました！表情の切り替えをテストしてみましょう...... -notend -concat; 
changeFigure:k2.png -next;
表情の切り替えも成功しました！ -concat;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="カスタム特殊効果の追加" tabindex="-1"><a class="header-anchor" href="#カスタム特殊効果の追加" aria-hidden="true">#</a> カスタム特殊効果の追加</h2><p>ソースコードをダウンロードし、<code>/Core/gameScripts/pixiPerformScripts</code> に移動し、カスタム特殊効果のために <code>PIXI.Container</code> を作成します。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> effectsContainer <span class="token operator">=</span> <span class="token constant">RUNTIME_GAMEPLAY</span><span class="token punctuation">.</span>pixiStage<span class="token operator">!</span><span class="token punctuation">.</span>effectsContainer<span class="token operator">!</span><span class="token punctuation">;</span> <span class="token comment">// 現在の Pixi.Container の特殊効果を取得する</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token constant">RUNTIME_GAMEPLAY</span><span class="token punctuation">.</span>pixiStage<span class="token operator">!</span><span class="token punctuation">.</span>currentApp<span class="token operator">!</span><span class="token punctuation">;</span> <span class="token comment">// Pixi アプリのインターフェースを呼び出すと、画面サイズなどの確認に役立つ場合があります</span>
<span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">PIXI</span></span><span class="token punctuation">.</span><span class="token function">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// カスタム特殊効果のコンテナを作成する</span>
effectsContainer<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// カスタム特殊効果を追加する</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>テクスチャファイルは <code>/game/tex</code> フォルダーに配置する必要があります。</p><p>次に、ファイルの先頭でカスタム特殊効果の登録メソッドを導入します。</p><p>ファイルの末尾で、登録メソッドを使用して、カスタム特殊効果を登録します。最初のパラメータは特殊効果名で、2 番目のパラメータは特殊効果を呼び出すメソッドです。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>registerPerform<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../pixiPerformManager&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 特殊効果の定義</span>
<span class="token keyword">function</span> <span class="token function">myPerform</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 登録</span>
<span class="token function">registerPerform</span><span class="token punctuation">(</span><span class="token string">&#39;myPerform&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">myPerform</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最後に、カスタム特殊効果をサポートする WebAPP をコンパイルします</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run build<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>これで、スクリプトでカスタム特殊効果を呼び出すことができます。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pixiPerform:myPerform; // 特殊効果名を指定して特殊効果を呼び出す
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,42),c=[t];function d(l,o){return e(),a("div",null,c)}const u=n(i,[["render",d],["__file","advanced-scripts.html.vue"]]);export{u as default};
