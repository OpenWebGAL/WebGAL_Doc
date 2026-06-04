# setTransform

Sets transform and effects.

## Statement Content

Sets a single-line JSON string for [transform and effects](../others/transform-reference.md).

:::info
This command only generates one animation segment. If you need to set a multi-segment animation, use [setAnimation](setAnimation.md) or [setTempAnimation](setTempAnimation.md).
:::

```webgal
changeFigure:character_a/normal.png -id=aaa;
; Move left
setTransform:{"position":{"x":-500},"saturation":0.8} -target=aaa -duration=500;
; Lower brightness
setTransform:{"brightness":0.5,"contrast":1.2} -target=aaa -duration=500;
```

## Parameters

<!-- @include: ../arguments/target.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500;
```

<!-- @include: ../arguments/duration.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500;
```

<!-- @include: ../arguments/ease.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500 -ease=linear;
```

<!-- @include: ../arguments/writeDefault.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTransform:{"brightness":0.5} -target=aaa -duration=500 -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
```webgal
; Assume this is a very long animation
setTransform:{"scale":{"x":2,"y":2}} -target=aaa -duration=10000 -keep -next;
CharacterA:First line;
CharacterA:Second line;
CharacterA:Third line;
; This interrupts aaa's cross-statement animation and plays a new animation
setTransform:{"scale":{"x":1,"y":1}} -target=aaa -duration=10000 -keep -next;
```
