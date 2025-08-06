# setComplexAnimation

设置复杂动画。

## 语句内容

填写复杂动画的名称。

目前 WebGAL 提供的复杂动画有：
- `universalSoftIn`：通用透明度淡入
- `universalSoftOff`：通用透明度淡出

```webgal
setComplexAnimation:universalSoftIn -target=aaa -duration=1000;
```

## 参数

<!-- @include: ../arguments/target.md -->
```webgal
setComplexAnimation:universalSoftIn -target=fig-center -duration=1000;
```

<!-- @include: ../arguments/duration.md -->
作用于复杂动画的持续时间。
```webgal
setComplexAnimation:universalSoftIn -target=fig-center -duration=1000;
```
