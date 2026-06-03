# say

Dialogue command. Any unrecognized command is attempted as a dialogue command.

## Statement Content

Sets one line of text, which appears in the dialogue box. Use `|` to split it into multiple lines.
See [Basic](../../webgal-script/base.md) and [Dialogue](../../webgal-script/dialogue.md) for details.

```webgal
Speaker:Hello, world!;
```

The dialogue box does not appear in these cases:
- Both statement content and character name are empty
- The dialogue box is hidden by the `setTextbox` command
- __Hide all UI__ is enabled

## Parameters

### notend
- Boolean

When the value is `true`, immediately executes the next command after all text is displayed, even if the player has not enabled autoplay.

```webgal
changeFigure:1/open_eyes.png -next;
CharacterA:What exactly is going on... -notend;
changeFigure:1/closed_eyes.png -next;
I can't look! -concat;
```

### concat
- Boolean

When the value is `true`, existing text in the dialogue box is not cleared. The new text continues after it.

```webgal
changeFigure:1/open_eyes.png -next;
CharacterA:What exactly is going on... -notend;
changeFigure:1/closed_eyes.png -next;
I can't look! -concat;
```

### speaker
- String

Sets the speaker name, which appears in the speaker field of the dialogue box.
If this parameter is omitted, the dialogue box continues using the previous speaker name.

```webgal
say:Hello, world! -speaker=CharacterA;
; Without speaker, the character name continues using the previous value
say:World, hello!;
```

WebGAL supports simplified speaker syntax.
If the characters from the beginning of the line to the first English colon are not a command, they are used as the speaker name.
If the whole line has no English colon and no speaker name can be found, the previous speaker name is used.

```webgal
CharacterA:Hello, world!;
; Speaker is still CharacterA
World, hello!;
```

### clear
- Boolean

When the value is `true`, clears the speaker. The speaker field will not be shown in the dialogue box, which is usually used for narration.

```webgal
say:This is a line. -speaker=CharacterA;
say:This is narration. -clear;
say:This is a line. -speaker=CharacterB;
```

WebGAL supports simplified narration syntax. If there are no characters before the first English colon, the sentence is treated as narration.

```webgal
CharacterA:This is a line.;
:This is narration.;
CharacterB:This is a line.;
```

### vocal
- String

Sets the path of the voice file played while speaking.

```webgal
CharacterA:Hello, world! -vocal=hello_world.wav;
```

WebGAL supports simplified voice file syntax.

```webgal
CharacterA:Hello, world! -hello_world.wav;
```

### fontSize
- String

Sets font size. Available values:
- `small` - small font
- `medium` - medium font
- `large` - large font
- `default` - default font size, meaning the font size specified in settings

After this value is set, it is passed to subsequent dialogue until it is set again.

```webgal
CharacterA:Hello, world! -fontSize=small;
CharacterA:Hello, world!; Still small font
CharacterA:Hello, world! -fontSize=large;
CharacterA:Hello, world! -fontSize=default;
```

### left / right / center
- Boolean

When the value is `true`, WebGAL tries to drive the left, right, or center figure to speak with mouth movement.

```webgal
CharacterA:Hello, world! -left;
CharacterA:Hello, world! -right;
CharacterA:Hello, world! -center;
```

### figureId
- String

Sets the figure id. WebGAL tries to drive the figure with the corresponding id to speak with mouth movement.

```webgal
CharacterA:Hello, world! -figureId=aaa;
```

## Mouth Sync Workflow

The `vocal`, `left`, `right`, `center`, and `figureId` parameters are the driving side of image figure mouth sync. Before using them, register differential images through `changeFigure`.

See [Animation Effects - Image Sprite Mouth Sync](../../webgal-script/animation.md#image-sprite-mouth-sync) for the full workflow.
