# intro

全屏文字命令。

## 语句内容

输入一段文字，这段文字会以全屏文字的形式显示在屏幕上。可以使用 `|` 来分割多行文字。
详情请见[黑屏文字](../../webgal-script/dialogue.md#黑屏文字)。

```webgal
intro:这是第一行文字|这是第二行文字|这是第三行文字;
```

## 参数

### fontSize
- 字符串

设置字体大小，可用值有:
- `small` - 小号字体
- `medium` - 中号字体
- `large` - 大号字体

```webgal
intro:这是一段话 -fontSize=large;
```

### fontColor
- 字符串
- 默认值: `rgba(0, 0, 0, 1)`

设置字体颜色，格式如 `rgba(0,0,0,1)`，表示黑色，`rgba(255,255,255,1)` 表示白色。透明度范围为 0 到 1。

```webgal
intro:这是一段话 -fontColor=rgba(48, 135, 206, 1);
```

### backgroundColor
- 字符串
- 默认值: `rgba(0, 0, 0, 1)`

设置背景颜色，格式如 `rgba(0,0,0,1)`，表示黑色，`rgba(255,255,255,1)` 表示白色。透明度范围为 0 到 1。

```webgal
intro:这是一段话 -backgroundColor=rgba(22,22,22,0.8);
```

### backgroundImage
- 字符串

填写背景图像的路径，将其作为全屏文字的背景图像。若未设置此参数，则使用 `backgroundColor`。

```webgal
intro:这是一段话 -backgroundImage=bg.png;
```

### animation
- 字符串

设置全屏文字的显示方式，支持以下几种动画效果：
- `fadeIn`：透明度淡入，默认值
- `slideIn`：滑入
- `typingEffect`：打字机效果
- `pixelateEffect`：模糊
- `revealAnimation`：卷轴展开

```webgal
intro:这是第一行文字|这是第二行文字|这是第三行文字 -animation=slideIn;
```

### delay
- 数字
- 单位：毫秒

设置每行文字的显示延迟时间。

```webgal
intro:这是第一行文字|这是第二行文字|这是第三行文字 -delay=1000;
```

### hold
- 布尔值

当值为 `true` 时，所有文字显示完毕后，不会自动执行下一句，直到玩家点击屏幕。
当值为 `false` 时，所有文字显示完毕后，自动执行下一句，即使玩家未开启自动播放。

```webgal
intro:这是一段话 -hold;
```

### useForward
- 布尔值

当值为 `true` 时，需要用户手动点击屏幕，才会显示下一行文字，并设置 `hold` 为 `true`。
当值为 `false` 时，自动显示下一行文字。

```webgal
intro:这是一段话 -useForward;
```
