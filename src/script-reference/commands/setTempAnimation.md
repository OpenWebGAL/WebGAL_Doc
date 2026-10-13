# setTempAnimation

设置临时动画。

## 语句内容

与 `setAnimation` 读取动画文件不同，`setTempAnimation` 允许用户直接在代码里定义多段动画，详见[动画参考](../others/animation-reference.md)。
语句内容格式为动画文件的单行形式，即 `[{},{},{}]` 。也可以使用[新版动画格式](../others/animation-reference.md#新版动画格式-animation-v2)的单行形式，即 `{"keyframes":[{},{}]}`。

:::info
如果您想复用动画，请使用 [setAnimation](setAnimation.md) 命令。
如果您只想设置单段动画，请使用 [setTransform](setTransform.md) 命令。
:::

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
; 闪光弹动画
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa;
```

## 参数

<!-- @include: ../arguments/target.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa;
```

<!-- @include: ../arguments/transformFrom.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa -transformFrom=default;
```

<!-- @include: ../arguments/writeDefault.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"scale":{"x":2,"y":2},"duration":10000}] -target=aaa -keep -next;
角色A: 第一句话;
角色A: 第二句话;
角色A: 第三句话;
; 这会打断 aaa 的跨语句动画，并播放新动画
setTempAnimation:[{"duration":0},{"scale":{"x":1,"y":1},"duration":10000}] -target=aaa -keep -next;
```

<!-- @include: ../arguments/parallel.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
; 平移和亮度变化同时进行
setTransform:{"position":{"x":-500}} -target=aaa -duration=1000 -next;
setTempAnimation:[{"duration":0},{"brightness":0.5,"duration":1000}] -target=aaa -parallel;
```

### relative
- 布尔值

是否为相对动画，见[相对动画](../others/animation-reference.md#相对动画)。

使用关键帧数组写法时，加上 `-relative` 或 `-inherit` 后，动画按新版格式的规则执行，关键帧仍然使用 `duration`。语句内容是新版格式的对象时，此参数会覆盖对象中的 `relative`。

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
; 在当前位置的基础上向右移动 200
setTempAnimation:[{"duration":0},{"position":{"x":200},"duration":500}] -target=aaa -relative;
```

### inherit
- 布尔值

是否启用帧继承，见[帧继承](../others/animation-reference.md#帧继承)。与 `-relative` 一样，加上此参数后，关键帧数组按新版格式的规则执行。

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"position":{"x":200},"duration":500},{"alpha":0.5,"duration":500}] -target=aaa -relative -inherit;
```
