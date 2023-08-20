# 动画效果

## 为背景或立绘设置动画

使用语句 `setAnimation:动画名 -target=作用目标;`

**示例：**

``` ws
; // 为中间立绘设置一个从下方进入的动画，并转到下一句
setAnimation:enter-from-bottom -target=fig-center -next;
```

目前，预制的动画有：

| 动画效果      | 动画名              | 持续时间（毫秒）|
| :------------ | :----------------- | :------------- |
| 渐入          | enter              | 300            |
| 渐出          | exit               | 300            |
| 左右摇晃一次  | shake               | 1000           |
| 从下侧进入    | enter-from-bottom   | 500            |
| 从左侧进入    | enter-from-right    | 500            |
| 从右侧进入    | enter-from-right    | 500            |
| 前后移动一次  | move-front-and-back | 1000           |

目前，动画的作用目标有：

| target     | 实际目标       |
| :--------- | :------------ |
| fig-left   | 左立绘         |
| fig-center | 中间立绘       |
| fig-right  | 右侧立绘       |
| bg-main    | 背景           |
|            | 某个有id的立绘 |

## 自定义动画

### 创建动画

动画文件在`game/animation`，你可以创建自己的自定义动画。

动画文件使用 JSON 描述，你可以在 [参考文档](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/JSON) 参考JSON语法。

每一个动画文件都代表一个**动画序列**，使用一个JSON数组来描述。下面是一个示例，描述了一个从左侧进入的动画：

**示例: `enter-from-left.json`**

``` json
[
  {
    "alpha": 0,
    "scale": {
      "x": 1,
      "y": 1
    },
    "pivot": {
      "x": 0.5,
      "y": 0.5
    },
    "position": {
      "x": -50,
      "y": 0
    },
    "rotation": 0,
    "blur": 5,
    "duration": 0
  },
  {
    "alpha": 1,
    "scale": {
      "x": 1,
      "y": 1
    },
    "pivot": {
      "x": 0.5,
      "y": 0.5
    },
    "position": {
      "x": 0,
      "y": 0
    },
    "rotation": 0,
    "blur": 0,
    "duration": 500
  }
]

```

其中各个属性代表的释义为：

| 属性名   | 释义                                |
| :------- | :--------------------------------- |
| alpha    | 透明度，范围0-1                     |
| scale    | 缩放                               |
| pivot    | 锚点                               |
| position | 位置偏移                           |
| rotation | 旋转角度，单位为弧度                |
| blur     | 高斯模糊半径                        |
| duration | 这个时间片的持续时间，单位为毫秒(ms) |

然后，你需要在 `animationTable`中加上你的自定义动画的文件名（不需要后缀名）

在文件 `animationTable.json`：

``` json
["enter-from-left","enter-from-bottom","enter-from-right"]
```

然后，你就可以在脚本中调用：

``` ws
setAnimation:enter-from-left -target=fig-left -next;
```

### 省略部分属性

如果你的动画只需要操作部分属性，你可以将其他不参与动画的属性留空，使它们保持默认：

**示例：`enter.json`**

``` json
[
  {
    "alpha": 0,
    "duration": 0
  },
  {
    "alpha": 1,
    "duration": 300
  }
]

```

### 使用变换

一个持续时间为0毫秒，且只有一个时间片的动画就是变换。

**示例：**

``` json
[
  {
    "alpha": 0,
    "duration": 0
  }
]
```
