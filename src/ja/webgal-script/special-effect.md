# 特殊効果

現在、WebGAL の特殊効果システムは PixiJS によって実装されています。

## 特殊効果の使用

### Pixiの初期化

`pixiInit` 初期化 Pixi。

``` ws
pixiInit; 
```

::: warning
特殊効果を追加したい場合は、まずこのコマンドを実行して Pixi を初期化する必要があります。

追加した特殊効果をクリアしたい場合も、このコマンドを実行してください。
:::

### 特殊効果の追加

`pixiPerform` 追加特殊効果

``` ws
pixiPerform:rain; // 雨の特殊効果を追加する
```

注意: 特殊効果が追加した後、初期化されていない場合は継続して実行されます。

### 事前に作成された特殊効果

| Effect | Command                   |
| :----- | :------------------------ |
| 雨     | pixiPerform:rain;         |
| 雪     | pixiPerform:snow;         |
| 樱花 | pixiPerform:cherryBlossoms; |

### 重ね合わせた特殊効果

2 つ以上の特殊効果を重ね合わせたい場合は、`pixiInit` コマンドを使用せずに異なる特殊効果を重ね合わせることができます。

``` ws
pixiPerform:rain;
pixiPerform:snow;
```

### 特殊効果のクリア

`pixiInit` を使用して初期化すると、追加したすべての特殊効果をクリアすることができます。

## カスタム特殊効果の追加

ソースコードをダウンロードし、`/Core/gameScripts/pixiPerformScripts` に移動し、カスタム特殊効果のために `PIXI.Container` を作成します。

``` ts
// 現在の Pixi.Container の特殊効果を取得する
const effectsContainer = RUNTIME_GAMEPLAY.pixiStage!.effectsContainer!;
// Pixi アプリのインターフェースを呼び出すと、画面サイズなどの確認に役立つ場合があります
const app = RUNTIME_GAMEPLAY.pixiStage!.currentApp!;
// カスタム特殊効果のコンテナを作成する
const container = new PIXI.Container();
// カスタム特殊効果を追加する
effectsContainer.addChild(container);
```

テクスチャファイルは `game/tex` フォルダーに配置する必要があります。

次に、ファイルの先頭でカスタム特殊効果の登録メソッドを導入します。

ファイルの末尾で、登録メソッドを使用して、カスタム特殊効果を登録します。最初のパラメータは特殊効果名で、2 番目のパラメータは特殊効果を呼び出すメソッドです。

``` ts
import {registerPerform} from '../pixiPerformManager';

// 特殊効果の定義
function myPerform(parameters) {
  // ...
}

// 登録
registerPerform('myPerform', () => myPerform(parameters)); 
```

最後に、カスタム特殊効果をサポートする WebGAL をコンパイルします

``` shell
yarn run build;
```

これで、スクリプトでカスタム特殊効果を呼び出すことができます。

``` ws
pixiPerform:myPerform;
```
