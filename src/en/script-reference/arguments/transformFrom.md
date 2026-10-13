### transformFrom
- String
- Available values: `current`, `default`
- Default value: `current`

Specifies where the animation's transform starts from, i.e. how [transform and effect](../others/transform-reference.md) properties not written in the animation are handled.
- `current`: Starts from the object's current transform. The animation only modifies the properties it writes. Other properties keep their current values, and properties being modified by other parallel animations on the same object are not overwritten.
- `default`: Starts from the default transform. Properties not written in the animation are reset to their default values.

When this argument is set, the legacy `writeDefault` argument is ignored.
