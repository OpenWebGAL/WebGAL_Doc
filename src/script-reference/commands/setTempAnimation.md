# setTempAnimation

设置临时动画。

## 语句内容

与 `setAnimation` 读取动画文件不同，`setTempAnimation` 允许用户直接在代码里定义多段动画，详见[动画参考](../others/animation-reference.md)。
语句内容格式为动画文件的单行形式，即 `[{},{},{}]` 。

:::info
如果您想复用动画，请使用 [setAnimation](setAnimation.md) 命令。
如果您只想设置单段动画，请使用 [setTransform](setTransform.md) 命令。
:::

```webgal
changeFigure:1/open_eyes.png -id=aaa;
; 闪光弹动画
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa;
```

## 参数

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
角色A: 第一句话;
角色A: 第二句话;
角色A: 第三句话;
; 这会打断 aaa 的跨语句动画，并播放新动画
setTempAnimation:[{"duration":0},{"scale":{"x":1,"y":1},"duration":10000}] -target=aaa -keep -next;
```
