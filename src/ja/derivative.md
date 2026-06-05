# カスタムエンジンを使用する方法

WebGAL Terre 4.6 以降では、カスタムエンジンはインストールディレクトリ内の旧 `assets/templates/Derivative_Engine` ではなく、ユーザーデータディレクトリ内の `derivative-engines` に配置します。

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

次に、WebGAL Terre の設定からユーザーデータディレクトリを開き、このようなディレクトリを `derivative-engines` に配置して、次のようなファイル構造にします（そうしないと、正常にゲームを作成できません）。

```
derivative-engines
└── name
    ├── assets
    ├── game
    ├── icons
    ├── index.html
    ├── manifest.json
    └── webgal-serviceworker.js

```

portable モードを使用している場合、ユーザーデータディレクトリは WebGAL Terre インストールディレクトリ内の `data` フォルダーです。この場合は `data/derivative-engines/name` に配置してください。

WebGAL Terre を起動すると、ゲームを作成するときにカスタムエンジンを使用してゲームを作成できるようになります。
