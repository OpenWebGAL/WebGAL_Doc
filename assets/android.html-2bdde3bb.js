import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c as i,a as e,d as n,b as s,e as o}from"./app-b86340f9.js";const c={},l=o('<h1 id="ゲームを-android-プラットフォームにパッケージ化する" tabindex="-1"><a class="header-anchor" href="#ゲームを-android-プラットフォームにパッケージ化する" aria-hidden="true">#</a> ゲームを Android プラットフォームにパッケージ化する</h1><h2 id="その-1-ゲームを自動的にエクスポートする" tabindex="-1"><a class="header-anchor" href="#その-1-ゲームを自動的にエクスポートする" aria-hidden="true">#</a> その 1: ゲームを自動的にエクスポートする</h2><p><strong>WebGAL エディターユーザー向け</strong></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Android Studio を使用してプロジェクトから直接にエクスポートしたフォルダーを開きたい場合は、新しいゲームを作成するときに<strong>英語</strong>のゲーム名を入力してください。ゲーム名がすでに中国語の場合は、<code>WebGAL_Terre\\public\\games</code> を開いてゲーム名を変更し、プロジェクトのファイルパスに英語以外の文字がないことを確認してください。</p></div><h3 id="事前準備" tabindex="-1"><a class="header-anchor" href="#事前準備" aria-hidden="true">#</a> 事前準備</h3>',5),p={href:"https://developer.android.com/studio/",target:"_blank",rel:"noopener noreferrer"},u=o('<h3 id="エクスポートとゲーム情報の変更" tabindex="-1"><a class="header-anchor" href="#エクスポートとゲーム情報の変更" aria-hidden="true">#</a> エクスポートとゲーム情報の変更</h3><p>WebGAL エディターの左側のサイドバーで、<code>ゲーム名</code>と<code>パッケージ名</code>を変更することができます。パッケージ名は、逆に書かれたウェブサイトのドメイン名です。ドメイン名をお持ちでない場合は、<code>webgaldev.mygalgame</code> のように、開発者とゲーム名の組み合わせの使用することを検討してください。<strong>半角英字</strong>のみ使用可能**です。</p><p>WebGAL エディターの右上隅にある<strong>ゲームを出力</strong>をクリックし、<strong>Androidアプリとしてエクスポート</strong>を選択します。Android Studio を開いて、エクスポートした <code>android</code> フォルダーを選択し、依存関係のダウンロードが完了するのを待ちます。</p><p>メニューバーの <code>File -&gt; New -&gt; Image Asset</code> をクリックして、ゲームアイコンを変更します。アイコンは前面と背面のレイヤーに分割されていることに注意してください。</p><h3 id="実行とコンパイル" tabindex="-1"><a class="header-anchor" href="#実行とコンパイル" aria-hidden="true">#</a> 実行とコンパイル</h3><p>Android スマートフォンで USB デバッグをオンにして、コンピューターに接続します。上部のツールバーのデバイスタイトルの横にある実行アイコンをクリックして、スマホで実行します。</p><p>メニューバーの <code>Build -&gt; Generate Signed Bundle or APK</code> をクリックし、プロンプトに従ってキーを作成してコンパイルし、コンパイルが完了するのを待ちます。</p><h2 id="その-2-ゲームを手動編集する" tabindex="-1"><a class="header-anchor" href="#その-2-ゲームを手動編集する" aria-hidden="true">#</a> その 2: ゲームを手動編集する</h2><p><strong>スクリプトの作成やソースからコンパイルしてローカルでゲームを開発する開発者向け</strong></p><h3 id="事前準備-1" tabindex="-1"><a class="header-anchor" href="#事前準備-1" aria-hidden="true">#</a> 事前準備</h3>',10),h={href:"https://developer.android.com/studio/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/MakinoharaShoko/WebGAL",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/nini22P/WebGAL-Android",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"ゲームのインポート",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ゲームのインポート","aria-hidden":"true"},"#"),n(" ゲームのインポート")],-1),k={href:"https://github.com/nini22P/WebGAL-Android",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"ルート\\app\\src\\main\\assets\\webgal",-1),_=o(`<div class="hint-container tip"><p class="hint-container-title">ヒント</p><p><code>ルート\\app\\src\\main\\assets\\webgal\\index.html</code> を読み込むのはゲームのデフォルト設定です。読み込みリンク(オンラインリンクなど)をカスタマイズする場合は、<code>ルート\\app\\src\\main\\res\\values\\values.xml</code> ファイルにある <code>load_url</code> の値を変更してください。</p></div><h3 id="情報の変更" tabindex="-1"><a class="header-anchor" href="#情報の変更" aria-hidden="true">#</a> 情報の変更</h3><p>Android Studio を開いてゲームをインポートします。<code>ルート\\settings.gradle</code> ファイルにある <code>rootProject.name</code> の値を変更します。</p><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code><span class="token punctuation">...</span>
rootProject<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;WebGAL&quot;</span></span> <span class="token comment">// ゲーム名を変更する</span>
<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ルート\\app\\src\\main\\res\\values\\strings.xml</code> ファイルにあるゲーム名を変更します。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>WebGAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>string</span><span class="token punctuation">&gt;</span></span> // ゲーム名を変更する
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ルート\\app\\build.gradle</code> にある <code>namespace</code> と <code>applicationId</code> の値を逆に書かれたウェブサイトのドメイン名に変更します。</p><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code><span class="token punctuation">...</span>
android <span class="token punctuation">{</span>
    namespace <span class="token string">&#39;com.openwebgal.demo&#39;</span> <span class="token comment">// パッケージ名を変更する</span>
<span class="token punctuation">...</span>
    defaultConfig <span class="token punctuation">{</span>
        applicationId <span class="token interpolation-string"><span class="token string">&quot;com.openwebgal.demo&quot;</span></span> <span class="token comment">// パッケージ名を変更する</span>
<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>メニューバーの <code>File -&gt; Sync Project with Gradle files</code> をクリックして、同期が完了するのを待ちます。</p><p><code>ルート\\app\\src\\main\\java\\com\\openwebgal\\demo\\MainActivity.kt</code> の最初の行の <code>package</code> の値を変更したパッケージ名に変更します。</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">package</span> com<span class="token punctuation">.</span>openwebgal<span class="token punctuation">.</span>demo <span class="token comment">// パッケージ名を変更す</span>
<span class="token operator">..</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>このフィールドを変更すると、エラーが報告されます。この時点で、変更したパッケージ名をクリックし、「黄色の電球」をクリックして <code>Move file to &#39;パッケージ名&#39;</code> を選択し、元のパッケージ名のフォルダーを削除します。</p><p>メニューバーの <code>File -&gt; New -&gt; Image Asset</code> をクリックして、ゲームアイコンを変更します。アイコンは二つのレイヤーに分割されていることに注意してください。</p><h3 id="実行とコンパイル-1" tabindex="-1"><a class="header-anchor" href="#実行とコンパイル-1" aria-hidden="true">#</a> 実行とコンパイル</h3><p>Android スマートフォンで USB デバッグをオンにして、コンピューターに接続します。上部のツールバーのデバイスタイトルの横にある実行アイコンをクリックして、スマホで実行します。</p><p>メニューバーの <code>Build -&gt; Generate Signed Bundle or APK</code> をクリックし、プロンプトに従ってキーを作成してコンパイルし、コンパイルが完了するのを待ちます。</p><h2 id="ビデオチュートリアル" tabindex="-1"><a class="header-anchor" href="#ビデオチュートリアル" aria-hidden="true">#</a> ビデオチュートリアル</h2>`,17),f={href:"https://www.bilibili.com/video/BV1m24y1J7ct/",target:"_blank",rel:"noopener noreferrer"},A=e("h2",{id:"互換性とソリューション",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#互換性とソリューション","aria-hidden":"true"},"#"),n(" 互換性とソリューション")],-1),w=e("p",null,"現在サポートされている最も古いバージョンは Android 5.0 であり、システムにプリインストールされている Android System WebView に依存しています。ホーム画面をクリックした後にデバイスがブラックアウトする場合は、次のいずれかの解決策を試してください。",-1),x={href:"https://play.google.com/store/apps/details?id=com.google.android.webview",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,"手動で Android System WebView をダウンロードして更新する",-1),W={href:"https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-95-0-4638-74-release/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-106-0-5249-126-release/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.apkmirror.com/apk/google-inc/android-system-webview/",target:"_blank",rel:"noopener noreferrer"};function L(B,V){const a=d("ExternalLinkIcon");return r(),i("div",null,[l,e("ul",null,[e("li",null,[e("a",p,[n("Android Studio"),s(a)]),n(" をダウンロードして、インストールする")])]),u,e("ul",null,[e("li",null,[e("a",h,[n("Android Studio"),s(a)]),n(" をダウンロードして、インストールする")]),e("li",null,[e("a",g,[n("WebGAL"),s(a)]),n(" を使用して開発したゲームをウェブバージョンにエクスポートする")]),e("li",null,[e("a",m,[n("WebGAL Android ゲームのテンプレート"),s(a)]),n(" をダウンロードする")])]),b,e("p",null,[n("まずゲームを Web ページとしてエクスポートし、"),e("a",k,[n("WebGAL Android ゲームのテンプレート"),s(a)]),n("を解凍し、フォルダーの名前を変更します(必ず半角英字を使用してください)。"),v,n(" フォルダーを開き、パッケージ化するゲームをここに配置します。")]),_,e("p",null,[e("a",f,[n("Android Studio を使用して WebGAL ゲームを Android プラットフォームにパッケージ化する"),s(a)]),n(" (Chinese)")]),A,w,e("ol",null,[e("li",null,[e("a",x,[n("Android System WebView"),s(a)]),n("を更新するために Google Play Store に移動する")]),S]),e("p",null,[n("Android System WebView のダウンロードリンク: "),e("a",W,[n("Android 5.0"),s(a)]),n(" | "),e("a",G,[n("Android 6.0"),s(a)]),n(" | "),e("a",y,[n("Android 7.0+"),s(a)])])])}const I=t(c,[["render",L],["__file","android.html.vue"]]);export{I as default};
