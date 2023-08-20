# Base

First of all, the program will start from **initial script** `start.txt` when it starts, please do not rename or delete it.

The following tutorial will show you how to use WebGAL scripts.

## Comments

The WebGAL script will only parse the content before the semicolon on each line, so the content after the semicolon will be treated as comments.

``` ws
WebGAL:Hello!; The content after the semicolon will be treated as comments
; You can directly input a semicolon and then write a single line comment
```

## `none` keyword

When setting **resources** such as sprites, bgm, backgrounds, etc., set it to the `none` keyword to close that object.

## `-next` parameter

You can add the parameter `-next` after any statement to jump to the next statement immediately after executing this statement. This is very useful when you need to perform multiple steps at the same time.

Example:

``` ws
changeBg:testBG03.jpg -next; // Will immediately execute the next statement
```

## `-notend` and `-concat` parameter

Sometimes, you may want to insert effects like changing expressions at a certain stage when a line of dialogue is executed.
At this time, you can use the `-notend` `-concat` parameters to insert any statement in the dialogue.

`-concat` means this line of dialogue is connected after the previous line of dialogue

`-notend` means this line of dialogue does not end, and effects or dialogue may be connected afterwards.

Example as follows: This is a demo of switching sprites during dialogue.

``` ws
WebGAL: Test inserting effects during dialogue! Switching sprite now... -notend;
changeFigure:k1.png -next;
Switched sprite! Switching expression now... -notend -concat; 
changeFigure:k2.png -next;
Switched expression! -concat;
```
