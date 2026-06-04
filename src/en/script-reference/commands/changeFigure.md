# changeFigure

A four-in-one command for figure entrance, figure replacement, figure exit, and figure parameter settings.

## Statement Content

Sets the path of the figure. When the file path is empty or `none`, the figure exits.
See [Backgrounds and Figures](../../webgal-script/bg-and-figure.md) for details.

```webgal
; If no figure exists, this makes the figure enter.
changeFigure:1/open_eyes.png;
; If a figure already exists, this replaces it.
changeFigure:2/open_eyes.png;
; If none is written or nothing is written, this makes the figure exit.
changeFigure:none;
```

If the figure path and `id` stay the same, entrance or exit animation will not be triggered. Instead, the new parameters are applied to the target figure.

```webgal
; Live2D figure entrance
changeFigure:character_a/model.json -id=aaa;
; Modify a Live2D figure's motion and expression
changeFigure:character_a/model.json -id=aaa -motion=smile -expression=sad;
```

WebGAL currently supports image figures, Live2D figures, and Spine figures.

### Image Figures

Any format that is not Live2D or Spine will be imported as an image figure.

```webgal
changeFigure:1/open_eyes.png;
```

### Live2D Figures

:::info
Using Live2D requires some preparation. See [About Live2D](../../live2D.md) for details.
:::

Set the path of a Live2D model (.json/.model3.json), and WebGAL will load the Live2D model.

```webgal
changeFigure:character_a/model.json;
```

### Spine Figures

:::info
Using Spine requires some preparation. See [About Spine](../../spine.md) for details.
:::

If your Spine model is in .skel format, you can write the file path directly.

```webgal
changeFigure:character_x/model.skel;
```

If your Spine model is in .json format, specify the figure type as Spine after the path to avoid importing it as a Live2D model by mistake.

```webgal
changeFigure:character_x/model.json?type=spine;
```

## Parameters

<!-- @include: ../arguments/transform.md -->
```webgal
changeFigure:1/open_eyes.png -transform={"position":{"x":-50,"y":-20},"rotation":0.1,"scale":{"x":1.2,"y":1.2},"brightness":0.5,"blur":10};
```

<!-- @include: ../arguments/enter.md -->
```webgal
changeFigure:1/open_eyes.png -enter=enter-from-left;
```

<!-- @include: ../arguments/exit.md -->
```webgal
changeFigure:1/open_eyes.png -exit=exit-to-right;
```

<!-- @include: ../arguments/duration.md -->
Applied to the default entrance animation. Default value: 300.
```webgal
changeFigure:1/open_eyes.png -duration=200;
```

<!-- @include: ../arguments/ease.md -->
Applied to the default entrance animation.
```webgal
changeFigure:1/open_eyes.png -ease=easeOut;
```

### enterDuration
- Number
- Unit: milliseconds
- Range: 0 to positive infinity

The entrance animation duration. If omitted, it defaults to the value of `duration`, whose default is 300.

```webgal
changeFigure:1/open_eyes.png -enterDuration=200;
```

### exitDuration
- Number
- Unit: milliseconds
- Range: 0 to positive infinity

The exit animation duration. If omitted, the default value is 450.

```webgal
changeFigure:1/open_eyes.png -exitDuration=300;
```

### left / right
- Boolean

When `left` is `true`, the new figure appears on the left side of the stage, and its coordinate origin is offset to the left.
When `right` is `true`, the new figure appears on the right side of the stage, and its coordinate origin is offset to the right.
If `id` is omitted or an empty string, `left` gives the figure the default id `fig-left`, and `right` gives it `fig-right`.

::: warning
These parameters only take effect when a figure enters or is replaced. To modify the coordinates of a figure already on stage, use commands such as `setTransform`, `setAnimation`, or `setTempAnimation`.
:::

```webgal
changeFigure:1/open_eyes.png -left;
changeFigure:1/open_eyes.png -right;
```

### id
- String

Sets a name as the unique identifier of this figure and treats it as a free figure.

If this parameter is omitted or its value is an empty string:
- If `left` is `true`, the default id is `fig-left`
- If `right` is `true`, the default id is `fig-right`
- If both `left` and `right` are `false`, the default id is `fig-center`

```webgal
; Different ids mean figures do not replace each other even if their initial positions are the same.
changeFigure:1/open_eyes.png -id=aaa;
changeFigure:2/open_eyes.png -id=bbb;
; -left and -right only affect the initial position and can be used with -id.
changeFigure:3/open_eyes.png -id=ccc -left;
```

### zIndex
- Number (integer)
- Range: 0 to positive infinity

The figure's layer. Larger values place the figure higher. If values are the same, the figure that entered later is placed higher.
If omitted, the default value is 0.

```webgal
; Figure aaa is above figure bbb.
changeFigure:1/open_eyes.png -id=aaa -zIndex=2;
changeFigure:2/open_eyes.png -id=bbb -zIndex=1;
```

### blendMode
- String
- Default: `normal`

Sets the figure blend mode. It only takes effect when the figure enters or is replaced.

```webgal
changeFigure:1/open_eyes.png -id=aaa -blendMode=add;
```

### clear / none
- Boolean

Replaces the statement content with an empty string.

```webgal
changeFigure:1/open_eyes.png -clear;
changeFigure:1/open_eyes.png -none;
```

### animationFlag
- String

Image figure differential animation flag. The current cloud engine writes this value to `figureAssociatedAnimation`, but mouth sync and blink animation actually read differential resources such as `mouthOpen`, `mouthHalfOpen`, `mouthClose`, `eyesOpen`, and `eyesClose` by the target figure id. `animationFlag` itself is not read by later logic yet.

### mouthOpen / mouthHalfOpen / mouthClose
- String

Sets image figure differential paths for open mouth, half-open mouth, and closed mouth.

```webgal
changeFigure:1/open_eyes.png -mouthOpen=1/open_mouth.png;
changeFigure:1/open_eyes.png -mouthHalfOpen=1/halfopen_mouth.png;
changeFigure:1/open_eyes.png -mouthClose=1/closed_mouth.png;
```

### eyesOpen / eyesClose
- String

Sets image figure differential paths for open eyes and closed eyes.

```webgal
changeFigure:1/open_eyes.png -eyesOpen=1/open_eyes.png;
changeFigure:1/open_eyes.png -eyesClose=1/closed_eyes.png;
```

### motion
- String

For Live2D or Spine figures, sets the motion name and plays the corresponding motion animation.

```webgal
changeFigure:character_a/model.json -motion=sad;
changeFigure:character_a/model.json -motion=smile;
```

### skin
- String

For Spine figures, sets the skin name and switches to the corresponding skin.
To switch both Spine animation and skin, continue using `motion` for animation and `skin` for skin.

```webgal
changeFigure:character_x/model.json?type=spine -skin=default;
changeFigure:character_x/model.json?type=spine -motion=anime_00_wait -skin=03_surprise;
```

### expression
- String

For Live2D figures, sets the expression name and switches to the corresponding expression.

```webgal
changeFigure:character_a/model.json -expression=smile;
changeFigure:character_a/model.json -expression=sad;
```

### bounds
- String

For Live2D figures, sets a number[4] array to expand or shrink the visible area of the figure.
Right and down are positive. The order is `left,top,right,bottom`.
The x axis is positive to the right, and the y axis is positive downward.

::: warning
This parameter only takes effect when the figure enters or is replaced.
:::

```webgal
; Expand 300 pixels to the left and right
changeFigure:character_a/model.json -bounds=-300,0,300,0;
```

### blink
- String

For Live2D figures, sets a JSON string that controls blink parameters.
You usually do not need to write all properties. Omitted properties inherit the previous settings, and figure entrance inherits default values.

Parameters:
- `"blinkInterval"`: number, blink interval in milliseconds, default 24 hours
- `"blinkIntervalRandom"`: number, random blink interval offset in milliseconds, default 1000
- `"closingDuration"`: number, closing-eye duration in milliseconds, default 100
- `"closedDuration"`: number, closed-eye duration in milliseconds, default 50
- `"openingDuration"`: number, opening-eye duration in milliseconds, default 150

```webgal
changeFigure:character_a/model.json -blink={"blinkInterval":5000,"blinkIntervalRandom":2000,"closingDuration":100,"closedDuration":50,"openingDuration":150};
```

### focus
- String

For Live2D figures, sets a JSON string that controls focus parameters.
You usually do not need to write all properties. Omitted properties inherit the previous settings, and figure entrance inherits default values.
The x axis is positive to the right, and the y axis is positive upward.

Parameters:
- `"x"`: number, x coordinate of the focus point, range -1 to 1, default 0
- `"y"`: number, y coordinate of the focus point, range -1 to 1, default 0
- `"instant"`: boolean, whether to look at the focus point immediately, default false

```webgal
changeFigure:character_a/model.json -focus={"x":0.5,"y":0.2,"instant":false};
```
