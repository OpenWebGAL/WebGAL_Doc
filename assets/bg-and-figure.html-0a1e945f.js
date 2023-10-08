import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as a}from"./app-82708b76.js";const d={},s=a(`<h1 id="背景と立ち絵" tabindex="-1"><a class="header-anchor" href="#背景と立ち絵" aria-hidden="true">#</a> 背景と立ち絵</h1><h2 id="背景画像と立ち絵の変更" tabindex="-1"><a class="header-anchor" href="#背景画像と立ち絵の変更" aria-hidden="true">#</a> 背景画像と立ち絵の変更</h2><p>WebGAL が背景画像と立ち絵を読み取れるようにするには、背景画像を <code>background</code> フォルダーに配置し、立ち絵を <code>figure</code> フォルダーに配置する必要があります。</p><p>次に、次の簡単なステートメントを使用して、現在表示されている背景画像と立ち絵を変更します。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeBg:testBG03.jpg; // 背景画像を変更する
changeFigure:testFigure02.png; // 立ち絵を変更する
changeBg:none; // 背景を表示しない
changeFigure:none; // 立ち絵を表示しない
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>背景画像または立ち絵を変更した後、次のステートメントを実行するためにマウスをもう一度クリックする必要があります。背景画像と立ち絵を変更した直後に次のステートメントの内容を実行したい場合は、<code>-next</code> を使用してください。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeBg:testBG03.jpg -next; // 背景画像を変更する
changeFigure:testFigure02.png -next; // 立ち絵を変更する
一色:先輩、ありがとうございます！;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>こうしたら、ゲームは背景画像または立ち絵を変更した直後に、次のステートメントを実行します。</p><h2 id="立ち絵を異なる位置に配置する" tabindex="-1"><a class="header-anchor" href="#立ち絵を異なる位置に配置する" aria-hidden="true">#</a> 立ち絵を異なる位置に配置する</h2><p>3つの異なる位置に立ち絵を配置することができます。立ち絵を配置するステートメントに、パラメータとして、位置を追加するだけです。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeFigure:testFigure03.png -left;
changeFigure:testFigure04.png;
changeFigure:testFigure05.png -right;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上記のは、左、中央、右の3つの位置に3つの異なる立ち絵を配置しています。3つの異なる位置の立ち絵は互いに独立しているため、クリアする必要がある場合は、別々にクリアする必要があります。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeFigure:none -left;
changeFigure:none;
changeFigure:none -right;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>立ち絵を変更した直後にステートメントを実行したい場合、<code>-next</code> を使用してください。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeFigure:testFigure03.png -left -next;
changeFigure:testFigure04.png -next;
changeFigure:testFigure03.png -right -next;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="id-付きの立ち絵" tabindex="-1"><a class="header-anchor" href="#id-付きの立ち絵" aria-hidden="true">#</a> ID 付きの立ち絵</h2><p>立ち絵をより正確に制御したい場合は、立ち絵に <code>id</code> を指定することがお勧めです。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>; // ID 付きの立ち絵を表示する
changeFigure:testFigure03.png -id=test1;
; // ID で立ち絵を表示しない
changeFigure:none -id=test1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>ID 付きの立ち絵の位置をリセットしたい場合は、まず表示しないようにしてから再度表示してください。</p></div><h2 id="ミニアバターを配置する" tabindex="-1"><a class="header-anchor" href="#ミニアバターを配置する" aria-hidden="true">#</a> ミニアバターを配置する</h2><p>多くのゲームでは、テキストボックスの左下隅にミニアバターを配置できます。このエンジンで使用される構文は次のとおりです。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>; // minipic_test.png をミニアバターとして表示する
miniAvatar:minipic_test.png;
; // ミニアバターを表示しない
miniAvatar:none;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cgをアンロックして鑑賞可能" tabindex="-1"><a class="header-anchor" href="#cgをアンロックして鑑賞可能" aria-hidden="true">#</a> CGをアンロックして鑑賞可能</h2><p>鑑賞用CGのロックを解除するにはを <code>unlockCg</code> 使用します。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>; // CG のロックを解除し、名前を付けます
unlockCg:xgmain.jpeg -name=Starlight Café and the Butterfly of Death -series=1;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-series</code> パラメータはオプションで、アンロックしたい CG がどのシリーズに属しているかを表します。 同じシリーズの CG は組み合わせて表示され、切り替えるようになります。</p>`,26),r=[s];function c(l,t){return n(),i("div",null,r)}const v=e(d,[["render",c],["__file","bg-and-figure.html.vue"]]);export{v as default};
