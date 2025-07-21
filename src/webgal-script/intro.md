# 片头演示

WebGAL 提供了强大的片头演示功能，可以创建黑屏文字演示效果，通常用于游戏的片头、章节过渡或重要剧情的氛围营造。

## 基本用法

使用 `intro` 命令创建片头演示：

``` ws
intro:欢迎来到WebGAL的世界;
```

## 多行文本

使用 `|` 分隔符创建多行文本演示：

``` ws
intro:第一章|秋日的回忆|在那个金色的午后;
```

## 支持的参数

### 背景设置

- `-backgroundImage=图片名称` - 设置背景图片（从 game/background/ 目录加载）
- `-backgroundColor=颜色值` - 设置背景颜色（默认为黑色）

``` ws
intro:很久很久以前...|在一个遥远的地方... -backgroundImage=sunset.jpg -backgroundColor=rgba(0,0,0,0.8);
```

### 文字样式

- `-fontColor=颜色值` - 设置字体颜色（默认为白色）
- `-fontSize=尺寸` - 设置字体大小

字体大小选项：
- `small` - 小字体（280%）
- `medium` - 中等字体（350%）
- `large` - 大字体（420%）
- `default` - 默认字体

``` ws
intro:重要公告 -fontSize=large -fontColor=rgba(255,200,100,1);
```

### 动画效果

- `-animation=动画类型` - 设置动画效果

支持的动画类型：
- `fadeIn` - 淡入效果（默认）
- `slideIn` - 滑入效果
- `typingEffect` - 打字机效果
- `pixelateEffect` - 像素化效果
- `revealAnimation` - 揭示动画

``` ws
intro:第一章|秋日的回忆|在那个金色的午后 -animation=typingEffect;
```

### 时间控制

- `-delayTime=毫秒数` - 设置每行文字显示的延迟时间（默认 1500ms）

``` ws
intro:慢慢展示的文字 -delayTime=3000;
```

### 交互控制

- `-hold` - 保持显示，不自动继续
- `-userForward` - 用户手动控制前进（隐含 hold 效果）

``` ws
intro:按任意键继续 -hold -fontSize=small;
intro:点击继续下一章 -userForward;
```

## 完整示例

``` ws
intro:WebGAL 视觉小说引擎;
intro:第一章|秋日的邂逅|在那个金桂飘香的午后 -fontSize=large -animation=fadeIn -delayTime=2000;
intro:故事即将开始...|请做好准备 -backgroundImage=autumn_bg.jpg -fontColor=rgba(255,215,0,1) -animation=slideIn;
intro:按任意键开始游戏 -hold -fontSize=small -fontColor=rgba(200,200,200,1);
```

## 特殊功能

### 转义字符

如果需要在文本中使用字面上的 `|` 字符，可以使用转义字符：

``` ws
intro:这是一个例子\|这不会换行;
```

### 快进支持

片头演示支持用户交互快进：
- 点击鼠标可以加速文字显示
- 按任意键可以加速文字显示
- 演出结束后自动进入下一条脚本

## 使用建议

1. **合理使用背景**：为不同的情景选择合适的背景图片或颜色
2. **控制节奏**：通过调整 `delayTime` 控制文字显示的节奏
3. **字体大小**：根据文本重要性选择合适的字体大小
4. **动画效果**：根据氛围选择合适的动画效果
5. **交互设计**：在适当的地方使用 `-hold` 让用户控制节奏

片头演示是创造沉浸式体验的重要工具，合理使用可以大大提升游戏的表现力。