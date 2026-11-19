# 角色（组合立绘）

当一名角色拥有多套服装、发型、表情或配饰时，如果把每一种排列组合都导出成单独的全身立绘图片，文件数量与工程体积都会成倍膨胀。WebGAL 的**角色（组合立绘）**功能允许你将素体、服装、五官等拆分为独立的部件图层，通过 `figure.json` 拼装在同一张角色画布上，编排好常用预设（如 `normal`、`smile`、`casual_smile`），再在剧本中使用 `character` 语句登场或原地切换。

::: info
角色（组合立绘）功能从 v4.6.7 开始提供。
:::

## 准备角色资源

每个组合角色都存放在 `game/figure/<角色目录>/` 下，目录内包含角色定义文件 `figure.json` 以及该角色用到的各个部件图片（可以在角色目录内继续分子文件夹归类）：

``` text
game/figure/alice/
├── figure.json
├── body/
│   └── base.png
├── outfit/
│   ├── uniform.png
│   └── casual.png
└── face/
    ├── calm.png
    ├── smile.png
    └── blush.png
```

部件图片支持 `png`、`webp`、`jpg`、`jpeg`、`avif`、`bmp`、`svg` 格式。角色目录本身也可以放在多级子目录下（例如 `game/figure/cast/alice/figure.json`，脚本中对应写为 `character:cast/alice;`）。注意不要在 `figure` 根目录下将角色命名为 `none`，因为 `character:none;` 用于表示角色退场。

导出美术素材时，常见的做法有两种：

- **同画布等尺寸导出**：所有部件按同一张立绘画布尺寸导出透明底图，各部件坐标保持默认的 `(0, 0)` 即可自然对齐。
- **裁切部件拼装**：表情、配饰等只导出裁切后的局部小图，再在编辑器画布中拖动对齐位置，或微调缩放与旋转。

## 在编辑器中创建与拼装角色

使用 **WebGAL Terre** 时，无需手写 JSON，可以直接在角色编辑器中可视化拼装图层与预设：

1. **新建角色**：在编辑器左侧边栏切换到 **角色** 选项卡，点击 **新建角色** 输入目录名（如 `alice`），编辑器会自动创建 `game/figure/alice/figure.json`。将准备好的部件图片放入该目录后，点击 `figure.json` 即可打开角色编辑器。
2. **调整画布与拖拽排版（左侧）**：画布顶部工具栏可以设置角色画布的宽×高（上限 `8192 × 8192`），也可以缩小、放大或点击百分比按钮 **适配画布**。选中图层后，可直接在画布上拖动位置、拉伸缩放或旋转；进入游戏舞台后，整张角色画布会与普通图片立绘一样按舞台高度等比缩放。
3. **添加与排列图层（右中）**：点击 **添加图层** 选择角色目录中的部件图片。图层列表采用与常见绘画软件一致的**从上到下对应从前到后**顺序（列表越靠上的图层越在前面），直接上下拖拽即可调整遮挡层级；点击行首的眼睛图标可以临时切换显隐，用来试搭不同造型。保存时，编辑器会自动将其转换为 `figure.json` 所需的从底到顶顺序。
4. **微调部件属性（右上）**：选中某个图层后，可以在右上检查器修改部件的唯一 **名称**（供预设和脚本引用，重命名时会自动同步到已有预设）、更换 **素材**，或精确输入 **位置**（`X`、`Y`）、**缩放**（`X`、`Y`）、**旋转**（弧度）与固定 **宽高**（`W`、`H`）。
5. **创建表情与服装预设（右下）**：先在图层列表中只保留某套造型所需的可见图层（例如点亮 `base`、`uniform`、`smile`），再点击右下预设面板的 **新建预设**，当前可见图层就会保存为一个新预设。在左侧选中预设即可在画布上预览，在右侧顶部输入框可修改预设名（如 `normal`、`smile`、`casual_smile`），下方勾选框可随时增减该预设包含的图层。

## 手动编写 figure.json

如果不使用图形化编辑器，或者希望通过脚本从 PSD 等工程批量导出配置，也可以直接在角色目录下编写 `figure.json`：

``` json
{
  "version": 1,
  "canvas": { "width": 1200, "height": 2000 },
  "components": [
    { "name": "base", "src": "body/base.png", "x": 0, "y": 0 },
    { "name": "uniform", "src": "outfit/uniform.png", "x": 120, "y": 420 },
    { "name": "casual", "src": "outfit/casual.png", "x": 110, "y": 410 },
    { "name": "calm", "src": "face/calm.png", "x": 430, "y": 210 },
    { "name": "smile", "src": "face/smile.png", "x": 430, "y": 210 },
    { "name": "blush", "src": "face/blush.png", "x": 430, "y": 210 }
  ],
  "presets": {
    "normal": ["base", "uniform", "calm"],
    "smile": ["base", "uniform", "smile"],
    "casual_smile": ["base", "casual", "smile"]
  }
}
```

手写 `figure.json` 时需注意，`components` 数组以及每个预设中的部件名称数组均按**从底到顶（从后到前）**排列——例如 `["base", "uniform", "smile"]` 会先绘制素体 `base`，再叠上服装 `uniform`，最后在最上层绘制表情 `smile`。若省略 `canvas`，引擎会根据已加载部件图片的包围盒自动推算画布尺寸。完整的字段说明可参阅 [character 命令参考](../script-reference/commands/character.md#角色定义文件-figure-json)。

## 在场景中使用角色

### 图形编辑器

在场景的图形编辑器顶部打开 **添加语句**，点击 **切换角色** 即可插入角色语句：

- 选择目标 **角色** 后，默认处于 **使用预设** 模式，可直接从下拉框选择 `figure.json` 中定义好的预设（或保持默认预设）。
- 如果某句台词需要临时混搭一套没有存成预设的部件，可以打开 **自定义图层** 开关，在 **图层组合** 中直接多选图层或填写逗号分隔的部件名（如 `base,casual,blush`）。
- 同一面板中还可以设置 **角色位置**、可选的 **角色ID**、`z-index`、打开效果编辑器配置变换与滤镜，或打开 **清除角色** 让该位置/ID 的角色退场。

### 脚本编写

在脚本编辑器中输入 `character:` 时，编辑器会自动补全角色目录、`.预设名` 与 `-components` 部件名。下面是一段完整的演出示例：

``` webgal
; 角色在左侧登场（未指定预设时，默认使用 figure.json 中的第一个非空预设）
character:alice -left -next;
爱丽丝:早安，久等了吗？;

; 同角色、同方位切换预设：原地更新图层，不会重新播放入场或退场动画
character:alice.smile -left -next;
爱丽丝:看你的表情，该不会才刚睡醒吧。;

; 用 -components 临时按从底到顶的顺序自由组合部件，无需事先建预设
character:alice -left -components=base,casual,blush -next;
爱丽丝:换上便服还是有点不习惯呢……;

; 角色退场
character:none -left;
```

::: tip
如果 `figure.json` 中还没有定义任何预设（或预设均为空），执行 `character:alice;` 时会兜底按照 `components` 数组的定义顺序将全部部件依次叠加渲染。
:::

## 站位、自由 ID 与动画联动

组合立绘与 `changeFigure` 使用完全一致的舞台方位与 `id` 体系：

- **预设站位**：默认居中（`fig-center`），支持 `-left`、`-right` 以及按中心对齐的 `-left13`、`-right13`、`-left14`、`-right14`。
- **自由 ID**：通过 `-id` 为角色指定独立标识后，场上可以同时放置任意数量的角色，互不顶替。
- **原地保留状态**：只要目标槽位（或 `id`）仍是同一角色且基础方位未变，切换 `.预设名` 或 `-components` 都会保留角色当前的变换、滤镜、层级（`zIndex`）、混合模式、退场动画设置以及正在运行的动画。
- **驱动动画与变换**：在场的组合立绘可以直接通过 `fig-left`、`fig-center` 或自定义 `id` 作为 [setTransform](../script-reference/commands/setTransform.md)、[setAnimation](../script-reference/commands/setAnimation.md)、[setTempAnimation](../script-reference/commands/setTempAnimation.md) 的 `-target`；也可以在切换预设的同时传入 `-transform`（搭配 `-transformFrom=current` 可在保留当前位移/缩放的基础上只改写部分属性）：

``` webgal
; 使用自定义 id 与退场动画登场
character:alice -id=alice -left -transform={"position":{"x":-120}} -exit=exit-to-left -next;

; 对组合立绘播放预制抖动动画
setAnimation:shake-v2 -target=alice -next;
爱丽丝:呜哇，吓我一跳！;

; 原地切换预设，同时保留原有位移并将亮度调暗
character:alice.calm -id=alice -left -transform={"brightness":0.7} -transformFrom=current -duration=300 -next;

; 退场时会自动使用登场时设置的 exit-to-left
character:none -id=alice;
```

## 与普通立绘（changeFigure）的异同

- **同槽位互斥，退场互不干扰**：`character` 与 [changeFigure](../script-reference/commands/changeFigure.md) 共享舞台位置与 `id`。在同一个位置或同一个 `id` 上执行 `character` 会顶替该槽位原有的普通立绘，反之亦然；但 `character:none` 只会关闭组合立绘，`changeFigure:none` 只会关闭普通立绘。
- **适用场景区分**：多层拆分的静态角色立绘适合用 `character` 管理；Live2D / Spine 模型立绘，或需要使用单图口型同步、眨眼差分（`mouthOpen`、`eyesOpen` 等）的立绘，请继续使用 `changeFigure` 与 [changeFigureDiff](../script-reference/commands/changeFigureDiff.md)。

关于 `character` 语句的全部参数细节，请参阅 [character 命令参考](../script-reference/commands/character.md)。
