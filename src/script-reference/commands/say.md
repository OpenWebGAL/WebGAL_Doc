# say

对话命令。任何识别不了的命令，都将尝试作为对话命令执行。

## 语句内容

填写一句话，这句话将出现在对话框中。可以使用 `|` 来分割多行文字。
详情请见[基础](../../webgal-script/base.md)与[对话](../../webgal-script/dialogue)。

```webgal
说话人:你好，世界！;
```

以下情况对话框不会出现:
- 语句内容与角色名均为空
- 用 `setTextbox` 命令隐藏了对话框
- 开启了 __隐藏所有 UI__

## 参数

### notend
- 布尔值

当值为 `true` 时，显示完所有文字后，立刻执行下一条命令，即使玩家未开启自动播放。

```webgal
changeFigure:1/open_eyes.png -next;
角色A:这到底是在干什么啊...... -notend;
changeFigure:1/closed_eyes.png -next;
没眼看了！ -concat;
```

### concat
- 布尔值

当值为 `true` 时，不会清空对话框内已有的文字，而是在此基础上，让新文字接续在后面。

```webgal
changeFigure:1/open_eyes.png -next;
角色A:这到底是在干什么啊...... -notend;
changeFigure:1/closed_eyes.png -next;
没眼看了！ -concat;
```

::: tip
如果在拼接文本前使用了 applyStyle 修改文本框文本的样式，如让文字变色，由于 outer 与 inner 作用于整个文本框的文本，因此无法通过这种方式单独更改个别文本的颜色，反而会因为样式的更新导致完整的拼接文本会重新播放一遍。
:::

### speaker
- 字符串

填写说话者的名称，该名称将出现在对话框的说话者栏中。
若未填写此参数，则对话框将继续使用上一次的说话者名称。

```webgal
say:你好，世界！ -speaker=角色A;
; 若没有 speaker 参数，角色名继续使用上一次的值
say:世界，你好！;
```

WebGAL 支持说话者的简化写法。
若句首到第一个英文冒号之间的字符不是命令，那么将其作为说话者名称。
若整句没有英文冒号，即找不到说话者名称，则继续使用上一次的说话者名称。

```webgal
角色A:你好，世界！;
; 说话者仍然为角色A
世界，你好！;
```

### clear
- 布尔值

当值为 `true` 时，将清除说话者，此时对话框的说话者栏不会显示，通常可用于旁白。

```webgal
say:这是一句话。 -speaker=角色A;
say:这是一个旁白。 -clear;  没有值的情况默认关闭说话者栏
say:这是一个旁白。 -clear=true;
say:这是一句话。 -speaker=角色B;
```

WebGAL 支持旁白的简化写法。当句首到第一个英文冒号之间没有一个字符，那么将这句话作为旁白。

```webgal
角色A:这是一句话。;
:这是一句旁白。;
角色B:这是一句话。;
```

### vocal
- 字符串

填写声音文件的路径，说话时将播放该声音文件。

```webgal
角色A:你好，世界！ -vocal=hello_world.wav;
```

WebGAL 支持声音文件的简化写法。

```webgal
角色A:你好，世界！ -hello_world.wav;
```

### fontSize
- 字符串

设置字体大小，可用值有:
- `small` - 小号字体
- `medium` - 中号字体
- `large` - 大号字体
- `default` - 默认字体大小，即设置里指定的字体大小

当此值被设置后，会传递到之后的对话，直至被再次设置。

```webgal
角色A:你好，世界！ -fontSize=small;
角色A:你好，世界！; 依然是小字体
角色A:你好，世界！ -fontSize=large;
角色A:你好，世界！ -fontSize=default;
```

### left
- 布尔值

当值为 `true` 时，WebGAL 将尝试驱动左侧立绘张嘴说话。

```webgal
角色A:你好，世界！ -left;
```

### right
- 布尔值

当值为 `true` 时，WebGAL 将尝试驱动右侧立绘张嘴说话。

```webgal
角色A:你好，世界！ -right;
```

### center
- 布尔值

当值为 `true` 时，WebGAL 将尝试驱动中间立绘张嘴说话。

```webgal
角色A:你好，世界！ -center;
```

### figureId
- 字符串

填写立绘的 id，WebGAL 将尝试驱动对应 id 的立绘张嘴说话。

```webgal
角色A:你好，世界！ -figureId=aaa;
```
