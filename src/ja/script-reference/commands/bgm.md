# bgm

BGM の再生、切り替え、停止、パラメータ設定を行う 4 in 1 コマンドです。

## ステートメント内容

BGM のパスを指定します。ファイルパスが空、または `none` の場合は再生を停止します。
詳しくは[音声](../../webgal-script/audio.md)を参照してください。

``` webgal
; BGM がない場合、この文は BGM を再生します。
bgm:01.wav;
; すでに BGM がある場合、この文は BGM を切り替えます。
bgm:02.wav;
; none を指定するか空にした場合、この文は BGM を停止します。
bgm:;
```

BGM のパスが変わらない場合、BGM は中断されず、新しいパラメータだけが適用されます。

``` webgal
bgm:morning.wav;
; BGM を中断せず音量を調整する
bgm:morning.wav -volume=50;
```

## パラメータ

<!-- @include: ../arguments/volume.md -->
``` webgal
bgm:01.wav -volume=100;
bgm:01.wav -volume=50; 音量を調整
```

### enter
- 数値
- 単位: ミリ秒
- 範囲: 0 から正の無限大
- デフォルト値: 0

BGM のフェードイン時間です。

``` webgal
bgm:01.wav -enter=1500;
bgm:02.wav -enter=1500;
```

### unlockname
<!-- @include: ../arguments/name-bgm.md -->
このパラメータを省略した場合、または名前が空の場合、この音楽は収録されません。
``` webgal
bgm:01.wav -unlockname=MyBgm01;
```

### series
<!-- @include: ../arguments/series-bgm.md -->
`series` だけを指定しても収録は行われません。必ず `unlockname` も指定してください。

``` webgal
bgm:01.wav -unlockname=MyBgm01 -series=MySeries01;
```
