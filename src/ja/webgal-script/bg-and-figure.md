# 背景と立绘

## 背景画像と立ち絵の変更

WebGAL が背景画像と立ち絵を読み取れるようにするには、背景画像を `background` フォルダーに配置し、立ち絵を `figure` フォルダーに配置する必要があります。

次に、次の簡単なステートメントを使用して、現在表示されている背景画像と立ち絵を変更します。

``` ws
changeBg:testBG03.jpg; // 背景画像を変更する
changeFigure:testFigure02.png; // 立ち絵を変更する
changeBg:none; // 背景を表示しない
changeFigure:none; // 立ち絵を表示しない
```

背景画像または立ち絵を変更した後、次のステートメントを実行するためにマウスをもう一度クリックする必要があります。背景画像と立ち絵を変更した直後に次のステートメントの内容を実行したい場合は、`-next` を使用してください。

``` ws
changeBg:testBG03.jpg -next; // 背景画像を変更する
changeFigure:testFigure02.png -next; // 立ち絵を変更する
一色:先輩、ありがとうございます！;
```

こうしたら、ゲームは背景画像または立ち絵を変更した直後に、次のステートメントを実行します。

## 立ち絵を異なる位置に配置する

3つの異なる位置に立ち絵を配置することができます。立ち絵を配置するステートメントに、パラメータとして、位置を追加するだけです。

``` ws
changeFigure:testFigure03.png -left;
changeFigure:testFigure04.png;
changeFigure:testFigure05.png -right;
```

上記のは、左、中央、右の3つの位置に3つの異なる立ち絵を配置しています。3つの異なる位置の立ち絵は互いに独立しているため、クリアする必要がある場合は、別々にクリアする必要があります。

``` ws
changeFigure:none -left;
changeFigure:none;
changeFigure:none -right;
```

立ち絵を変更した直後にステートメントを実行したい場合、`-next` を使用してください。

``` ws
changeFigure:testFigure03.png -left -next;
changeFigure:testFigure04.png -next;
changeFigure:testFigure03.png -right -next;
```

## ID 付きの立ち絵

立ち絵をより正確に制御したい場合は、立ち絵に `id` を指定することがお勧めです。

``` ws
; // ID 付きの立ち絵を表示する
changeFigure:testFigure03.png -id=test1;
; // ID で立ち絵を表示しない
changeFigure:none -id=test1;
```

::: tip
ID 付きの立ち絵の位置をリセットしたい場合は、まず表示しないようにしてから再度表示してください。
:::

## ミニアバターを配置する

多くのゲームでは、テキストボックスの左下隅にミニアバターを配置できます。このエンジンで使用される構文は次のとおりです。

``` ws
; // minipic_test.png をミニアバターとして表示する
miniAvatar:minipic_test.png;
; // ミニアバターを表示しない
miniAvatar:none;
```

## Unlock CG for appreciation

Use `unlockCg` to unlock a CG for appreciation.

``` ws
; // Unlock the CG and give it a name
unlockCg:xgmain.jpeg -name=Starlight Café and the Butterfly of Death -series=1;

```

The `-series` parameter is optional, and represents which series the current CG belongs to. Tachis from the same series will be shown together later (i.e. shown as switchable CGs from the same series).
