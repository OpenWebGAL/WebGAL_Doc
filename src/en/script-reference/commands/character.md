# character

Displays, updates in place, or exits a multi-layer composite figure.

## Statement Content

Specify the character directory path under the `figure` folder (which must contain a `figure.json` file), optionally followed by `.<presetName>` to choose a preset. When the content is empty or `none`, the composite figure exits.

``` webgal
; Display a composite figure (uses the first non-empty preset in figure.json by default)
character:alice;
; Switch to the smile preset
character:alice.smile;
; Subdirectories are supported; only the last "." in the final path segment splits the preset name
character:cast/alice.smile;
; Exit the composite figure
character:none;
```

The rendered component layers are determined in the following priority order (all ordered from bottom to top):

1. When `-components` is specified, the listed components are rendered, overriding `.<presetName>` in the statement content.
2. When `.<presetName>` is specified, the component list of that preset in `figure.json` is rendered. If the preset is missing or empty, a console warning is logged and it falls back to the default display.
3. When neither is specified, the first non-empty preset in `figure.json` is used; if no valid preset is defined, all layers in `components` are rendered in their defined order.

When the target position (or `id`) already holds the **same character at the same base position**, switching presets or components updates the character **in place** without triggering entrance or exit animations. Existing transforms and filters, layer (`zIndex`), blend mode, exit settings, and running animations are preserved; if `-transform`, `-zIndex`, `-blendMode`, or `-exit` is passed at the same time, those updates are applied directly. If the target slot is empty, holds a different character, or changes base position (`-left`, `-right`, etc.), previous effects on that slot are cleared and the character enters or replaces the slot.

``` webgal
character:alice -id=alice -left -exit=exit-to-left;
; Update expression preset in place while keeping position, transforms, and exit settings
character:alice.smile -id=alice -left;
; Composite figures can also be targeted by setTransform, setAnimation, and setTempAnimation
setAnimation:shake -target=alice;
; Exits using the previously configured exit-to-left animation
character:none -id=alice;
```

::: info
- Composite figures are available starting from v4.6.7.
- `character` shares stage positions and `id` naming with [changeFigure](changeFigure.md): placing a composite figure on the same position or `id` replaces an existing standard figure, and vice versa. However, `character:none` only clears composite figures, while `changeFigure:none` only clears standard figures.
- Single-image mouth/blink parameters (`mouthOpen`, `eyesOpen`, etc.) and Live2D/Spine model parameters (`motion`, `skin`, `expression`, `bounds`, `blink`, `focus`) are not supported by `character` and are ignored with a console warning.
:::

## Character Definition File (figure.json)

Each composite figure corresponds to `game/figure/<characterDir>/figure.json`. In the WebGAL Terre editor, switch to the **Character** tab on the left sidebar to create a character and visually add component layers, adjust offsets, scale, and rotation, and arrange expression or outfit presets; or write `figure.json` directly:

``` json
{
  "version": 1,
  "canvas": { "width": 1200, "height": 2000 },
  "components": [
    { "name": "base", "src": "body/base.png", "x": 0, "y": 0 },
    { "name": "uniform", "src": "outfit/uniform.png", "x": 120, "y": 420 },
    { "name": "casual", "src": "outfit/casual.png", "x": 110, "y": 410 },
    { "name": "calm", "src": "face/calm.png", "x": 430, "y": 210 },
    { "name": "smile", "src": "face/smile.png", "x": 430, "y": 210 }
  ],
  "presets": {
    "normal": ["base", "uniform", "calm"],
    "smile": ["base", "uniform", "smile"],
    "casual_smile": ["base", "casual", "smile"]
  }
}
```

| Field | Description |
| :-- | :-- |
| `version` | Template format version, fixed to `1` |
| `canvas` | Optional character canvas pixel size `{"width": w, "height": h}` (up to `8192`). When omitted, inferred automatically from the bounding box of loaded layers; the canvas scales uniformly to fit the stage just like an image figure |
| `components` | Array of component layer definitions, ordered from **bottom to top** |
| `presets` | Optional preset map where each key is a preset name and each value is an array of component `name`s ordered from **bottom to top** |

Each item in `components` supports the following fields:

| Field | Description |
| :-- | :-- |
| `name` | Required unique component identifier referenced by `presets` and `-components` |
| `src` | Required image path relative to the character directory (supports `png`, `webp`, `jpg`, `jpeg`, `avif`, `bmp`, `svg`; cannot escape the character directory) |
| `x`, `y` | Optional top-left pixel coordinates of the component on the character canvas, defaulting to `0` |
| `width`, `height` | Optional explicit draw size on the canvas (takes precedence over scale when both are positive numbers) |
| `scale`, `scaleX`, `scaleY` | Optional scale multipliers, defaulting to `1`; `scaleX` and `scaleY` override `scale` on each axis |
| `rotation` | Optional clockwise rotation in radians around the component's center, defaulting to `0` |

## Parameters

### components
- String

A comma-separated list of component `name`s rendered from bottom to top. When set, `.<presetName>` in the statement content is ignored.

``` webgal
character:alice -components=base,casual,smile;
```

### transform
- String

Sets a JSON string that controls the stage transform and filter effects of the composite figure. See [Transform and Effects Reference](../others/transform-reference.md) for details. Takes effect on entrance, replacement, and in-place updates of the same character; however, on entrance or replacement, if `enter` specifies a custom entrance animation, `transform` does not take effect.

``` webgal
character:alice -transform={"position":{"x":-50,"y":0},"scale":{"x":1.1,"y":1.1}};
```

### transformFrom
- String
- Available values: `current`, `default`
- Default value: `default`

Specifies how [transform and effect](../others/transform-reference.md) properties omitted from `transform` or entrance/exit animations are handled:
- `default`: Properties not written are reset to their default values.
- `current`: Starts from the character's current transform, modifying only written properties while keeping unwritten properties unchanged.

``` webgal
character:alice -id=alice -transform={"position":{"x":-200}};
; Keep x=-200 and only lower brightness to 0.6
character:alice.smile -id=alice -transform={"brightness":0.6} -transformFrom=current;
```

<!-- @include: ../arguments/enter.md -->
``` webgal
character:alice -enter=enter-from-left;
```

<!-- @include: ../arguments/exit.md -->
``` webgal
character:alice -exit=exit-to-right;
```

<!-- @include: ../arguments/duration.md -->
Applied to the default entrance animation and `transform` transitions. Default value: 300.
``` webgal
character:alice -duration=200;
```

<!-- @include: ../arguments/ease.md -->
Applied to the default entrance animation and `transform` transitions.
``` webgal
character:alice -ease=easeOut;
```

### enterDuration
- Number
- Unit: milliseconds
- Range: 0 to positive infinity

The entrance animation duration (also used when `transform` transitions if set; otherwise `duration` is used, whose default is 300).

``` webgal
character:alice -enterDuration=200;
```

### exitDuration
- Number
- Unit: milliseconds
- Range: 0 to positive infinity

The exit animation duration. If omitted, the default value is 450.

``` webgal
character:alice -exitDuration=300;
```

### left / right
- Boolean

When `left` is `true`, the composite figure appears on the left side of the stage with its coordinate origin offset to the left (default id `fig-left` if `id` is omitted). When `right` is `true`, it appears on the right side (default id `fig-right` if `id` is omitted). Changing the position of a character with the same `id` replaces it and resets previous effects.

``` webgal
character:alice -left;
character:bob -right;
```

### left13 / right13 / left14 / right14
- Boolean

Places the composite figure aligned by its center at 1/3 from the left, 1/3 from the right, 1/4 from the left, or 1/4 from the right of the stage width. If `id` is omitted, the default id is `fig-left13`, `fig-right13`, `fig-left14`, or `fig-right14`.

``` webgal
character:alice -left13;
character:bob -right13;
```

### id
- String

Sets a unique identifier for the composite figure and can be combined with position flags to set its initial position. If omitted, a default id such as `fig-center`, `fig-left`, or `fig-right` is assigned according to the position arguments.

``` webgal
character:alice -id=alice -left;
character:alice.smile -id=alice -left;
character:none -id=alice;
```

### zIndex
- Number (integer)
- Range: 0 to positive infinity

The figure's layer. Larger values place the figure higher; if values are equal, the figure that entered later is placed higher. Default value: 0. Can be updated both on entrance and during in-place updates.

``` webgal
character:alice -id=alice -zIndex=2;
```

### blendMode
- String
- Default: `normal`

Sets the blend mode of the composite figure. Takes effect both on entrance and during in-place updates.

``` webgal
character:alice -id=alice -blendMode=add;
```

### clear
- Boolean

Treats the statement content as an empty string, making the composite figure at the target position or `id` exit.

``` webgal
character:alice -left -clear;
```
