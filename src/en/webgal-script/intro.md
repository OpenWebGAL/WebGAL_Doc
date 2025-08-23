# Intro Presentation

WebGAL provides powerful intro presentation features that create black-screen text demonstrations, commonly used for game openings, chapter transitions, or atmospheric setups for important plot points.

## Basic Usage

Use the `intro` command to create intro presentations:

``` ws
intro:Welcome to the world of WebGAL;
```

## Multi-line Text

Use `|` separator to create multi-line text presentations:

``` ws
intro:Chapter 1|Autumn Memories|On that golden afternoon;
```

## Supported Parameters

### Background Settings

- `-backgroundImage=imageName` - Set background image (loaded from game/background/ directory)
- `-backgroundColor=colorValue` - Set background color (default is black)

``` ws
intro:Once upon a time...|In a distant land... -backgroundImage=sunset.jpg -backgroundColor=rgba(0,0,0,0.8);
```

### Text Styling

- `-fontColor=colorValue` - Set font color (default is white)
- `-fontSize=size` - Set font size

Font size options:
- `small` - Small font (280%)
- `medium` - Medium font (350%)
- `large` - Large font (420%)
- `default` - Default font

``` ws
intro:Important Notice -fontSize=large -fontColor=rgba(255,200,100,1);
```

### Animation Effects

- `-animation=animationType` - Set animation effect

Supported animation types:
- `fadeIn` - Fade in effect (default)
- `slideIn` - Slide in effect
- `typingEffect` - Typing effect
- `pixelateEffect` - Pixelate effect
- `revealAnimation` - Reveal animation

``` ws
intro:Chapter 1|Autumn Memories|On that golden afternoon -animation=typingEffect;
```

### Timing Control

- `-delayTime=milliseconds` - Set delay time for each line of text (default 1500ms)

``` ws
intro:Slowly revealed text -delayTime=3000;
```

### Interaction Control

- `-hold` - Hold display, don't auto-continue
- `-userForward` - User manual control (implies hold effect)

``` ws
intro:Press any key to continue -hold -fontSize=small;
intro:Click to continue to next chapter -userForward;
```

## Complete Example

``` ws
intro:WebGAL Visual Novel Engine;
intro:Chapter 1|Autumn Encounter|On that golden afternoon -fontSize=large -animation=fadeIn -delayTime=2000;
intro:The story is about to begin...|Get ready -backgroundImage=autumn_bg.jpg -fontColor=rgba(255,215,0,1) -animation=slideIn;
intro:Press any key to start the game -hold -fontSize=small -fontColor=rgba(200,200,200,1);
```

## Special Features

### Escape Characters

If you need to use literal `|` characters in text, use escape characters:

``` ws
intro:This is an example\|this won't create a new line;
```

### Fast-forward Support

Intro presentations support user interaction for fast-forwarding:
- Mouse clicks can accelerate text display
- Any key press can accelerate text display
- Automatically proceeds to next script after presentation ends

## Usage Tips

1. **Reasonable background use**: Choose appropriate background images or colors for different scenarios
2. **Control pacing**: Adjust pacing of text display through `delayTime`
3. **Font size**: Choose appropriate font size based on text importance
4. **Animation effects**: Choose suitable animation effects based on atmosphere
5. **Interaction design**: Use `-hold` at appropriate moments to let users control pacing

Intro presentations are important tools for creating immersive experiences, and proper use can greatly enhance the game's expressiveness.