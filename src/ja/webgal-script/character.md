# キャラクター（合成立ち絵）

1 人のキャラクターに複数の衣装・髪型・表情・アクセサリーがある場合、すべての組み合わせを 1 枚ずつの全身画像として書き出すと、ファイル数もプロジェクト容量も大きく膨らんでしまいます。WebGAL の**キャラクター（合成立ち絵）**機能を使うと、素体・衣装・表情などを個別のパーツ画像に分けたまま `figure.json` で同一キャンバス上に組み立て、`normal`・`smile`・`casual_smile` のようなプリセットを定義して、スクリプトから `character` コマンドで登場やその場での切り替えを行えます。

::: info
キャラクター（合成立ち絵）機能は v4.6.7 から提供されています。
:::

## キャラクター素材の準備

各キャラクターは `game/figure/<キャラクターディレクトリ>/` 配下に置き、定義ファイル `figure.json` と各パーツ画像（サブフォルダ分けも可能）を格納します：

``` text
game/figure/alice/
├── figure.json
├── body/
│   └── base.png
├── outfit/
│   ├── uniform.png
│   └── casual.png
└── face/
    ├── calm.png
    ├── smile.png
    └── blush.png
```

パーツ画像は `png`、`webp`、`jpg`、`jpeg`、`avif`、`bmp`、`svg` に対応しています。キャラクターディレクトリ自体をサブディレクトリに置くことも可能です（例：`game/figure/cast/alice/figure.json` はスクリプトで `character:cast/alice;` と指定します）。なお、`character:none;` は退場を表すため、`figure` 直下のフォルダ名に `none` は使用しないでください。

立ち絵素材の書き出し方には、主に次の 2 通りがあります：

- **同一キャンバスサイズで書き出す**：すべてのパーツを同じキャンバスサイズの透過画像として書き出せば、座標 `(0, 0)` のまま自然に重なります。
- **切り抜きパーツを配置する**：表情差分や小物だけを小さく書き出し、キャラクターエディタのキャンバス上でドラッグして位置・拡大率・回転を合わせます。

## エディタでのキャラクター作成と組み立て

**WebGAL Terre** を使用する場合は、JSON を手書きせず、キャラクターエディタ上で視覚的にレイヤーとプリセットを組み立てられます：

1. **キャラクターの新規作成**：左サイドバーの **キャラクター** タブに切り替え、**新しいキャラクターを作成** をクリックしてフォルダ名（例：`alice`）を入力すると、`game/figure/alice/figure.json` が作成されます。パーツ画像をそのフォルダに入れたうえで `figure.json` を開くと、キャラクターエディタが表示されます。
2. **キャンバス調整とドラッグ配置（左側）**：キャンバス上部のツールバーでキャンバス幅×高さ（最大 `8192 × 8192`）や表示倍率（縮小・**キャンバスに合わせる**・拡大）を調整できます。レイヤーを選択すると、キャンバス上で直接ドラッグして移動・拡大縮小・回転を行えます。ゲームステージ上では、キャンバス全体が通常の画像立ち絵と同様にステージ高さに合わせて等倍スケールされます。
3. **レイヤーの追加と並び替え（右中央）**：**レイヤーを追加** からキャラクターフォルダ内のパーツ画像を追加します。レイヤー一覧は一般的なペイントソフトと同じく**上から下へ前面から背面**の順（上にある行ほど手前）で並んでおり、ドラッグで重なり順を変更したり、目のアイコンで表示・非表示を切り替えて組み合わせを試したりできます。保存時には、`figure.json` の下から上の順へ自動変換されます。
4. **パーツ属性の微調整（右上）**：レイヤーを選択すると、右上パネルで一意な **名前**（プリセットやスクリプトから参照され、変更すると既存プリセットにも自動反映されます）や **素材** の変更、**位置**（`X`・`Y`）、**スケール**（`X`・`Y`）、**回転**（ラジアン）、固定 **サイズ**（`W`・`H`）の数値入力が行えます。
5. **表情・衣装プリセットの作成（右下）**：レイヤー一覧で組み合わせたいパーツだけを表示状態にして（例：`base`・`uniform`・`smile`）、右下パネルの **新規プリセット** をクリックすると、現在表示中のレイヤー構成が新しいプリセットとして保存されます。左側でプリセットを選ぶとキャンバスに反映され、右上の入力欄でプリセット名（`normal`、`smile`、`casual_smile` など）の変更、下のチェックボックスで含めるレイヤーの追加・解除が行えます。

## figure.json を直接記述する

グラフィカルエディタを使わない場合や、PSD 書き出しスクリプトなどから自動生成する場合は、キャラクターディレクトリ内に `figure.json` を直接作成できます：

``` json
{
  "version": 1,
  "canvas": { "width": 1200, "height": 2000 },
  "components": [
    { "name": "base", "src": "body/base.png", "x": 0, "y": 0 },
    { "name": "uniform", "src": "outfit/uniform.png", "x": 120, "y": 420 },
    { "name": "casual", "src": "outfit/casual.png", "x": 110, "y": 410 },
    { "name": "calm", "src": "face/calm.png", "x": 430, "y": 210 },
    { "name": "smile", "src": "face/smile.png", "x": 430, "y": 210 },
    { "name": "blush", "src": "face/blush.png", "x": 430, "y": 210 }
  ],
  "presets": {
    "normal": ["base", "uniform", "calm"],
    "smile": ["base", "uniform", "smile"],
    "casual_smile": ["base", "casual", "smile"]
  }
}
```

`figure.json` を手書きする際は、`components` 配列および各プリセットのパーツ名配列がどちらも**下から上（背面から前面）**の順である点に注意してください（たとえば `["base", "uniform", "smile"]` は素体 `base` の上に衣装 `uniform`、一番上に表情 `smile` を描画します）。`canvas` を省略した場合は、読み込み済みパーツの外接矩形からキャンバスサイズが自動算出されます。全フィールドの仕様は [character コマンドリファレンス](../script-reference/commands/character.md#キャラクター定義ファイル-figure-json)を参照してください。

## シーンでキャラクターを使用する

### グラフィカルエディタ

シーンのグラフィカルエディタ上部にある **ステートメントを追加** から **キャラクターの切り替え** をクリックします：

- 対象の **キャラクター** を選ぶと、標準では **プリセットを使用** モードになっており、`figure.json` で定義したプリセット（またはデフォルトプリセット）をドロップダウンから選択できます。
- プリセットを作らずその場限りの組み合わせを出したい場合は、**カスタムレイヤー** をオンにして、**レイヤー構成** で複数レイヤーを選択するかカンマ区切りでパーツ名（例：`base,casual,blush`）を入力します。
- 同じパネルで **キャラクター位置**、任意の **キャラクターID**、`z-index`、エフェクトエディタによる表示効果の設定や、**キャラクターをクリア** による退場も設定できます。

### スクリプト記述

スクリプトエディタで `character:` と入力すると、キャラクターディレクトリ・`.プリセット名`・`-components` のパーツ名が自動補完されます。以下は一連の演出例です：

``` webgal
; 左側に登場させる（プリセット省略時は figure.json の最初の非空プリセットを使用）
character:alice -left -next;
アリス:おはよう、待った？;

; 同じキャラクター・同じ配置でのプリセット切り替え：登場・退場アニメを再生せずその場で更新
character:alice.smile -left -next;
アリス:その顔、もしかして起きたばかり？;

; -components で下から上の順にパーツを直接組み合わせて表示する
character:alice -left -components=base,casual,blush -next;
アリス:私服だとまだちょっと落ち着かないね……;

; キャラクターを退場させる
character:none -left;
```

::: tip
`figure.json` にプリセットが 1 つも定義されていない（またはすべて空の）場合、`character:alice;` を実行すると `components` 配列に定義された順ですべてのパーツが重ねて描画されます。
:::

## 配置・自由 ID・アニメーションとの連携

合成立ち絵は `changeFigure` と共通のステージ位置および `id` の仕組みを使用します：

- **プリセット配置**：デフォルトの中央（`fig-center`）のほか、`-left`、`-right`、中心揃えの `-left13`、`-right13`、`-left14`、`-right14` に対応しています。
- **自由 ID**：`-id` で個別の識別子を指定すると、互いに置き換わることなく任意の人数を同時にステージへ配置できます。
- **その場更新での状態維持**：対象スロット（または `id`）が同じキャラクター・同じ基本配置である限り、`.プリセット名` や `-components` を切り替えても、現在の変換・フィルター・レイヤー順（`zIndex`）・ブレンドモード・退場アニメーション設定・再生中のアニメーションはすべて維持されます。
- **アニメーションと変換の適用**：場に出ている合成立ち絵は、`fig-left`、`fig-center`、またはカスタム `id` を `-target` に指定して [setTransform](../script-reference/commands/setTransform.md)、[setAnimation](../script-reference/commands/setAnimation.md)、[setTempAnimation](../script-reference/commands/setTempAnimation.md) で動かせます。プリセット切り替えと同時に `-transform` を渡すことも可能です（`-transformFrom=current` を併用すると、現在の位置やスケールを保ったまま一部のプロパティだけを変更できます）：

``` webgal
; カスタム id と退場アニメーションを指定して登場
character:alice -id=alice -left -transform={"position":{"x":-120}} -exit=exit-to-left -next;

; 合成立ち絵にプリセットの揺れアニメーションを再生
setAnimation:shake-v2 -target=alice -next;
アリス:わっ、びっくりした！;

; 元の位置 x=-120 を維持したまま、プリセット切り替えと同時に明るさだけを下げる
character:alice.calm -id=alice -left -transform={"brightness":0.7} -transformFrom=current -duration=300 -next;

; 登場時に設定した exit-to-left で退場する
character:none -id=alice;
```

## 通常の立ち絵（changeFigure）との違い

- **スロットの共有と退場の独立**：`character` と [changeFigure](../script-reference/commands/changeFigure.md) はステージ位置と `id` を共有します。同じ位置や同じ `id` に `character` を配置すると既存の通常立ち絵は置き換えられ、逆も同様です。一方、`character:none` は合成立ち絵のみを閉じ、`changeFigure:none` は通常立ち絵のみを閉じます。
- **使い分け**：複数レイヤーに分割された静止画キャラクターには `character` が適しています。Live2D / Spine モデル立ち絵や、単枚画像の口パク・まばたき差分（`mouthOpen`、`eyesOpen` など）を使う立ち絵には、引き続き `changeFigure` と [changeFigureDiff](../script-reference/commands/changeFigureDiff.md) を使用してください。

`character` コマンドの全パラメータの詳細については、[character コマンドリファレンス](../script-reference/commands/character.md)を参照してください。
