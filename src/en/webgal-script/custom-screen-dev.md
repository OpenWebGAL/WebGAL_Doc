# Develop Custom Screen Plugins (create-webgal-ui)

::: warning 4.7.0 Preview
`create-webgal-ui` and custom screen plugins are preview features starting in **4.7.0-preview.0 (Preview)**, so APIs or configuration fields may still change slightly before the stable release.
:::

If tweaking CSS is not enough and you want to build your own Title screen, Save/Load screen, or Textbox from scratch, you can use the official `create-webgal-ui` tool to generate a screen plugin project. Once finished, export it as a `.zip` file and import it straight into the WebGAL Terre template editor, or share it with others.

## Prerequisites

Make sure **Node.js 18 or later** is installed on your computer.

## Create a Project

::: tip
During the `4.7.0-preview.0` preview period, `create-webgal-ui` is published under the `preview` tag on npm, so remember to add `@preview` when running the command. Once 4.7.0 is released as `latest`, `@preview` can be omitted.
:::

Run any of the commands below in your terminal:

```bash
# npm
npm create webgal-ui@preview my-screen -- --screen title --variant my-title

# yarn
yarn create webgal-ui@preview my-screen -- --screen title --variant my-title

# pnpm
pnpm create webgal-ui@preview my-screen -- --screen title --variant my-title

# npx
npx create-webgal-ui@preview my-screen -- --screen title --variant my-title
```

Supported options:

| Option | Description | Default |
| :--- | :--- | :--- |
| `[targetDir]` | Folder name to create and project name | `my-webgal-screen` |
| `--screen <screenId>` | Which game screen you want to customize | `title` |
| `--variant <variantId>` | Variant ID for this style (must be unique within the same screen) | `custom-<screen>` |

The 12 valid screen IDs for `--screen` are: `title`, `textbox`, `choose`, `save`, `load`, `options`, `flowchart`, `menuPanel`, `backlog`, `extra`, `bottomControlPanel`, and `globalDialog`.

## Folder Structure

The generated project stays compact and mainly includes these files:

```text
my-screen/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── webgal-screen.json        # Screen info and editable parts shown in the editor
├── scripts/
│   └── export-screen.mjs     # Script that checks React 18 and exports a zip
└── src/
    ├── index.tsx             # Your screen component code
    ├── style.scss            # Default styles (can still be edited visually in Terre)
    └── types/
        └── webgal-ui-sdk.d.ts # Props for each screen and SDK types
```

`webgal-screen.json` tells WebGAL and the editor which screen this plugin replaces, and which elements should show up in the editor's left panel so users can style them:

```json
{
  "screen": "title",
  "variantId": "my-title",
  "name": "Custom Title Screen",
  "version": "0.1.0",
  "entry": "index.js",
  "style": "style.scss",
  "parts": [
    {
      "id": "background",
      "name": "Background Layer",
      "selector": ".custom-title-bg",
      "allowLayoutEdit": false
    },
    {
      "id": "menu",
      "name": "Title Menu",
      "selector": ".custom-title-menu",
      "allowLayoutEdit": true
    }
  ]
}
```

Outer panels or button bars that users should be able to move around can set `"allowLayoutEdit": true` so they can be dragged on the canvas. Full-screen backgrounds or repeated cards inside a list are best kept with `"allowLayoutEdit": false` so users only edit colors, fonts, and borders in the right panel.

## Export and Import

Go into the new folder, install dependencies, check types, and export the `.zip` package:

```bash
cd my-screen
npm install
npm run typecheck
npm run export
```

Here is what each command does:

- `npm run typecheck`: Checks TypeScript types.
- `npm run build`: Builds the single-file bundle `dist/index.js`.
- `npm run export`: Verifies the React 18 requirement, builds the bundle, and packs `index.js`, `webgal-screen.json`, `style.scss`, and `src/assets/` (if present) into `dist-export/<screen>-<variantId>.zip`.

Open **WebGAL Terre**, create or open a **custom template** (built-in templates cannot be edited), click **Import Custom Screen** from the matching screen's menu on the left, and choose the `.zip` file. You will see it live right away and can keep tuning `style.scss` in the right panel.

::: note
If you prefer placing files manually instead of clicking Import, copy `dist/index.js`, `webgal-screen.json`, `src/style.scss`, and `src/assets/` into `<template>/screens/<screen>/<variantId>/`, and set `screens.<screen>` in `template.json` to `<variantId>`.
:::

## Writing Screen Code

All Props passed to each screen can be found in `src/types/webgal-ui-sdk.d.ts`. Your entry file `src/index.tsx` will usually look like this:

```tsx
import { useScreenParts, resolveAssetUrl } from '@webgal/ui-sdk';
import type { ScreenPartDefinition, TitleScreenProps } from './types/webgal-ui-sdk';
import defaultCssText from './style.scss?inline';

export const variantId = 'my-title';
export const name = 'My Title Screen';

export const parts: ScreenPartDefinition[] = [
  { id: 'menu', name: 'Title Menu', selector: '.custom-title-menu', allowLayoutEdit: true },
];

export { defaultCssText };

export default function MyTitleScreen(props: TitleScreenProps) {
  const { rootProps } = useScreenParts('title', parts, defaultCssText);
  if (!props.visible) return null;

  return (
    <div {...rootProps}>
      {/* Write your JSX here */}
    </div>
  );
}
```

A few important details to keep in mind:

1. **Lay Out at `2560 × 1440 px`**  
   WebGAL stages and screens all run on a fixed `2560 × 1440` logical canvas, so use fixed `px` units rather than `vw` or `vh`.
2. **Do Not Put React in `dependencies`**  
   At runtime, the engine shares its own React 18 instance with screen plugins, and `vite.config.ts` already configures the aliases for you. Never add `react` or `react-dom` to `dependencies` in `package.json`, and keep `peerDependencies` and `devDependencies` on `18.x` (if changed to another major version, `npm run export` will stop with an error).
3. **Scoped Styles and Asset Paths**  
   Spread `{...rootProps}` from `useScreenParts(screen, parts, defaultCssText)` onto your root element so your styles stay isolated from other screens and connect to editor selection and live reload. In `src/style.scss`, use relative paths such as `url('./assets/bg.png')`; in TSX code, wrap local asset paths with `resolveAssetUrl('./assets/icon.png')` (or `resolveScreenAssetUrl`).
4. **Keep `144px` Bottom Padding on Menu Screens**  
   Screens such as `save`, `load`, `options`, `flowchart`, and `extra` have the floating `menuPanel` across the bottom. Leave bottom padding (recommended `padding-bottom: 144px;`) so buttons or page controls are not covered.
5. **Use Built-in SDK Helpers & Icons**  
   `@webgal/ui-sdk` includes rich-text helpers (`parseRichTextLines`, `renderRichText`, `renderRichTextLines`) and built-in icons, while importing icons from `@icon-park/react` reuses the icons bundled in the engine without making your zip bigger.
