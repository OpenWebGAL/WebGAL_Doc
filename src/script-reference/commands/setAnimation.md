# setAnimation

设置动画。

## 语句内容

填写自定义动画名称，驱动指定目标的舞台对象执行多段动画。
详情请见[自定义动画](../../webgal-script/animation.md#自定义动画)。

:::info
如果您想直接在脚本里设置多段动画，请使用 [setTempAnimation](setTempAnimation.md) 命令。
如果您只想设置单段动画，请使用 [setTransform](setTransform.md) 命令。
:::

```webgal
setAnimation:shake -target=aaa;
```

## 参数

<!-- @include: ../arguments/target.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setAnimation:shake -target=aaa;
```

<!-- @include: ../arguments/writeDefault.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setAnimation:shake -target=aaa -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
```webgal
; 假设这是一个特别长的动画
setAnimation:shake -target=aaa -keep;
角色A: 第一句话;
角色A: 第二句话;
角色A: 第三句话;
; 这会打断 aaa 的跨语句动画，并播放新动画
setAnimation:rotate -target=aaa -keep;
```
