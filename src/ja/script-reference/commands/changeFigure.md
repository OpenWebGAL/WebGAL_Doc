# changeFigure

立ち絵の登場、置き換え、退場、パラメータ設定を行う 4 in 1 コマンドです。

## ステートメント内容

立ち絵のパスを指定します。ファイルパスが空、または `none` の場合は立ち絵が退場します。
詳しくは[背景と立ち絵](../../webgal-script/bg-and-figure.md)を参照してください。

``` webgal
; 立ち絵が存在しない場合、この文は立ち絵を登場させます。
changeFigure:1/open_eyes.png;
; すでに立ち絵が存在する場合、この文は立ち絵を置き換えます。
changeFigure:2/open_eyes.png;
; none を指定するか空にした場合、この文は立ち絵を退場させます。
changeFigure:none;
```

立ち絵のパスと `id` が同じままの場合、登場・退場アニメーションは発火せず、新しいパラメータが対象立ち絵に適用されます。

``` webgal
; Live2D 立ち絵を登場させる
changeFigure:character_a/model.json -id=aaa;
; Live2D 立ち絵のモーションと表情を変更する
changeFigure:character_a/model.json -id=aaa -motion=smile -expression=sad;
```

現在 WebGAL は画像立ち絵、Live2D 立ち絵、Spine 立ち絵に対応しています。

### 画像立ち絵

Live2D または Spine ではない形式は、画像立ち絵として読み込まれます。

``` webgal
changeFigure:1/open_eyes.png;
```

### Live2D 立ち絵

:::info
Live2D を使用するには準備が必要です。詳しくは [Live2Dについて](../../live2D.md) を参照してください。
:::

Live2D モデル（.json/.model3.json）のパスを指定すると、WebGAL は Live2D モデルを読み込みます。

``` webgal
changeFigure:character_a/model.json;
```

### Spine 立ち絵

:::info
Spine を使用するには準備が必要です。詳しくは [Spineについて](../../spine.md) を参照してください。
:::

Spine モデルが .skel 形式の場合は、そのファイルパスを直接指定できます。

``` webgal
changeFigure:character_x/model.skel;
```

Spine モデルが .json 形式の場合は、Live2D モデルとして誤って読み込まれないように、パスの後ろで立ち絵タイプを Spine と指定する必要があります。

``` webgal
changeFigure:character_x/model.json?type=spine;
```

## パラメータ

<!-- @include: ../arguments/transform.md -->
``` webgal
changeFigure:1/open_eyes.png -transform={"position":{"x":-50,"y":-20},"rotation":0.1,"scale":{"x":1.2,"y":1.2},"brightness":0.5,"blur":10};
```

<!-- @include: ../arguments/enter.md -->
``` webgal
changeFigure:1/open_eyes.png -enter=enter-from-left;
```

<!-- @include: ../arguments/exit.md -->
``` webgal
changeFigure:1/open_eyes.png -exit=exit-to-right;
```

<!-- @include: ../arguments/duration.md -->
デフォルトの登場アニメーションに適用されます。デフォルト値は 300 です。
``` webgal
changeFigure:1/open_eyes.png -duration=200;
```

<!-- @include: ../arguments/ease.md -->
デフォルトの登場アニメーションに適用されます。
``` webgal
changeFigure:1/open_eyes.png -ease=easeOut;
```

### enterDuration
- 数値
- 単位: ミリ秒
- 範囲: 0 から正の無限大

登場アニメーションの持続時間です。省略した場合は `duration` の値を使用します（デフォルト 300）。

``` webgal
changeFigure:1/open_eyes.png -enterDuration=200;
```

### exitDuration
- 数値
- 単位: ミリ秒
- 範囲: 0 から正の無限大

退場アニメーションの持続時間です。省略した場合のデフォルト値は 450 です。

``` webgal
changeFigure:1/open_eyes.png -exitDuration=300;
```

### left / right
- 真偽値

`left` が `true` の場合、新しい立ち絵はステージ左側に登場し、オブジェクト座標原点も左にずれます。
`right` が `true` の場合、新しい立ち絵はステージ右側に登場し、オブジェクト座標原点も右にずれます。
`id` が省略されている、または空文字列の場合、`left` はデフォルト id `fig-left` を、`right` は `fig-right` を付与します。

::: warning
これらのパラメータは、立ち絵の登場時または置き換え時にのみ有効です。すでに場に出ている立ち絵の座標を変更する場合は、`setTransform`、`setAnimation`、`setTempAnimation` などのコマンドを使用してください。
:::

``` webgal
changeFigure:1/open_eyes.png -left;
changeFigure:1/open_eyes.png -right;
```

### id
- 文字列

この立ち絵の一意な識別子として名前を指定し、自由立ち絵として扱います。

このパラメータを省略した場合、または値が空文字列の場合:
- `left` が `true` なら、デフォルト id は `fig-left`
- `right` が `true` なら、デフォルト id は `fig-right`
- `left` と `right` がどちらも `false` なら、デフォルト id は `fig-center`

``` webgal
; 異なる id を指定すると、初期位置が同じでも立ち絵は互いに置き換わりません。
changeFigure:1/open_eyes.png -id=aaa;
changeFigure:2/open_eyes.png -id=bbb;
; -left -right は初期位置だけに関係し、-id と併用できます。
changeFigure:3/open_eyes.png -id=ccc -left;
```

### zIndex
- 数値（整数）
- 範囲: 0 から正の無限大

立ち絵のレイヤーです。値が大きいほど上に表示されます。同じ値の場合、後から登場した立ち絵が上に表示されます。
省略した場合のデフォルト値は 0 です。

``` webgal
; 立ち絵 aaa は立ち絵 bbb より上に表示されます。
changeFigure:1/open_eyes.png -id=aaa -zIndex=2;
changeFigure:2/open_eyes.png -id=bbb -zIndex=1;
```

### blendMode
- 文字列
- デフォルト値: `normal`

立ち絵のブレンドモードを設定します。立ち絵の登場時または置き換え時にのみ有効です。

``` webgal
changeFigure:1/open_eyes.png -id=aaa -blendMode=add;
```

### clear / none
- 真偽値

ステートメント内容を空文字列に置き換えます。

``` webgal
changeFigure:1/open_eyes.png -clear;
changeFigure:1/open_eyes.png -none;
```

### animationFlag
- 文字列

画像立ち絵の差分アニメーションフラグです。現在のクラウドエンジンはこの値を `figureAssociatedAnimation` に書き込みますが、口パク同期とまばたきアニメーションは実際には対象立ち絵 id に基づき、`mouthOpen`、`mouthHalfOpen`、`mouthClose`、`eyesOpen`、`eyesClose` などの差分リソースを読み取ります。`animationFlag` 自体はまだ後続ロジックでは読み取られていません。

### mouthOpen / mouthHalfOpen / mouthClose
- 文字列

画像立ち絵の口開き、半開き、口閉じ差分パスを指定します。

``` webgal
changeFigure:1/open_eyes.png -mouthOpen=1/open_mouth.png;
changeFigure:1/open_eyes.png -mouthHalfOpen=1/halfopen_mouth.png;
changeFigure:1/open_eyes.png -mouthClose=1/closed_mouth.png;
```

### eyesOpen / eyesClose
- 文字列

画像立ち絵の目開き、目閉じ差分パスを指定します。

``` webgal
changeFigure:1/open_eyes.png -eyesOpen=1/open_eyes.png;
changeFigure:1/open_eyes.png -eyesClose=1/closed_eyes.png;
```

### motion
- 文字列

Live2D または Spine 立ち絵では、モーション名を指定し、対応するモーションアニメーションを再生します。

``` webgal
changeFigure:character_a/model.json -motion=sad;
changeFigure:character_a/model.json -motion=smile;
```

### skin
- 文字列

Spine 立ち絵では、スキン名を指定し、対応する skin に切り替えます。
Spine のアニメーションとスキンを同時に切り替える場合は、`motion` でアニメーションを、`skin` でスキンを指定します。

``` webgal
changeFigure:character_x/model.json?type=spine -skin=default;
changeFigure:character_x/model.json?type=spine -motion=anime_00_wait -skin=03_surprise;
```

### expression
- 文字列

Live2D 立ち絵では、表情名を指定して対応する表情に切り替えます。

``` webgal
changeFigure:character_a/model.json -expression=smile;
changeFigure:character_a/model.json -expression=sad;
```

### bounds
- 文字列

Live2D 立ち絵では number[4] 配列を指定し、立ち絵の表示領域を拡張または縮小します。
右方向と下方向を正とし、順序は `左,上,右,下` です。
x 軸は右方向が正、y 軸は下方向が正です。

::: warning
このパラメータは、立ち絵の登場時または置き換え時にのみ有効です。
:::

``` webgal
; 左右に 300 ピクセル拡張
changeFigure:character_a/model.json -bounds=-300,0,300,0;
```

### blink
- 文字列

Live2D 立ち絵では、まばたきパラメータを制御する JSON 文字列を指定します。
通常すべてのプロパティを書く必要はありません。省略されたプロパティは前回の設定を継承し、立ち絵登場時はデフォルト値を継承します。

パラメータ:
- `"blinkInterval"`: 数値、まばたき間隔、単位ミリ秒、デフォルト値 24 時間
- `"blinkIntervalRandom"`: 数値、まばたき間隔のランダム値、単位ミリ秒、デフォルト値 1000
- `"closingDuration"`: 数値、目を閉じる時間、単位ミリ秒、デフォルト値 100
- `"closedDuration"`: 数値、閉眼時間、単位ミリ秒、デフォルト値 50
- `"openingDuration"`: 数値、目を開く時間、単位ミリ秒、デフォルト値 150

``` webgal
changeFigure:character_a/model.json -blink={"blinkInterval":5000,"blinkIntervalRandom":2000,"closingDuration":100,"closedDuration":50,"openingDuration":150};
```

### focus
- 文字列

Live2D 立ち絵では、注視パラメータを制御する JSON 文字列を指定します。
通常すべてのプロパティを書く必要はありません。省略されたプロパティは前回の設定を継承し、立ち絵登場時はデフォルト値を継承します。
x 軸は右方向が正、y 軸は上方向が正です。

パラメータ:
- `"x"`: 数値、注視点の x 座標、範囲 -1 から 1、デフォルト値 0
- `"y"`: 数値、注視点の y 座標、範囲 -1 から 1、デフォルト値 0
- `"instant"`: 真偽値、注視点へ即座に向くかどうか、デフォルト値 false

``` webgal
changeFigure:character_a/model.json -focus={"x":0.5,"y":0.2,"instant":false};
```
