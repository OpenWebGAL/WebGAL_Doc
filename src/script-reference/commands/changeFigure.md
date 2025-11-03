# changeFigure

立绘入场, 替换立绘, 立绘退场，设置立绘参数的四合一命令。

## 语句内容

填写立绘的路径。当文件路径为空或为 `none` 时，表示立绘退场。
详情请见[背景与立绘](../../webgal-script/bg-and-figure.md)。

```webgal
; 如果没有立绘存在，则此句表示立绘入场。
changeFigure:1/open_eyes.png;
; 如果已有立绘存在，则此句表示替换立绘。
changeFigure:2/open_eyes.png;
; 如果填写 none 或者不填，则此句表示立绘退场。
changeFigure:none;
```

如果立绘的路径与 `id` 保持不变，则不会触发入场或退场动画，而是将新参数应用到目标立绘上。

```webgal
; Live2d 立绘入场
changeFigure:character_a/model.json -id=aaa;
; 修改 Live2d 立绘的动作表情
changeFigure:character_a/model.json -id=aaa -motion=smile -expression=sad;
```

目前 WebGAL 支持图片立绘，Live2D 立绘和 Spine 立绘。

### 图片立绘

任何不是 Live2D 或 Spine 的格式，都将尝试作为图片立绘导入。
```webgal
changeFigure:1/open_eyes.png;
```

### Live2D 立绘

:::info
使用 Live2D 需要开发者做一些准备工作，详情请见 [关于Live2D](../../live2D.md)。
:::

填入 Live2D 模型 (.json/.model3.json) 的路径，WebGAL 会加载 Live2D 模型。

```webgal
changeFigure:character_a/model.json;
```

### Spine 立绘

:::info
使用 Spine 需要开发者做一些准备工作，详情请见 [关于Spine](../../spine.md)。
:::

如果您的 Spine 模型是 .skel 格式，您可以直接填写该文件的路径。

```webgal
changeFigure:character_x/model.skel;
```

如果您的 Spine 模型是 .json 格式，您需要在路径后指定立绘类型为 Spine，避免误当作 Live2D 模型导入。

```webgal
changeFigure:character_x/model.json?type=spine;
```

## 参数

<!-- @include: ../arguments/transform.md -->
```webgal
changeFigure:1/open_eyes.png -transform={"position":{"x":-50,"y":-20},"rotation":0.1,"scale":{"x":1.2,"y":1.2},"brightness":0.5,"blur":10};
```

<!-- @include: ../arguments/enter.md -->
```webgal
changeFigure:1/open_eyes.png -enter=enter-from-left;
```

<!-- @include: ../arguments/exit.md -->
```webgal
changeFigure:1/open_eyes.png -exit=exit-to-right;
```

<!-- @include: ../arguments/duration.md -->
作用于默认入场退场动画，默认值为 1000。
```webgal
changeFigure:1/open_eyes.png -duration=200;
```

<!-- @include: ../arguments/ease.md -->
作用于默认入场退场动画。
```webgal
changeFigure:1/open_eyes.png -ease=easeOut;
```

### left
- 布尔值

当值为 `true` 时，新立绘出场时将位于舞台左侧，对象坐标原点也会向左偏移。
若参数 `id` 未填写或值为空字符串时，默认赋予该立绘以 `fig-left` 的 id。

::: warning
此参数仅在立绘出场，或替换立绘时生效。如果需要修改在场立绘的坐标，请使用 `setTransform`、`setAnimation`、`setTempAnimation` 等命令。
:::

```webgal
changeFigure:1/open_eyes.png -left;
```

### right
- 布尔值

当值为 `true` 时，新立绘出场时将位于舞台右侧，对象坐标原点也会向右偏移。
若参数 `id` 未填写或值为空字符串时，默认赋予该立绘以 `fig-right` 的 id。

::: warning
此参数仅在立绘出场，或替换立绘时生效。如果需要修改在场立绘的坐标，请使用 `setTransform`、`setAnimation`、`setTempAnimation` 等命令。
:::

```webgal
changeFigure:1/open_eyes.png -right;
```

### id
- 字符串

填写名称作为该立绘的唯一标识符，并将该立绘视作自由立绘。

若未填写该参数，或值为空字符串时
- 若 `left` 参数为 `true`，则默认赋予该立绘以 `fig-left` 的 id
- 若 `right` 参数为 `true`，则默认赋予该立绘以 `fig-right` 的 id
- 若 `left` 和 `right` 参数均为 `false`，则默认赋予该立绘以 `fig-center` 的 id

```webgal
; 填写了不同 id 后，即使初始位置相同，立绘也不会相互顶替。
changeFigure:1/open_eyes.png -id=aaa;
changeFigure:2/open_eyes.png -id=bbb;
; 此时 -left -right 仅与初始位置有关，可以与 -id 一起使用。
changeFigure:3/open_eyes.png -id=ccc -left;
```

### zIndex
- 数字 (整数)
- 范围: 0 到正无穷

立绘的层级，数值越大，立绘图层越靠上。如果数值相同，则入场较晚的立绘图层会更靠上。
若不填写该参数，默认值为0。

```webgal
; 立绘 aaa 会在立绘 bbb 上方。
changeFigure:1/open_eyes.png -id=aaa -zIndex=2;
changeFigure:2/open_eyes.png -id=bbb -zIndex=1;
```

### clear
- 布尔值

将语句内容替换为空字符串。

```webgal
changeFigure:1/open_eyes.png -clear;
```

### none
- 布尔值

将语句内容替换为空字符串。

```webgal
changeFigure:1/open_eyes.png -none;
```

### animationFlag
- 字符串

动画标志，暂无实际作用。

### mouthOpen
- 字符串

填写图片立绘的路径，作为张嘴时的立绘差分。

```webgal
changeFigure:1/open_eyes.png -mouthOpen=1/open_mouth.png;
```

### mouthHalfOpen
- 字符串

填写图片立绘的路径，作为半张嘴时的立绘差分。

```webgal
changeFigure:1/open_eyes.png -mouthHalfOpen=1/halfopen_mouth.png;
```

### mouthClose
- 字符串

填写图片立绘的路径，作为闭嘴时的立绘差分。

```webgal
changeFigure:1/open_eyes.png -mouthClose=1/closed_mouth.png;
```

### eyesOpen
- 字符串

填写图片立绘的路径，作为睁眼时的立绘差分。

```webgal
changeFigure:1/open_eyes.png -eyesOpen=1/open_eyes.png;
```

### eyesClose
- 字符串

填写图片立绘的路径，作为闭眼时的立绘差分。

```webgal
changeFigure:1/open_eyes.png -eyesClose=1/closed_eyes.png;
```

### motion
- 字符串

对于 Live2D 立绘或 Spine 立绘，填写动作名称，播放对应的动作动画。

```webgal
changeFigure:character_a/model.json -motion=sad;
changeFigure:character_a/model.json -motion=smile;
```

### expression
- 字符串

对于 Live2D 立绘，填写表情名称，切换对应的表情。

```webgal
changeFigure:character_a/model.json -expression=smile;
changeFigure:character_a/model.json -expression=sad;
```

### bounds
- 字符串

对于 Live2D 立绘，填写 number[4] 数组，拓展或收缩立绘的显示区域。
以向右和向下为正方向，顺序为 `左,上,右,下`。
x 轴以向右为正方形向，y 轴以向下为正方向。

::: warning
此参数仅在立绘出场，或替换立绘时生效。
:::

```webgal
; 往左和往右拓展 300 像素
changeFigure:character_a/model.json -bounds=-300,0,300,0;
```

### blink
- 字符串

对于 Live2D 立绘，填写 json 字符串，控制眨眼参数。
通常不需要书写所有的属性, 没填写的属性会继承上一次设置的值, 立绘出场时会继承默认值。

参数有
- `"blinkInterval"`: 数字，眨眼间隔，单位毫秒，默认值 24 小时
- `"blinkIntervalRandom"`: 数字，眨眼间隔随机值，单位毫秒，默认值 1000
- `"closingDuration"`: 数字，闭眼持续时间，单位毫秒，默认值 100
- `"closedDuration"`: 数字，闭眼时间，单位毫秒，默认值 50
- `"openingDuration"`: 数字，睁眼持续时间，单位毫秒，默认值 150

```webgal
changeFigure:character_a/model.json -blink={"blinkInterval":5000,"blinkIntervalRandom":2000,"closingDuration":100,"closedDuration":50,"openingDuration":150};
```

### focus
- 字符串

对于 Live2D 立绘，填写 json 字符串，控制立绘的注视参数。
通常不需要书写所有的属性, 没填写的属性会继承上一次设置的值, 立绘出场时会继承默认值。
x 轴以向右为正方形向，y 轴以向上为正方向。

参数有
- `"x"`: 数字，注视点的 x 坐标，范围 -1 到 1，默认值 0
- `"y"`: 数字，注视点的 y 坐标，范围 -1 到 1，默认值 0
- `"instant"`: 布尔值，是否立即转向注视点，默认值 false

```webgal
changeFigure:character_a/model.json -focus={"x":0.5,"y":0.2,"instant":false};
```
