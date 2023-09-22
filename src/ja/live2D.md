# About Live2D
本エンジンでは、Live2Dのキャラクターモデルの使用がサポートされています。Live2Dモデルを使用する場合は、以下の手順に従ってください：

1. Live2Dの使用に必要な許可を取得します。

2. 以下のリンクからLive2DとCubismCoreをダウンロードします：

   - Live2D: https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js
   - CubismCore: https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js

3. l2d.js`と`live2dcubismcore.min.js`の名前をそれぞれ変更し、そのファイルを`packages/webgal/src/assets/lib`に置いてから、`packages/webgal/index.html`に移動し、以下の2行をアンコメントする：

   ```
   htmlCopy code<script src="/src/assets/lib/l2d.js"></script>
   <script src="/src/assets/lib/live2dcubismcore.min.js"></script>
   ```

4. `packages/webgal/src/Core/controller/stage/pixi/PixiController.ts`ファイルで、以下の行のコメントを解除します：

   ```
   javascriptCopy codeimport { Live2DModel, SoundManager } from 'pixi-live2d-display';
   public addLive2dFigure(key: string, jsonPath: string, pos: string, motion: string) {
      // ...
   }
   ```

5. `packages/webgal/src/Components/Stage/MainStage/useSetFigure.ts`ファイルで、以下の行のコメントを解除します：

   ```
   javascriptCopy code
   return WebGAL.gameplay.pixiStage?.addLive2dFigure(...args);
   ```

6. これでLive2Dキャラクターモデルを立ち絵として使用することができます。キャラクターモデルのディレクトリ全体を`game/figure`ディレクトリに配置します。キャラクターモデルを表示するには、対応するJSONファイルを呼び出します。

**注意：このプロジェクトの作者は、Live2D SDKのソースコードやモデルを使用していません。Live2Dの使用によって引き起こされる著作権の問題については、二次開発者または制作者が全ての責任を負います！**
