# Effects

Currently, WebGAL's effect system is powered by PixiJS.

## Using Effects

### Initialize Pixi

Initialize Pixi using `pixiInit`.

``` webgal
pixiInit;
```

::: warning
If you want to use effects, you must run this command to initialize Pixi first.

If you want to clear the effects that have already taken effect, you can use this syntax to clear the effects.
:::

### Add Effects

Add effects using `pixiPerform`.

``` webgal
pixiPerform:rain; // Add a rain effect
```

Note: After the effect takes effect, if it is not re initialized, the effect will continue to run.

### List of Built-in Effects

| Effect | Command |
| :--- | :--- |
| Rain | pixiPerform:rain; |
| Snow | pixiPerform:snow; |
| Heavy Snow | pixiPerform:heavySnow; |
| Cherry Blossoms | pixiPerform:cherryBlossoms; |

### Superimpose Effects

If you want to superimpose two or more effects, you can superimpose different effects without using the `pixiInit` command.

``` webgal
pixiPerform:rain;
pixiPerform:snow;
```

### Clear Superimposed Effects

Initialize using `pixiInit` to clear all effects that have been applied.

## Adding Custom Effects

You can download the source code, create a new file in `packages/webgal/src/Core/gameScripts/pixi/performs/`, and create a new `PIXI.Container` to create the effects you need. Files in this directory are loaded by the engine automatically, so you do not need to import them anywhere.

The effects container is divided into a foreground container and a background container, and the foreground container is used here as an example.

``` typescript
// Get the current Pixi effect Container
const effectsContainer = WebGAL.gameplay.pixiStage!.foregroundEffectsContainer!;
// Call the Pixi App method, which may be useful for determining screen size, etc.
const app = WebGAL.gameplay.pixiStage!.currentApp!;
// Create a container for custom effects
const container = new PIXI.Container();
// Add effects
effectsContainer.addChild(container);
```

Texture images can be placed in `packages/webgal/src/assets/tex/` and imported in code with `import`, so they are bundled into the engine. You can also put them in the game's `game/tex` directory and load them with the path `./game/tex/<file name>`.

Then, import the `effect registration method` at the beginning of the file to register the new effect you wrote.

At the end of the file, use it to register your effect. The first parameter is the effect name. In the second parameter, `fg` and `bg` are functions that create the foreground and background layers of the effect. Each function must return the effect's `container` and the `tickerKey` used when registering its frame animation.

``` typescript
import { registerPerform } from '@/Core/util/pixiPerformManager/pixiPerformManager';

// Let's say this is your effect
function myPerform() {
  const container = new PIXI.Container();
  // ...
  return { container, tickerKey: 'my-perform-ticker' };
}

// Register
registerPerform('myPerform', { fg: () => myPerform() });
```

Finally, compile WebGAL with support for your custom effects

``` bash
yarn run build;
```

This way, you can call your effects in the script

``` webgal
pixiPerform:myPerform;
```