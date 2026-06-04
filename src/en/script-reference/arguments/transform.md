### transform
- String

Sets a JSON string that controls the transform and effects of a stage object. See [Transform and Effects Reference](../others/transform-reference.md) for details.

::: warning
This parameter only takes effect when an object enters or is replaced. To modify the transform and effects of an object already on stage, use commands such as `setTransform`, `setAnimation`, or `setTempAnimation`.
If the `enter` parameter is used to specify an entrance animation, this parameter will not take effect.
:::
