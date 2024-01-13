# 背景と立ち絵

## 背景/立ち絵の変更

WebGALで背景と立ち絵を読み込むには、背景画像は`background`フォルダに、立ち絵画像は`figure`フォルダに配置する必要があります。

次に、以下の簡単な文で現在表示されている背景画像と立ち絵を変更することができます。

``` ws
changeBg:testBG03.jpg; // 背景を変更
changeFigure:testFigure02.png; // 立ち絵を変更
changeBg:none; // 背景を閉じる
changeFigure:none; // 立ち絵を閉じる
```

背景画像や立ち絵を変更した後、次の会話を表示するために再度マウスをクリックする必要があることに気付くかもしれません。背景/立ち絵を変更した後、すぐに次の文の内容を実行したい場合は、`-next`パラメータを使用してください。

``` ws
changeBg:testBG03.jpg -next;
changeFigure:testFigure02.png -next; // 立ち絵を変更
一色:先輩ありがとう！;
```

このようにすると、背景/立ち絵の置き換え後にプログラムはすぐに次の文を実行します。

## 立ち絵を異なる位置に配置する

現在、ページの3つの異なる位置に異なる立ち絵を配置できます。立ち絵を配置する文に配置する位置を追加するだけで済みます。例を以下に示します。

``` ws
changeFigure:testFigure03.png -left;
changeFigure:testFigure04.png;
changeFigure:testFigure03.png -right;
```

上記の3行は、それぞれ左、中央、右の3つの異なる位置に対応しています。3つの異なる位置の立ち絵は相互に独立しているため、立ち絵を消去する必要がある場合は、それぞれ独立して消去する必要があります。

``` ws
changeFigure:none -left;
changeFigure:none;
changeFigure:none -right;
```

立ち絵を変更した後、すぐに次の文を実行したい場合は、以前と同様に`-next`パラメータを追加します。

``` ws
changeFigure:testFigure03.png -left -next;
changeFigure:testFigure04.png -next;
changeFigure:testFigure03.png -right -next;
```

## ID付きの自由な立ち絵

立ち絵をより正確に制御したい場合は、立ち絵に`id`と初期位置を指定することができます。

``` ws
; // 右側に初期位置がある自由な立ち絵
changeFigure:testFigure03.png -left -id=test1;
; // idで立ち絵を閉じる
changeFigure:none -id=test1;
```

::: tip
ID付きの立ち絵の位置をリセットする場合は、まず閉じてから再度開いてください。
:::

## ミニアバターを配置する

多くのゲームでは、テキストボックスの左下にミニアバターを配置できます。以下は、このエンジンで使用される構文です。

``` ws
; // 左下にminipic_test.pngを表示する
miniAvatar:minipic_test.png;
; // このミニアバターを閉じる
miniAvatar:none;
```

## CGをアンロックして鑑賞する

`unlockCg`を使用して、CG鑑賞のCGをアンロックします。

``` ws
; // CGをアンロックして名前を付ける
unlockCg:xgmain.jpeg -name=星光咖啡馆与死神之蝶 -series=1;
```

ここで、`-series`パラメータはオプションであり、現在の立ち絵がどのシリーズに属するかを表します。同じシリーズの立ち絵は、後で統合して表示されます（つまり、同じシリーズのCGを切り替えて表示できます）。

## 立ち絵を設定するときにエフェクトを設定する

エフェクトのフィールドの説明については、[アニメーション](animation.md)を参照してください。

立ち絵を設定するときに、立ち絵にいくつかの変換とフィルターエフェクトを設定できます。以下に例を示します。

```
changeFigure:stand.png -transform={"alpha":1,"position":{"x":0,"y":500},"scale":{"x":1,"y":1},"rotation":0,"blur":0,"oldFilm":0,"dotFilm":0,"reflectionFilm":0,"glitchFilm":0,"rgbFilm":0,"godrayFilm":0} -next;
```

## 既存の立ち絵に変換エフェクトを設定する

エフェクトのフィールドの説明については、[アニメーション](animation.md)を参照してください。

また、`setTransform`を使用して、既存の立ち絵に直接エフェクトを設定することもできます。例えば、

```
setTransform:{"position":{"x":100,"y":0}} -target=fig-center -duration=0;
```

ここでは、既存の立ち絵に変換を設定しました。