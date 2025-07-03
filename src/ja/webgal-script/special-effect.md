# エフェクト

現在、WebGAL のエフェクトシステムは PixiJS で実装されています。

## エフェクトを使用する

### Pixi を初期化する

`pixiInit` を使用して Pixi を初期化します。

``` ws
pixiInit;
```

::: warning
エフェクトを使用する場合は、このコマンドを最初に実行して Pixi を初期化する必要があります。

すでに適用されているエフェクトを消去したい場合は、この構文を使用してエフェクトをクリアできます。
:::

### エフェクトを追加する

`pixiPerform` を使用してエフェクトを追加します。

``` ws
pixiPerform:rain; // 雨のエフェクトを追加する
```

注意：エフェクトを適用した後、再度初期化しないと、エフェクトは常に実行されます。

### プリセットエフェクト一覧

| エフェクト | コマンド                        |
| :--- | :-------------------------- |
| 雨 | pixiPerform:rain;           |
| 雪 | pixiPerform:snow;           |
| 大雪 | pixiPerform:heavySnow;    |
| 桜 | pixiPerform:cherryBlossoms; |

### エフェクトを重ねる

2 つ以上エフェクトを重ねたい場合は、`pixiInit` コマンドを使用せずに異なるエフェクトを重ねることができます。

``` ws
pixiPerform:rain;
pixiPerform:snow;
```

### 重ねたエフェクトをクリアする

`pixiInit` を使用して初期化します。これにより、適用されているすべてエフェクトを消去できます。

## カスタムエフェクトを追加する

ソースコードをダウンロードして `/Core/gameScripts/pixiPerformScripts/` に移動し、必要なエフェクトを作成するために `PIXI.Container` を新規作成します。

エフェクトコンテナは前景コンテナと背景コンテナに分割され、ここでは前景コンテナを例としています。

``` ts
// 現在の Pixi エフェクト Container を取得する
const effectsContainer = WebGAL.gameplay.pixiStage!.foregroundEffectsContainer!;
// Pixi App の呼び出し方法で、画面のサイズなどを決定するのに役立ちます
const app = RUNTIME_GAMEPLAY.pixiStage!.currentApp!;
// カスタムエフェクトのコンテナを作成する
const container = new PIXI.Container();
// エフェクトを追加する
effectsContainer.addChild(container);
```

テクスチャ ファイルは `game/tex` ディレクトリに配置できます。

次に、ファイルの先頭で `エフェクト登録メソッド` をインポートして、新しく記述したエフェクトを登録します。

ファイルの末尾で登録したエフェクトを使用します。最初のパラメータはエフェクト名、2 番目のパラメータはエフェクトを呼び出すメソッドです。

``` ts
import {registerPerform} from '../pixiPerformManager';

// これがエフェクトだと仮定します
function myPerform() {
    // ...
}

// 登録する
registerPerform('myPerform', { fg: () => myPerform(パラメータ) });
```

最後に、カスタムエフェクトをサポートする WebGAL をコンパイルします。

``` shell
yarn run build;
```

これで、スクリプトでエフェクトを呼び出すことができます。

``` ws
pixiPerform:myPerform;
```