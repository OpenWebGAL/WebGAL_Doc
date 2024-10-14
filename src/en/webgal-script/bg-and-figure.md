# Backgrounds and Figures

## Changing Backgrounds/Figures

For WebGAL to load backgrounds and figures, your background images should be placed inside the `background` folder, while figure images should be placed inside the `figure` folder.

You can then change the currently displayed background image and figure with the following simple statements:

``` ws
changeBg:testBG03.jpg; // Change background
changeFigure:testFigure02.png; // Change figure
changeBg:none; // Close background
changeFigure:none; // Close figure
```

You may have noticed that after changing the background image or figure, you need to click the mouse again to display the next line of dialogue. If you want to execute the content of the next statement immediately after changing the background/figure, use the `-next` parameter.

``` ws
changeBg:testBG03.jpg -next;
changeFigure:testFigure02.png -next; // Change figure
Ichishiki: Thank you, senior! ;
```

If you do this, the program will execute the next statement immediately after the background/figure is replaced.

## Placing Figures in Different Positions

You can now place different figures in three different positions on the page. Just add the position you want to place the figure at the end of the statement, as shown in the following example:

``` ws
changeFigure:testFigure03.png -left;
changeFigure:testFigure04.png;
changeFigure:testFigure03.png -right;
```

The above three lines correspond to the left, center, and right positions, respectively. The figures in the three different positions are independent of each other, so if you need to clear a figure, you must clear it separately:

``` ws
changeFigure:none -left;
changeFigure:none;
changeFigure:none -right;
```

If you want to execute the next statement immediately after the figure is changed, the operation is the same as before, that is, add the parameter `-next` :

``` ws
changeFigure:testFigure03.png -left -next;
changeFigure:testFigure04.png -next;
changeFigure:testFigure03.png -right -next;
```

## Free Figures with ID

If you want to control the position of the character sprites more precisely, or use more than 3 character sprites, you can specify `id` and initial position for them:

``` ws
; // A free figure with an initial position on the right
changeFigure:testFigure03.png -left -id=test1;
; // Close the figure by id
changeFigure:none -id=test1;
```

::: tip
If you want to reset the position of a figure with an ID, close it first and then reopen it.
:::

## Placing Mini Avatars

Many games allow mini avatars to be placed in the lower left corner of the text box. Here is the syntax used in this engine:

``` ws
; // Display minipic_test.png in the lower left corner
miniAvatar:minipic_test.png;
; // Close this mini avatar
miniAvatar:none;
```

## Unlock CGs for Appreciation

Use `unlockCg` to unlock CGs in CG appreciation.

``` ws
; // Unlock CG and give it a name
unlockCg:xgmain.jpeg -name="Starlight Cafe and the Butterfly of Death" -series=1;
```

Among them, the `-series` parameter is optional, which represents which series the current figure belongs to. Figures of the same series will be merged and displayed later (ie, displayed as switchable CGs of the same series).

## Set Effects When Setting Figures

For a description of the effect fields, please refer to [Animation](animation.md)

You can set some transform and filter effects for the figure when setting the figure. Here is an example:

```
changeFigure:stand.png -transform={"alpha":1,"position":{"x":0,"y":500},"scale":{"x":1,"y":1},"rotation":0,"blur":0,"oldFilm":0,"dotFilm":0,"reflectionFilm":0,"glitchFilm":0,"rgbFilm":0,"godrayFilm":0} -next;
```

## Set Transform Effects for Existing Figures

For a description of the effect fields, please refer to [Animation](animation.md)

You can also use `setTransform` to set effects for existing figures directly, for example:

```
setTransform:{"position":{"x":100,"y":0}} -target=fig-center -duration=0;
```

Here a transform is set for an existing figure.