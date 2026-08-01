# setTransform

変換とエフェクトを設定します。

## ステートメント内容

[変換・エフェクト](../others/transform-reference.md)の 1 行 JSON 文字列を指定します。

:::info
このコマンドは 1 つのアニメーション片だけを生成します。多段アニメーションを設定する必要がある場合は、[setAnimation](setAnimation.md) または [setTempAnimation](setTempAnimation.md) コマンドを使用してください。
:::

``` webgal
changeFigure:character_a/normal.png -id=aaa;
; 左へ移動
setTransform:{"position":{"x":-500},"saturation":0.8} -target=aaa -duration=500;
; 明るさを下げる
setTransform:{"brightness":0.5,"contrast":1.2} -target=aaa -duration=500;
```

## パラメータ

<!-- @include: ../arguments/target.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500;
```

<!-- @include: ../arguments/duration.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500;
```

<!-- @include: ../arguments/ease.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500 -ease=linear;
```

<!-- @include: ../arguments/writeDefault.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500 -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
``` webgal
; とても長いアニメーションだと仮定
setTransform:{"scale":{"x":2,"y":2}} -target=aaa -duration=10000 -keep -next;
キャラA: 1行目;
キャラA: 2行目;
キャラA: 3行目;
; aaa のステートメントをまたぐアニメーションを中断し、新しいアニメーションを再生します
setTransform:{"scale":{"x":1,"y":1}} -target=aaa -duration=10000 -keep -next;
```
