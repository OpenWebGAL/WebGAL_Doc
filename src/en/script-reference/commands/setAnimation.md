# setAnimation

Sets an animation.

## Statement Content

Sets the custom animation name and drives the specified stage object target to perform a multi-segment animation.
See [Custom Animations](../../webgal-script/animation.md#custom-animations) and [Animation Reference](../others/animation-reference.md) for details.

:::info
If you want to define a multi-segment animation directly in the script, use [setTempAnimation](setTempAnimation.md).
If you only want to set a single-segment animation, use [setTransform](setTransform.md).
:::

``` webgal
setAnimation:shake -target=aaa;
```

## Parameters

<!-- @include: ../arguments/target.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setAnimation:shake -target=aaa;
```

<!-- @include: ../arguments/writeDefault.md -->
``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setAnimation:shake -target=aaa -writeDefault;
```

<!-- @include: ../arguments/keep.md -->
``` webgal
; Assume this is a very long animation
setAnimation:shake -target=aaa -keep -next;
CharacterA:First line;
CharacterA:Second line;
CharacterA:Third line;
; This interrupts aaa's cross-statement animation and plays a new animation
setAnimation:rotate -target=aaa -keep -next;
```
