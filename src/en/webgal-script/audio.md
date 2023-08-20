# Audio

## Play background music (BGM)

The way to play background music is extremely simple. You just need to place the background music in the `bgm` directory, then you can simply play it when needed:

``` ws
bgm:XiaYing.mp3;
```

You can set a `-volume` parameter for background music to adjust its volume.
`-volume` should be a numeric value between 0 and 100.

``` ws
bgm:XiaYing.mp3 -volume=30;
```

In addition, you can use the `-enter` parameter for fade-in playback.
`-enter` should be a numeric value greater than or equal to 0.

``` ws
bgm:XiaYing.mp3 -enter=3000;
```

Finally, you can use the following statement to fade out the background music.
`-enter` should be a numeric value greater than or equal to 0.

``` ws
bgm:none -enter=3000;
```

::: tip Tip
`-volume` and `-enter` are optional parameters.
When `-volume` is not used, or when an unusable value is used, the default value of 100 is used.
When `-enter` is not used, or when an unusable value is used, the default value of 0 is used.
:::

## Play voice

As we all know, what often attracts people most to visual novels is the excellent dubbing. In this version, you can introduce dubbing in the dialogue. Put your dubbing in the `vocal` folder, then add `-audio file name` parameters to play it.

``` ws
Yui: I just got here -V3.ogg;
```

The introduction of dubbing is the same in continuous dialogue.

``` ws
Yukino: You're here early -V1.ogg;  
Sorry, have you been waiting long? -V2.ogg;
```

You can set a `-volume` parameter for a voice to adjust its volume.
`-volume` should be a numeric value greater than or equal to 0.

``` ws
Yui: I just got here -V3.ogg -volume=30;
```

::: tip Tip
`-volume` is an optional parameter. When not used, or when a value other than 0 ~ 100 is used, the default value of 100 is used.
:::

## Play sound effects

``` ws
playEffect:xxx.mp3;
```

Can play a short sound effect

### Loop sound effects

Giving an id to a sound effect will automatically enable sound effect looping. Use the same id later to stop it.

``` ws
playEffect:xxx.mp3 -id=xxx;  
playEffect:none -id=xxx; // Stop this looping sound effect
```

## Unlock audio for appreciation

Use `unlockBgm` to unlock audio in Audio Appreciation.

``` ws
; // Unlock the bgm and give it a name.
unlockBgm:s_Title.mp3 -name=Smiling-Swinging!!!;
```
