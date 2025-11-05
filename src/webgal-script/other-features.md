# 其他功能

WebGAL 还提供了一些其他实用的功能，这些功能可以帮助你创建更丰富的游戏体验。

## 电影模式

电影模式可以创造更沉浸的观看体验，类似于视频播放器的"影院模式"。

### 启用电影模式

``` ws
filmMode:on; // 启用电影模式
filmMode:cinematic; // 启用电影模式（带参数）
```

### 关闭电影模式

``` ws
filmMode:; // 关闭电影模式
filmMode:none; // 关闭电影模式
```

### 特点

- 会隐藏部分UI元素
- 立即生效，不阻塞脚本执行
- 适合用于重要剧情或特殊场景

### 使用示例

``` ws
; 进入重要剧情场景
filmMode:on;
changeBg:important_scene.jpg;
这里是重要的剧情对话...;
; 剧情结束后退出电影模式
filmMode:;
```

## 解锁CG

除了在切换背景时自动解锁CG，你也可以单独解锁CG而不显示。

### 基本用法

``` ws
unlockCg:cg/scene1.jpg;
```

### 设置CG名称和系列

``` ws
unlockCg:cg/ending_a.jpg -name=美好的结局;
unlockCg:cg/chapter2_01.jpg -name=初次相遇 -series=第二章;
```

### 参数说明

- `-name=名称` - 为CG设置显示名称（默认使用文件路径）
- `-series=系列名` - 设置CG所属的系列/分类（默认为 "default"）

### 特点

- 解锁的CG会保存到用户数据中
- 支持CG分类管理
- 立即生效，不阻塞脚本执行

## 解锁BGM

可以单独解锁BGM到鉴赏模式而不播放。

### 基本用法

``` ws
unlockBgm:s_Title.mp3;
```

### 设置BGM名称和系列

``` ws
unlockBgm:s_Title.mp3 -name=Smiling-Swinging!!!;
unlockBgm:s_Title.mp3 -name=主题曲 -series=OP;
```

### 参数说明

- `-name=名称` - 为BGM设置显示名称（默认使用文件路径）
- `-series=系列名` - 设置BGM所属的系列/分类（默认为 "default"）

## 文本框控制

控制文本框的显示和隐藏，适合用于全屏演出。

### 隐藏文本框

``` ws
setTextbox:hide;
```

### 显示文本框

``` ws
setTextbox:;
setTextbox:show;
```

### 使用场景

``` ws
; 展示全屏CG
setTextbox:hide;
changeBg:fullscreen_cg.jpg;
wait:3000;
; 恢复文本框
setTextbox:;
这真是美丽的风景啊！;
```

## 动态样式切换

可以动态替换UI元素的CSS类名，实现主题切换等功能。

### 单个样式替换

``` ws
applyStyle:textbox-default->textbox-dark;
```

### 批量样式替换

``` ws
applyStyle:btn-primary->btn-dark,text-light->text-dark,bg-light->bg-dark;
```

### 使用场景

- 动态主题切换（如日间/夜间模式）
- 特定场景的UI风格变化
- 根据剧情需要改变界面样式

### 示例

``` ws
; 切换到夜间模式
applyStyle:textbox-light->textbox-dark,btn-light->btn-dark;
; 特殊场景样式
applyStyle:ui-normal->ui-horror;
```

## 调试功能

### 显示所有变量

``` ws
showVars:;
```

显示当前所有变量的值，包括普通变量和全局变量，以JSON格式显示在对话框中。

### 使用场景

- 调试复杂的变量逻辑
- 检查变量状态
- 开发过程中的问题排查

## 结束游戏

在游戏结束时使用，会返回到标题画面。

``` ws
end;
```

### 功能

- 重置游戏舞台状态
- 清除快速存档
- 重新加载初始场景（start.txt）
- 播放标题画面BGM

## 等待命令

让游戏暂停指定的时间。

``` ws
wait:1000; // 等待1秒
wait:500; // 等待0.5秒
```

### 特点

- 时间单位为毫秒
- 会自动跳转到下一条语句
- 适合用于控制演出节奏

## 使用建议

1. **合理使用电影模式**：在重要剧情或特殊场景中使用，不要频繁切换
2. **CG解锁时机**：在合适的剧情节点解锁CG，增强玩家的成就感
3. **文本框控制**：主要用于全屏演出，使用后记得恢复
4. **样式切换**：确保切换的样式存在，避免样式错误
5. **调试功能**：在开发过程中多使用，发布时记得移除调试代码

这些功能虽然看起来简单，但合理使用可以大大提升游戏的专业度和用户体验。