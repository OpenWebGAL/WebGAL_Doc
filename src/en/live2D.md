# About Live2D
This engine now supports the use of Live2D models. If you want to use Live2D models, please follow these steps:

:::info
Note: Some of the following steps are based on the WebGAL source code, which you can find on GitHub.

[WebGAL Source Code](https://github.com/OpenWebGAL/WebGAL)

For information on how to build WebGAL from source, please refer to [WebGAL Build](developers)
:::

1. Obtain a Live2D license yourself.

2. Go to https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js and https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js to download Live2D and cubismcore respectively.

3. Rename them to `live2d.min.js` and `live2dcubismcore.min.js` respectively, and then put the files in **one of the specified directories**.

- Custom engine directory: `[WebGal]/assets/templates/Derivative_Engine/[Your custom engine]/lib`
- Game directory (applies to a single project): `[WebGal]/public/games/[Your game]/lib`
- WebGal source code directory: `[WebGal source code]/packages/webgal/public/lib`

4. Now you can start using Live2D as a figure. You need to put the entire model directory into the `game/figure` directory. The way to call the figure is to call the figure's json file.

**Note: The author of this project does not use any source code or models of the Live2D SDK. Any copyright disputes arising from the use of Live2D are the sole responsibility of the secondary developer or creator!**

## Switching Motions and Expressions

You can use the `-motion=motionName` or `-expression=expressionName` parameters to switch expressions, such as:

```
changeFigure:xxx.json -motion=angry -expression=angry01;
```
