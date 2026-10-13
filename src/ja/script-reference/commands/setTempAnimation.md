# setTempAnimation

一時アニメーションを設定します。

## ステートメント内容

`setAnimation` がアニメーションファイルを読み込むのとは異なり、`setTempAnimation` ではコード内で直接多段アニメーションを定義できます。詳しくは[アニメーションリファレンス](../others/animation-reference.md)を参照してください。
ステートメント内容の形式は、アニメーションファイルの 1 行形式、つまり `[{},{},{}]` です。[新しいアニメーション形式](../others/animation-reference.md#新しいアニメーション形式-animation-v2)の 1 行形式 `{"keyframes":[{},{}]}` も使用できます。

:::info
アニメーションを再利用したい場合は、[setAnimation](setAnimation.md) コマンドを使用してください。
単段アニメーションだけを設定したい場合は、[setTransform](setTransform.md) コマンドを使用してください。
:::

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
; 閃光弾アニメーション
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa;
```

## パラメータ

<!-- @include: ../arguments/target.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa;
```

<!-- @include: ../arguments/transformFrom.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa -transformFrom=default;
```

<!-- @include: ../arguments/writeDefault.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"scale":{"x":2,"y":2},"duration":10000}] -target=aaa -keep -next;
キャラA: 1行目;
キャラA: 2行目;
キャラA: 3行目;
; aaa のステートメントをまたぐアニメーションを中断し、新しいアニメーションを再生します
setTempAnimation:[{"duration":0},{"scale":{"x":1,"y":1},"duration":10000}] -target=aaa -keep -next;
```

<!-- @include: ../arguments/parallel.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
; 移動と明るさの変化を同時に行う
setTransform:{"position":{"x":-500}} -target=aaa -duration=1000 -next;
setTempAnimation:[{"duration":0},{"brightness":0.5,"duration":1000}] -target=aaa -parallel;
```

### relative
- 真偽値

相対アニメーションにするかどうか。[相対アニメーション](../others/animation-reference.md#相対アニメーション)を参照してください。

内容がキーフレーム配列の場合、`-relative` または `-inherit` を付けると、アニメーションは新しい形式のルールで実行されます（キーフレームは引き続き `duration` を使用します）。内容が新しい形式のオブジェクトの場合、この引数はオブジェクトの `relative` を上書きします。

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
; 現在の位置から右へ 200 移動
setTempAnimation:[{"duration":0},{"position":{"x":200},"duration":500}] -target=aaa -relative;
```

### inherit
- 真偽値

キーフレーム継承を有効にするかどうか。[キーフレーム継承](../others/animation-reference.md#キーフレーム継承)を参照してください。`-relative` と同様に、この引数を付けるとキーフレーム配列は新しい形式のルールで実行されます。

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"position":{"x":200},"duration":500},{"alpha":0.5,"duration":500}] -target=aaa -relative -inherit;
```
