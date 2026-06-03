# changeBg

背景の登場、背景の置き換え、背景の退場を行う 3 in 1 コマンドです。

## ステートメント内容

背景画像のパスを指定します。ファイルパスが空、または `none` の場合は背景が退場します。
詳しくは[背景と立ち絵](../../webgal-script/bg-and-figure.md)を参照してください。

```webgal
; 背景が存在しない場合、この文は背景を登場させます。
changeBg:bg.png;
; すでに背景が存在する場合、この文は背景を置き換えます。
changeBg:WebGAL_New_Enter_Image.png;
; none を指定するか空にした場合、この文は背景を退場させます。
changeBg:none;
```

背景画像のパスと `id` が同じままの場合、登場・退場アニメーションは発火しません。

## パラメータ

<!-- @include: ../arguments/transform.md -->
```webgal
changeBg:bg.png -transform={"position":{"x":-50,"y":-20},"rotation":0.1,"scale":{"x":1.2,"y":1.2},"brightness":0.5,"blur":10};
```

<!-- @include: ../arguments/enter.md -->
```webgal
changeBg:bg.png -enter=enter-from-left;
```

<!-- @include: ../arguments/exit.md -->
```webgal
changeBg:bg.png -exit=exit-to-right;
```

<!-- @include: ../arguments/duration.md -->
デフォルトの登場・退場アニメーションに適用されます。デフォルト値は 1000 です。
```webgal
changeBg:bg.png -duration=200;
```

<!-- @include: ../arguments/ease.md -->
デフォルトの登場・退場アニメーションに適用されます。
```webgal
changeBg:bg.png -ease=easeOut;
```

### unlockname
<!-- @include: ../arguments/name-cg.md -->
このパラメータを省略した場合、または名前が空の場合、この画像は収録されません。
```webgal
changeBg:bg.png -unlockname=MyCg01;
```

### series
<!-- @include: ../arguments/series-cg.md -->
`series` だけを指定しても収録は行われません。必ず `unlockname` も指定してください。

```webgal
changeBg:bg.png -unlockname=MyCg01 -series=MySeries01;
```

### enterDuration
- 数値
- 単位: ミリ秒
- 範囲: 0 から正の無限大

登場アニメーションの持続時間です。省略した場合は `duration` の値を使用します。

```webgal
changeBg:bg.png -enterDuration=500;
```

### exitDuration
- 数値
- 単位: ミリ秒
- 範囲: 0 から正の無限大

退場アニメーションの持続時間です。省略した場合のデフォルト値は 1500 です。

```webgal
changeBg:bg.png -exitDuration=800;
```
