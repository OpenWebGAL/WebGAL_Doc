# Basic

First of all, when the program starts, it will run from the **startup script** `start.txt`. Please do not rename or delete it.

The following tutorials will teach you how to use WebGAL script.

## Comments

WebGAL script will only parse the content before the semicolon in each line, so the content after the semicolon will be regarded as a comment.

``` ws
WebGAL:Hello!; The content after semicolon will be regarded as a comment
; You can directly input a semicolon, then write a single-line comment
```

## `none` Keyword

When setting **resources** such as立ち絵, BGM, backgrounds, you can turn off this object by setting it to `none`.

## `-next` Parameter

You can add the parameter `-next` after any statement. This will cause the next statement to be executed immediately after this statement is executed. This is very useful when you need to perform multiple operations at the same time.

Example:

``` ws
changeBg:testBG03.jpg -next; // Will execute the next statement immediately
```

## `-notend` and `-concat` Parameters

Sometimes, you may want to add 演出効果, such as switching expressions, when a certain stage of a dialogue is executed.
At this time, you can use the `-notend` `-concat` parameters to insert any statement in the dialogue.

`-concat` means that this dialogue is connected after the previous dialogue

`-notend` means that this dialogue is not over, and there may be 演出 or dialogue connected later.

An example is given below: This is a demonstration of switching 立ち絵 in the middle of a dialogue.

``` ws
WebGAL:Test statement insert 演出！Switch 立ち絵 immediately...... -notend;
changeFigure:k1.png -next;
Switch 立ち絵！Switch expression immediately...... -notend -concat;
changeFigure:k2.png -next;
Switch expression！ -concat;
```

You can also use only the `-concat` parameter to connect the next sentence after the previous dialogue, because the `-notend` parameter will move to the next sentence after the dialogue fades in.

```ws
This is the first sentence...;
This sentence will only appear after the user clicks the mouse -concat;
```
