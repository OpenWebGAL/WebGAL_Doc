# アニメーション

## 背景や立ち絵にアニメーションを設定する

`setAnimation:アニメーション名 -target=作用対象;` のステートメントを使用します。

**例：**

``` ws
; // 中央の立ち絵に下から入ってくるアニメーションを設定し、次の行に移動します
setAnimation:enter-from-bottom -target=fig-center -next;
; // 継続的にアニメーションを再生する
setAnimation:shake -target=bg-main -keep;
```

現在、プリセットされたアニメーションは以下の通りです。

| アニメーション効果 | アニメーション名 | 持続時間（ミリ秒） |
| :------------ | :----------------- | :------------- |
| フェードイン | enter | 300 |
| フェードアウト | exit | 300 |
| 左右に一度揺れる | shake | 1000 |
| 下側から入ってくる | enter-from-bottom | 500 |
| 左側から入ってくる | enter-from-left | 500 |
| 右側から入ってくる | enter-from-right | 500 |
| 前後に一度移動する | move-front-and-back | 1000 |

現在、アニメーションの作用対象は以下の通りです。

| target | 実際の対象 |
| :--------- | :------------ |
| fig-left | 左の立ち絵 |
| fig-center | 中央の立ち絵 |
| fig-right | 右の立ち絵 |
| bg-main | 背景 |
| id | idを持つ特定の立ち絵 |

## カスタムアニメーション

### アニメーションを作成する

アニメーションファイルは `game/animation` にあります。独自のカスタムアニメーションを作成することができます。

アニメーションファイルは JSON で記述されており、[リファレンスドキュメント](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/JSON) で JSON 構文を参照することができます。

各アニメーションファイルは **アニメーションシーケンス** を表し、JSON 配列を使用して記述されます。以下は、左側から入ってくるアニメーションを記述した例です。

**例: `enter-from-left.json`**

``` json
[
  {
    "alpha": 0,
    "scale": {
      "x": 1,
      "y": 1
    },
    "position": {
      "x": -50,
      "y": 0
    },
    "rotation": 0,
    "blur": 5,
    "duration": 0
  },
  {
    "alpha": 1,
    "scale": {
      "x": 1,
      "y": 1
    },
    "position": {
      "x": 0,
      "y": 0
    },
    "rotation": 0,
    "blur": 0,
    "duration": 500
  }
]

```

各プロパティの意味は以下の通りです。

| プロパティ名 | 説明 |
| :------- | :--------------------------------- |
| alpha | 透明度、範囲は 0-1 |
| scale | スケール |
| position | 位置オフセット |
| rotation | 回転角度、単位はラジアン |
| blur | ガウスぼかしの半径 |
| brightness  | 輝度                        |
| contrast    | コントラスト比                       |
| saturation  | 彩度                     |
| gamma       | ガンマ                      |
| colorRed    | 赤の量, 範囲は 0-255          |
| colorGreen  | 緑の量, 範囲は 0-255          |
| colorBlue   | 青の量, 範囲は 0-255          |
| duration | このタイムスライスの持続時間、単位はミリ秒 (ms) |
| brightness | 明度調整 |
| contrast | コントラスト調整 |
| saturation | 彩度調整 |
| gamma | ガンマ値調整 |
| colorRed | 赤色チャンネル調整（0-255） |
| colorGreen | 緑色チャンネル調整（0-255） |
| colorBlue | 青色チャンネル調整（0-255） |
| bevel | ベベル効果の強度 |
| bevelThickness | ベベルの厚さ |
| bevelRotation | ベベルの回転 |
| bevelSoftness | ベベルの柔らかさ |
| bevelRed | ベベルの赤色チャンネル（0-255） |
| bevelGreen | ベベルの緑色チャンネル（0-255） |
| bevelBlue | ベベルの青色チャンネル（0-255） |
| bloom | 発光効果 |
| bloomBrightness | 発光の明度 |
| bloomBlur | 発光のぼかし |
| bloomThreshold | 発光の閾値 |
| shockwaveFilter | 衝撃波効果 |
| radiusAlphaFilter | 放射状透明度 |
| oldFilm | オールドフィルム効果、0 はオフ、1 はオン |
| dotFilm | ドット状のフィルム効果、0 はオフ、1 はオン |
| reflectionFilm | 反射フィルム効果、0 はオフ、1 はオン |
| glitchFilm | 故障フィルム効果、0 はオフ、1 はオン |
| rgbFilm | RGB フィルム効果、0 はオフ、1 はオン |
| godrayFilm | 光輝効果、0 はオフ、1 はオン |

次に、`animationTable` にカスタムアニメーションのファイル名（拡張子は不要）を追加する必要があります。

`animationTable.json` ファイルで：

``` json
["enter-from-left","enter-from-bottom","enter-from-right"]
```

その後、スクリプトで呼び出すことができます。

``` ws
setAnimation:enter-from-left -target=fig-left -next;
```

### 一部のプロパティを省略する

アニメーションで一部のプロパティだけを操作する必要がある場合は、アニメーションに参加しない他のプロパティを空欄にして、デフォルトのままにすることができます。

**例：`enter.json`**

``` json
[
  {
    "alpha": 0,
    "duration": 0
  },
  {
    "alpha": 1,
    "duration": 300
  }
]

```

### 変換を使用する

持続時間が 0 ミリ秒で、タイムスライスが 1 つしかないアニメーションは、変換です。

**例：**

``` json
[
  {
    "alpha": 0,
    "duration": 0
  }
]
```

## 登場・退場のエフェクトを設定する

WebGAL のデフォルトのフェードイン・フェードアウトの登場・退場エフェクトを上書きして、独自のエフェクトに置き換えることもできます。例えば、以下のようにします。

```
setTransition: -target=fig-center -enter=enter-from-bottom -exit=exit;
```

注意：立ち絵や背景が設定されている場合にのみ、登場・退場エフェクトを設定することができます。登場・退場エフェクトを設定するコードは、立ち絵や背景の設定コードの **後** に記述します。また、登場・退場エフェクトを設定するステートメントは、立ち絵や背景を設定するステートメントの **直後** に連続して実行する必要があります。そうしないと、正しく適用されません。

::: tip
なぜそうする必要があるのでしょうか？

立ち絵や背景を設定すると、立ち絵や背景にデフォルトの登場・退場アニメーションが設定されます。立ち絵や背景を設定した後、立ち絵や背景はすぐにステージに表示されるのではなく、登場・退場エフェクトの設定を待ちます。

立ち絵や背景を設定した後、すぐに登場・退場エフェクトを設定するステートメントを実行すると、デフォルトの登場・退場アニメーションを上書きして、登場・退場エフェクトをカスタマイズすることができます。設定しない場合は、登場・退場時にデフォルトのアニメーションが実行されます。

立ち絵や背景を設定した後、すぐに登場・退場エフェクトを設定せずに、画像がすでに登場してから登場アニメーションを上書きしても意味がありません。しかし、この時点で画像がまだ退場していない場合は、設定した退場アニメーションに意味があります。立ち絵や背景が退場する際に正しく適用されます。
:::

## 高度なアニメーション機能

### 一時的なアニメーション (setTempAnimation)

JSON形式でアニメーション効果を定義して、一時的なカスタムアニメーションを作成・実行します：

``` ws
setTempAnimation:[{"alpha":0,"duration":0},{"alpha":1,"duration":300}] -target=fig-center;
```

### 変換アニメーション (setTransform)

現在の状態から目標状態への変換アニメーションを作成します：

``` ws
setTransform:{"position":{"x":100,"y":0},"scale":{"x":1.2,"y":1.2}} -duration=1000 -ease=easeInOut -target=fig-center;
```

サポートされるパラメータ：
- `duration` - アニメーションの持続時間（ミリ秒）
- `ease` - イージング関数名（easeInOut、easeIn、easeOut など）
- `target` - 作用対象
- `keep` - 最終状態を維持するかどうか

### 複雑なアニメーション (setComplexAnimation)

事前に登録された複雑なアニメーション関数を実行します：

``` ws
setComplexAnimation:customEffect -duration=2000 -target=bg-main;
```

### アニメーションパラメータの説明

#### 共通パラメータ
- `target` - 作用対象（fig-left、fig-center、fig-right、bg-main または カスタム ID）
- `writeDefault` - デフォルト値を書き込むかどうか（オプション、デフォルト false）
- `keep` - アニメーションを継続するか最終状態を維持するかどうか（オプション、デフォルト false）

#### イージング関数
WebGALは複数のイージング関数をサポートしています：
- `easeIn` - ゆっくり開始
- `easeOut` - ゆっくり終了
- `easeInOut` - ゆっくり開始・終了
- その他多くのイージング関数

### アニメーションのベストプラクティス

1. **パフォーマンスの考慮**：同時に実行する複雑なアニメーションが多すぎないよう注意
2. **ユーザーエクスペリエンス**：アニメーションがテキストの読み取りを妨げないよう確認
3. **組み合わせ使用**：異なるタイプのアニメーションを適切に組み合わせて、より豊かな効果を作成
4. **デバッグのコツ**：テスト時には短い持続時間を使用し、効果を確認した後に調整