# About Live2D
The engine now supports the use of Live2D character models. If you want to use Live2D models, please follow these steps:

1. Obtain the necessary authorization for using Live2D.

2. Download Live2D and CubismCore from the following links:

   - Live2D: https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js
   - CubismCore: https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js

3. Rename `l2d.js` and `live2dcubismcore.min.js` respectively, then put the files in `packages/webgal/src/assets/lib`, and then go to `packages/webgal/index.html`, and uncomment the following two lines so that they become:
   ```
   htmlCopy code<script src="/src/assets/lib/l2d.js"></script>
   <script src="/src/assets/lib/live2dcubismcore.min.js"></script>
   ```

4. In the `packages/webgal/src/Core/controller/stage/pixi/PixiController.ts` file, uncomment the following lines:

   ```
   javascriptCopy codeimport { Live2DModel, SoundManager } from 'pixi-live2d-display';
   public addLive2dFigure(key: string, jsonPath: string, pos: string, motion: string) {
      // ...
   }
   ```

5. In the `packages/webgal/src/Components/Stage/MainStage/useSetFigure.ts` file, uncomment the following line:

   ```
   javascriptCopy code
   return WebGAL.gameplay.pixiStage?.addLive2dFigure(...args);
   ```

6. You can now use Live2D character models as part of your illustrations. Place the entire model directory inside the `game/figure` directory. To display a character model, call the corresponding JSON file.

**Note: The author of this project has not used any Live2D SDK source code or models. Any copyright disputes arising from the use of Live2D are the sole responsibility of the developers or creators of the modified project!**