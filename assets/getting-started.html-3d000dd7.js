import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as o,a as e,d as a,b as n,e as r}from"./app-7008dfd5.js";const d={},c=r('<h1 id="webgal-でゲーム開発を行う方法" tabindex="-1"><a class="header-anchor" href="#webgal-でゲーム開発を行う方法" aria-hidden="true">#</a> WebGAL でゲーム開発を行う方法</h1><div class="hint-container danger"><p class="hint-container-title">警告</p><p>エディターを開くには、最新のブラウザ (Chrome / Firefox / Edge) を使用してください。その他のブラウザはサポート対象外です。</p></div><h2 id="その1-webgalエディターを使用-推奨" tabindex="-1"><a class="header-anchor" href="#その1-webgalエディターを使用-推奨" aria-hidden="true">#</a> その1：WebGALエディターを使用 (推奨)</h2><p><strong>WebGAL エディターは、WebGAL でゲームを作成し、開発し、公開するための最良の方法です。</strong></p>',4),h={href:"http://localhost:3001/",target:"_blank",rel:"noopener noreferrer"},p=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"ヒント"),e("p",null,[a("このページの内容は Windows 7 にサポートしていません。Windows 7 をご利用の方は、"),e("strong",null,[e("a",{href:"./win7"},"Windows 7 でビジュアルエディターを使用してゲーム開発を行う方法")]),a(" を参照してください。")]),e("p",null,"WebGAL エディターは現在 Windows 10+ システムでのみテストされています。Mac OS および Linux のサポートは、今後順次追加していく予定です。")],-1),u=e("p",null,"WebGAL エディターのダウンロードリンク:",-1),b={href:"https://github.com/MakinoharaShoko/WebGAL_Terre/releases",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"その2-スクリプトを作成してローカルで開発し、リアルタイムでデバッグ",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#その2-スクリプトを作成してローカルで開発し、リアルタイムでデバッグ","aria-hidden":"true"},"#"),a(" その2：スクリプトを作成してローカルで開発し、リアルタイムでデバッグ")],-1),_=e("p",null,"まず、静的なウェブページとデバッグ環境が組み込まれた WebGAL 配布をダウンロードしてください。",-1),m=e("p",null,"WebGAL エンジンとデバッグ環境（ビジュアルエディターは含まれていません）をダウンロードします。",-1),v={href:"https://github.com/MakinoharaShoko/WebGAL/releases/",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"ダウンロードして解凍した後、対応するバージョンの WebGAL-server を直接実行して、ビジュアルノベルゲームをデバッグできます。もしアンチウイルスソフトウェアやファイアウォールによる遮断が発生した場合は、実行を許可してください。",-1),f=e("p",null,"開発には VS Code を使用することをお勧めし、シンタックスハイライトを有効にするためにプラグインを利用してください：",-1),W={href:"https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/C6H5-NO2/webgal-script-basics",target:"_blank",rel:"noopener noreferrer"},G=r(`<h2 id="その3-ソースコードからデバッグ-高いカスタマイズ性を望むフロントエンド開発者向け" tabindex="-1"><a class="header-anchor" href="#その3-ソースコードからデバッグ-高いカスタマイズ性を望むフロントエンド開発者向け" aria-hidden="true">#</a> その3：ソースコードからデバッグ（高いカスタマイズ性を望むフロントエンド開発者向け）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/MakinoharaShoko/WebGAL.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>yarn をインストールします。次に、yarn を使用して依存関係をインストールします</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install yarn -g
yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>WebGAL パッケージに移動します</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd packages/webgal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>WebGAL は、vite をパッケージ化およびデバッグツールとして使用します。webgal パッケージを入力した後、次のコマンドを実行してローカルサーバーを起動します</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>パッケージは、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn build 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function k(A,w){const t=i("ExternalLinkIcon");return l(),o("div",null,[c,e("p",null,[a("WebGAL エディターをダウンロードした後、zipを解凍し、WebGAL_Terre.exe を起動します。WebGAL_Terre はブラウザを自動的に開きます。開かない場合は、ブラウザから "),e("a",h,[a("http://localhost:3001/"),n(t)]),a("にアクセスしてください。")]),p,u,e("p",null,[e("a",b,[a("GitHub"),n(t)])]),g,_,m,e("p",null,[e("a",v,[a("GitHub"),n(t)])]),x,f,e("p",null,[e("a",W,[a("シンタックスハイライトプラグインのストアリンク"),n(t)])]),e("p",null,[e("a",L,[a("シンタックスハイライトプラグインのソースコードリポジトリ"),n(t)])]),G])}const N=s(d,[["render",k],["__file","getting-started.html.vue"]]);export{N as default};
