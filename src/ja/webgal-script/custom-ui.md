# カスタム UI

::: warning 4.7.0 Preview
このページの前半で紹介しているビジュアルテンプレートエディターとカスタム画面プラグインは、**4.7.0-preview.0（Preview）** からのプレビュー機能です。正式版のリリースまでに細部が変更される場合があります。
:::

::: note
後半の従来の CSS テンプレートの解説は、HTML/CSS/JS の基礎知識があることを前提としています。4.7.0 Preview のビジュアルテンプレートエディターを使えば、ドラッグやクリック操作で直感的に編集できます。
:::

WebGAL では、「テンプレート」を使ってゲーム各画面のデザインやレイアウトをカスタマイズできます。テンプレートのファイルは `<ゲームフォルダ>/game/template/` にあるほか、WebGAL Terre 上から画面スタイルを切り替えたり、見た目を見ながら調整したりすることもできます。

## ビジュアルテンプレートエディター（4.7.0 Preview）

**4.7.0-preview.0** から、新しいカスタムモード（`"uiMode": "custom"`）が使えるようになりました。タイトル画面、テキストボックス、選択肢、セーブ／ロード、設定、フローチャートなど 12 個の画面がそれぞれ独立しており、他の画面に影響を与えずに画面ごとに好きなスタイルへ切り替えられます。

**WebGAL Terre** で任意のカスタムテンプレートを開くと、ビジュアルテンプレートエディターが開きます。画面は大きく 3 つのエリアに分かれています。

### 左側：画面とパーツの一覧

ここには全 12 画面と、各画面の中で編集できるパーツが並んでいます。画面の行をクリックすると展開して中央にプレビューが表示され、展開中の行をもう一度クリックすると折りたたんで選択が解除されます。

パーツの横に鍵アイコンが付いているものは、リストや親コンテナによって配置が管理されているため、位置のドラッグはできず色やフォントなどの見た目だけを調整できます。各画面のメニューからは、組み込みプリセットの切り替えや、自作・配布されている `.zip` プラグインを読み込む「カスタム画面をインポート」を実行できます。

### 中央：キャンバスプレビュー

「キャンバス編集」をオンにすると、パーツをマウスでドラッグして移動したり、ハンドルを引っ張ってサイズを変えたりできます。ツールバーの「モックデータ」を有効にすると、実際のセーブデータやクリア状況がなくても、セーブ枠や選択肢・バックログ・ギャラリーが埋まった状態の見た目を確認できます。また「操作プレビュー」に切り替えると、実際のゲームのようにクリックしながら動作を試せます。

### 右側：状態とスタイルの編集

上部では **通常時**・**ホバー（`:hover`）**・**押下（`:active`）**・**無効（`.disabled`）** の 4 つの状態を切り替えて、それぞれ細かく調整できます。

- **シンプルモード**：コードを書かずに、文字色、文字サイズ、太さ、行間・文字間隔、縁取り、文字の影、背景（単色、複数色のグラデーション、画像、9 スライス枠、フェードマスク、すりガラス効果）、角丸、枠線、ボックスシャドウ、不透明度などを設定できます。
- **詳細モード**：「ビジュアル」画面で CSS プロパティを 1 行ずつ編集できるほか、「コード」へ切り替えて SCSS を直接書くこともできます。手書きの複雑な CSS ルールも消えずにそのまま残ります。

::: tip
組み込みテンプレート（`WebGAL Refine 2026`、`WebGAL Classic`、`WebGAL Black`）はプレビューおよび参照専用のため、そのまま変更を保存したり画面を切り替えたりすることはできません。編集したい場合は、先に新しいカスタムテンプレートを作成してください。
:::

### 対応している画面と組み込みスタイル

デフォルトテンプレートには 12 画面すべてが入っており、一部の画面では複数のスタイルから選べます。

| 画面 ID | 画面名 | 組み込みプリセット |
| :--- | :--- | :--- |
| `title` | タイトル画面 | `default`（Refine 2026）、`classic`（クラシック下部バー）、`editorial-right`（右寄せレイアウト） |
| `textbox` | テキストボックス | `default`（Refine 2026）、`classic`（WebGAL Classic）、`black`（WebGAL Black）、`bare`（無装飾ベース） |
| `choose` | 選択肢 | `default`（デフォルト）、`sleek-dark`（ダークテーマ） |
| `save` | セーブ画面 | `grid-2x5`（2×5 グリッド）、`list-vertical`（縦リスト）、`split-preview`（分割プレビュー） |
| `load` | ロード画面 | `grid-2x5`（2×5 グリッド）、`list-vertical`（縦リスト）、`split-preview`（分割プレビュー） |
| `options` | 設定画面 | `tabbed-classic`（タブ切り替え）、`single-scroll`（単一スクロール） |
| `extra` | おまけ／鑑賞画面 | `gallery-classic`（クラシックギャラリー）、`split-tabs`（分割タブ） |
| `flowchart` | フローチャート | `default`（デフォルト） |
| `menuPanel` | メニューパネル | `default`（デフォルト） |
| `backlog` | バックログ | `default`（デフォルト） |
| `bottomControlPanel` | 下部コントロールバー | `default`（デフォルト） |
| `globalDialog` | グローバルダイアログ | `default`（デフォルト） |

スタイルの調整だけでなく、画面のレイアウトや仕組みそのものを一から作りたい場合は、[カスタム画面プラグインの開発（create-webgal-ui）](./custom-screen-dev.md) をご覧ください。

## CSS / SCSS でカスタマイズする（従来のテンプレート）

WebGAL では、テンプレート内の SCSS ファイルを編集することで、テキストボックスやタイトル画面などの外観をゲームの世界観に合わせて変更できます。

従来テンプレートの `<ゲームフォルダ>/game/template/` 配下（新しい `custom` モードでは `screens/<画面ID>/<バリアントID>/style.scss`）では、主に次のファイルを編集します。

- 選択肢：`Stage/Choose/choose.scss`
- テキストボックス：`Stage/Textbox/textbox.scss`
- タイトル画面：`UI/Title/title.scss`

### 例

タイトル画面を例にすると、`<ゲームフォルダ>/game/template/UI/Title/title.scss` を開き、内容を以下のコードで完全に置き換えることで、ボタンを画面下の中央に並べて表示できます。

::: details サンプルコードを広げる

```scss
.Title_main {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 13;
  display: flex;
  align-items: flex-end;
}

.Title_buttonList {
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  left: unset;
  min-width: unset;
  width: 100%;
  height: auto;
  padding-left: unset;

  background-color: #000000b5;
  font-family: "资源圆体", serif;

  transition: unset;
}

.Title_button {
  flex: 0 1 auto;
  cursor: pointer;
  padding: unset;
  margin: unset;
  background: transparent;
  background-color: transparent;
  backdrop-filter: none;

  border: 0;
  border-radius: 0;
  border-bottom: 16px;
  border-color: transparent;
  border-style: solid;
  transform: none;

  font-weight: bold;
  text-align: left;
  text-shadow: none;

  overflow: visible;
  transition: background-color 0.5s ease-out;

  &:hover {
    transform: unset;
    padding: unset;
    text-shadow: none;
    filter: unset;
    background-color: #ffffff42;
    border-color: #ffffff;
    transition: background-color 0s;
  }
}

.Title_button_text {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 32px 48px;

  font-size: 200%;
  font-family: '资源圆体', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  letter-spacing: 0.16em;
  line-height: 1.2;

  transform-origin: left center;
  transition: unset;
  color: #ffffff;

  white-space: nowrap;
}

.Title_button_text_outer {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  white-space: nowrap;

  background-image: none;
  background-clip: border-box;
  -webkit-background-clip: border-box;

  color: #ffffff;
  -webkit-text-fill-color: unset;
  z-index: 2;
  text-shadow: unset;
}

.Title_button_text_inner {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  color: inherit;
  -webkit-text-stroke: #000000 10px;
  z-index: 1;
}

.Title_backup_background {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 13;
  background: linear-gradient(135deg, #fdfbfb 0%, #dcddde 100%);
}

.Title_button_disabled {
  cursor: not-allowed !important;
  opacity: 0.45;
  background-color: transparent !important;
  border-color: transparent !important;
}
```

:::

編集後にファイルを保存してゲームを再読み込みすると、タイトル画面のボタンが下部中央に並んで表示されます。

## ベーススタイル

カスタムテンプレートを使っていない場合でも問題なく表示されるよう、WebGAL には標準のベーススタイルが用意されています。

バージョン 4.6.1 より前は、このベースクラスとユーザー定義クラスが同時に付いていました。

```html
<!-- Title_button_base と Title_button は説明用の例であり、実際の名前とは異なる場合があります -->
<div class="Title_button_base Title_button">
  <!-- ... -->
</div>
```

たとえば「自分で傾きを指定していないのにボタンが少し斜めになっている」という場合、ベーススタイルの設計によるものだったため、`transform: none;` などで上書きする必要がありました。

バージョン **4.6.1** からは、`Title_button` のようなクラスをテンプレート側で定義すると、対応するベースクラス（`Title_button_base`）は適用されなくなりました。

```html
<!-- Title_button を定義すると Title_button_base は適用されなくなります -->
<div class="Title_button">
  <!-- ... -->
</div>
```

これによりベーススタイルに邪魔されることはなくなりましたが、4.6.1 より前に作ったテンプレートを移行する際は、ベーススタイルに頼っていた部分が抜けていないか確認して適宜調整してください。

## 書き方のルール

普段どおりに CSS を書いて問題ありませんが、WebGAL で正しく動作させるために次の点に注意してください。

### 外に出さずネストして書く

`:hover` などの疑似クラスは、トップレベルに直接書くのではなく、対応するクラスの中に `&:hover` として記述してください。

```scss
.Title_button {
  /* ... */

  &:hover {
    /* 正しい書き方 */
  }
}

.Title_button:hover {
  /* 誤った書き方 */
}
```

他のセレクタも同様です。

### 標準の CSS 構文を使う

ファイルの拡張子は `.scss` ですが、`$変数`・`@mixin`・`@include` などの Sass 機能には対応していません。

## グローバルスタイルシート

テンプレート以外に、`game` フォルダには `userStyleSheet.css` というファイルもあります。ゲーム起動時に通常の CSS としてページ全体に読み込まれます。

テンプレートの `.scss` とは違って標準の CSS がそのまま使えるため、`@font-face`、`@keyframes`、`@media` などを書いてページ全体に効かせたいスタイル（フォントの読み込みなど）に向いています。

```css
@font-face {
  font-family: 'MyFont';
  src: url('./template/assets/fonts/my_font.woff2') format('woff2');
}
```

このファイル内の相対パスは `game` フォルダを基準とします。

::: warning
エンジン内蔵 UI のクラス名はビルド時に生成され、バージョンによって変わることがあります。テキストボックスやタイトル画面、選択肢の見た目を変更したい場合は、`userStyleSheet.css` で直接クラス名を指定せず、テンプレート機能を使ってください。
:::

## 動的な切り替え

WebGAL では、ゲーム実行中にテンプレートのスタイルクラスを切り替えることもできます。詳しくは [applyStyle](../script-reference/commands/applyStyle.md) コマンドを参照してください。

```scss
.outer {
  /* その他のプロパティ */
  color: #ffffff;
}

.outer_orange {
  /* .outer と同じプロパティ */
  color: #ff8800; // color のみ変更
}
```

```webgal
キャラA: この文は元の色です。
applyStyle: outer->outer_orange;
キャラA: この文はオレンジ色です。
applyStyle: outer->outer;
キャラA: 元の色に戻りました。
```
