# setTransform

设置变换与效果。

## 语句内容

填写[变换与效果](../others/transform-reference.md)的单行 JSON 字符串。

:::info
此命令只生成一段动画，如果您需要设置多段动画，请使用 [setAnimation](setAnimation.md) 或 [setTempAnimation](setTempAnimation.md) 命令。
:::

```webgal
changeFigure:character_a/normal.png -id=aaa;
; 向左移动
setTransform:{"position":{"x":-500},"saturation":0.8} -target=aaa -duration=500;
; 降低亮度
setTransform:{"brightness":0.5,"contrast":1.2} -target=aaa -duration=500;
```

## 参数

<!-- @include: ../arguments/target.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500;
```

<!-- @include: ../arguments/duration.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500;
```

<!-- @include: ../arguments/writeDefault.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500 -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
```webgal
; 假设这是一个特别长的动画
setTransform:{"scale":{"x":2,"y":2}} -target=aaa -duration=10000 -keep;
角色A: 第一句话;
角色A: 第二句话;
角色A: 第三句话;
; 这会打断 aaa 的跨语句动画，并播放新动画
setTransform:{"scale":{"x":1,"y":1}} -target=aaa -duration=10000 -keep;
```
