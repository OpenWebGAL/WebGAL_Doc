# Spine Animation

WebGAL supports Spine animation functionality for creating smooth 2D skeletal animation effects. Spine animations can be used for both figures and backgrounds, providing richer visual effects than static images.

## Basic Usage

### Setting Spine Figures

Use the `.skel` file extension or `type=spine` parameter to specify Spine animation:

``` ws
changeFigure:character.skel;
changeFigure:character.json?type=spine;
```

### Setting Spine Backgrounds

Spine animations can also be used as backgrounds:

``` ws
changeBg:background.skel;
changeBg:background.json?type=spine;
```

## File Format

Spine animations typically include the following files:
- `.skel` - Skeleton data file (binary format)
- `.json` - Skeleton data file (JSON format)
- `.atlas` - Texture atlas description file
- `.png` - Texture image files

## Figure Position Settings

Spine figures support preset positions, same as regular figures:

``` ws
changeFigure:character.skel -left;
changeFigure:character.skel -right;
changeFigure:character.skel; // Default is center position
```

## Animation Control

### Playing Specific Animations

Use the `setAnimation` command to control Spine animation playback:

``` ws
setAnimation:idle -target=fig-center;
setAnimation:walk -target=fig-left;
```

### Animation Parameters

Spine animations support the following control parameters:
- `target` - Target object (fig-left, fig-center, fig-right, or custom ID)
- Animation name must match the animation name defined in the Spine file

## Advanced Features

### Custom ID Spine Figures

You can specify custom IDs for Spine figures:

``` ws
changeFigure:character.skel -id=mainCharacter -left;
setAnimation:happy -target=mainCharacter;
```

### Default Animation

- When Spine animation loads, it automatically plays the first available animation
- If a specific animation is specified in the state, it will be played preferentially

### Scaling and Positioning

Spine animations automatically scale to fit the screen:
- Figures maintain aspect ratio and scale to fit the screen
- Backgrounds stretch or scale to fill the entire screen

## Performance Considerations

1. **Memory Usage**: Spine animations use more memory than static images
2. **Loading Time**: Initial loading may take longer
3. **Compatibility**: Requires browser WebGL support

## Usage Examples

``` ws
; Set main character figure
changeFigure:mainCharacter.skel -id=hero -center;

; Play greeting animation
setAnimation:greeting -target=hero;

; Set side character figure
changeFigure:sidekick.skel -left;

; Set dynamic background
changeBg:forest.skel;

; Play background animation
setAnimation:windy -target=bg-main;
```

## Troubleshooting

### Common Issues

1. **Animation not playing**: Check if animation name matches the name defined in the Spine file
2. **File loading failed**: Ensure `.skel`, `.atlas`, and texture files are in the same directory
3. **Display abnormalities**: Check Spine version compatibility

### Debug Tips

- Use browser developer tools to check console logs
- Check network panel to confirm all files are loaded correctly
- Verify Spine file export settings are correct

## Integration with Other Features

Spine animations can be combined with other WebGAL features:

``` ws
; Combined with voice playback
Character Name:Hello! -V1.ogg -figureId=hero;
setAnimation:speaking -target=hero;

; Combined with scene switching
changeFigure:character.skel -id=hero;
setAnimation:idle -target=hero;
changeScene:next_scene.txt;
```

Spine animation provides powerful animation capabilities for WebGAL. Proper use can greatly enhance the visual effects and immersion of your game.