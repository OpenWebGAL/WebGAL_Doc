# changeFigureDiff

切换图片立绘的差分，例如更换表情。

## 语句内容

填写差分图片的路径。

``` webgal
changeFigure:hero/normal.png -id=hero;
; 将立绘 hero 切换为笑脸差分
changeFigureDiff:hero/smile.png -id=hero;
```

与 [changeFigure](changeFigure.md) 替换立绘不同，`changeFigureDiff` 只替换图片，立绘的其余状态全部保留，包括变换效果、层级（`zIndex`）、混合模式和入退场设置。
切换差分不算退场，不会播放退场动画。这些设置会在之后用 `changeFigure` 真正换走立绘时生效。

``` webgal
changeFigure:hero/normal.png -id=hero -exit=exit-to-right;
; 切换差分，不播放退场动画
changeFigureDiff:hero/smile.png -id=hero;
; 换走立绘，smile.png 以 exit-to-right 退场
changeFigure:other/normal.png -id=hero;
```

当新旧两张图片的尺寸完全一致且都已加载完成时，差分会以约 200 毫秒的交叉混合切换；否则旧图淡出、新图淡入，立绘的变换保持不变。

:::info
- Live2D 与 Spine 立绘有各自的表情与动作系统，请使用 `changeFigure` 的 `motion`、`expression` 等参数。当前立绘或目标是模型时，此句不会执行。
- 若没有可替换的立绘，或语句内容为 `none`，此句按 `changeFigure` 处理。
- 如需同时修改变换、动画等参数，请使用 `changeFigure`。
:::

## 参数

除以下参数和 `next`、`continue`、`when` 等通用参数外，其余参数会被忽略，并在控制台给出警告。

### id
- 字符串

要切换差分的立绘 id。未填写时，按 `left`、`right` 等位置参数确定目标立绘，默认为中间立绘。

``` webgal
changeFigureDiff:hero/smile.png -id=hero;
```

### left
- 布尔值

未填写 `id` 时，切换左侧立绘的差分。

``` webgal
changeFigure:hero/normal.png -left;
changeFigureDiff:hero/smile.png -left;
```

### right
- 布尔值

未填写 `id` 时，切换右侧立绘的差分。

``` webgal
changeFigure:hero/normal.png -right;
changeFigureDiff:hero/smile.png -right;
```

### left13 / right13 / left14 / right14
- 布尔值

未填写 `id` 时，切换对应位置立绘的差分。

``` webgal
changeFigure:hero/normal.png -left13;
changeFigureDiff:hero/smile.png -left13;
```

### mouthOpen、mouthHalfOpen、mouthClose、eyesOpen、eyesClose、animationFlag
- 字符串

口型与眨眼差分，用法与 [changeFigure](changeFigure.md#mouthopen) 相同。
口型、眨眼图通常与表情配套，因此切换差分时会按本句参数整体替换，未填写的项即不启用。

``` webgal
changeFigure:hero/normal.png -id=hero -mouthOpen=hero/normal_open.png -mouthClose=hero/normal.png;
; 笑脸差分使用配套的口型图
changeFigureDiff:hero/smile.png -id=hero -mouthOpen=hero/smile_open.png -mouthClose=hero/smile.png;
```
