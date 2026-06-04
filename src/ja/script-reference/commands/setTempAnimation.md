# setTempAnimation

一時アニメーションを設定します。

## ステートメント内容

`setAnimation` がアニメーションファイルを読み込むのとは異なり、`setTempAnimation` ではコード内で直接多段アニメーションを定義できます。詳しくは[アニメーションリファレンス](../others/animation-reference.md)を参照してください。
ステートメント内容の形式は、アニメーションファイルの 1 行形式、つまり `[{},{},{}]` です。

:::info
アニメーションを再利用したい場合は、[setAnimation](setAnimation.md) コマンドを使用してください。
単段アニメーションだけを設定したい場合は、[setTransform](setTransform.md) コマンドを使用してください。
:::

```webgal
changeFigure:1/open_eyes.png -id=aaa;
; 閃光弾アニメーション
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa;
```

## パラメータ

<!-- @include: ../arguments/target.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa;
```

<!-- @include: ../arguments/writeDefault.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"scale":{"x":2,"y":2},"duration":10000}] -target=aaa -keep -next;
キャラA: 1行目;
キャラA: 2行目;
キャラA: 3行目;
; aaa のステートメントをまたぐアニメーションを中断し、新しいアニメーションを再生します
setTempAnimation:[{"duration":0},{"scale":{"x":1,"y":1},"duration":10000}] -target=aaa -keep -next;
```
