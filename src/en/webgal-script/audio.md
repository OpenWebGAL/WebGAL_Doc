# Audio

## Playing Background Music (BGM)

Playing background music is extremely simple, you just need to put the background music in the `bgm` folder, and then use the `bgm` instruction to play the background music.

``` ws
bgm:Summer_Shadow.mp3;
```

You can set a `-volume` parameter for the background music to adjust its volume.

``` ws
bgm:Summer_Shadow.mp3 -volume=30;
```

In addition, you can also use the `-enter` parameter to fade in the playback.

``` ws
bgm:Summer_Shadow.mp3 -enter=3000;
```

Finally, you can use the following statement to fade out the background music.

``` ws
bgm:none -enter=3000;
```

### BGM Unlock Feature

While playing BGM, you can also unlock BGM to appreciation mode:

``` ws
bgm:Summer_Shadow.mp3 -unlockname=Summer Shadow -series=season;
```

::: tip
`-volume` and `-enter` are both optional parameters.
When `-volume` is not used, or a value other than 0 to 100 is used, the default value of 100 will be used.
When `-enter` is not used, or a value other than 0 to is used, the default value of 0 will be used.
`-unlockname` and `-series` parameters are used to unlock BGM to appreciation mode.
:::

## Playing Voice

As we all know, the most attractive part of visual novels is often their excellent voice acting. Put the voice acting file in the `vocal` folder, and then add the `-Voice file name` parameter in the dialog script to play the voice. The syntax is as follows.

``` ws
Hachiman Hikigaya:Just arrived -V3.ogg;
```

When talking continuously, the way the voice is introduced is the same.

``` ws
Yukino Yukinoshita:You're here early -V1.ogg;
Sorry, have you been waiting long? -V2.ogg;
```

At the same time, you can set a `-volume` parameter to adjust its volume.

``` ws
Hachiman Hikigaya:Just arrived -V3.ogg -volume=30;
```

### Voice and Character Animation Integration

Voice playback can be integrated with character animation to achieve lip-sync and blinking animations:

``` ws
Character Name:This dialogue has voice -V1.ogg -left; // Associated with left character
Character Name:This dialogue has voice -V2.ogg -figureId=char1; // Associated with specific ID character
```

::: tip
`-volume` is an optional parameter.
When `-volume` is not set, or a value other than 0 to 100 is used, the default value of 100 will be used.
`-left`, `-right`, `-center` parameters are used to specify the character position associated with the voice.
`-figureId` parameter is used to specify a specific character ID.
:::

## Playing Sound Effects

After putting your dubbing into the `vocal` folder, you can use the `playEffect` instruction to play the sound effects^_^

``` ws
playEffect:xxx.mp3;
```

You can set a `-volume` parameter for the sound effect to adjust its volume.

``` ws
playEffect:xxx.mp3 -volume=30;
```

::: tip
`-volume` is an optional parameter.
When `-volume` is not set, or a value other than 0 to 100 is used, the default value of 100 will be used.
:::

### Sound Effect Loop

Giving the sound effect an `id` will automatically enable the sound effect loop, and the same `id` will be used to stop it later.

``` ws
playEffect:xxx.mp3 -id=xxx;
playEffect:none -id=xxx; // Stop this looping sound effect
```

## Unlock Audio for Appreciation

Use `unlockBgm` to unlock the audio in the audio appreciation.

``` ws
; // Unlock bgm and give it a name
unlockBgm:s_Title.mp3 -name=Smiling-Swinging!!!;
unlockBgm:s_Title.mp3 -name=Theme Song -series=OP;
```

The `-series` parameter is used to set the audio's series category, making it easier to manage classifications in appreciation mode.