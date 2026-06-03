# Animation Reference

WebGAL supports setting consecutive [transform and effect](../others/transform-reference.md) states to create multi-segment animations.

A transform and effect object looks like this:

```json
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

```json
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

```json
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

```webgal
; The figure object's initial coordinate is (-500,0)
changeFigure:character_a/normal.png -id=aaa -transform={"position":{"x":-500,"y":0}};
; The multi-segment animation coordinates are:
; (-500,0) -> (500,0) -> (-500,20)
setTempAnimation:[{"duration":0},{"position":{"x":500},"duration":500},{"position":{"y":20},"duration":500}] -target=aaa;
```

The first segment in an animation is the starting state. Its duration is usually set to 0. Even if it is greater than 0, it will not produce an animation effect.
You can still set transform and effect properties on the first segment so the animation jumps directly to a specified state when it starts.

```webgal
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

```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000}] -target=aaa;
```

<!-- @include: ../arguments/ease.md -->

```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000,"ease":"bounceOut"}] -target=aaa;
```
