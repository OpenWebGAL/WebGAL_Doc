# 动画参考

WebGAL 支持设置连续的 [变换效果](../others/transform-reference.md) ，从而实现多段动画。

一个变换效果对象如
``` json
{
  "position": {
    "x":-500,
    "y":20
  },
  "rotation":0.3,
  "blur":10
}
```

一个动画片段对象则是在变换效果对象的基础上，添加了一些其他属性，如持续时间等
``` json
{
  "position": {
    "x":-500,
    "y":20
  },
  "rotation":0.3,
  "blur":10,
  "duration":500,
  "ease":"easeInOut"
}
```

多个动画片段对象可以组成一个动画
``` json
[
  {
    "duration":0
  },
  {
    "position": {
      "x":-500,
      "y":20
    },
    "duration":500
  },
  {
    "rotation":0.3,
    "duration":300
  },
  {
    "blur":10,
    "duration":200
  }
]
```

除了一些必要的属性外（如 duration），动画片段对象的很多属性都可以省略，WebGAL 会根据情况使用默认值或者继承现有值来补全。

:::info
继承现有值的「现有值」是指，在执行动画前，目标对象的变换效果快照，而不是上一个动画片段的结束状态。
:::

```webgal
; 立绘对象初始坐标为 (-500,0)
changeFigure:character_a/normal.png -id=aaa -transform={"position":{"x":-500,"y":0}};
; 多段动画的坐标依次为
; (-500,0) -> (500,0) -> (-500,20)
setTempAnimation:[{"duration":0},{"position":{"x":500},"duration":500},{"position":{"y":20},"duration":500}] -target=aaa;
```

动画里的第一个片段为起始状态，通常 duration 设为 0 即可，即使设置了大于 0 的数，也不会有动画效果。
您仍然可以为第一个片段设置变换效果属性，这样可以在动画开始时直接跳转到指定状态。

```webgal
; 立绘对象初始坐标为 (-500,0)
changeFigure:character_a/normal.png -id=aaa;
; 从左走到右，动画开始时直接跳转到左边
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000}] -target=aaa;
```

## 参数

### duration
- 数字
- 单位：毫秒
- 必填

每个动画片段的持续时间。

```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000}] -target=aaa;
```

### ease
- 字符串

填写缓动类型，控制动画的缓动效果，默认值为 `easeInOut`，可选值包括
- `linear`：线性
- `easeIn`：缓入
- `easeOut`：缓出
- `easeInOut`：缓入缓出
- `circIn`：圆形缓入
- `circOut`：圆形缓出
- `circInOut`：圆形缓入缓出
- `backIn`：起点回弹
- `backOut`：终点回弹
- `backInOut`：起止回弹
- `bounceIn`：起点弹跳
- `bounceOut`：终点弹跳
- `bounceInOut`：起止弹跳
- `anticipate`：预先反向

任何其他字符串都会回退到默认值。

```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000,"ease":"bounceOut"}] -target=aaa;
```
