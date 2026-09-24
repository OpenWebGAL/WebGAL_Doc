### writeDefault
- 布尔值

:::warning
此参数已不推荐使用，请改用 `transformFrom`：`-writeDefault` 等同于 `-transformFrom=default`。填写了 `transformFrom` 时，此参数会被忽略。
:::

当值为 `true` 时，未被赋值的[变换与效果](../others/transform-reference.md)属性都会写入默认值。
当值为 `false` 时，未被赋值的属性会继承现有的值。
