# setTempAnimation

Sets a temporary animation.

## Statement Content

Unlike `setAnimation`, which reads animation files, `setTempAnimation` allows users to define multi-segment animations directly in code. See [Animation Reference](../others/animation-reference.md) for details.
The statement content format is the one-line form of an animation file: `[{},{},{}]`.

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
