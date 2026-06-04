# changeBg

A three-in-one command for background entrance, background replacement, and background exit.

## Statement Content

Sets the path of the background image. When the file path is empty or `none`, the background exits.
See [Backgrounds and Figures](../../webgal-script/bg-and-figure.md) for details.

```webgal
; If no background exists, this makes the background enter.
changeBg:bg.png;
; If a background already exists, this replaces it.
changeBg:WebGAL_New_Enter_Image.png;
; If none is written or nothing is written, this makes the background exit.
changeBg:none;
```

If the background image path and `id` stay the same, entrance or exit animation will not be triggered.

## Parameters

<!-- @include: ../arguments/transform.md -->
```webgal
changeBg:bg.png -transform={"position":{"x":-50,"y":-20},"rotation":0.1,"scale":{"x":1.2,"y":1.2},"brightness":0.5,"blur":10};
```

<!-- @include: ../arguments/enter.md -->
```webgal
changeBg:bg.png -enter=enter-from-left;
```

<!-- @include: ../arguments/exit.md -->
```webgal
changeBg:bg.png -exit=exit-to-right;
```

<!-- @include: ../arguments/duration.md -->
Applied to the default entrance animation. Default value: 1500.
```webgal
changeBg:bg.png -duration=200;
```

<!-- @include: ../arguments/ease.md -->
Applied to the default entrance animation.
```webgal
changeBg:bg.png -ease=easeOut;
```

### unlockname
<!-- @include: ../arguments/name-cg.md -->
If this parameter is omitted or the name is empty, the image will not be collected.
```webgal
changeBg:bg.png -unlockname=MyCg01;
```

### series
<!-- @include: ../arguments/series-cg.md -->
Writing only `series` will not collect the image. Make sure `unlockname` is also set.

```webgal
changeBg:bg.png -unlockname=MyCg01 -series=MySeries01;
```

### enterDuration
- Number
- Unit: milliseconds
- Range: 0 to positive infinity

The entrance animation duration. If omitted, it defaults to the value of `duration`, whose default is 1500.

```webgal
changeBg:bg.png -enterDuration=500;
```

### exitDuration
- Number
- Unit: milliseconds
- Range: 0 to positive infinity

The exit animation duration. If omitted, the default value is 1500.

```webgal
changeBg:bg.png -exitDuration=800;
```
