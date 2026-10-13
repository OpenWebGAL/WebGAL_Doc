### writeDefault
- Boolean

:::warning
This argument is deprecated. Use `transformFrom` instead: `-writeDefault` is equivalent to `-transformFrom=default`. When `transformFrom` is set, this argument is ignored.
:::

When the value is `true`, all unassigned [transform and effect](../others/transform-reference.md) properties are written with their default values.
When the value is `false`, unassigned properties inherit the existing values.
