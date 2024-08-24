# About Live2D
This engine now supports using live2D models. If you want to use live2D models, please follow the steps below:

:::info
Note: The following steps are all based on the WebGAL source code, you can find the WebGAL source code on GitHub.

[WebGAL Source Code](https://github.com/OpenWebGAL/WebGAL)
:::

1. Obtain the authorization of Live2D by yourself

2. Download Live2D and Cubismcore from https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js and https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js respectively

3. Rename them to `live2d.min.js` and `live2dcubismcore.min.js` respectively, then put the files in `packages/webgal/public/lib`, then go to `packages/webgal/index.html`, uncomment the following two lines to make them:
```html
<script src="lib/live2d.min.js" ></script>
<script src="lib/live2dcubismcore.min.js"></script>
```
4. Go to `packages/webgal/src/Core/controller/stage/pixi/PixiController.ts`, uncomment
`import { Live2DModel, SoundManager } from 'pixi-live2d-display';` and `public addLive2dFigure(key: string, jsonPath: string, pos: string, motion: string) {...... uncomment this whole function}`

Note: If the IDE prompts that there are unimported variables, please import them according to the prompts.

5. Go to `packages/webgal/src/Components/Stage/MainStage/useSetFigure.ts` and uncomment `return WebGAL.gameplay.pixiStage?.addLive2dFigure(...args);`

6. Now you can start using Live2D as illustrations. You need to put the directory of the entire model in the `game/figure` directory. The way to call the illustration is to call the JSON file of the illustration.

7. If you need to build a production package, or use it in WebGAL Terre, please run the `yarn build` command to build WebGAL. After completion, please refer to [How to use a custom engine](derivative) to use the modified engine. 

**Note: The author of this project did not use any source code and models of Live2D SDK. Any copyright disputes caused by the use of Live2D shall be borne by the secondary developer or producer!**

## Switch actions and expressions

You can use the `-motion=motionName` or `-expression=expressionName` parameters to switch expressions, such as:

```
changeFigure:xxx.json -motion=angry -expression=angry01;
```
