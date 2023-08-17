# Advanced Scripts

## Implement statement jumps and branch jumps within the same scene (TXT file)

If you want to create a branch but feel it is too troublesome to create a new TXT file, you can try the following to implement creating branches and jumping statements within the same file.

**Note: If your branch is very long, I do not recommend using this method, because the number of lines in a single TXT is not suitable for being too long, otherwise it may cause performance problems such as slow loading and sluggish response.**

### First, you must understand how to use label

```
......
jumpLabel:label_1; 
// The following lines will be ignored:
...... 
......
......
// Then, you need to create the label:
label:label_1;
The program will continue executing here.;
......
......
```

In short, jumpLabel is similar to a goto statement, which can immediately make your script jump to any position in the scene (TXT file), and this position needs you to create it with label.

If jumpLabel is compared to a portal, then the destination of this portal is the position where the label is located.

### With the above basis, you can use choose to jump to the position where label is located through branches

```
WebGAL: Let's test jumping to label through branch!;
choose:Test 1:label_1|Test 2:label_2;
label:label_1;  
It should now be branch 1;
jumpLabel:end;
label:label_2;
It should now be branch 2;
jumpLabel:end; 
label:end;
Now is the unified end;
```

Note that at the end of each branch, you should use jumpLabel to jump to where you want. Since the program executes linearly, if you do not jump at the end of the branch, the program will continue to run down, for example:

```
WebGAL: Let's test jumping to label through branch!;
choose:Test 1:label_1|Test 2:label_2;  
label:label_1;
It should now be branch 1;
label:label_2;
It should now be branch 2;  
Now is the unified end;
```

In this script, if you select branch 2, everything seems okay. But if you select branch 1, you will be surprised to find that after branch 1 executes, branch 2 executes again. This is because the program continues to execute the next line in order, and you did not specify where to jump after the branch ends.

## Use variables

**Note: Before you figure out how to use labels and how to jump scenes within labels, please do not easily use the variable system, as this may confuse you!**

Set variable:

```
setVar:a=1; // Can set numbers
setVar:a=true // Can set boolean values 
setVar:a=Character name // Can set strings
```

If you have defined other variables before, you can also use them when setting variables.

## Conditional execution

Add the parameter `-when=(condition)` after the statement to determine whether to execute the current statement based on the condition.

For example:

```
setVar:a=1;
changeScene:2.txt -when=a>1; // Jump to scene 2 when a>1
changeScene:3.txt; // If a<=1, the above statement is not executed, so naturally this one is executed
changeScene:3.txt -when=a==1; // Only jump when a equals 1, note that the equality operator is ==
```

**Note: `=` is the assignment symbol and cannot be used for conditional judgment. `==` is the equality operator.**

Any statement can be added with the `-when` parameter to control whether to execute it. By combining the `-when` parameter and `jumpLabel` `callScene` `changeScene`, you can achieve conditional flow control.

## Insert effects in one line of dialogue

Sometimes, you may want to insert effects like changing expressions at a certain stage when a line of dialogue is executed.
At this time, you can use the `-notend` `-concat` parameters to insert any statement in the dialogue.

`-concat` means this line of dialogue is connected after the previous line of dialogue

`-notend` means this line of dialogue does not end, and effects or dialogue may be connected afterwards.

Example as follows: This is a demo of switching sprites during dialogue.

```
WebGAL: Test inserting effects during dialogue! Switching sprite now... -notend;
changeFigure:k1.png -next;
Switched sprite! Switching expression now... -notend -concat; 
changeFigure:k2.png -next;
Switched expression! -concat;
```

## Add custom effects

You can download the source code, then find /Core/gameScripts/pixiPerformScripts/, then create a `PIXI.Container` for the effect you need.

```typescript
const effectsContainer = RUNTIME_GAMEPLAY.pixiStage!.effectsContainer!; //Get the current Pixi effect Container
const app = RUNTIME_GAMEPLAY.pixiStage!.currentApp!; // Way to call Pixi App, may be useful for determining screen size, etc.
const container = new PIXI.Container(); //Create container for custom effects
effectsContainer.addChild(container); //Add effects
```

Texture files can be placed in the /game/tex directory.

Then, at the beginning of the file, import the effect registration method to register your new effect.

At the end of the file, use it to register your effect. The first parameter is the effect name, and the second is the method to call the effect.

```typescript
import {registerPerform} from '../pixiPerformManager';

// Assume this is your effect  
function myPerform() {
  // ...
}

// Register
registerPerform('myPerform', () => myPerform(parameters)); 
```

Finally, compile the WebAPP that supports your custom effects

```
yarn run build; 
```

Now you can call your effects in the script

```
pixiPerform:your new effect;
```
