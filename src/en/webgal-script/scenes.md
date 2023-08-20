# Scenes and Branch

In visual novels, jumping chapters and scenes and branch choices are indispensable. Therefore, WebGAL also supports scene jumps and branch choices.

You can split your scripts into multiple txt documents, and use a simple statement to switch the currently running script.

::: warning
When jumping scenes, branch choices, or calling scenes, the stage will not be cleared. This also means that effects such as background music, sprites, and background images applied in the previous scene will be inherited to the next scene.

If you use the WebGAL Terre visual editor, you should pay extra attention, because the editor does not care about the effects the previous scene will bring when previewing a single scene alone. Therefore, the preview effect and the actual game running effect may differ. You should consider properly handling the stage cleanup before the scene jump.
:::

## Jump scenes

For example, if you have now written the scripts for two chapters, `Chapter-1.txt` and `Chapter-2.txt` respectively, after `Chapter-1.txt` finishes running, you want to jump to the scene corresponding to `Chapter-2.txt`, please use the following statement:

``` ws
changeScene:Chapter-2.txt; 
```

Example:

``` ws
(Chapter-1.txt) 
......
......
; // The content of Chapter-2.txt will be executed next
changeScene:Chapter-2.txt;
...... 
......
(Chapter-2.txt)
......
```

By executing this command, you will switch the game scene and the subsequent plot will run according to the new scene script. The new script will run after the next mouse click.

## Call scenes

If you need to call another scene within a scene, you can use `callScene`, which will return to the original scene after the called scene finishes running.

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
; // The content of Chapter-2.txt will be executed next
......
......
(Chapter-2.txt)
......
......
(After Chapter-2.txt execution is complete)
; // Return to parent scene and continue executing parent scene statements
......
```

## Branch choose

If branching options exist in your script and you want to go to a different chapter by selecting a different option, use `choose`.

Use `choose text:chapter filename` to define a choice. Use `|` to separate selections.

An example is shown below:

``` ws
choose:Call out to her:Chapter-2.txt|Go home:Chapter-3.txt;
```

You just need to correspond the text of the options one-to-one with the script name to enter after selecting the option to achieve the function of branch choices.

## Jumps label

If you want to create a branch but feel it is too troublesome to create a new TXT file, you can try the following to implement creating branches and jumping statements within the same file.

::: warning
If your branch is very long, I do not recommend using this method, because the number of lines in a single TXT is not suitable for being too long, otherwise it may cause performance problems such as slow loading and sluggish response.
:::

### Create label

``` ws
......
jumpLabel:label_1; // Jump to label_1
...... 
......
label:label_1; // Create a label named label_1
......
```

In short, `jumpLabel` is similar to a `goto` statement, which can immediately make your script jump to any position in the scene (TXT file), and this position needs you to create it with `label`.

If `jumpLabel` is compared to a portal, then the destination of this portal is the position where the `label` is located.

### Create choose

With the above basis, you can use `choose` to jump to the position where `label` is located through branches.

``` ws
......
choose:Test 1:label_1|Test 2:label_2;
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

Note that at the end of each branch, you should use `jumpLabel` to jump to the position you want. Since the program executes linearly, if you don't jump at the end of a branch, then the program will continue down the line, for example:

``` ws
......
choose:branch 1:label_1|branch 2:label_2; label:label_1;
label:label_1; // Create a label named label_1
......
......
label:label_2; // create a label named label_2
......
```

In this scenes, if you select `Branch 2`, everything seems to be fine. But if you choose `Branch 1`, you'll be surprised to find that after `Branch 1` finishes executing, `Branch 2` continues. That's because the program went on to the next line in order, and you didn't specify where to jump to at the end of the branch.
