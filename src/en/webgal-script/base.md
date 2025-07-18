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

When setting **resources** such as figures, BGM, backgrounds, you can turn off this object by setting it to `none`.

## `-next` Parameter

You can add the parameter `-next` after any statement. This will cause the next statement to be executed immediately after this statement is executed. This is very useful when you need to perform multiple operations at the same time.

Example:

``` ws
changeBg:testBG03.jpg -next; // Will execute the next statement immediately
```

## `-notend` and `-concat` Parameters

Sometimes, you may want to add performance effects, such as switching expressions, when a certain stage of a dialogue is executed.
At this time, you can use the `-notend` `-concat` parameters to insert any statement in the dialogue.

`-concat` means that this dialogue is connected after the previous dialogue

`-notend` means that this dialogue is not over, and there may be performance or dialogue connected later.

An example is given below: This is a demonstration of switching figures in the middle of a dialogue.

``` ws
WebGAL:Test statement insert performance! Switch figure immediately...... -notend;
changeFigure:k1.png -next;
Switch figure! Switch expression immediately...... -notend -concat;
changeFigure:k2.png -next;
Switch expression! -concat;
```

You can also use only the `-concat` parameter to connect the next sentence after the previous dialogue, because the `-notend` parameter will move to the next sentence after the dialogue fades in.

```ws
This is the first sentence...;
This sentence will only appear after the user clicks the mouse -concat;
```

## Dialogue Commands

In WebGAL, the most basic function is displaying dialogue.

### Basic Dialogue

You can display dialogue by directly inputting text:

```ws
This is a dialogue;
```

### Character Dialogue

You can specify a speaker for the dialogue:

```ws
Character Name:This is what the character says;
```

### Dialogue Parameters

Dialogue supports the following parameters:

- `-speaker=name` - Set the speaker name
- `-clear` - Clear the current speaker name
- `-vocal=voice file` - Play voice file
- `-fontSize=small/medium/large/default` - Set text size
- `-left/-right/-center` - Set speaking character position (for lip sync animation)
- `-figureId=ID` - Specify the speaking character ID (for lip sync animation)

```ws
Character Name:This is a dialogue -speaker=Character Name;
This dialogue plays voice -vocal=voice01.ogg;
This dialogue uses large font -fontSize=large;
Clear speaker dialogue -clear;
```

## Wait Command

Use the `wait` command to pause the game for a specified time:

```ws
wait:1000; // Wait for 1 second
wait:500; // Wait for 0.5 seconds
```

## End Game Command

Use the `end` command to end the current game and return to the title screen:

```ws
end; // End the game
```

## Textbox Control

Use the `setTextbox` command to control the display and hiding of the text box:

```ws
setTextbox:hide; // Hide the text box
setTextbox:; // Show the text box
```

This is very useful when you need to display full-screen images or special performances.

## Debug Function

Use the `showVars` command to display the values of all current variables:

```ws
showVars:; // Show all variables
```

## Intro Demo

Use the `intro` command to create black screen text demo effects:

```ws
intro:Welcome to the world of WebGAL;
intro:Chapter 1|Autumn Memories|On that golden afternoon -fontSize=large;
```

For more parameters, please refer to the specific chapter descriptions.
