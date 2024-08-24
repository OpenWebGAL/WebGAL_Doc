# Live2Dについて
本エンジンはlive2D立ち絵の使用をサポートするようになりました。live2D立ち絵を使用する場合は、以下の手順に従ってください。

:::info
注意：以下の手順はすべてWebGALのソースコードに基づいて操作する必要があります。WebGALのソースコードはGitHubにあります。

[WebGAL ソースコード](https://github.com/OpenWebGAL/WebGAL)
:::

1、Live2Dのライセンスを自分で取得する

2、https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.jsとhttps://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.jsから、それぞれLive2DとCubismCoreをダウンロードする

3、それぞれ「live2d.min.js」と「live2dcubismcore.min.js」に名前を変更し、ファイルを「packages/webgal/public/lib」に配置し、「packages/webgal/index.html」に移動して、次の2行のコメントを外して次のように変更する。
```html
<script src="lib/live2d.min.js" ></script>
<script src="lib/live2dcubismcore.min.js"></script>
```
4、「packages/webgal/src/Core/controller/stage/pixi/PixiController.ts」に移動して、「import { Live2DModel, SoundManager } from 'pixi-live2d-display';」と「public addLive2dFigure(key: string, jsonPath: string, pos: string, motion: string) {...... この関数をすべてコメント解除する}」のコメントを外す

注意：IDEがインポートされていない変数があると警告する場合は、警告に従ってインポートしてください。

5、「packages/webgal/src/Components/Stage/MainStage/useSetFigure.ts」に移動して、「return WebGAL.gameplay.pixiStage?.addLive2dFigure(...args);」のコメントを外す

6、これでLive2Dを立ち絵として使用できるようになりました。モデルのディレクトリ全体を「game/figure」ディレクトリに配置する必要があります。立ち絵を呼び出す方法は、立ち絵のJSONファイルを使用することです。

7、プロダクションビルドが必要な場合、または WebGAL Terre で使用する場合は、`yarn build` コマンドを実行して WebGAL をビルドしてください。完了したら、[カスタムエンジンを使用する方法](derivative) を参照して、変更したエンジンを使用してください。

**注意：このプロジェクトの作者は、Live2D SDKのソースコードやモデルを一切使用していません。Live2Dの使用によって生じた著作権上の紛争は、二次開発者または制作者がすべて責任を負うものとします！**

## モーションと表情を切り替える

`-motion=motionName`または`-expression=expressionName`パラメータを使用して、表情を切り替えることができます。例えば：

```
changeFigure:xxx.json -motion=angry -expression=angry01;
```
