# Animation Reference

WebGAL supports setting consecutive [transform and effect](../others/transform-reference.md) states to create multi-segment animations.

A transform and effect object looks like this:

``` json
{
  "position": {
    "x": -500,
    "y": 20
  },
  "rotation": 0.3,
  "blur": 10
}
```

An animation segment object is a transform and effect object with additional properties such as duration:

``` json
{
  "position": {
    "x": -500,
    "y": 20
  },
  "rotation": 0.3,
  "blur": 10,
  "duration": 500,
  "ease": "easeInOut"
}
```

Multiple animation segment objects can form an animation:

``` json
[
  {
    "duration": 0
  },
  {
    "position": {
      "x": -500,
      "y": 20
    },
    "duration": 500
  },
  {
    "rotation": 0.3,
    "duration": 300
  },
  {
    "blur": 10,
    "duration": 200
  }
]
```

Except for required properties such as `duration`, many properties in animation segment objects can be omitted. WebGAL fills them with default values or existing values depending on the situation.

:::info
The "existing value" inherited here means the target object's transform and effect snapshot before the animation starts, not the ending state of the previous animation segment.
:::

``` webgal
; The figure object's initial coordinate is (-500,0)
changeFigure:character_a/normal.png -id=aaa -transform={"position":{"x":-500,"y":0}};
; The multi-segment animation coordinates are:
; (-500,0) -> (500,0) -> (-500,20)
setTempAnimation:[{"duration":0},{"position":{"x":500},"duration":500},{"position":{"y":20},"duration":500}] -target=aaa;
```

The first segment in an animation is the starting state. Its duration is usually set to 0. Even if it is greater than 0, it will not produce an animation effect.
You can still set transform and effect properties on the first segment so the animation jumps directly to a specified state when it starts.

``` webgal
; The figure object's initial coordinate is (0,0)
changeFigure:character_a/normal.png -id=aaa;
; Walk from left to right, jumping directly to the left side when the animation starts
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000}] -target=aaa;
```

## Parameters

### duration
- Number
- Unit: milliseconds
- Required

The duration of each animation segment.

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000}] -target=aaa;
```

<!-- @include: ../arguments/ease.md -->

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000,"ease":"bounceOut"}] -target=aaa;
```

## New Animation Format (Animation v2)

::: info
The new animation format is available since v4.6.6. The keyframe array format described above still works and behaves the same as before.
:::

A new-format animation is a JSON object with its keyframes in `keyframes`:

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

This animation shakes the object left and right once around its **current position** and then returns it to where it was. Wherever the object is, the shake is centered on it.

| Field | Description |
| :-- | :-- |
| `version` | Always `2`. Can be omitted |
| `keyframes` | Array of keyframes |
| `relative` | Whether the animation is relative. Defaults to `true` |
| `inherit` | Whether keyframe inheritance is enabled. Defaults to `true` |
| `relativeCalc` | Overrides how relative values are calculated, per property |

### Keyframes

A keyframe is a [transform](../others/transform-reference.md) object with these additional properties:

- `time`: the time of the keyframe in the animation, in milliseconds from the start. The total duration of the animation is the largest `time`.
- `ease`: the easing used to reach this keyframe from the previous one. Defaults to `easeInOut`. See [ease](../arguments/ease.md) for available values.

Note that `time` differs from `duration` in the legacy format: `duration` is the length since the previous keyframe, while `time` is measured from the start of the animation. Keyframes are sorted by `time`, regardless of their order in the array. Several keyframes with the same `time` form a jump: the earlier one in the array is the state before the jump, and the later one is the state after it.

### Relative Animation

When `relative` is `true`, keyframe values are calculated from the object's current state. When it is `false`, keyframe values are used as final values.

Default calculation for each property:

- Added to the current value: `position`, `rotation`, `blur`, `bevel`, `bevelThickness`, `bevelRotation`, `bevelSoftness`, `bloom`, `bloomBlur`
- Multiplied by the current value (a current value of 0 is treated as 1): `scale`
- Keyframe value used directly: all other properties, such as `alpha`, `brightness`, colors, and filters

For example, `{"time":500,"position":{"x":100}}` moves the object 100 to the right from its current position. Relative animations accumulate when repeated: running it twice moves the object 200 to the right.

If the statement uses `-transformFrom=default`, the default transform is used as the "current state".

Use `relativeCalc` to change how a property is calculated. Available values:

| Value | Calculation |
| :-- | :-- |
| `add` | Current value plus the keyframe value |
| `multiply` | Current value times the keyframe value |
| `multiplyWithZeroFallback` | Same as `multiply`, but a current value of 0 is treated as 1 |
| `absolute` | Keyframe value used directly |

For example, the following animation fades the object in from transparent to its current opacity, instead of always fading in to 1:

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

Settings for `position` and `scale` apply to both axes.

### Keyframe Inheritance

When `inherit` is `true`, each property is handled separately:

- Before the first keyframe that writes the property, it transitions from the current state to that keyframe.
- Between two keyframes that write the property, it is interpolated normally.
- After the last keyframe that writes the property, it keeps that keyframe's value.
- Properties not written anywhere in the animation stay unchanged.

So each keyframe only needs to write the properties that change at that moment.

When `inherit` is `false`, properties not written in a keyframe take their values from the current state.
