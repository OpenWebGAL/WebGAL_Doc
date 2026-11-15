# カスタム画面プラグインの開発（create-webgal-ui）

::: warning 4.7.0 Preview
`create-webgal-ui` とカスタム画面プラグインは **4.7.0-preview.0（Preview）** からのプレビュー機能です。正式版までに仕様や設定項目が一部変更される可能性があります。
:::

CSS だけでは実現できないレイアウトを作ったり、タイトル画面・セーブ／ロード画面・テキストボックスを丸ごと新しく組みたい場合は、公式の `create-webgal-ui` ツールを使って画面プラグイン用のプロジェクトを作れます。作ったものは `.zip` にまとめて、WebGAL Terre のテンプレートエディターへそのままインポートしたり、他の人に配布したりできます。

## 準備

あらかじめパソコンに **Node.js 18 以上** をインストールしておいてください。

## プロジェクトを作成する

::: tip
`4.7.0-preview.0` のプレビュー期間中、`create-webgal-ui` は npm の `preview` タグでのみ公開されているため、実行時は `@preview` を付けてください。4.7.0 の正式版がリリースされた後は `@preview` を付けずに実行できるようになります。
:::

ターミナルを開き、普段使っているパッケージマネージャーで次のいずれかのコマンドを実行してください。

```bash
# npm
npm create webgal-ui@preview my-screen -- --screen title --variant my-title

# yarn
yarn create webgal-ui@preview my-screen -- --screen title --variant my-title

# pnpm
pnpm create webgal-ui@preview my-screen -- --screen title --variant my-title

# npx
npx create-webgal-ui@preview my-screen -- --screen title --variant my-title
```

使えるオプションは次のとおりです。

| 引数 | 説明 | デフォルト |
| :--- | :--- | :--- |
| `[ディレクトリ名]` | 作成するフォルダ名とプロジェクト名 | `my-webgal-screen` |
| `--screen <screenId>` | カスタマイズするゲーム画面の ID | `title` |
| `--variant <variantId>` | このスタイルの識別子（同じ画面内で重複しないもの） | `custom-<screen>` |

`--screen` に指定できる 12 種類の画面 ID は、`title`、`textbox`、`choose`、`save`、`load`、`options`、`flowchart`、`menuPanel`、`backlog`、`extra`、`bottomControlPanel`、`globalDialog` です。

## フォルダ構成

作成されるプロジェクトの中身はシンプルで、主に次のファイルが含まれます。

```text
my-screen/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── webgal-screen.json        # 画面の情報と、エディター側に出す編集パーツの設定
├── scripts/
│   └── export-screen.mjs     # React 18 チェックと zip 出力を行うスクリプト
└── src/
    ├── index.tsx             # 画面コンポーネントの本体
    ├── style.scss            # デフォルトスタイル（エディター上でも後から調整できます）
    └── types/
        └── webgal-ui-sdk.d.ts # 各画面に渡される Props と SDK の型定義
```

`webgal-screen.json` には、このプラグインがどの画面に対応しているかと、エディター左側のパーツ一覧に表示したい要素を書きます。

```json
{
  "screen": "title",
  "variantId": "my-title",
  "name": "Custom Title Screen",
  "version": "0.1.0",
  "entry": "index.js",
  "style": "style.scss",
  "parts": [
    {
      "id": "background",
      "name": "背景レイヤー",
      "selector": ".custom-title-bg",
      "allowLayoutEdit": false
    },
    {
      "id": "menu",
      "name": "タイトルメニュー",
      "selector": ".custom-title-menu",
      "allowLayoutEdit": true
    }
  ]
}
```

ユーザーがキャンバス上で自由に動かせる外枠パネルやボタンバーには `"allowLayoutEdit": true` を設定すると、ドラッグで移動やリサイズができるようになります。全画面背景やリスト内に繰り返し並ぶカードなどは `"allowLayoutEdit": false` にして、右側のパネルから色やフォント・枠線だけを編集できるようにしておくのがおすすめです。

## エクスポートとエディターへのインポート

作成したフォルダに移動して、依存関係のインストール・型チェック・`.zip` の出力を行います。

```bash
cd my-screen
npm install
npm run typecheck
npm run export
```

それぞれのコマンドの役割は次のとおりです。

- `npm run typecheck`：TypeScript の型に問題がないかチェックします。
- `npm run build`：単一ファイル `dist/index.js` のみをビルドします。
- `npm run export`：React のバージョン条件を確認したうえでビルドし、`index.js`、`webgal-screen.json`、`style.scss`、および `src/assets/`（存在する場合）をまとめて `dist-export/<screen>-<variantId>.zip` に書き出します。

**WebGAL Terre** を開いて**カスタムテンプレート**を開くか新しく作成し（組み込みテンプレートは編集できません）、左側の対象画面のメニューから「カスタム画面をインポート」を選んで `.zip` を指定してください。すぐにプレビューでき、右側のパネルで `style.scss` をさらに微調整することもできます。

::: note
インポートボタンを使わず、`dist/index.js`、`webgal-screen.json`、`src/style.scss`、`src/assets/` を手動でテンプレート内の `screens/<screen>/<variantId>/` にコピーし、`template.json` の `screens.<screen>` に `<variantId>` を指定する方法でも同じように動きます。
:::

## 画面コードの書き方

各画面のコンポーネントが受け取るデータ（Props）は、すべて `src/types/webgal-ui-sdk.d.ts` に書かれています。エントリファイル `src/index.tsx` の基本的な形は次のようになります。

```tsx
import { useScreenParts, resolveAssetUrl } from '@webgal/ui-sdk';
import type { ScreenPartDefinition, TitleScreenProps } from './types/webgal-ui-sdk';
import defaultCssText from './style.scss?inline';

export const variantId = 'my-title';
export const name = 'My Title Screen';

export const parts: ScreenPartDefinition[] = [
  { id: 'menu', name: 'タイトルメニュー', selector: '.custom-title-menu', allowLayoutEdit: true },
];

export { defaultCssText };

export default function MyTitleScreen(props: TitleScreenProps) {
  const { rootProps } = useScreenParts('title', parts, defaultCssText);
  if (!props.visible) return null;

  return (
    <div {...rootProps}>
      {/* ここに自分の JSX を書きます */}
    </div>
  );
}
```

コードを書く際は、次のポイントに注意してください。

1. **`2560 × 1440 px` を基準にレイアウトする**  
   WebGAL のステージと全画面は `2560 × 1440` の固定キャンバス上で動作するため、`vw` や `vh` ではなく固定の `px` で配置してください。
2. **`dependencies` に React を入れない**  
   実行時はエンジン本体の React 18 がプラグインへ共有され、`vite.config.ts` 側で自動解決されます。React が二重に読み込まれてエラーになるのを防ぐため、`package.json` の `dependencies` には `react` や `react-dom` を入れず、`peerDependencies` と `devDependencies` は `18.x` のままにしてください（別のメジャーバージョンにすると `npm run export` でエラーになります）。
3. **スタイルの分離と画像パスの指定方法**  
   `useScreenParts(screen, parts, defaultCssText)` から返る `{...rootProps}` をルート要素に展開すると、他の画面にスタイルが漏れなくなり、エディターのパーツ選択やホットリロードも有効になります。`src/style.scss` の中では `url('./assets/bg.png')` のような相対パスをそのまま書けますが、TSX コード内で画像パスを扱うときは `resolveAssetUrl('./assets/icon.png')`（または `resolveScreenAssetUrl`）を使ってください。
4. **メニュー画面の下部に `144px` の余白を残す**  
   `save`、`load`、`options`、`flowchart`、`extra` といった画面では、画面下部にフローティングの `menuPanel` が重なります。ボタンやページ切り替えが隠れないよう、コンテンツ下部に十分な余白（推奨 `padding-bottom: 144px;`）を確保してください。
5. **SDK に用意されている機能とアイコンを使う**  
   `@webgal/ui-sdk` にはリッチテキストの解析・描画関数（`parseRichTextLines`、`renderRichText`、`renderRichTextLines`）や標準アイコンが含まれており、`@icon-park/react` からインポートしたアイコンもエンジン内蔵のものが再利用されるため、プラグインの容量を増やさずに使えます。
