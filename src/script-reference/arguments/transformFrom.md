### transformFrom
- 字符串
- 可选值：`current`、`default`
- 默认值：`current`

指定动画的变换起点，即动画中未写出的[变换与效果](../others/transform-reference.md)属性如何处理。
- `current`：以对象当前的变换为起点。动画只修改其中写出的属性，未写出的属性保持当前值，也不会覆盖同一对象上其他并行动画正在修改的属性。
- `default`：以默认变换为起点，未写出的属性会重置为默认值。

填写此参数后，旧参数 `writeDefault` 将被忽略。
