# character

複数パーツを重ね合わせた合成立ち絵を表示、その場で切り替え、または退場させます。

## ステートメント内容

`figure` フォルダ配下のキャラクターディレクトリパス（`figure.json` を含むフォルダ）を指定します。末尾に `.プリセット名` を付けると表示するプリセットを指定でき、内容を空にするか `none` を指定すると合成立ち絵が退場します。一連の使い方は[キャラクター（合成立ち絵）](../../webgal-script/character.md)を参照してください。

``` webgal
; 合成立ち絵を表示する（デフォルトでは figure.json の最初の非空プリセットを使用）
character:alice;
; smile プリセットに切り替える
character:alice.smile;
; サブディレクトリにも対応（最後のパス要素内の最後の "." のみがプリセット区切りになる）
character:cast/alice.smile;
; 合成立ち絵を退場させる
character:none;
```

描画されるパーツレイヤーは次の優先順で決まります（いずれも下から上の順）：

1. `-components` パラメータが指定されている場合は、そのパーツ一覧を描画し、ステートメント内容の `.プリセット名` は無視されます。
2. `.プリセット名` が指定されている場合は、`figure.json` の該当プリセットのパーツ一覧を描画します。プリセットが存在しないか空の場合はコンソールに警告を出し、デフォルト表示にフォールバックします。
3. いずれも指定されていない場合は、`figure.json` の最初の非空プリセットを使用します。有効なプリセットが定義されていない場合は、`components` 配列の定義順にすべてのパーツを描画します。

対象の位置（または `id`）にすでに**同じキャラクターが同じ基本配置で**出ている場合、プリセットやパーツの切り替えはその場での更新となり、登場・退場アニメーションは再生されません。既存の変換・エフェクト、レイヤー（`zIndex`）、ブレンドモード、退場設定、再生中のアニメーションはすべて保持され、同時に `-transform`、`-zIndex`、`-blendMode`、`-exit` を指定した場合はそのまま反映されます。対象スロットが空の場合、別のキャラクターに変わる場合、または `-left`・`-right` などの基本配置が変わる場合は、以前の効果がリセットされ、登場または置き換えとして処理されます。

``` webgal
character:alice -id=alice -left -exit=exit-to-left;
; 位置・変換・退場設定を保ったまま表情プリセットを切り替える
character:alice.smile -id=alice -left;
; 合成立ち絵も setTransform、setAnimation、setTempAnimation の対象にできる
setAnimation:shake -target=alice;
; 設定済みの exit-to-left で退場する
character:none -id=alice;
```

::: info
- 合成立ち絵は v4.6.7 から利用できます。
- `character` は [changeFigure](changeFigure.md) とステージ位置および `id` 名を共有します。同じ位置や同じ `id` に合成立ち絵を配置すると既存の通常立ち絵は置き換えられ、逆も同様です。ただし `character:none` は合成立ち絵のみを閉じ、`changeFigure:none` は通常立ち絵のみを閉じます。
- 単枚画像の口パク・まばたきパラメータ（`mouthOpen`、`eyesOpen` など）および Live2D/Spine 用パラメータ（`motion`、`skin`、`expression`、`bounds`、`blink`、`focus`）は合成立ち絵ではサポートされておらず、指定しても無視されコンソールに警告が表示されます。
:::

## キャラクター定義ファイル（figure.json）

各合成立ち絵は `game/figure/<キャラクターディレクトリ>/figure.json` に対応します。WebGAL Terre エディタ左サイドバーの**キャラクター**タブからキャラクターを新規作成し、パーツレイヤーの追加、位置・拡大率・回転の調整、表情や衣装プリセットの編集を視覚的に行えます。直接 `figure.json` を記述することもできます：

``` json
{
  "version": 1,
  "canvas": { "width": 1200, "height": 2000 },
  "components": [
    { "name": "base", "src": "body/base.png", "x": 0, "y": 0 },
    { "name": "uniform", "src": "outfit/uniform.png", "x": 120, "y": 420 },
    { "name": "casual", "src": "outfit/casual.png", "x": 110, "y": 410 },
    { "name": "calm", "src": "face/calm.png", "x": 430, "y": 210 },
    { "name": "smile", "src": "face/smile.png", "x": 430, "y": 210 }
  ],
  "presets": {
    "normal": ["base", "uniform", "calm"],
    "smile": ["base", "uniform", "smile"],
    "casual_smile": ["base", "casual", "smile"]
  }
}
```

| フィールド | 説明 |
| :-- | :-- |
| `version` | テンプレート形式のバージョン。`1` 固定です |
| `canvas` | 省略可。キャラクターキャンバスのピクセルサイズ `{"width": 幅, "height": 高さ}`（最大 `8192`）。省略時は読み込み済みパーツの外接矩形から自動算出され、キャンバス全体は画像立ち絵と同様にステージ高さに合わせて等倍スケールされます |
| `components` | パーツ定義の配列。**下から上**（背面から前面）の順に並べます |
| `presets` | 省略可。プリセット名をキー、**下から上**の順に並べたパーツ `name` 配列を値とするオブジェクト |

`components` の各要素では次のフィールドを指定できます：

| フィールド | 説明 |
| :-- | :-- |
| `name` | 必須。`presets` や `-components` から参照する一意なパーツ名 |
| `src` | 必須。キャラクターディレクトリからの相対画像パス（`png`、`webp`、`jpg`、`jpeg`、`avif`、`bmp`、`svg` に対応。ディレクトリ外への参照は不可） |
| `x`、`y` | 省略可。キャンバス上でのパーツ左上のピクセル座標（デフォルト `0`） |
| `width`、`height` | 省略可。キャンバス上での描画サイズを直接指定します（両方とも正の数値のとき有効で、拡大率より優先されます） |
| `scale`、`scaleX`、`scaleY` | 省略可。パーツの拡大率（デフォルト `1`）。`scaleX`・`scaleY` は各軸で `scale` を上書きします |
| `rotation` | 省略可。パーツ中心を基準とした時計回りの回転角（ラジアン、デフォルト `0`） |

## パラメータ

### components
- 文字列

下から上の順に重ねて描画するパーツ `name` をカンマ区切りで指定します。このパラメータを指定した場合、ステートメント内容の `.プリセット名` は無視されます。

``` webgal
character:alice -components=base,casual,smile;
```

### transform
- 文字列

合成立ち絵のステージ上の変換とフィルターエフェクトを制御する JSON 文字列を指定します。詳しくは[変換・エフェクトリファレンス](../others/transform-reference.md)を参照してください。登場時・置き換え時だけでなく、同じキャラクターのその場での更新時にも有効です（ただし登場・置き換え時に `enter` でカスタム登場アニメーションを指定した場合は効果を持ちません）。

``` webgal
character:alice -transform={"position":{"x":-50,"y":0},"scale":{"x":1.1,"y":1.1}};
```

### transformFrom
- 文字列
- 指定可能な値：`current`、`default`
- デフォルト値：`default`

`transform` や登場・退場アニメーションに書かれていない[変換・エフェクト](../others/transform-reference.md)プロパティの扱いを指定します：
- `default`：書かれていないプロパティはデフォルト値にリセットされます。
- `current`：現在の変換を起点とし、書かれたプロパティのみを変更して他のプロパティは現在の値を保持します。

``` webgal
character:alice -id=alice -transform={"position":{"x":-200}};
; x=-200 を保ったまま、明るさだけを 0.6 に変更する
character:alice.smile -id=alice -transform={"brightness":0.6} -transformFrom=current;
```

<!-- @include: ../arguments/enter.md -->
``` webgal
character:alice -enter=enter-from-left;
```

<!-- @include: ../arguments/exit.md -->
``` webgal
character:alice -exit=exit-to-right;
```

<!-- @include: ../arguments/duration.md -->
デフォルトの登場アニメーションおよび `transform` のトランジションに適用されます。デフォルト値は 300 です。
``` webgal
character:alice -duration=200;
```

<!-- @include: ../arguments/ease.md -->
デフォルトの登場アニメーションおよび `transform` のトランジションに適用されます。
``` webgal
character:alice -ease=easeOut;
```

### enterDuration
- 数値
- 単位: ミリ秒
- 範囲: 0 から正の無限大

登場アニメーションの持続時間です（`transform` トランジション時も指定があれば使用されます）。省略した場合は `duration` の値を使用します（デフォルト 300）。

``` webgal
character:alice -enterDuration=200;
```

### exitDuration
- 数値
- 単位: ミリ秒
- 範囲: 0 から正の無限大

退場アニメーションの持続時間です。省略した場合のデフォルト値は 450 です。

``` webgal
character:alice -exitDuration=300;
```

### left / right
- 真偽値

`left` が `true` の場合はステージ左側に登場し、オブジェクト座標原点も左にずれます（`id` 省略時のデフォルト id は `fig-left`）。`right` が `true` の場合はステージ右側に登場します（`id` 省略時のデフォルト id は `fig-right`）。同じ `id` のキャラクターの配置を変更すると置き換えが発生し、以前の効果がリセットされます。

``` webgal
character:alice -left;
character:bob -right;
```

### left13 / right13 / left14 / right14
- 真偽値

合成立ち絵の中心を基準に、ステージ左から 1/3、右から 1/3、左から 1/4、右から 1/4 の位置に配置します。`id` を省略した場合、デフォルト id として `fig-left13`、`fig-right13`、`fig-left14`、`fig-right14` が付与されます。

``` webgal
character:alice -left13;
character:bob -right13;
```

### id
- 文字列

合成立ち絵の一意な識別子を指定します。位置パラメータと併用して初期位置を指定することもでき、省略時は位置に応じたデフォルト id（`fig-center`、`fig-left`、`fig-right` など）が付与されます。

``` webgal
character:alice -id=alice -left;
character:alice.smile -id=alice -left;
character:none -id=alice;
```

### zIndex
- 数値（整数）
- 範囲: 0 から正の無限大

立ち絵のレイヤー順です。値が大きいほど前面に表示され、同じ値の場合は後から登場した立ち絵が前面になります。デフォルト値は 0 で、登場時とその場での更新時の両方で変更できます。

``` webgal
character:alice -id=alice -zIndex=2;
```

### blendMode
- 文字列
- デフォルト値: `normal`

合成立ち絵のブレンドモードを設定します。登場時とその場での更新時の両方で有効です。

``` webgal
character:alice -id=alice -blendMode=add;
```

### clear
- 真偽値

ステートメント内容を空文字列として扱い、対象位置または `id` の合成立ち絵を退場させます。

``` webgal
character:alice -left -clear;
```
