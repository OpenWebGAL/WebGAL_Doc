# Live2Dについて
このエンジンは現在、Live2D立ち絵の使用をサポートしています。Live2D立ち絵を使用する場合は、次の手順に従ってください。

:::info
注意：以下の手順の一部はWebGALソースコードの操作に基づいています。WebGALのソースコードはGitHubで見つけることができます。

[WebGALソースコード](https://github.com/OpenWebGAL/WebGAL)

ソースコードからWebGALをビルドする方法については、[WebGALビルド](developers)を参照してください。
:::

1.  自身でLive2Dのライセンスを取得してください。

2.  https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js と https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js からそれぞれLive2Dとcubismcoreをダウンロードしてください。

3.  それぞれ`live2d.min.js`と`live2dcubismcore.min.js`にリネームし、ファイルを**指定されたディレクトリのいずれか**に配置してください。

    -   カスタムエンジンディレクトリ：`[WebGal]/assets/templates/Derivative_Engine/[あなたのカスタムエンジン]/lib`
    -   ゲームディレクトリ（単一のプロジェクトに適用）：`[WebGal]/public/games/[あなたのゲーム]/lib`
    -   WebGalソースコードディレクトリ：`[WebGalソースコード]/packages/webgal/public/lib`

4.  これで、Live2Dを立ち絵として使用できるようになりました。モデル全体のディレクトリを`game/figure`ディレクトリに配置する必要があります。立ち絵を呼び出す方法は、立ち絵のjsonファイルを呼び出すことです。

**注意：このプロジェクトの作者は、Live2D SDKのソースコードやモデルを一切使用していません。Live2Dの使用に起因する著作権紛争は、すべて二次開発者または制作者が責任を負うものとします。**

## モーションと表情の切り替え

`-motion=motionName`または`-expression=expressionName`パラメータを使用して表情を切り替えることができます。例：

```
changeFigure:xxx.json -motion=angry -expression=angry01;
```
