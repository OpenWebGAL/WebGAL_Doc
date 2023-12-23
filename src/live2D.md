# 关于Live2D
本引擎现已支持使用 live2D 立绘。如果你要使用 live2D 立绘，请：

1、自行取得 live2D 的授权

2、到 https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js 和 https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js 分别下载 live2D 和 cubismcore

3、分别重命名为 `live2d.min.js` 和 `live2dcubismcore.min.js` ，然后将文件放到`packages/webgal/public/lib`，然后到 `packages/webgal/index.html`,取消注释以下两行，使其变为：
```html
<script src="lib/live2d.min.js" ></script>
<script src="lib/live2dcubismcore.min.js"></script>
```
4、到 `packages/webgal/src/Core/controller/stage/pixi/PixiController.ts` ，取消注释
`import { Live2DModel, SoundManager } from 'pixi-live2d-display';` 和 `public addLive2dFigure(key: string, jsonPath: string, pos: string, motion: string) {...... 取消注释这一整个函数}`

注意：如果 IDE 提示有未导入的变量，请根据提示导入。

5、到 `packages/webgal/src/Components/Stage/MainStage/useSetFigure.ts` 取消注释 `return WebGAL.gameplay.pixiStage?.addLive2dFigure(...args);`

6、现在开始你可以使用 live2D 作为立绘了。你需要将整个模型的目录放入 `game/figure` 目录中，调用立绘的方法是调用立绘的 json 文件。

**注意：本项目的作者没有使用任何 live2D SDK 的源码和模型，由于使用 live2D 造成的任何版权纠纷，皆由二次开发者或制作者自行承担！**

## 切换动作和表情

你可以使用 `-motion=motionName` 或 `-expression=expressionName` 参数来切换表情，如：

```
changeFigure:xxx.json -motion=angry -expression=angry01;
```