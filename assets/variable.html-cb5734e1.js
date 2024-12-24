import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,d as n}from"./app-b98c1595.js";const i={},s=n(`<h1 id="変数" tabindex="-1"><a class="header-anchor" href="#変数" aria-hidden="true">#</a> 変数</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>変数システムを使用する前に、シーンジャンプと分岐ジャンプの使い方を理解しておかないと、混乱する可能性がありますので、注意してください。</p></div><h2 id="変数の使い方" tabindex="-1"><a class="header-anchor" href="#変数の使い方" aria-hidden="true">#</a> 変数の使い方</h2><p>変数を設定する：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1; // 数字を設定可能
setVar:a=true // 真偽値を設定可能
setVar:a=キャラクター名 // 文字列を設定可能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>乱数を設定する場合は、<code>random()</code> を使用してください。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=random();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>乱数は0から1までの数字になります。乱数の範囲を指定したい場合は、算術演算を行う必要があります。例えば、5から10までの乱数を設定したい場合は、次のように演算する必要があります。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=5+a*5;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以前に他の変数を定義している場合は、変数を設定する際にそれらを使用することもできます。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1;
setVar:b=a+1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件付き実行" tabindex="-1"><a class="header-anchor" href="#条件付き実行" aria-hidden="true">#</a> 条件付き実行</h2><p>文の後に <code>-when=(condition)</code> パラメータを追加すると、現在の文を実行するかどうかを条件で判断することができます。</p><p>例えば：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1;
; // a が 1 より大きい場合、シーン 1 にジャンプする
changeScene:1.txt -when=a&gt;1;
; // a が 1 の場合のみジャンプする。等号演算子は == に注意
changeScene:2.txt -when=a==1;
; // a が 1 より小さい場合、上の文は実行されず、当然この文が実行される
changeScene:3.txt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p><code>=</code> は代入演算子であり、条件判断には使用できません。<code>==</code> は等号演算子です。</p></div><p>どの文にも <code>-when</code> パラメータを追加して、実行するかどうかを制御することができます。<code>-when</code> パラメータと <code>jumpLabel</code> <code>callScene</code> <code>changeScene</code> を組み合わせることで、条件付きのフロー制御を実現することができます。</p><h2 id="ユーザー入力の取得" tabindex="-1"><a class="header-anchor" href="#ユーザー入力の取得" aria-hidden="true">#</a> ユーザー入力の取得</h2><p><code>getUserInput</code> 命令を使用してユーザー入力を取得します。例えば：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>getUserInput:name -title=あなたの名前を教えてください -buttonText=確認; ユーザー入力を name 変数に書き込む
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ここで、<code>title</code> パラメータはプロンプトのテキストで、<code>buttonText</code> は確認ボタンのテキストです。</p><h2 id="変数補間" tabindex="-1"><a class="header-anchor" href="#変数補間" aria-hidden="true">#</a> 変数補間</h2><p><code>{}</code> 構文を使用して文の中で変数補間を行い、変数を文に挿入することができます。例えば：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setVar:name=WebGAL;
setVar:engine=WebGAL;
{name}: {engine} へようこそ！これは、まったく新しいウェブベースのビジュアルノベルエンジンです。;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="永続変数-グローバル変数" tabindex="-1"><a class="header-anchor" href="#永続変数-グローバル変数" aria-hidden="true">#</a> 永続変数（グローバル変数）</h2><p>WebGAL の通常の変数はセーブデータに依存します。つまり、どの変数も現在のゲームシーンにのみ存在し、セーブデータに保存され、ロードデータによって復元されるだけです。</p><p>作者がマルチエンディングを設定したい場合に問題が発生する可能性があるため、ゲーム全体で有効な永続（グローバル）変数が用意されています。一度設定すると、ユーザーがすべてのデータを消去しない限り、ゲーム全体で有効になります。</p><p><code>-global</code> パラメータを追加すると、永続（グローバル）変数を設定することができます。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1 -global;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>これにより、セーブデータの読み込みによって変更されない変数が設定されます。</p><p>使用例：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>jumpLabel:turn-2 -when=a&gt;0;
setVar:a=1 -global;
1周目;
changeScene:一周目ストーリー.txt;
label:turn-2;
2周目;
changeScene:二周目ストーリー.txt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级用法-4-5-4" tabindex="-1"><a class="header-anchor" href="#高级用法-4-5-4" aria-hidden="true">#</a> 高级用法（<code>&gt;=4.5.4</code>）</h2><p>組み込み変数は、構成変数の変更や、組み込み変数に基づいて論理的に実行して条件を指定するなど、より高度な操作に使用します。</p><p>WebGAL には現在、<code>stage</code> と <code>userData</code> の 2 つの組み込み変数フィールドがあります。</p><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p><code>stage</code> はランタイム組み込み変数で、<code>userData</code> はアーカイブ組み込み変数です。</p><p><code>stage</code>はWebGalエディタの下の<code>state</code>タブにあり、<code>userData</code>は開発者ツールの<code>indexedDB</code>で表示できます。</p></div><p>それらにアクセスするには <code>$</code> を使用します (例: BGM の値を取得します)。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=($stage.bgm.volume);
WebGAL:現在のBGMボリュームは、以下の通りです{a};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>もちろん、会話で直接使用することもできます：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>WebGAL:現在のBGMボリュームは、以下の通りです{$stage.bgm.volume};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>括弧付き</code>ラッパーは、<code>単一値</code>の変数を取得するために必要ですが、数学には必要ありません。</p></div><p>また、<code>config.txt</code> のグローバル変数にもアクセスできます：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:title=(Game_name);
WebGAL:現在のゲームのタイトルは次のとおりです{title};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>変更も例外ではなく、ゲームのタイトルを新しいゲームのタイトルに変更する場合、setVar の変数名には変更する変数名を設定する必要があります。</p><p><code>global</code>パラメータを追加して、構成変数を変更していることを示します：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:Game_name=新しいゲームタイトル -global;
WebGAL:現在のゲームのタイトルは次のとおりです{Game_name};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>global</code> を付けないとゲーム内変数に代入されるので、<code>global</code> パラメータを使うタイミングに注意してください。</p></div><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>変更可能な元の構成変数 <code>Title_img</code>、<code>Title_bgm</code>、<code>Game_name</code>、<code>Game_key</code>。<br> 回復したい場合は、ゲームオプションの<code>すべてのデータを消去</code>を使用して回復できます。</p></div><p>もちろん、<code>config.txt</code>でカスタム構成変数を作成することもできます。たとえば、バージョン番号を作成します：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Game_name:欢迎使用WebGAL！;
Game_key:f60ad5725c1588;
Title_img:WebGAL_New_Enter_Image.png;
Title_bgm:s_Title.mp3;
Textbox_theme:imss;
; バージョン番号を増やす
version:1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>次に、スクリプトでそれを取得して変更できます：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:v=(version);
WebGAL:現在のバージョン番号は{v};
setVar:version=version*2 -global;
WebGAL:変更された現在のバージョン番号は次のとおりです{version};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>config.txt</code>は、特別なシンボルとしてまだ逃れられていません。</p></div>`,53),c=[s];function l(r,t){return a(),d("div",null,c)}const u=e(i,[["render",l],["__file","variable.html.vue"]]);export{u as default};
