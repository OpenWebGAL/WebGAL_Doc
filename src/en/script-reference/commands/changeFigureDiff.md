# changeFigureDiff

Switches the variant (diff) of an image figure, such as changing its expression.

## Statement Content

The path of the variant image.

``` webgal
changeFigure:hero/normal.png -id=hero;
; Switch figure hero to the smiling variant
changeFigureDiff:hero/smile.png -id=hero;
```

Unlike [changeFigure](changeFigure.md), which replaces the figure, `changeFigureDiff` only replaces the image. All other state of the figure is kept, including its transform, layer (`zIndex`), blend mode, and enter/exit settings.
Switching a variant is not an exit, so no exit animation is played. These settings take effect later, when `changeFigure` actually replaces the figure.

``` webgal
changeFigure:hero/normal.png -id=hero -exit=exit-to-right;
; Switch the variant; no exit animation is played
changeFigureDiff:hero/smile.png -id=hero;
; Replace the figure; smile.png exits with exit-to-right
changeFigure:other/normal.png -id=hero;
```

When both images have exactly the same size and are fully loaded, the variant switches with a cross-blend of about 200 ms. Otherwise, the old image fades out and the new one fades in, and the figure's transform is kept.

:::info
- Live2D and Spine figures have their own expression and motion systems. Use arguments such as `motion` and `expression` of `changeFigure` instead. If the current figure or the target is a model, this statement is not executed.
- If there is no figure to replace, or the content is `none`, this statement behaves like `changeFigure`.
- To change the transform, animation, or other arguments at the same time, use `changeFigure`.
:::

## Parameters

Apart from the arguments below and general arguments such as `next`, `continue`, and `when`, all other arguments are ignored with a warning in the console.

### id
- String

The id of the figure whose variant is switched. If omitted, the target figure is determined by the `left` and `right` arguments, defaulting to the center figure.

``` webgal
changeFigureDiff:hero/smile.png -id=hero;
```

### left
- Boolean

If `id` is omitted, switches the variant of the left figure.

``` webgal
changeFigure:hero/normal.png -left;
changeFigureDiff:hero/smile.png -left;
```

### right
- Boolean

If `id` is omitted, switches the variant of the right figure.

``` webgal
changeFigure:hero/normal.png -right;
changeFigureDiff:hero/smile.png -right;
```

### mouthOpen, mouthHalfOpen, mouthClose, eyesOpen, eyesClose, animationFlag
- String

Mouth and blink variants, used the same way as in [changeFigure](changeFigure.md#mouthopen-mouthhalfopen-mouthclose).
Mouth and blink images usually match a specific expression, so switching a variant replaces them entirely with the arguments of this statement. Any omitted item is disabled.

``` webgal
changeFigure:hero/normal.png -id=hero -mouthOpen=hero/normal_open.png -mouthClose=hero/normal.png;
; The smiling variant uses its own mouth images
changeFigureDiff:hero/smile.png -id=hero -mouthOpen=hero/smile_open.png -mouthClose=hero/smile.png;
```
