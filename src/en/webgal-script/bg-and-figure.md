# Background and Figure

## Change background/character sprite

For WebGAL to be able to read background images and character sprites, your background images should be placed in the background folder, and sprite images should be placed in the figure folder.

Next, you can use the following simple statements to change the currently displayed background image and character sprite:

``` ws
changeBg:testBG03.jpg; // Change background
changeFigure:testFigure02.png; // Change character sprite
changeBg:none; // Close background 
changeFigure:none; // Close character sprite
```

You may find that after you change the background image or character sprite, you need to click the mouse again to display the next line of dialogue. If you want to execute the content of the next statement immediately after changing the background image/sprite, please use:

``` ws
changeBg:testBG03.jpg -next;  
changeFigure:testFigure02.png -next; // Change character sprite
Isshiki: Thank you, senpai!;
```

If you do this, the program will immediately execute the next statement after replacing the background image/sprite.

## Place sprites in different positions

Now you can place different sprites in three different positions on the page. You just need to add the position you want to place in the statement that places the sprite. Examples are as follows:

``` ws
changeFigure:testFigure03.png -left;
changeFigure:testFigure04.png;  
changeFigure:testFigure03.png -right;
```

The above three lines correspond to the left, middle and right three different positions. The sprites in the three different positions are independent of each other, so if you need to clear the sprite, you must clear them independently:

``` ws
changeFigure:none -left;
changeFigure:none;
changeFigure:none -right;
```

If you want to execute the statement immediately after changing the sprite, the operation method is the same as before, that is, add the parameter `-next`:

``` ws
changeFigure:testFigure03.png -left -next;
changeFigure:testFigure04.png -next;
changeFigure:testFigure03.png -right -next;
```

## Free sprites with ID

If you want to control sprites more precisely, you can specify an `id` and initial position for the sprite:

``` ws
; // A free sprite with initial position on the right
changeFigure:testFigure03.png -left -id=test1;
; // Close sprite by id
changeFigure:none -id=test1;
```

Note: If you want to reset the position of a sprite with ID, close it first and then reopen it.

## Place mini avatar

Many games can place a mini avatar in the lower left corner of the text box. The following is the syntax used in this engine:

``` ws
miniAvatar:minipic_test.png; // Display minipic_test.png in the lower left corner
miniAvatar:none; // Close this mini avatar
```

## Unlock CG for appreciation

Use `unlockCg` to unlock a CG for appreciation.

``` ws
; // Unlock the CG and give it a name
unlockCg:xgmain.jpeg -name=Starlight Café and the Butterfly of Death -series=1;

```

The `-series` parameter is optional, and represents which series the current CG belongs to. Tachis from the same series will be shown together later (i.e. shown as switchable CGs from the same series).
