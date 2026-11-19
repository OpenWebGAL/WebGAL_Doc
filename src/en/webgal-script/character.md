# Characters (Composite Figures)

When a character has multiple outfits, hairstyles, expressions, or accessories, exporting every permutation as a separate full-body sprite quickly multiplies file count and project size. WebGAL's **Character (Composite Figure)** system lets you split the base body, outfits, facial expressions, and accessories into separate layer images, assemble them onto a shared canvas via `figure.json`, define named presets (such as `normal`, `smile`, and `casual_smile`), and display or switch them in place during scenes with the `character` command.

::: info
Characters (composite figures) are available starting from v4.6.7.
:::

## Preparing Character Assets

Each composite character lives in its own folder under `game/figure/<characterDir>/`, containing a `figure.json` definition file alongside its component images (which can be organized into subfolders):

``` text
game/figure/alice/
├── figure.json
├── body/
│   └── base.png
├── outfit/
│   ├── uniform.png
│   └── casual.png
└── face/
    ├── calm.png
    ├── smile.png
    └── blush.png
```

Component images support `png`, `webp`, `jpg`, `jpeg`, `avif`, `bmp`, and `svg`. Nested character folders are also supported (for example, `game/figure/cast/alice/figure.json` is referenced in scripts as `character:cast/alice;`). Avoid naming a top-level folder under `figure` as `none`, since `character:none;` is reserved for making a character exit.

Two common art export workflows work well:

- **Full-canvas export**: Export every part as a transparent image of the exact same canvas size so all layers align naturally at `(0, 0)`.
- **Cropped part assembly**: Export cropped expressions or accessories and position, scale, or rotate them directly on the Character Editor canvas.

## Creating and Assembling Characters in the Editor

When using **WebGAL Terre**, you can assemble layers and presets visually in the Character Editor without writing JSON by hand:

1. **Create a character**: Switch to the **Character** tab on the left sidebar and click **Create new character** to enter a folder name (such as `alice`). The editor creates `game/figure/alice/figure.json`. Place your part images into that folder and click `figure.json` to open the Character Editor.
2. **Canvas and direct manipulation (left)**: Use the top toolbar on the canvas to set the character canvas width × height (up to `8192 × 8192`), zoom out/in, or click the percentage button to fit the canvas to the viewport. Once a layer is selected, you can drag to move, resize, or rotate it directly on the canvas. On the game stage, the character canvas scales uniformly to fit the stage height just like a standard image figure.
3. **Add and order layers (middle-right)**: Click **Add layer** to pick component images from the character folder. Like standard painting software, the layer list is ordered **from top (frontmost) to bottom (backmost)** — drag rows up or down to change overlap order, and click the eye icon to toggle visibility while testing combinations. When saving, the editor automatically converts the order to the bottom-to-top array used in `figure.json`.
4. **Fine-tune layer properties (top-right)**: Select a layer to edit its unique **Name** (referenced by presets and scripts; renaming automatically updates existing presets), swap its **Asset**, or enter exact values for **Position** (`X`, `Y`), **Scale** (`X`, `Y`), **Rotation** (in radians), and explicit **Size** (`W`, `H`).
5. **Create expression and outfit presets (bottom-right)**: Turn on the eye icons for the layers you want in an outfit/expression combination (for example `base`, `uniform`, and `smile`), then click **New preset** in the bottom-right panel to save the currently visible layers as a preset. Select a preset on the left to preview it on the canvas, rename it in the input box on the right (such as `normal`, `smile`, `casual_smile`), and check or uncheck layers below at any time.

## Writing figure.json Manually

If you develop without the graphical editor or generate character definitions from PSD export scripts, you can write `figure.json` directly inside the character folder:

``` json
{
  "version": 1,
  "canvas": { "width": 1200, "height": 2000 },
  "components": [
    { "name": "base", "src": "body/base.png", "x": 0, "y": 0 },
    { "name": "uniform", "src": "outfit/uniform.png", "x": 120, "y": 420 },
    { "name": "casual", "src": "outfit/casual.png", "x": 110, "y": 410 },
    { "name": "calm", "src": "face/calm.png", "x": 430, "y": 210 },
    { "name": "smile", "src": "face/smile.png", "x": 430, "y": 210 },
    { "name": "blush", "src": "face/blush.png", "x": 430, "y": 210 }
  ],
  "presets": {
    "normal": ["base", "uniform", "calm"],
    "smile": ["base", "uniform", "smile"],
    "casual_smile": ["base", "casual", "smile"]
  }
}
```

When writing `figure.json` by hand, note that both `components` and each preset array are ordered **from bottom to top (back to front)** — for example, `["base", "uniform", "smile"]` draws `base` first, then `uniform`, and `smile` on top. If `canvas` is omitted, the engine automatically infers the canvas size from the bounding box of loaded layers. See the [character command reference](../script-reference/commands/character.md#character-definition-file-figure-json) for the full field specification.

## Using Characters in Scenes

### Graphical Editor

Open **Add statement** in the top bar of the scene's graphical editor and click **Change character**:

- After choosing a **Character**, **Use preset** is enabled by default so you can pick any preset defined in `figure.json` (or keep the default preset) from the dropdown.
- For a one-off combination that does not need a saved preset, toggle **Custom layers** and multi-select layers or enter comma-separated component names (such as `base,casual,blush`) under **Layer combination**.
- In the same panel, you can set the character position, optional character ID, `z-index`, visual effects via the Effect Editor, or toggle **Clear character** to make the character exit.

### Writing Scripts

In the script editor, typing `character:` provides auto-completion for character directories, `.preset` names, and `-components` layer names. Here is a complete scene example:

``` webgal
; Enter on the left (uses the first non-empty preset in figure.json when no preset is specified)
character:alice -left -next;
Alice: Good morning! Kept you waiting?;

; Same character at the same position: updates layers in place without re-playing enter/exit animations
character:alice.smile -left -next;
Alice:Judging by your face, did you just wake up?;

; Combine components from bottom to top on the fly with -components without defining a preset
character:alice -left -components=base,casual,blush -next;
Alice:I'm still not quite used to wearing casual clothes...;

; Exit the character
character:none -left;
```

::: tip
If `figure.json` defines no presets (or all presets are empty), `character:alice;` falls back to rendering all layers in `components` in their defined bottom-to-top order.
:::

## Positions, Free IDs, and Animations

Composite figures share the exact same stage position and `id` system as `changeFigure`:

- **Preset positions**: Centered by default (`fig-center`), with `-left`, `-right`, and center-aligned `-left13`, `-right13`, `-left14`, and `-right14`.
- **Free IDs**: Assign a custom identifier with `-id` to place any number of characters on stage without replacing each other.
- **Preserving state in place**: As long as the target slot (or `id`) holds the same character at the same base position, switching `.preset` or `-components` preserves existing transforms, filters, layer (`zIndex`), blend mode, exit animation settings, and running animations.
- **Animations and transforms**: Onstage composite figures can be targeted via `fig-left`, `fig-center`, or a custom `id` in [setTransform](../script-reference/commands/setTransform.md), [setAnimation](../script-reference/commands/setAnimation.md), and [setTempAnimation](../script-reference/commands/setTempAnimation.md). You can also pass `-transform` when switching presets in place (add `-transformFrom=current` to modify only written properties while keeping existing offsets or scale):

``` webgal
; Enter with a custom id and exit animation
character:alice -id=alice -left -transform={"position":{"x":-120}} -exit=exit-to-left -next;

; Play a preset shake animation on the composite figure
setAnimation:shake-v2 -target=alice -next;
Alice:Whoa, you startled me!;

; Switch preset in place while keeping x=-120 and dimming brightness
character:alice.calm -id=alice -left -transform={"brightness":0.7} -transformFrom=current -duration=300 -next;

; Exits using the previously configured exit-to-left animation
character:none -id=alice;
```

## Differences from Standard Figures (changeFigure)

- **Shared slots, independent exits**: `character` and [changeFigure](../script-reference/commands/changeFigure.md) share stage positions and `id`s. Placing a `character` on the same position or `id` replaces an existing standard figure, and vice versa; however, `character:none` only clears composite figures, while `changeFigure:none` only clears standard figures.
- **When to use which**: Multi-layer static sprites are best managed with `character`. For Live2D / Spine models, or single-image figures using volume-driven lip-sync and blink variants (`mouthOpen`, `eyesOpen`, etc.), continue using `changeFigure` and [changeFigureDiff](../script-reference/commands/changeFigureDiff.md).

For details on all parameters of the `character` statement, see the [character command reference](../script-reference/commands/character.md).
