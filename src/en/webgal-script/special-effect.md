# Effects

Currently, WebGAL's effect system is powered by PixiJS.

## Using Effects

### Initialize Pixi

Initialize Pixi using `pixiInit`.

``` ws
pixiInit;
```

::: warning
If you want to use effects, you must run this command to initialize Pixi first.

If you want to clear the effects that have already taken effect, you can use this syntax to clear the effects.
:::

### Add Effects

Add effects using `pixiPerform`.

``` ws
pixiPerform:rain; // Add a rain effect
```

Note: After the effect takes effect, if it is not initialized, the effect will continue to run.

### List of Built-in Effects

| Effect | Command |
| :--- | :--- |
| Rain | pixiPerform:rain; |
| Snow | pixiPerform:snow; |
| Cherry Blossoms | pixiPerform:cherryBlossoms; |

### Superimpose Effects

If you want to superimpose two or more effects, you can superimpose different effects without using the `pixiInit` command.

``` ws
pixiPerform:rain;
pixiPerform:snow;
```

### Clear Superimposed Effects

Initialize using `pixiInit` to clear all effects that have been applied.

## Adding Custom Effects

You can download the source code, then find `/Core/gameScripts/pixiPerformScripts/` and create a new `PIXI.Container` to create the effects you need.

``` ts
// Get the current Pixi effect Container
const effectsContainer = RUNTIME_GAMEPLAY.pixiStage!.effectsContainer!;
// Call the Pixi App method, which may be useful for determining screen size, etc.
const app = RUNTIME_GAMEPLAY.pixiStage!.currentApp!;
// Create a container for custom effects
const container = new PIXI.Container();
// Add effects
effectsContainer.addChild(container);
```

Texture files can be placed in the `game/tex` directory.

Then, import the `effect registration method` at the beginning of the file to register the new effect you wrote.

At the end of the file, use it to register your effect, the first parameter is the effect name, and the second parameter is the method to call the effect.

``` ts
import {registerPerform} from '../pixiPerformManager';

// Let's say this is your effect
function myPerform() {
    // ...
}

// Register
registerPerform('myPerform', () => myPerform(parameters));
```

Finally, compile WebGAL with support for your custom effects

``` shell
yarn run build;
```

This way, you can call your effects in the script

``` ws
pixiPerform:your new effect;
```