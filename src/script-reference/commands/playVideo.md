# playVideo

播放视频。

## 语句内容

填写视频文件的路径，全屏播放该视频，图层高于立绘和背景，并临时静音对话语音和背景音乐。
详情请见[视频](../../webgal-script/video.md)。

```webgal
playVideo:video.mp4;
```

## 参数

### skipOff
- 布尔值

当值为 `true` 时，不允许跳过视频。
当值为 `false` 或不填写该参数时，双击可跳过视频。

```webgal
playVideo:video.mp4 -skipOff;
```
