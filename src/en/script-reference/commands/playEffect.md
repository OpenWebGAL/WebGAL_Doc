# playEffect

A three-in-one command for playing sound effects, replacing sound effects, and stopping sound effects.

## Statement Content

Sets the sound effect file path. When the file path is empty or `none`, sound effect playback stops.
See [Playing Sound Effects](../../webgal-script/audio.md#playing-sound-effects) for details.

```webgal
; If no sound effect exists, this plays a sound effect.
playEffect:rain.wav;
; If a sound effect already exists, this replaces it.
playEffect:heavy_rain.wav;
; If none is written or nothing is written, this stops playback.
playEffect:none;
```

## Parameters

### id
- String

After an id is set for a sound effect, the sound effect can loop.
Sound effects with different ids and sound effects without ids can be played on top of each other.

```webgal
; Loop footsteps
playEffect:footsteps.wav -id=footsteps;
; Loop rain
playEffect:rain.wav -id=rain;
; Play thunder once
playEffect:thunder.wav;
```

### volume
- Number
- Range: 0 to 100
- Default: 100

Sets the sound effect volume percentage. 0 means muted, 100 means maximum volume.

```webgal
playEffect:rain.wav -id=rain -volume=60;
```
