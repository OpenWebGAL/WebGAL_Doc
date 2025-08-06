# bgm

播放背景音乐、切换背景音乐、停止背景音乐、设置背景音乐参数的四合一命令。

## 语句内容

填写背景音乐的路径。当文件路径为空或为 none 时，表示停止播放。
详情请见[音频](../../webgal-script/audio.md)。

```webgal
; 如果没有背景音乐，则此句表示播放背景音乐。
bgm:01.wav;
; 如果已有背景音乐存在，则此句表示切换背景音乐。
bgm:02.wav;
; 如果填写 none 或不填时，则此句表示停止播放背景音乐。
bgm:;
```

若背景音乐的路径不变，则不会打断背景音乐, 而是将新参数应用到背景音乐上。

```webgal
bgm:morning.wav;
; 调整音量，但不会打断背景音乐
bgm:morning.wav -volume=50;
```

## 参数

<!-- @include: ../arguments/volume.md -->
```webgal
bgm:01.wav -volume=100;
bgm:01.wav -volume=50; 调整音量
```

### enter
- 数字
- 单位：毫秒
- 范围：0 到正无穷
- 默认值：0

背景音乐的淡入时间。

```webgal
bgm:01.wav -enter=1500;
bgm:02.wav -enter=1500;
```

### unlockname
<!-- @include: ../arguments/name-bgm.md -->
```webgal
bgm:01.wav -unlockname=MyBgm01;
```

### series
<!-- @include: ../arguments/series-bgm.md -->
单独填写 `series` 不会进行收录，请确保同时填写了 `unlockname`。

```webgal
bgm:01.wav -unlockname=MyBgm01 -series=MySeries01;
```
