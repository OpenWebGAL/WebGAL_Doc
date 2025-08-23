# 音频

## 播放背景音乐（BGM）

播放背景音乐的方法极其简单，你只需要将背景音乐放置在 `bgm` 文件夹下，然后使用 `bgm` 指令来播放背景音乐。

``` ws
bgm:夏影.mp3;
```

可以为背景音乐设置一个 `-volume` 参数，来调整它的音量。

``` ws
bgm:夏影.mp3 -volume=30;
```

此外，还可以使用 `-enter` 参数，进行淡入播放。

``` ws
bgm:夏影.mp3 -enter=3000;
```

最后，可以使用以下语句，进行背景音乐的淡出。

``` ws
bgm:none -enter=3000;
```

### 解锁BGM功能

在播放BGM的同时，也可以解锁BGM到鉴赏模式：

``` ws
bgm:夏影.mp3 -unlockname=夏之影 -series=season;
```

::: tip
`-volume` 和 `-enter` 都是可选参数。
`-volume` 未使用时，或使用了 0 ~ 100 以外的值时，将使用默认值 100。
`-enter`  未使用时，或使用了 0 ~ 以外的值时，将使用默认值 0。
`-unlockname` 和 `-series` 参数用于解锁BGM到鉴赏模式。
:::

## 播放语音

众所周知，视觉小说 最吸引人的地方往往在于其有优秀的配音。将配音文件放入 `vocal` 文件夹，然后在对话脚本中加入 `-语音文件名` 参数，就可以播放语音了。语法示例如下。

``` ws
比企谷八幡:刚到而已 -V3.ogg;
```

在连续对话时，语音的引入方式也是一样的。

``` ws
雪之下雪乃:你到得真早 -V1.ogg;
对不起，等很久了吗？ -V2.ogg;
```

同时可以设置一个 `-volume` 参数，来调整它的音量。

``` ws
比企谷八幡:刚到而已 -V3.ogg -volume=30;
```

### 语音与立绘动画联动

语音播放时可以与立绘动画联动，实现口型和眨眼动画：

``` ws
角色名:这段对话有语音 -V1.ogg -left; // 关联左侧立绘
角色名:这段对话有语音 -V2.ogg -figureId=char1; // 关联指定ID的立绘
```

::: tip
`-volume` 是可选参数。
`-volume` 未设置时，或使用了 0 ~ 100 以外的值时，将使用默认值 100。
`-left`、`-right`、`-center` 参数用于指定语音关联的立绘位置。
`-figureId` 参数用于指定特定的立绘ID。
:::

## 播放效果音

将你的配音放入 `vocal` 文件夹之后，再使用 `playEffect` 指令就可以播放效果音了^_^

``` ws
playEffect:xxx.mp3;
```

可以为效果音设置一个 `-volume` 参数，来调整它的音量。

``` ws
playEffect:xxx.mp3 -volume=30;
```

::: tip
`-volume` 是可选参数。
`-volume` 未设置时，或使用了 0 ~ 100 以外的值时，将使用默认值 100。
:::

### 效果音循环

为效果音赋予一个 `id` 将会自动启用效果音循环，后续使用相同的 `id` 来停止。

``` ws
playEffect:xxx.mp3 -id=xxx;
playEffect:none -id=xxx; // 停止这个循环的效果音
```

## 解锁音频以供鉴赏

使用 `unlockBgm` 解锁音频鉴赏中的音频。

``` ws
; // 解锁bgm并赋予名称
unlockBgm:s_Title.mp3 -name=Smiling-Swinging!!!;
unlockBgm:s_Title.mp3 -name=主题曲 -series=OP;
```

`-series` 参数用于设置音频的所属系列，便于在鉴赏模式中分类管理。
