import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as n,d as s,b as t,e}from"./app-7008dfd5.js";const p={},d=e('<h1 id="windows-7-でビジュアルエディタを使用してゲーム開発を行う方法" tabindex="-1"><a class="header-anchor" href="#windows-7-でビジュアルエディタを使用してゲーム開発を行う方法" aria-hidden="true">#</a> Windows 7 でビジュアルエディタを使用してゲーム開発を行う方法</h1><h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h2><h3 id="バージョン-14-16-3-の-node-js-をインストール" tabindex="-1"><a class="header-anchor" href="#バージョン-14-16-3-の-node-js-をインストール" aria-hidden="true">#</a> バージョン 14 ~ 16.3 の node.js をインストール</h3>',3),c={href:"https://nodejs.org/dist/v16.3.0/",target:"_blank",rel:"noopener noreferrer"},u=n("ol",null,[n("li",null,[n("p",null,"システムに適したインストールパッケージを選ぶ。"),n("p",null,[s("フォルダ "),n("strong",null,"win-x64"),s(" またはフォルダ "),n("strong",null,"win-x86"),s(" から選択してください。")])]),n("li",null,[n("p",null,[s("その中の "),n("strong",null,"node.exe"),s(" をダウンロードする。")])])],-1),h=e("<li><p>システムチェックをバイパスするように環境変数を設定する。</p><ol><li>デスクトップで <strong>コンピュータ</strong> を右クリックし、メニューの <strong>アトリビューション</strong> をクリックする。</li><li>左側のパネルで <strong>システムの詳細設定</strong> を開く。</li><li>ウィンドウの右下隅にある <strong>環境変数</strong> をクリックしする。</li><li>システム変数に変数 <strong>NODE_SKIP_PLATFORM_CHECK</strong> を追加し、値は <strong>1</strong> にする。</li><li>環境変数を保存する。</li></ol></li><li><p>インストールパッケージ(ダウンロードした <strong>node.exe</strong>)を実行して、node.js をインストールする。</p></li>",2),b=n("hr",null,null,-1),g=n("h2",{id:"その-1-webgal-terre-win7-サポートパッチを使用する",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#その-1-webgal-terre-win7-サポートパッチを使用する","aria-hidden":"true"},"#"),s(" その 1: WebGAL Terre Win7 サポートパッチを使用する")],-1),v=n("h3",{id:"パッチをダウンロードする",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#パッチをダウンロードする","aria-hidden":"true"},"#"),s(" パッチをダウンロードする")],-1),k=n("p",null,"ダウンロードリンク：",-1),m={href:"https://github.com/hshqwq/WebGAL_Terre/releases",target:"_blank",rel:"noopener noreferrer"},q=e(`<h3 id="webgal-terre-をダウンロードする" tabindex="-1"><a class="header-anchor" href="#webgal-terre-をダウンロードする" aria-hidden="true">#</a> WebGAL Terre をダウンロードする</h3><p>パッチに対応する<a href="./README###%E3%81%9D%E3%81%AE1%EF%BC%9AWebGAL%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%83%BC%E3%82%92%E4%BD%BF%E7%94%A8(%E6%8E%A8%E5%A5%A8)">WebGal Terre</a>をダウンロードし、解凍してください。<br> 対応するバージョンについては、<strong>使用说明、README</strong> などの名前のファイルを確認するか、または <strong>package.json</strong> 内の <strong>version</strong> の値を確認してください。</p><h3 id="パッチを使用する" tabindex="-1"><a class="header-anchor" href="#パッチを使用する" aria-hidden="true">#</a> パッチを使用する</h3><p>パッチを解凍し、パッチ内のファイルを WebGAL Terre のフォルダにコピーする。</p><h3 id="依存関係のインストール" tabindex="-1"><a class="header-anchor" href="#依存関係のインストール" aria-hidden="true">#</a> 依存関係のインストール</h3><p><strong>Install_Dependencies.bat</strong> を実行して依存関係をインストールする。フォルダ <strong>node_modules</strong> が表示された場合は成功を意味する。</p><p>手動インストール：</p><ol><li><p>任意のターミナルを開く。</p></li><li><p>WebGAL Terre のフォルダに移動する。</p></li><li><p>次のコマンドを実行する。</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i 
<span class="token comment"># または (yarnをインストールする必要がある)</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webgal-terre-を起動する" tabindex="-1"><a class="header-anchor" href="#webgal-terre-を起動する" aria-hidden="true">#</a> WebGAL Terre を起動する</h3><p><strong>WebGal_Terre-Win7.bat</strong> を実行する。</p><p>手動で実行する:</p><ol><li><p>任意のターミナルを開く。</p></li><li><p>WebGAL Terre のフォルダに移動する。</p></li><li><p>次のコマンドを実行する。</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意</p><p>お使いのパソコンに他のバージョンの node.js がインストールされている場合は、バージョン 14 ~ 16.3 に切り替えてください。</p></div><hr><h2 id="その-2-ソースコードをコンパイルする-プログラミング経験のある人に推奨" tabindex="-1"><a class="header-anchor" href="#その-2-ソースコードをコンパイルする-プログラミング経験のある人に推奨" aria-hidden="true">#</a> その 2：ソースコードをコンパイルする(プログラミング経験のある人に推奨)</h2><h3 id="ソースコードの取得" tabindex="-1"><a class="header-anchor" href="#ソースコードの取得" aria-hidden="true">#</a> ソースコードの取得</h3>`,18),_={href:"https://github.com/MakinoharaShoko/WebGAL_Terre",target:"_blank",rel:"noopener noreferrer"},f=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/MakinoharaShoko/WebGAL_Terre.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="パッケージマネージャーをインストールする-オプション" tabindex="-1"><a class="header-anchor" href="#パッケージマネージャーをインストールする-オプション" aria-hidden="true">#</a> パッケージマネージャーをインストールする(オプション)</h3><p>yarn をインストールする(オプション)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="webgal-terre-をコンパイルする" tabindex="-1"><a class="header-anchor" href="#webgal-terre-をコンパイルする" aria-hidden="true">#</a> WebGAL Terre をコンパイルする</h3><h4 id="その1-すべてのパッケージをコンパイルする" tabindex="-1"><a class="header-anchor" href="#その1-すべてのパッケージをコンパイルする" aria-hidden="true">#</a> その1：すべてのパッケージをコンパイルする</h4><ol><li><p>依存関係をインストールする。</p><p>WebGAL Terre フォルダーのルートで実行する。</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),E={start:"2"},x={href:"http://release.sh",target:"_blank",rel:"noopener noreferrer"},A=n("strong",null,"Terre",-1),w=n("li",null,[n("p",null,[s("手動で "),n("strong",null,"Terre"),s(" をコンパイルする方法については、"),n("a",{href:"####%E3%81%9D%E3%81%AE2%EF%BC%9ATerre2%E3%81%AE%E3%81%BF%E3%82%92%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E3%81%99%E3%82%8B"},[n("strong",null,"Terre2のみをコンパイルする")]),s("を参照してください。")])],-1),y=e(`<h4 id="その2-terre2のみをコンパイルする" tabindex="-1"><a class="header-anchor" href="#その2-terre2のみをコンパイルする" aria-hidden="true">#</a> その2：Terre2のみをコンパイルする</h4><ol><li><p><strong>packages/terre2</strong> フォルダを開く。</p></li><li><p>依存関係をインストールする。</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><p><strong>terre2</strong> をパッケージする</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>フォルダー <strong>dist</strong> 内の <strong>.d.ts</strong> で終わるファイルを削除する。(オプション)</p></li><li><p>ファイル <strong>package.json</strong> をフォルダー <strong>dist</strong> に追加し、内容を以下のように変更してください。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webgal-terre-2-win7-server&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;バージョン&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MPL-2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@nestjs/common&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@nestjs/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@nestjs/platform-express&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@nestjs/serve-static&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.2.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;open&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.4.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reflect-metadata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.13&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rimraf&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rxjs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vscode-languageserver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ws&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.8.1&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>フォルダー <strong>dist</strong> をコンパイルされた WebGAL Terre フォルダにコピーする。</p></li></ol><h3 id="webgal-terre-を起動する-1" tabindex="-1"><a class="header-anchor" href="#webgal-terre-を起動する-1" aria-hidden="true">#</a> WebGAL Terre を起動する</h3><p>1.依存関係を WebGAL Terre フォルダーのルートで実行する。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i
<span class="token comment"># 或（推荐yarn）</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.ターミナルで <code>node main.js</code> を実行して、WebGAL Terre を起動する。bat または sh スクリプトとしてコーディングできます。</p>`,8);function T(W,L){const a=o("ExternalLinkIcon");return i(),l("div",null,[d,n("ol",null,[n("li",null,[n("p",null,[n("a",c,[s("node.js 公式サイト"),t(a)]),s(" でバージョン 16.3.0 の node.js のダウンロードリンクをクリック、インストールパッケージをダウンロードする。")]),u]),h]),b,g,v,n("blockquote",null,[k,n("p",null,[n("a",m,[s("GitHub (サードパーティのパッチ)"),t(a)])])]),q,n("p",null,[n("a",_,[s("WebGAL_Terre"),t(a)]),s(" リポジトリをクローンする。")]),f,n("ol",E,[n("li",null,[n("p",null,[n("strong",null,[n("a",x,[s("release.sh"),t(a)])]),s(" のコマンドを参照して、"),A,s(" を除くすべてのパッケージをコンパイルする。")])]),w]),y])}const B=r(p,[["render",T],["__file","win7.html.vue"]]);export{B as default};
