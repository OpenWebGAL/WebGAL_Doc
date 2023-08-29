import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as i}from"./app-59648db4.js";const d={},c=i(`<h1 id="変数" tabindex="-1"><a class="header-anchor" href="#変数" aria-hidden="true">#</a> 変数</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>ラベルの作成と選択肢ジャンプを理解する前に、混乱を招く可能性があるため、変数を軽々しく使用しないでください。</p></div><h2 id="変数の使用" tabindex="-1"><a class="header-anchor" href="#変数の使用" aria-hidden="true">#</a> 変数の使用</h2><p>変数を設定します。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1; // 数値の設定が可能
setVar:a=true // ブール値の設定が可能
setVar:a=Character name // 文字列の設定が可能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以前に変数を設定した場合でも、変数を設定するときに再利用できます。</p><h2 id="条件付き実行" tabindex="-1"><a class="header-anchor" href="#条件付き実行" aria-hidden="true">#</a> 条件付き実行</h2><p>ステートメントの後に <code>-when=(condition)</code> を追加することで、条件に基づいて現在のステートメントを実行するかどうかを決定します。</p><p>例:</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1;
; // aが1より大きい場合、シーン1にジャンプする。
changeScene:1.txt -when=a&gt;1;
; // a が 1 の場合にのみジャンプし、等価演算子は == であることに注意してください
changeScene:2.txt -when=a==1;
; // a &lt; 1 の場合, 上記のステートメントは実行されないので、当然これは実行される
changeScene:3.txt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p><code>=</code> は代入記号であり、条件付き実行には使用できません。<code>==</code> は等値演算子です。</p></div><p><code>-when</code> パラメータを任意のステートメントに追加して、実行するかどうかを制御できます。<code>-when</code> パラメータと <code>jumpLabel</code> <code>callScene</code> <code>changeScene</code> を組み合わせることで、条件付き実行による実行制御を実現できます。</p>`,12),s=[c];function r(t,l){return a(),n("div",null,s)}const v=e(d,[["render",r],["__file","variable.html.vue"]]);export{v as default};
