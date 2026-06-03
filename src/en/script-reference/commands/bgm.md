# bgm

A four-in-one command for playing background music, switching background music, stopping background music, and setting background music parameters.

## Statement Content

Sets the path of the background music. When the file path is empty or `none`, playback stops.
See [Audio](../../webgal-script/audio.md) for details.

```webgal
; If no BGM exists, this plays BGM.
bgm:01.wav;
; If BGM already exists, this switches BGM.
bgm:02.wav;
; If none is written or nothing is written, this stops playback.
bgm:;
```

If the background music path stays the same, the music is not interrupted. Instead, the new parameters are applied to the current background music.

```webgal
bgm:morning.wav;
; Adjust volume without interrupting the BGM
bgm:morning.wav -volume=50;
```

## Parameters

<!-- @include: ../arguments/volume.md -->
```webgal
bgm:01.wav -volume=100;
bgm:01.wav -volume=50; Adjust volume
```

### enter
- Number
- Unit: milliseconds
- Range: 0 to positive infinity
- Default: 0

The fade-in duration of the background music.

```webgal
bgm:01.wav -enter=1500;
bgm:02.wav -enter=1500;
```

### unlockname
<!-- @include: ../arguments/name-bgm.md -->
If this parameter is omitted or the name is empty, the music will not be collected.
```webgal
bgm:01.wav -unlockname=MyBgm01;
```

### series
<!-- @include: ../arguments/series-bgm.md -->
Writing only `series` will not collect the music. Make sure `unlockname` is also set.

```webgal
bgm:01.wav -unlockname=MyBgm01 -series=MySeries01;
```
