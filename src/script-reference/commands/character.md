# character

显示、原地切换或关闭多层部件叠加的组合立绘。

## 语句内容

填写 `figure` 文件夹下的角色目录路径（该目录下需包含 `figure.json`），可在末尾通过 `.预设名` 指定要显示的预设；当内容为空或填写 `none` 时，表示组合立绘退场。完整流程指引请见[角色（组合立绘）](../../webgal-script/character.md)。

``` webgal
; 显示组合立绘（默认使用 figure.json 中的第一个非空预设）
character:alice;
; 切换为 smile 预设
character:alice.smile;
; 支持子目录路径，仅最后一段路径中的最后一个 "." 视为预设分隔符
character:cast/alice.smile;
; 组合立绘退场
character:none;
```

最终渲染的部件图层按以下优先级确定（顺序均为从底到顶）：

1. 显式指定了 `-components` 参数时，按该参数列出的部件渲染，忽略语句内容中的 `.预设名`。
2. 指定了 `.预设名` 时，按 `figure.json` 中对应预设的部件列表渲染；若该预设不存在或为空，将在控制台给出警告并回退到默认显示。
3. 均未指定时，使用 `figure.json` 中第一个非空预设；若未定义任何有效预设，则按 `components` 数组的定义顺序渲染全部部件。

当目标位置（或 `id`）已经是**同一角色且方位未变**时，切换预设或部件只做原地更新，不会触发入场或退场动画，已有的变换效果、层级（`zIndex`）、混合模式、退场设置以及正在运行的动画都会保留；若同时传入 `-transform`、`-zIndex`、`-blendMode` 或 `-exit`，也会直接应用到该角色上。若目标槽位为空、换成了其他角色，或改变了 `-left`、`-right` 等基础方位，则会清除旧效果并按入场或替换处理。

``` webgal
character:alice -id=alice -left -exit=exit-to-left;
; 原地切换表情预设，保留位置、变换与退场设置
character:alice.smile -id=alice -left;
; 组合立绘同样可以作为 setTransform、setAnimation、setTempAnimation 的目标
setAnimation:shake -target=alice;
; 退场时播放先前设置的 exit-to-left
character:none -id=alice;
```

::: info
- 组合立绘自 v4.6.7 起提供。
- `character` 与 [changeFigure](changeFigure.md) 共用舞台位置与 `id` 命名：在同一位置或同一 `id` 上放置组合立绘会顶替原有的普通立绘，反之亦然；但 `character:none` 只关闭组合立绘，`changeFigure:none` 只关闭普通立绘。
- 单图口型/眨眼参数（`mouthOpen`、`eyesOpen` 等）以及 Live2D/Spine 参数（`motion`、`skin`、`expression`、`bounds`、`blink`、`focus`）不适用于组合立绘，传入时会被忽略并在控制台提示。
:::

## 角色定义文件（figure.json）

每个组合立绘对应 `game/figure/<角色目录>/figure.json`。在 WebGAL Terre 编辑器左侧边栏切换到**角色**选项卡即可新建角色，可视化添加部件图层、调整坐标偏移与缩放旋转，并编排表情或服装预设；也可以直接编写 `figure.json`：

``` json
{
  "version": 1,
  "canvas": { "width": 1200, "height": 2000 },
  "components": [
    { "name": "base", "src": "body/base.png", "x": 0, "y": 0 },
    { "name": "uniform", "src": "outfit/uniform.png", "x": 120, "y": 420 },
    { "name": "casual", "src": "outfit/casual.png", "x": 110, "y": 410 },
    { "name": "calm", "src": "face/calm.png", "x": 430, "y": 210 },
    { "name": "smile", "src": "face/smile.png", "x": 430, "y": 210 }
  ],
  "presets": {
    "normal": ["base", "uniform", "calm"],
    "smile": ["base", "uniform", "smile"],
    "casual_smile": ["base", "casual", "smile"]
  }
}
```

| 字段 | 说明 |
| :-- | :-- |
| `version` | 模板版本号，固定为 `1` |
| `canvas` | 可选，角色画布像素尺寸 `{"width": 宽, "height": 高}`（上限 `8192`）。省略时按已加载部件的包围盒自动推算；画布整体会与图片立绘一样按舞台高度等比缩放 |
| `components` | 部件定义数组，按**从底到顶**的顺序排列 |
| `presets` | 可选，预设字典，键为预设名，值为**从底到顶**排列的部件 `name` 数组 |

`components` 中每个部件支持以下字段：

| 字段 | 说明 |
| :-- | :-- |
| `name` | 必填，部件唯一名称，供 `presets` 与 `-components` 引用 |
| `src` | 必填，相对当前角色目录的图片路径（支持 `png`、`webp`、`jpg`、`jpeg`、`avif`、`bmp`、`svg`，不可越出角色目录） |
| `x`、`y` | 可选，部件左上角在角色画布上的像素坐标，默认为 `0` |
| `width`、`height` | 可选，显式指定部件在画布上的绘制宽高（同时为正数时生效，优先于缩放比例） |
| `scale`、`scaleX`、`scaleY` | 可选，部件缩放比例，默认为 `1`；`scaleX`、`scaleY` 可分别覆盖 `scale` |
| `rotation` | 可选，部件绕自身中心顺时针旋转的弧度，默认为 `0` |

## 参数

### components
- 字符串

以英文逗号分隔的部件 `name` 列表，按从底到顶的顺序叠加渲染。指定此参数时，将忽略语句内容中的 `.预设名`。

``` webgal
character:alice -components=base,casual,smile;
```

### transform
- 字符串

填写 JSON 字符串，控制组合立绘在舞台上的变换与滤镜效果，详情请见[变换效果参考](../others/transform-reference.md)。无论角色入场、替换还是同槽位原地更新，此参数均可生效；但入场或替换时若通过 `enter` 指定了自定义入场动画，则此参数不起作用。

``` webgal
character:alice -transform={"position":{"x":-50,"y":0},"scale":{"x":1.1,"y":1.1}};
```

### transformFrom
- 字符串
- 可选值：`current`、`default`
- 默认值：`default`

指定 `transform` 或入退场动画中未写出的[变换与效果](../others/transform-reference.md)属性如何处理：
- `default`：未写出的属性重置为默认变换。
- `current`：以角色当前的变换为起点，仅修改写出的属性，未写出的属性保持当前值。

``` webgal
character:alice -id=alice -transform={"position":{"x":-200}};
; 保留 x=-200，仅将亮度降为 0.6
character:alice.smile -id=alice -transform={"brightness":0.6} -transformFrom=current;
```

<!-- @include: ../arguments/enter.md -->
``` webgal
character:alice -enter=enter-from-left;
```

<!-- @include: ../arguments/exit.md -->
``` webgal
character:alice -exit=exit-to-right;
```

<!-- @include: ../arguments/duration.md -->
作用于默认入场动画及 `transform` 过渡动画，默认值为 300。
``` webgal
character:alice -duration=200;
```

<!-- @include: ../arguments/ease.md -->
作用于默认入场动画及 `transform` 过渡动画。
``` webgal
character:alice -ease=easeOut;
```

### enterDuration
- 数字
- 单位：毫秒
- 范围：0 到正无穷

入场动画时长（原地附带 `transform` 过渡且未指定 `enterDuration` 时取 `duration`）。若未填写，默认取 `duration` 的值（默认 300）。

``` webgal
character:alice -enterDuration=200;
```

### exitDuration
- 数字
- 单位：毫秒
- 范围：0 到正无穷

退场动画时长。若未填写，默认值为 450。

``` webgal
character:alice -exitDuration=300;
```

### left
- 布尔值

当值为 `true` 时，组合立绘位于舞台左侧，对象坐标原点也会向左偏移。若未填写 `id`，默认赋予 `fig-left` 的 id。改变同一 `id` 角色的方位会触发替换并重置旧效果。

``` webgal
character:alice -left;
```

### right
- 布尔值

当值为 `true` 时，组合立绘位于舞台右侧，对象坐标原点也会向右偏移。若未填写 `id`，默认赋予 `fig-right` 的 id。改变同一 `id` 角色的方位会触发替换并重置旧效果。

``` webgal
character:alice -right;
```

### left13 / right13 / left14 / right14
- 布尔值

将组合立绘以中心对齐放在舞台预设分位处（左侧 1/3、右侧 1/3、左侧 1/4、右侧 1/4）。若未填写 `id`，默认赋予 `fig-left13`、`fig-right13`、`fig-left14`、`fig-right14` 的 id。

``` webgal
character:alice -left13;
character:bob -right13;
```

### id
- 字符串

指定组合立绘的唯一标识符，可与位置参数配合控制初始位置。未填写时按位置参数赋予 `fig-center`、`fig-left`、`fig-right` 等默认 id。

``` webgal
character:alice -id=alice -left;
character:alice.smile -id=alice -left;
character:none -id=alice;
```

### zIndex
- 数字 (整数)
- 范围: 0 到正无穷

立绘的层级，数值越大越靠上；数值相同时入场较晚的立绘更靠上。默认值为 0，入场与原地更新时均可修改。

``` webgal
character:alice -id=alice -zIndex=2;
```

### blendMode
- 字符串
- 默认值：`normal`

设置组合立绘的混合模式，入场与原地更新时均可生效。

``` webgal
character:alice -id=alice -blendMode=add;
```

### clear
- 布尔值

将语句内容视为空字符串，使目标位置或 `id` 的组合立绘退场。

``` webgal
character:alice -left -clear;
```
