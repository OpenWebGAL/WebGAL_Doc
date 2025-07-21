# Other Features

WebGAL also provides some other useful features that can help you create richer game experiences.

## Film Mode

Film mode creates a more immersive viewing experience, similar to a video player's "cinema mode".

### Enable Film Mode

``` ws
filmMode:on; // Enable film mode
filmMode:cinematic; // Enable film mode (with parameter)
```

### Disable Film Mode

``` ws
filmMode:; // Disable film mode
filmMode:none; // Disable film mode
```

### Features

- Hides some UI elements
- Takes effect immediately, doesn't block script execution
- Suitable for important plot points or special scenes

### Usage Example

``` ws
; Enter important plot scene
filmMode:on;
changeBg:important_scene.jpg;
This is important plot dialogue...;
; Exit film mode after plot ends
filmMode:;
```

## Unlock CG

Besides automatically unlocking CG when changing backgrounds, you can also unlock CG separately without displaying it.

### Basic Usage

``` ws
unlockCg:cg/scene1.jpg;
```

### Set CG Name and Series

``` ws
unlockCg:cg/ending_a.jpg -name=Happy Ending;
unlockCg:cg/chapter2_01.jpg -name=First Meeting -series=Chapter 2;
```

### Parameter Description

- `-name=name` - Set display name for CG (default uses file path)
- `-series=seriesName` - Set CG series/category (default is "default")

### Features

- Unlocked CG is saved to user data
- Supports CG category management
- Takes effect immediately, doesn't block script execution

## Unlock BGM

You can unlock BGM to appreciation mode separately without playing it.

### Basic Usage

``` ws
unlockBgm:s_Title.mp3;
```

### Set BGM Name and Series

``` ws
unlockBgm:s_Title.mp3 -name=Smiling-Swinging!!!;
unlockBgm:s_Title.mp3 -name=Theme Song -series=OP;
```

### Parameter Description

- `-name=name` - Set display name for BGM (default uses file path)
- `-series=seriesName` - Set BGM series/category (default is "default")

## Textbox Control

Control the display and hiding of textboxes, suitable for fullscreen presentations.

### Hide Textbox

``` ws
setTextbox:hide;
```

### Show Textbox

``` ws
setTextbox:;
setTextbox:show;
```

### Usage Scenarios

``` ws
; Display fullscreen CG
setTextbox:hide;
changeBg:fullscreen_cg.jpg;
wait:3000;
; Restore textbox
setTextbox:;
What a beautiful scenery!;
```

## Dynamic Style Switching

You can dynamically replace CSS class names of UI elements to implement theme switching and other features.

### Single Style Replacement

``` ws
applyStyle:textbox-default->textbox-dark;
```

### Batch Style Replacement

``` ws
applyStyle:btn-primary->btn-dark,text-light->text-dark,bg-light->bg-dark;
```

### Usage Scenarios

- Dynamic theme switching (e.g., day/night mode)
- UI style changes for specific scenes
- Interface style changes based on plot needs

### Example

``` ws
; Switch to night mode
applyStyle:textbox-light->textbox-dark,btn-light->btn-dark;
; Special scene style
applyStyle:ui-normal->ui-horror;
```

## Debug Features

### Display All Variables

``` ws
showVars:;
```

Displays the values of all current variables, including regular variables and global variables, in JSON format in the dialogue box.

### Usage Scenarios

- Debug complex variable logic
- Check variable states
- Troubleshoot during development

## End Game

Used when the game ends, returns to the title screen.

``` ws
end;
```

### Functions

- Reset game stage state
- Clear quick save
- Reload initial scene (start.txt)
- Play title screen BGM

## Wait Command

Pause the game for a specified time.

``` ws
wait:1000; // Wait 1 second
wait:500; // Wait 0.5 seconds
```

### Features

- Time unit is milliseconds
- Automatically jumps to next statement
- Suitable for controlling presentation pacing

## Usage Tips

1. **Reasonable use of film mode**: Use in important plot points or special scenes, don't switch frequently
2. **CG unlock timing**: Unlock CG at appropriate plot points to enhance player sense of achievement
3. **Textbox control**: Mainly used for fullscreen presentations, remember to restore afterwards
4. **Style switching**: Ensure switched styles exist to avoid style errors
5. **Debug features**: Use frequently during development, remember to remove debug code before release

Although these features may seem simple, proper use can greatly enhance the game's professionalism and user experience.