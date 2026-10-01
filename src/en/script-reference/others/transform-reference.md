# Transform And Effects Reference

`transform` is the stage object's transform and effect property set. It includes position, rotation, scale, and filter properties. Its format looks like this:

``` json
{"position":{"x":0,"y":0},"rotation":0,"scale":{"x":1,"y":1},"alpha":1,"blur":0,"colorRed":255,"colorGreen":255,"colorBlue":255}
```

You usually do not need to write every property. Write only the properties you want to modify. Unmodified properties inherit existing values or use defaults depending on the situation.

``` webgal
setTransform:{"position":{"x":100},"rotation":45} -target=aaa -duration=500;
; This inherits the existing transform and changes only the blur filter value
setTransform:{"blur":20} -target=aaa -duration=500;
; This resets all properties except saturation to default values
setTransform:{"saturation":0} -target=aaa -duration=500 -writeDefault;
```

For filter properties, a filter is fully disabled only when all values of that filter are set to defaults. Otherwise, the filter remains until the object exits, which may cause unnecessary performance cost. When needed, explicitly set related properties to default values to disable filters.

``` webgal
changeBg:bg.png -transform={"brightness":0.5,"blur":10} -next;
changeFigure:1/open_eyes.png -id=aaa;
;
; Enable color adjustment, bevel, and bloom filters, then adjust parameters
setTempAnimation:[{"bloomBlur":20,"bloomThreshold":0.8,"duration":0},{"brightness":0.5,"bevel":1,"bevelThickness":20,"bevelRotation":45,"bloom":1,"bloomBlur":20,"bloomThreshold":0.8,"duration":500}] -target=aaa;
; Turn off part of the bloom effect, but bloom still exists because bloomBlur and bloomThreshold are not default
setTransform:{"bloom":0} -target=aaa -duration=500;
; All bloom parameters are reset to defaults, so the bloom filter is disabled
setTransform:{"bloomBlur":0,"bloomThreshold":0} -target=aaa -duration=500;
```

Filters are currently applied to the image in this order:
- Reflection filter
- Radial alpha gradient filter
- Shockwave filter
- Blur filter
- RGB split filter
- Dot filter
- Glitch filter
- Old film filter
- Bloom filter
- Godray filter
- Bevel filter
- Color adjustment filter
- Original image

## Basic Transforms

### position
- Default: `{"x":0,"y":0}`
- Unit: canvas pixels

Position. Modify its x and y properties to change the object's coordinates on the stage.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"position":{"x":500,"y":-50}};
setTransform:{"position":{"x":-200,"y":50}} -target=aaa -duration=500;
```

### rotation
- Default: 0
- Unit: radians

Rotation. Changes the object's rotation in radians. Clockwise is positive.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"rotation":-3.14};
setTransform:{"rotation":1.57} -target=aaa -duration=500;
```

### scale
- Default: `{"x":1,"y":1}`

Scale. Modify its x and y properties to change the object's scale ratio.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"scale":{"x":0.5,"y":0.5}};
setTransform:{"scale":{"x":2,"y":2}} -target=aaa -duration=500;
```

## Basic Effects

### alpha
- Default: 1
- Range: 0 to 1, fully transparent to fully opaque

Opacity.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"alpha":0.8};
setTransform:{"alpha":0.2} -target=aaa -duration=500;
```

### blur
- Default: 0
- Range: 0 to positive infinity
- Unit: canvas pixels

Blur.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"blur":10};
setTransform:{"blur":30} -target=aaa -duration=500;
```

## Color Adjustment Filter

### brightness
- Default: 1

Brightness.

### contrast
- Default: 1

Contrast.

### saturation
- Default: 1

Saturation.

### gamma
- Default: 1

Gamma.

### colorRed / colorGreen / colorBlue
- Default: 255
- Range: 0 to 255

The red, green, and blue components of the color tone.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"brightness":0.3,"colorRed":128};
setTransform:{"contrast":2,"colorBlue":64} -target=aaa -duration=500;
```

## Bloom Filter

### bloom
- Default: 0
- Range: 0 to positive infinity

Bloom intensity.

### bloomBrightness
- Default: 1

Bloom brightness. Unlike the color adjustment filter's `brightness`, this parameter does not affect the brightness of the bloom overlay.

### bloomBlur
- Default: 0
- Range: 0 to positive infinity
- Unit: canvas pixels

Bloom blur amount. If both `bloom` and `bloomBrightness` are default values, adjusting this property alone produces no visible difference.

### bloomThreshold
- Default: 0
- Range: 0 to 1, full bloom to only the brightest parts

Bloom threshold. Higher values make only brighter parts of the image produce bloom.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bloom":1,"bloomBlur":10,"bloomThreshold":0};
setTransform:{"bloom":1,"bloomBlur":10,"bloomThreshold":0.8} -target=aaa -duration=500;
```

## Bevel Filter

### bevel
- Default: 0
- Range: 0 to 1, fully transparent to fully opaque

Bevel opacity.

### bevelThickness
- Default: 0
- Range: 0 to positive infinity
- Unit: canvas pixels

Bevel thickness.

### bevelRotation
- Default: 0
- Unit: degrees

The angle of the bevel light source. Adjusting this property alone produces no visible difference if `bevel` or `bevelThickness` is at its default value.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bevel":1,"bevelThickness":20,"bevelRotation":45};
setTransform:{"bevel":1,"bevelThickness":20,"bevelRotation":180} -target=aaa -duration=500;
```

### bevelRed / bevelGreen / bevelBlue
- Default: 255
- Range: 0 to 255

The red, green, and blue components of the bevel color.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bevel":1,"bevelThickness":20,"bevelRed":128};
setTransform:{"bevel":1,"bevelThickness":20,"bevelBlue":64} -target=aaa -duration=500;
```

## Other Filters

### oldFilm / dotFilm / rgbFilm / glitchFilm / godrayFilm / reflectionFilm
- Default: 0
- Range: 0 to 1, off to on

Switches for old film, dot, RGB split, glitch, godray, and reflection filters.

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"oldFilm":1};
setTransform:{"oldFilm":0} -target=aaa -duration=500;
```

### shockwave
- Default: 0

The phase of the shockwave.

### radiusAlpha
- Default: 0

The radius of radial alpha gradient.
