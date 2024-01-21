# Scene and Branch

In Visual Novels, jumping to chapters, scenes and selecting branches are indispensable, so WebGAL also supports scene jumping and branch selection.

You can split your script into multiple txt documents, and use a simple statement to switch the currently running script.

::: warning
After jumping scenes, selecting branches or calling scenes, the stage will not be cleared. This means that the background music, portraits, background images and other effects applied in the previous scene will be inherited to the next scene.

If you are using WebGAL Terre visual editor, you should pay special attention to it, because the editor does not care about the effects of the previous scene when previewing a single scene. Therefore, the preview effect and the actual game running effect may be different. You should consider handling the stage cleanup work before the scene jump properly.
:::

## Scene Jumping

Suppose you have written two chapters of the script, namely `Chapter-1.txt` and `Chapter-2.txt`. After `Chapter-1.txt` is finished running, you want to jump to the scene corresponding to `Chapter-2.txt`, please use the following statement:

``` ws
changeScene:Chapter-2.txt;
```

Example:

``` ws
(Chapter-1.txt)
......
......
; // The following is the content of Chapter-2.txt
changeScene:Chapter-2.txt;
......
......
(Chapter-2.txt)
......
```

By executing this command, you will switch the game scene and make the subsequent plot development run according to the new scene script. The new script will run after the next mouse click.

## Scene Calling

If you need to call another scene in a scene, you can use `callScene`, and the original scene will be returned after the called scene is finished running.

Statement:

``` ws
callScene:Chapter-2.txt;
```

Example:

``` ws
(Chapter-1.txt)
......
......
callScene:Chapter-2.txt;
; // The following is the content of Chapter-2.txt
......
......
(Chapter-2.txt)
......
......
(Chapter-2.txt execution completed)
; // Return to the parent scene and continue to execute the parent scene statement
......
```

## Branch Selection

If there are branch options in your script, and you want to enter different chapters by selecting different options, please use `choose`.
Use `Option text: Chapter file name` to define an option. Use `|` to separate different options. An example is as follows:

``` ws
choose:Stop her:Chapter-2.txt|Go home:Chapter-3.txt;
```

You only need to match the text of the option with the name of the script to be entered after the option is selected, and you can realize the function of branch selection.

### Conditional Display and Selection

You can also conditionally display choices or allow the user to click on them based on variables, with the following syntax:

```ws
(showConditionVar>1)[enableConditionVar>2]->Call out to her:Chapter-2.txt|Go home:Chapter-3.txt;
```

Here, the first choice will only be displayed if showConditionVar is greater than 1, and the user will only be allowed to click on it if enableConditionVar is greater than 2.

## Label Jump

If you want to create a branch, but you think it is too troublesome to create a new TXT file for this, you can try the following method to create a branch and jump statement in the same file.

::: warning
If your branch is very long, I do not recommend that you use this method, because the number of lines in a TXT should not be too long, otherwise it may cause performance problems such as slow loading and slow response.
:::

### Create a label (`label`)

``` ws
......
jumpLabel:label_1; // Jump to label_1
......
......
label:label_1; // Create a label named label_1
......
```

In short, `jumpLabel` is similar to the `goto` statement, which can immediately jump your script to any position in the scene (TXT file), and this position needs to be created by you with `label`.

If `jumpLabel` is compared to any door, then the end point of this any door is the position of `label`.

### Add options

With the above foundation, you can use `choose` to implement the use of branches to jump to the position of `label`:

``` ws
......
choose:Branch 1:label_1|Branch 2:label_2;
label:label_1; // Create a label named label_1
......
......
jumpLabel:end; // Jump to end
label:label_2; // Create a label named label_2
......
......
jumpLabel:end; // Jump to end
label:end; // Create a label named end
......
```

Note that at the end of each branch, you should use `jumpLabel` to jump to the position you want. Since the program is executed linearly, if you do not jump to a location at the end of the branch, the program will continue to run down, for example:

``` ws
......
choose:Branch 1:label_1|Branch 2:label_2;
label:label_1; // Create a label named label_1
......
......
label:label_2; // Create a label named label_2
......
```

In this script, if you select `Branch 2`, everything seems to be fine. But if you select `Branch 1`, you will be surprised to find that after `Branch 1` is executed, `Branch 2` will continue to be executed. That's because the program continues to execute the next line in order, and you didn't specify where to jump after the branch ended.