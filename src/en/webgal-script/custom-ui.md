# Custom UI

::: warning 4.7.0 Preview
The visual template editor and custom screen plugins introduced in the first half of this page are preview features starting in **4.7.0-preview.0 (Preview)**, so some details may change before the stable release.
:::

::: note
The legacy CSS template sections below assume basic familiarity with HTML/CSS/JS. With the 4.7.0 Preview visual editor, you can adjust layout and styles directly with your mouse.
:::

WebGAL lets you customize the look and layout of your game screens through templates. You can find the template files in `<Your Game Folder>/game/template/`, or switch screen styles and edit layouts visually inside WebGAL Terre.

## Visual Template Editor (4.7.0 Preview)

Starting in **4.7.0-preview.0**, templates add a new custom mode (`"uiMode": "custom"`). Twelve screens—including the Title screen, Textbox, Choice menu, Save/Load, Options, and Flowchart—are separated from each other so you can pick a different style for any screen without affecting the rest.

Open any custom template in **WebGAL Terre** to enter the visual template editor, which has three areas:

### Left: Screens & Parts

Here you can see all 12 screens and the editable parts inside each one. Click a screen row to expand it and preview that screen; click an expanded screen row again to collapse it and clear the selection.

If a part has a lock icon next to it, its size and position are controlled by a list or parent container, so you can customize colors and fonts but not drag its layout. From each screen's menu, you can switch between built-in presets or click **Import Custom Screen** to load a `.zip` screen plugin made by yourself or others.

### Center: Canvas Preview

When **Canvas Edit** is turned on, you can drag parts to move them or pull their handles to resize them. On the toolbar, you can turn on **Mock Data** to preview how Save slots, choices, backlog items, or gallery grids look when filled (even without real save files), or switch to **Interactive Preview** to click around and test the UI directly.

### Right: States & Style Controls

At the top, you can switch between **Default**, **Hover (`:hover`)**, **Active (`:active`)**, and **Disabled (`.disabled`)** to style each state separately:

- **Simple Mode**: Adjust text color, font size, font weight, line height, letter spacing, text stroke, text shadow, background (solid color, multi-stop gradient, image, 9-slice frame, fade mask, frosted glass), corner radius, borders, shadows, and opacity without writing CSS by hand.
- **Detailed Mode**: Edit CSS properties row by row in the Visual tab, or switch to Code to write raw SCSS directly. Any complex custom CSS you wrote will stay intact.

::: tip
Built-in templates (`WebGAL Refine 2026`, `WebGAL Classic`, and `WebGAL Black`) are read-only for preview and reference. If you want to customize styles or switch screens, create a new custom template first.
:::

### Supported Screens & Built-in Presets

The default template already includes all 12 screens, and several of them come with multiple presets ready to switch:

| Screen ID | Screen Name | Built-in Presets |
| :--- | :--- | :--- |
| `title` | Title Screen | `default` (Refine 2026), `classic` (Classic Bottom Bar), `editorial-right` (Editorial Right) |
| `textbox` | Textbox | `default` (Refine 2026), `classic` (WebGAL Classic), `black` (WebGAL Black), `bare` (Bare Base) |
| `choose` | Choice Menu | `default` (Default), `sleek-dark` (Sleek Dark) |
| `save` | Save Screen | `grid-2x5` (2×5 Grid), `list-vertical` (Vertical List), `split-preview` (Split Preview) |
| `load` | Load Screen | `grid-2x5` (2×5 Grid), `list-vertical` (Vertical List), `split-preview` (Split Preview) |
| `options` | Options Screen | `tabbed-classic` (Tabbed Classic), `single-scroll` (Single Scroll) |
| `extra` | Extra / Gallery | `gallery-classic` (Gallery Classic), `split-tabs` (Split Tabs) |
| `flowchart` | Flowchart | `default` (Default) |
| `menuPanel` | Menu Overlay | `default` (Default) |
| `backlog` | Backlog | `default` (Default) |
| `bottomControlPanel` | Bottom Control Bar | `default` (Default) |
| `globalDialog` | Global Dialog | `default` (Default) |

If tweaking styles is not enough and you want to redesign a screen's layout or features from scratch, take a look at [Develop Custom Screen Plugins (create-webgal-ui)](./custom-screen-dev.md).

## Using CSS / SCSS (Legacy Templates)

WebGAL allows you to customize the appearance of game screens such as the textbox and title screen by editing SCSS files in a template.

In a legacy template under `<Your Game Folder>/game/template/` (or under `screens/<screenId>/<variantId>/style.scss` in `custom` mode), the main files are:

- Choice menu: `Stage/Choose/choose.scss`
- Textbox: `Stage/Textbox/textbox.scss`
- Title screen: `UI/Title/title.scss`

### Example

Taking the title screen as an example, open `<Your Game Folder>/game/template/UI/Title/title.scss` and replace everything in it with the following code to align the title buttons along the bottom center:

::: details Expand example SCSS

```scss
.Title_main {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 13;
  display: flex;
  align-items: flex-end;
}

.Title_buttonList {
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  left: unset;
  min-width: unset;
  width: 100%;
  height: auto;
  padding-left: unset;

  background-color: #000000b5;
  font-family: "资源圆体", serif;

  transition: unset;
}

.Title_button {
  flex: 0 1 auto;
  cursor: pointer;
  padding: unset;
  margin: unset;
  background: transparent;
  background-color: transparent;
  backdrop-filter: none;

  border: 0;
  border-radius: 0;
  border-bottom: 16px;
  border-color: transparent;
  border-style: solid;
  transform: none;

  font-weight: bold;
  text-align: left;
  text-shadow: none;

  overflow: visible;
  transition: background-color 0.5s ease-out;

  &:hover {
    transform: unset;
    padding: unset;
    text-shadow: none;
    filter: unset;
    background-color: #ffffff42;
    border-color: #ffffff;
    transition: background-color 0s;
  }
}

.Title_button_text {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 32px 48px;

  font-size: 200%;
  font-family: '资源圆体', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  letter-spacing: 0.16em;
  line-height: 1.2;

  transform-origin: left center;
  transition: unset;
  color: #ffffff;

  white-space: nowrap;
}

.Title_button_text_outer {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  white-space: nowrap;

  background-image: none;
  background-clip: border-box;
  -webkit-background-clip: border-box;

  color: #ffffff;
  -webkit-text-fill-color: unset;
  z-index: 2;
  text-shadow: unset;
}

.Title_button_text_inner {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  color: inherit;
  -webkit-text-stroke: #000000 10px;
  z-index: 1;
}

.Title_backup_background {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 13;
  background: linear-gradient(135deg, #fdfbfb 0%, #dcddde 100%);
}

.Title_button_disabled {
  cursor: not-allowed !important;
  opacity: 0.45;
  background-color: transparent !important;
  border-color: transparent !important;
}
```

:::

After saving the file and reloading the game, you will see the title buttons centered along the bottom.

## Base Styles

Even if you are not using a custom template, WebGAL ships a built-in set of base UI styles so every screen still displays properly by default.

Before version 4.6.1, base styles and custom styles were applied together:

```html
<!-- Title_button_base and Title_button here are only examples; real names may differ -->
<div class="Title_button_base Title_button">
  <!-- ... -->
</div>
```

If you wondered why buttons still looked slightly skewed even though you didn't write a skew transform, it came from the base class and had to be overridden with `transform: none;`.

Starting from version **4.6.1**, when you define a custom class such as `Title_button`, WebGAL stops applying `Title_button_base` altogether:

```html
<!-- Once Title_button is defined, Title_button_base is no longer applied -->
<div class="Title_button">
  <!-- ... -->
</div>
```

If you migrate a template made before 4.6.1, check whether any parts relied on those base fallbacks and fill in any missing styles.

## Format

You can write CSS as usual, with two small requirements to keep in mind:

### Nest Instead of Flattening

Write pseudo-classes such as `:hover` nested inside the class using `&:hover` instead of placing them at the top level:

```scss
.Title_button {
  /* ... */

  &:hover {
    /* Correct */
  }
}

.Title_button:hover {
  /* Incorrect */
}
```

The same applies to other nested selectors.

### Write Standard CSS

Even though the extension is `.scss`, Sass features such as `$variables`, `@mixin`, and `@include` are not supported.

## Global Stylesheet

Besides templates, there is also a `userStyleSheet.css` file in the `game` folder. When the game starts, it loads as a normal CSS stylesheet for the entire page.

Unlike template `.scss` files, `userStyleSheet.css` is plain CSS and supports everything like `@font-face`, `@keyframes`, and `@media`, which makes it handy for global rules such as custom fonts:

```css
@font-face {
  font-family: 'MyFont';
  src: url('./template/assets/fonts/my_font.woff2') format('woff2');
}
```

Relative paths in this file start from the `game` folder.

::: warning
Internal UI class names are generated at build time and may change between versions. To restyle the textbox, title screen, or choices, use templates rather than targeting internal class names inside `userStyleSheet.css`.
:::

## Dynamic Switching

WebGAL also lets you switch style classes while the game is running. Check out the [applyStyle](../script-reference/commands/applyStyle.md) command for details:

```scss
.outer {
  /* Other properties */
  color: #ffffff;
}

.outer_orange {
  /* Same properties as .outer */
  color: #ff8800; // Only color differs
}
```

```webgal
Character A: This text uses the original color.
applyStyle: outer->outer_orange;
Character A: This text is orange.
applyStyle: outer->outer;
Character A: Back to the original color.
```
