import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,a as e,e as a,b as s,d as t}from"./app-cfba3ece.js";const l={},p=t('<h1 id="あなたのゲームを展示する" tabindex="-1"><a class="header-anchor" href="#あなたのゲームを展示する" aria-hidden="true">#</a> あなたのゲームを展示する</h1><p>まず、以下の情報を準備する必要があります：</p><ul><li>ゲーム ID：ゲームの一意の ID で、英語を使用し、他のゲームと重複しないものにします。</li><li>ゲームのタイトル</li><li>開発者の名前</li><li>リリース日</li><li>リリース先の URL：プロジェクトのホームページ、ストア、ブログ、動画など、一般にアクセス可能なページへのリンクです。</li><li>ゲームのカバー画像：幅 616 ピクセル、高さ 353 ピクセル</li></ul><h2 id="プルリクエストであなたのゲームを提出する" tabindex="-1"><a class="header-anchor" href="#プルリクエストであなたのゲームを提出する" aria-hidden="true">#</a> プルリクエストであなたのゲームを提出する</h2>',4),d={href:"https://github.com/MakinoharaShoko/WebGAL_HomePage",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>準備したカバー画像を <code>/public/images/games</code> に追加します。</p><p><code>/data/games.ts</code> ファイルを開き、 <code>games</code> を見つけて、以下のテンプレートに従って末尾に追加します。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&#39;ゲーム ID&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;ゲームのタイトル&#39;</span><span class="token punctuation">,</span>
    developer<span class="token operator">:</span> <span class="token string">&#39;開発者の名前&#39;</span><span class="token punctuation">,</span>
    releaseDate<span class="token operator">:</span> <span class="token string">&#39;xxxx-xx-xx&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;https://example.com/&#39;</span><span class="token punctuation">,</span>
    cover<span class="token operator">:</span> <span class="token string">&#39;ゲームのカバー画像のファイル名.webp&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>間違いがないことを確認したら、プルリクエストを送信します。</p><h2 id="イシューであなたのゲームを提出する" tabindex="-1"><a class="header-anchor" href="#イシューであなたのゲームを提出する" aria-hidden="true">#</a> イシューであなたのゲームを提出する</h2>`,5),h={href:"https://github.com/MakinoharaShoko/WebGAL_HomePage/issues",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[e("code",null,"New issue"),a(" をクリックし、準備した情報を入力します。間違いがないことを確認したら、"),e("code",null,"Submit new issue"),a(" をクリックします。")],-1),_=e("h2",{id:"他のチャネルであなたのゲームを提出する",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#他のチャネルであなたのゲームを提出する","aria-hidden":"true"},"#"),a(" 他のチャネルであなたのゲームを提出する")],-1),k=e("p",null,"必要な情報を準備したら、ディスカッションコミュニティまたはメールで連絡して、あなたのゲームを提出することができます。",-1);function b(v,g){const n=i("ExternalLinkIcon");return r(),c("div",null,[p,e("p",null,[e("a",d,[a("WebGAL_HomePage"),s(n)]),a(" リポジトリをフォークします。")]),u,e("p",null,[a("WebGAL_HomePage リポジトリの "),e("a",h,[a("イシューページ"),s(n)]),a(" を開きます。")]),m,_,k])}const L=o(l,[["render",b],["__file","showcase-your-game.html.vue"]]);export{L as default};