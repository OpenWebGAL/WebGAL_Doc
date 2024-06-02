# カスタムエンジンを使用する方法

## カスタムエンジンのファイル構造

カスタムエンジンは通常、圧縮ファイル形式で配布されます。解凍すると、カスタムエンジンを名前とするディレクトリが得られ、ディレクトリ構造はおおよそ次のようになります（name は WebGAL Terre で表示されるカスタムエンジンの名前です）。

```
name
├── assets
├── game
├── icons
├── index.html
├── manifest.json
└── webgal-serviceworker.js
```

次に、このようなディレクトリを WebGAL Terre の assets/templates/Derivative_Engine に配置し、次のようなファイル構造にします（そうしないと、正常にゲームを作成できません）。

```
Derivative_Engine
└── name
    ├── assets
    ├── game
    ├── icons
    ├── index.html
    ├── manifest.json
    └── webgal-serviceworker.js

```

WebGAL Terre を起動すると、ゲームを作成するときにカスタムエンジンを使用してゲームを作成できるようになります。