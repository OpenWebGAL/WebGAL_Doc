# 背景与立绘

## 改变背景/人物立绘

要让 WebGAL 能够读取背景和人物立绘，你的背景图片应该被放在 `background` 文件夹内，而立绘图片则应该放在 `figure` 文件夹中。

接下来，你可以通过以下简单的语句来改变当前显示的背景图片和人物立绘：

``` ws
changeBg:testBG03.jpg; // 改变背景
changeFigure:testFigure02.png; // 改变人物立绘
changeBg:none; // 关闭背景
changeFigure:none; // 关闭人物立绘
```

你有可能会发现，在你改变背景图片或人物立绘后，你需要再点击一下鼠标才能显示下一条对话，如果你希望在改变背景/立绘后立即执行下一条语句的内容，请使用 `-next` 参数。

``` ws
changeBg:testBG03.jpg -next;
changeFigure:testFigure02.png -next; // 改变人物立绘
一色:谢谢学姐！;
```

如果你这样做，那么在背景/立绘替换后，程序会立刻执行下一条语句。

## 将立绘放在不同的位置

现在，你可以在页面的三个不同位置放置不同的立绘，只需要在放置立绘的语句处加上你要放置的位置就可以了，示例如下：

``` ws
changeFigure:testFigure03.png -left;
changeFigure:testFigure04.png;
changeFigure:testFigure03.png -right;
```

以上三行分别对应着左、中、右三个不同的位置。三个不同位置的立绘是相互独立的，所以如果你需要清除立绘，必须分别独立清除：

``` ws
changeFigure:none -left;
changeFigure:none;
changeFigure:none -right;
```

如果你想要在立绘改变后立刻执行下一条语句，操作方法与之前一样，即加上参数 `-next` :

``` ws
changeFigure:testFigure03.png -left -next;
changeFigure:testFigure04.png -next;
changeFigure:testFigure03.png -right -next;
```

## 带ID的自由立绘

如果你想要更精确地控制立绘，或使用超过 3 个立绘，可以为立绘指定 `id` 和初始位置：

``` ws
; // 一个初始位置在右侧的自由立绘
changeFigure:testFigure03.png -left -id=test1;
; // 通过 id 关闭立绘
changeFigure:none -id=test1;
```

::: tip
如果你要重设某个带ID立绘的位置，请先关闭再重新打开。
:::

## 放置小头像

很多游戏可以在文本框的左下角放置小头像，以下是在本引擎中使用的语法：

``` ws
; // 在左下角显示minipic_test.png
miniAvatar:minipic_test.png;
; // 关闭这个小头像
miniAvatar:none;
```

## 解锁 CG 以供鉴赏

使用 `unlockCg` 来解锁 CG 鉴赏中的 CG。

``` ws
; // 解锁CG并赋予名称
unlockCg:xgmain.jpeg -name=星光咖啡馆与死神之蝶 -series=1;
```

其中，`-series` 参数可选，代表当前立绘属于哪个系列。同系列的立绘以后会合并展示（即展示成可以切换的同系列CG）。

## 高级背景切换功能

### 解锁背景CG

`changeBg` 命令也支持解锁CG功能，可以在切换背景的同时解锁CG：

``` ws
changeBg:cg_scene1.jpg -unlockname=第一章场景 -series=主线CG;
```

### 背景变换效果

可以为背景切换设置变换效果：

``` ws
changeBg:bg_night.jpg -transform={"position":{"x":-100,"y":0},"scale":{"x":1.2,"y":1.2}} -duration=3000;
```

### 预设动画效果

可以使用预设的进入和退出动画：

``` ws
changeBg:bg_morning.jpg -enter=fadeIn -exit=fadeOut;
```

## 高级立绘功能

### Live2D 支持

WebGAL 支持 Live2D 立绘，可以控制动作和表情：

``` ws
changeFigure:live2d/model.json -motion=idle -expression=happy;
```

### 立绘口型和眨眼动画

可以为立绘设置口型和眨眼动画素材：

``` ws
changeFigure:char.png -mouthOpen=mouth_open.png -mouthClose=mouth_close.png -eyesOpen=eyes_open.png -eyesClose=eyes_close.png;
```

### 立绘层级控制

可以通过 `zIndex` 参数控制立绘的层级：

``` ws
changeFigure:foreground_char.png -zIndex=100;
changeFigure:background_char.png -zIndex=1;
```

### 清除立绘的不同方式

除了使用 `none` 外，还可以使用 `clear` 参数清除立绘：

``` ws
changeFigure:any -left -clear;
```

### Live2D 边界设置

对于 Live2D 模型，可以设置显示边界：

``` ws
changeFigure:live2d/model.json -bounds=0,0,800,600;
```

### 立绘动画效果

可以为立绘设置动画效果：

``` ws
changeFigure:char.png -duration=2000 -ease=easeInOut;
```

## 设置立绘时设置效果

有关效果的字段说明，请参考 [动画](animation.md)

你可以在设置立绘的时候就为立绘设置一些变换和滤镜效果，以下是一个示例：

```
changeFigure:stand.png -transform={"alpha":1,"position":{"x":0,"y":500},"scale":{"x":1,"y":1},"rotation":0,"blur":0,"brightness":1,"contrast":1,"saturation":1,"gamma":1,"colorRed":255,"colorGreen":255,"colorBlue":255,"oldFilm":0,"dotFilm":0,"reflectionFilm":0,"glitchFilm":0,"rgbFilm":0,"godrayFilm":0} -next;
```

## 为已有的立绘设置变换效果

有关效果的字段说明，请参考 [动画](animation.md)

你也可以直接用 `setTransform` 为已有的立绘设置效果，例如：

```
setTransform:{"position":{"x":100,"y":0}} -target=fig-center -duration=0;
```

这里为已经存在的立绘设置了一个变换。
