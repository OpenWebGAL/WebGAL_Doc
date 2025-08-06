# changeBg

背景入场, 替换背景, 背景退场的三合一命令。

## 语句内容

填写背景图片的路径。当文件路径为空或为 `none` 时，表示背景退场。
详情请见[背景与立绘](../../webgal-script/bg-and-figure.md)。

```webgal
; 如果没有背景存在，则此句表示背景入场。
changeBg:bg.png;
; 如果已有背景存在，则此句表示替换背景。
changeBg:WebGAL_New_Enter_Image.png;
; 如果填写 none 或者不填，则此句表示背景退场。
changeBg:none;
```

如果背景图片的路径与 `id` 保持不变，则不会触发入场或退场动画。

## 参数

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
作用于默认入场退场动画，默认值为 1000。
```webgal
changeBg:bg.png -duration=200;
```

<!-- @include: ../arguments/ease.md -->
作用于默认入场退场动画。
```webgal
changeBg:bg.png -ease=easeOut;
```

### unlockname
<!-- @include: ../arguments/name-cg.md -->
```webgal
changeBg:bg.png -unlockname=MyCg01;
```

### series
<!-- @include: ../arguments/series-cg.md -->
单独填写 `series` 不会进行收录，请确保同时填写了 `unlockname`。

```webgal
changeBg:bg.png -unlockname=MyCg01 -series=MySeries01;
```
