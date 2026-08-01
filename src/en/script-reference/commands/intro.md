# intro

Full-screen text command.

## Statement Content

Sets a paragraph of text that is displayed as full-screen text. Use `|` to split it into multiple lines.
See [Blackout Text](../../webgal-script/dialogue.md#blackout-text) for details.

``` webgal
intro:This is the first line|This is the second line|This is the third line;
```

After the full-screen text performance ends, it closes automatically and does not block subsequent dialogue. If multiple `intro` commands are executed in a row, only the current full-screen text is shown.

## Parameters

### fontSize
- String

Sets the font size. Available values:
- `small` - small font
- `medium` - medium font
- `large` - large font

``` webgal
intro:This is a paragraph -fontSize=large;
```

### fontColor
- String
- Default: `rgba(0, 0, 0, 1)`

Sets the font color. For example, `rgba(0,0,0,1)` means black and `rgba(255,255,255,1)` means white. The alpha range is 0 to 1.

``` webgal
intro:This is a paragraph -fontColor=rgba(48, 135, 206, 1);
```

### backgroundColor
- String
- Default: `rgba(0, 0, 0, 1)`

Sets the background color. For example, `rgba(0,0,0,1)` means black and `rgba(255,255,255,1)` means white. The alpha range is 0 to 1.

``` webgal
intro:This is a paragraph -backgroundColor=rgba(22,22,22,0.8);
```

### backgroundImage
- String

Sets the path of the background image used by full-screen text. If this parameter is not set, `backgroundColor` is used.

``` webgal
intro:This is a paragraph -backgroundImage=bg.png;
```

### animation
- String

Sets how the full-screen text appears. Supported animation effects:
- `fadeIn`: opacity fade-in, default
- `slideIn`: slide in
- `typingEffect`: typewriter effect
- `pixelateEffect`: blur
- `revealAnimation`: scroll reveal

``` webgal
intro:This is the first line|This is the second line|This is the third line -animation=slideIn;
```

### delayTime
- Number
- Unit: milliseconds
- Range: 0 to positive infinity
- Default: 1500

Sets the display delay of each line.

``` webgal
intro:This is the first line|This is the second line|This is the third line -delayTime=1000;
```

### hold
- Boolean

When the value is `true`, the next statement is not automatically executed after all text is displayed, until the player clicks the screen.
When the value is `false`, the next statement is automatically executed after all text is displayed, even if the player has not enabled autoplay.

``` webgal
intro:This is a paragraph -hold;
```

### userForward
- Boolean

When the value is `true`, the user must click the screen manually to show the next line. It also sets `hold` to `true` and ignores `delayTime`.
When the value is `false`, the next line is displayed automatically.

``` webgal
intro:This is a paragraph -userForward;
```
