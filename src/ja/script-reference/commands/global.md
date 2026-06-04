# (global)

`global` はコマンドではありません。このページでは、すべてのコマンドで使用できる共通パラメータを説明します。

## パラメータ

### next
- 真偽値

値が `true` の場合、現在のステートメントを実行しながら、`next` が `false` のステートメントに到達するまで後続のステートメントも同時に実行します。

```webgal
label:loop;
;
changeBg:bg.png -next;
changeFigure:1/open_eyes.png -next -id=aaa;
キャラ名:背景、キャラクター、このセリフが同時に表示されます;
;
changeBg:none -next;
changeFigure:none -next -id=aaa;
キャラ名:背景とキャラクターが同時に退場します;
;
jumpLabel:loop;
```

一部のコマンドには `next` パラメータが標準で含まれています。
- bgm
- pixiPerform
- pixiInit
- miniAvatar
- label
- setVar
- unlockCg
- unlockBgm
- filmMode
- playEffect
- setTransition
- applyStyle

一部のコマンドは `next` パラメータと互換性がありません。たとえば `wait` コマンドに `next` を付けると、待機は有効になりません。

### when
- 文字列

条件式を記述します。条件が `true` の場合のみ、現在のステートメントを実行します。

```webgal
label:start;
;
setVar:coin=10;
キャラ名:今は {coin} 枚のコインを持っています。
;
label:buy;
;
jumpLabel:not_enough_coin -when=coin<3;
;
setVar:coin=coin-3;
キャラ名:3 枚でソーダを買いました。残りは {coin} 枚です。;
jumpLabel:buy;
;
label:not_enough_coin;
キャラ名:3 枚のソーダを買うお金がありません。残りは {coin} 枚だけです。;
jumpLabel:start;
```

### continue
- 真偽値

このステートメントの演出が終了した後、プレイヤーがオート再生を有効にしていなくても次のステートメントを自動的に実行します。

```webgal
changeBg:bg.png -next;
changeFigure:1/open_eyes.png -transform={"position":{"x":-500}} -id=aaa -next;
changeFigure:2/open_eyes.png -transform={"position":{"x":500}} -id=bbb;
;
label:loop;
;
setTransform:{"position":{"x":500}} -target=aaa -continue;
setTransform:{"position":{"x":-500}} -target=bbb -continue;
setTransform:{"position":{"x":-500}} -target=aaa -continue;
setTransform:{"position":{"x":500}} -target=bbb -continue;
;
jumpLabel:loop;
```

一部のコマンドには `continue` パラメータが標準で含まれています。
- wait
- intro（`hold` と `userForward` がどちらも `false` の場合）
- playVideo
