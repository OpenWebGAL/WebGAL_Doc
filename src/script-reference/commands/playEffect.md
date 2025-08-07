# playEffect

播放音效、替换音效、停止音效的三合一命令。

## 语句内容

填写音效文件的路径。当文件路径为空或为 `none` 时，表示停止播放音效。
详情请见[播放效果音](../../webgal-script/audio.md#播放效果音)。

```webgal
; 如果没有音效存在，则此句表示播放音效。
playEffect:rain.wav;
; 如果已有音效存在，则此句表示替换音效。
playEffect:heavy_rain.wav;
; 如果填写 none 或者不填，则此句表示停止播放音效。
playEffect:none;
```

## 参数

### id
- 字符串

为音效设置 id 后，音效可以循环播放。
不同 id 的音效与无 id 的音效可以叠加播放。

```webgal
; 循环播放脚步声
playEffect:footsteps.wav -id=footsteps;
; 循环播放雨声
playEffect:rain.wav -id=rain;
; 播放一次雷声
playEffect:thunder.wav;
```
