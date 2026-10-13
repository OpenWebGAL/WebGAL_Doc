# setTempAnimation

Sets a temporary animation.

## Statement Content

Unlike `setAnimation`, which reads animation files, `setTempAnimation` allows users to define multi-segment animations directly in code. See [Animation Reference](../others/animation-reference.md) for details.
The statement content format is the one-line form of an animation file: `[{},{},{}]`. The one-line form of the [new animation format](../others/animation-reference.md#new-animation-format-animation-v2) also works: `{"keyframes":[{},{}]}`.

:::info
If you want to reuse an animation, use [setAnimation](setAnimation.md).
If you only want to set a single-segment animation, use [setTransform](setTransform.md).
:::

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
; Flashbang animation
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa;
```

## Parameters

<!-- @include: ../arguments/target.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa;
```

<!-- @include: ../arguments/transformFrom.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa -transformFrom=default;
```

<!-- @include: ../arguments/writeDefault.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":200},{"brightness":2,"contrast":0,"duration":200,"ease":"circIn"},{"brightness":1,"contrast":1,"duration":2500}] -target=aaa -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"scale":{"x":2,"y":2},"duration":10000}] -target=aaa -keep -next;
CharacterA:First line;
CharacterA:Second line;
CharacterA:Third line;
; This interrupts aaa's cross-statement animation and plays a new animation
setTempAnimation:[{"duration":0},{"scale":{"x":1,"y":1},"duration":10000}] -target=aaa -keep -next;
```

<!-- @include: ../arguments/parallel.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
; Move and change brightness at the same time
setTransform:{"position":{"x":-500}} -target=aaa -duration=1000 -next;
setTempAnimation:[{"duration":0},{"brightness":0.5,"duration":1000}] -target=aaa -parallel;
```

### relative
- Boolean

Whether the animation is relative. See [Relative Animation](../others/animation-reference.md#relative-animation).

When the content is a keyframe array, adding `-relative` or `-inherit` makes the animation follow the rules of the new format, while keyframes still use `duration`. When the content is a new-format object, this argument overrides its `relative` field.

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
; Move 200 to the right from the current position
setTempAnimation:[{"duration":0},{"position":{"x":200},"duration":500}] -target=aaa -relative;
```

### inherit
- Boolean

Whether keyframe inheritance is enabled. See [Keyframe Inheritance](../others/animation-reference.md#keyframe-inheritance). Like `-relative`, adding this argument makes a keyframe array follow the rules of the new format.

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"duration":0},{"position":{"x":200},"duration":500},{"alpha":0.5,"duration":500}] -target=aaa -relative -inherit;
```
