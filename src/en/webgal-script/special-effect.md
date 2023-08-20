# Special effect

## Use special effect

Currently, WebGAL's effect system is implemented by PixiJS.

### Initialize Pixi

Use `pixiInit` to initialize Pixi.

``` ws
pixiInit; 
```

::: warning
If you want to use effects, you must run this command first to initialize Pixi.

If you want to eliminate the effects that have been applied, you can use this syntax to clear the effects.
:::

#### Add effects

Use `pixiPerform` to add effects.

``` ws
pixiPerform:rain; // Add a raining effect
```

Note: After the effect is applied, it will keep running if not initialized.

### List of preset effects

| Effect          | Command                     |
| :-------------- | :-------------------------- |
| Rain            | pixiPerform:rain;           |
| Snow            | pixiPerform:snow;           |
| Cherry Blossoms | pixiPerform:cherryBlossoms; |

### Superimpose effects

If you want to superimpose two or more effects, you can superimpose different effects without using the `pixiInit` command.

``` ws
pixiPerform:rain;
pixiPerform:snow;
```

### Clear superimposed effects

Use `pixiInit` to initialize, this can eliminate all effects that have been applied.

## Add custom effects

You can download the source code, then find `/Core/gameScripts/pixiPerformScripts/`, then create a `PIXI.Container` for the effect you need.

``` ts
// Get the current Pixi effect Container
const effectsContainer = RUNTIME_GAMEPLAY.pixiStage!.effectsContainer!;
// Way to call Pixi App, may be useful for determining screen size, etc.
const app = RUNTIME_GAMEPLAY.pixiStage!.currentApp!;
// Create container for custom effects
const container = new PIXI.Container();
// Add effects
effectsContainer.addChild(container);
```

Texture files can be placed in the `game/tex` directory.

Then, at the beginning of the file, import `the effect registration method` to register your new effect.

At the end of the file, use it to register your effect. The first parameter is the effect name, and the second is the method to call the effect.

``` ts
import {registerPerform} from '../pixiPerformManager';

// Assume this is your effect  
function myPerform() {
  // ...
}

// Register
registerPerform('myPerform', () => myPerform(parameters)); 
```

Finally, compile the WebGAL that supports your custom effects

``` shell
yarn run build; 
```

Now you can call your effects in the script

``` ws
pixiPerform:your new effect;
```
