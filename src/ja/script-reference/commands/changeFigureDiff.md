# changeFigureDiff

画像立ち絵の差分を切り替えます。表情の変更などに使用します。

## ステートメント内容

差分画像のパスを記入します。

``` webgal
changeFigure:hero/normal.png -id=hero;
; 立ち絵 hero を笑顔の差分に切り替える
changeFigureDiff:hero/smile.png -id=hero;
```

立ち絵を置き換える [changeFigure](changeFigure.md) とは異なり、`changeFigureDiff` は画像のみを置き換え、立ち絵のその他の状態はすべて保持します。これには変換・エフェクト、レイヤー（`zIndex`）、ブレンドモード、登場・退場の設定が含まれます。
差分の切り替えは退場とはみなされず、退場アニメーションは再生されません。これらの設定は、後で `changeFigure` によって実際に立ち絵を置き換えるときに適用されます。

``` webgal
changeFigure:hero/normal.png -id=hero -exit=exit-to-right;
; 差分を切り替える（退場アニメーションは再生されない）
changeFigureDiff:hero/smile.png -id=hero;
; 立ち絵を置き換える（smile.png が exit-to-right で退場する）
changeFigure:other/normal.png -id=hero;
```

新旧 2 枚の画像のサイズが完全に一致し、両方の読み込みが完了している場合、差分は約 200 ミリ秒のクロスブレンドで切り替わります。それ以外の場合は、旧画像がフェードアウトし、新画像がフェードインします。立ち絵の変換は保持されます。

:::info
- Live2D と Spine の立ち絵にはそれぞれ独自の表情・モーションの仕組みがあるため、`changeFigure` の `motion`、`expression` などのパラメータを使用してください。現在の立ち絵または対象がモデルの場合、この文は実行されません。
- 置き換える立ち絵がない場合、または文の内容が `none` の場合、この文は `changeFigure` として処理されます。
- 変換やアニメーションなどのパラメータも同時に変更したい場合は、`changeFigure` を使用してください。
:::

## パラメータ

以下のパラメータと `next`、`continue`、`when` などの共通パラメータ以外はすべて無視され、コンソールに警告が表示されます。

### id
- 文字列

差分を切り替える立ち絵の id。省略した場合は `left`、`right` などの位置パラメータで対象の立ち絵が決まり、デフォルトは中央の立ち絵です。

``` webgal
changeFigureDiff:hero/smile.png -id=hero;
```

### left
- 真偽値

`id` を省略した場合、左側の立ち絵の差分を切り替えます。

``` webgal
changeFigure:hero/normal.png -left;
changeFigureDiff:hero/smile.png -left;
```

### right
- 真偽値

`id` を省略した場合、右側の立ち絵の差分を切り替えます。

``` webgal
changeFigure:hero/normal.png -right;
changeFigureDiff:hero/smile.png -right;
```

### left13 / right13 / left14 / right14
- 真偽値

`id` を省略した場合、対応する位置の立ち絵の差分を切り替えます。

``` webgal
changeFigure:hero/normal.png -left13;
changeFigureDiff:hero/smile.png -left13;
```

### mouthOpen、mouthHalfOpen、mouthClose、eyesOpen、eyesClose、animationFlag
- 文字列

口パクとまばたきの差分です。使い方は [changeFigure](changeFigure.md#mouthopen-mouthhalfopen-mouthclose) と同じです。
口パク・まばたきの画像は通常、特定の表情とセットになっているため、差分を切り替えると、この文のパラメータで丸ごと置き換えられます。記入しなかった項目は無効になります。

``` webgal
changeFigure:hero/normal.png -id=hero -mouthOpen=hero/normal_open.png -mouthClose=hero/normal.png;
; 笑顔の差分にはセットの口パク画像を使用する
changeFigureDiff:hero/smile.png -id=hero -mouthOpen=hero/smile_open.png -mouthClose=hero/smile.png;
```
