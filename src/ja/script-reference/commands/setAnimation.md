# setAnimation

アニメーションを設定します。

## ステートメント内容

カスタムアニメーション名を指定し、指定した対象のステージオブジェクトに多段アニメーションを実行させます。
詳しくは[カスタムアニメーション](../../webgal-script/animation.md#カスタムアニメーション)と[アニメーションリファレンス](../others/animation-reference.md)を参照してください。

:::info
スクリプト内で直接多段アニメーションを設定したい場合は、[setTempAnimation](setTempAnimation.md) コマンドを使用してください。
単段アニメーションだけを設定したい場合は、[setTransform](setTransform.md) コマンドを使用してください。
:::

``` webgal
setAnimation:shake -target=aaa;
```

## パラメータ

<!-- @include: ../arguments/target.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setAnimation:shake -target=aaa;
```

<!-- @include: ../arguments/writeDefault.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setAnimation:shake -target=aaa -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
``` webgal
; とても長いアニメーションだと仮定
setAnimation:shake -target=aaa -keep -next;
キャラA: 1行目;
キャラA: 2行目;
キャラA: 3行目;
; aaa のステートメントをまたぐアニメーションを中断し、新しいアニメーションを再生します
setAnimation:rotate -target=aaa -keep -next;
```
