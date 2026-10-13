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

``` webgal
; 立绘对象初始坐标为 (-500,0)
changeFigure:character_a/normal.png -id=aaa -transform={"position":{"x":-500,"y":0}};
; 多段动画的坐标依次为
; (-500,0) -> (500,0) -> (-500,20)
setTempAnimation:[{"duration":0},{"position":{"x":500},"duration":500},{"position":{"y":20},"duration":500}] -target=aaa;
```

动画里的第一个片段为起始状态，通常 duration 设为 0 即可，即使设置了大于 0 的数，也不会有动画效果。
您仍然可以为第一个片段设置变换效果属性，这样可以在动画开始时直接跳转到指定状态。

``` webgal
; 立绘对象初始坐标为 (0,0)
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

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000}] -target=aaa;
```

<!-- @include: ../arguments/ease.md -->

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000,"ease":"bounceOut"}] -target=aaa;
```

## 新版动画格式（Animation v2）

::: info
新版动画格式从 v4.6.6 开始提供。上面介绍的关键帧数组写法仍然可用，行为不变。
:::

新版动画是一个 JSON 对象，关键帧放在 `keyframes` 中：

``` json
{
  "version": 2,
  "keyframes": [
    { "time": 250, "position": { "x": -100 }, "ease": "easeOut" },
    { "time": 750, "position": { "x": 100 } },
    { "time": 1000, "position": { "x": 0 }, "ease": "easeIn" }
  ]
}
```

这个动画让对象围绕**当前位置**左右摇晃一次，最后回到原位。无论对象原本在哪里，摇晃都以它为中心。

| 字段 | 说明 |
| :-- | :-- |
| `version` | 固定为 `2`，可省略 |
| `keyframes` | 关键帧数组 |
| `relative` | 是否为相对动画，默认为 `true` |
| `inherit` | 是否启用帧继承，默认为 `true` |
| `relativeCalc` | 按属性覆盖相对动画的计算方式 |

### 关键帧

关键帧在[变换效果](../others/transform-reference.md)的基础上，增加以下属性：

- `time`：该关键帧在动画中的时间，单位为毫秒，从动画开始计算。动画的总时长为最大的 `time`。
- `ease`：从上一个关键帧到达这一帧所用的缓动，默认为 `easeInOut`，可选值见 [ease](../arguments/ease.md)。

注意 `time` 与旧格式的 `duration` 不同：`duration` 是距离上一个关键帧的时长，`time` 是从动画开始算起的时间。关键帧按 `time` 排序，与在数组中的位置无关。`time` 相同的多个关键帧构成跳变：数组中靠前的是跳变前的状态，靠后的是跳变后的状态。

### 相对动画

`relative` 为 `true` 时，关键帧中的值基于对象的当前状态计算；为 `false` 时，关键帧中的值即为最终的值。

各属性默认的计算方式如下：

- 与当前值相加：`position`、`rotation`、`blur`、`bevel`、`bevelThickness`、`bevelRotation`、`bevelSoftness`、`bloom`、`bloomBlur`
- 与当前值相乘（当前值为 0 时按 1 计算）：`scale`
- 直接使用关键帧中的值：其余属性，如 `alpha`、`brightness`、颜色、各类滤镜

例如，`{"time":500,"position":{"x":100}}` 会让对象在当前位置的基础上向右移动 100。相对动画重复执行会累积，执行两次就会向右移动 200。

如果语句使用了 `-transformFrom=default`，「当前状态」改为默认变换。

用 `relativeCalc` 可以修改某个属性的计算方式，可选值为：

| 值 | 计算方式 |
| :-- | :-- |
| `add` | 当前值加关键帧中的值 |
| `multiply` | 当前值乘关键帧中的值 |
| `multiplyWithZeroFallback` | 同 `multiply`，但当前值为 0 时按 1 计算 |
| `absolute` | 直接使用关键帧中的值 |

例如，下面的动画让对象从透明淡入到它当前的透明度，而不是固定淡入到 1：

``` json
{
  "version": 2,
  "relativeCalc": { "alpha": "multiplyWithZeroFallback" },
  "keyframes": [
    { "time": 0, "alpha": 0 },
    { "time": 300, "alpha": 1 }
  ]
}
```

`position`、`scale` 的设置同时作用于两个轴。

### 帧继承

`inherit` 为 `true` 时，各属性分别处理：

- 第一个写出该属性的关键帧之前，从当前状态过渡到该关键帧。
- 两个写出该属性的关键帧之间，正常插值。
- 最后一个写出该属性的关键帧之后，保持该关键帧的值。
- 动画中没有写出的属性保持不变。

因此，每个关键帧只需要写出这一刻要变化的属性。

`inherit` 为 `false` 时，关键帧中没有写出的属性取当前状态的值。
