# 关于Live2D
本引擎现已支持使用 live2D 立绘。如果你要使用 live2D 立绘，请遵循以下步骤：

:::info
注意：以下某些步骤基于 WebGAL 源代码操作，你可以在 GitHub 找到 WebGAL 的源代码。

[WebGAL 源代码](https://github.com/OpenWebGAL/WebGAL)

关于如何从源代码构建 WebGAL，请参考 [WebGAL 构建](developers)
:::

1、自行取得 live2D 的授权

2、到 https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js 和 https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js 分别下载 live2D 和 cubismcore

3、分别重命名为 `live2d.min.js` 和 `live2dcubismcore.min.js` ，然后将文件放到**其中一个指定目录**

- 定制引擎目录：`[WebGal]/assets/templates/Derivative_Engine/[你的定制引擎]/lib`
- 游戏目录（作用于单个项目）：`[WebGal]/public/games/[你的游戏]/lib`
- WebGal源码目录：`[WebGal源码]/packages/webgal/public/lib`

4、现在开始你可以使用 live2D 作为立绘了。你需要将整个模型的目录放入 `game/figure` 目录中，调用立绘的方法是调用立绘的 json 文件。

**注意：本项目的作者没有使用任何 live2D SDK 的源码和模型，由于使用 live2D 造成的任何版权纠纷，皆由二次开发者或制作者自行承担！**

## 切换动作和表情

你可以使用 `-motion=motionName` 或 `-expression=expressionName` 参数来切换表情，如：

```
changeFigure:xxx.json -motion=angry -expression=angry01;
```
