# アニメーションリファレンス

WebGAL は連続した[変換・エフェクト](../others/transform-reference.md)を設定することで、多段アニメーションを実現できます。

変換・エフェクトオブジェクトの例:

``` json
{
  "position": {
    "x": -500,
    "y": 20
  },
  "rotation": 0.3,
  "blur": 10
}
```

アニメーション片オブジェクトは、変換・エフェクトオブジェクトに持続時間などの追加属性を持たせたものです。

``` json
{
  "position": {
    "x": -500,
    "y": 20
  },
  "rotation": 0.3,
  "blur": 10,
  "duration": 500,
  "ease": "easeInOut"
}
```

複数のアニメーション片オブジェクトで 1 つのアニメーションを構成できます。

``` json
[
  {
    "duration": 0
  },
  {
    "position": {
      "x": -500,
      "y": 20
    },
    "duration": 500
  },
  {
    "rotation": 0.3,
    "duration": 300
  },
  {
    "blur": 10,
    "duration": 200
  }
]
```

`duration` などの必須属性を除き、アニメーション片オブジェクトの多くの属性は省略できます。WebGAL は状況に応じてデフォルト値または既存値で補完します。

:::info
ここで継承される「既存値」とは、アニメーション実行前の対象オブジェクトの変換・エフェクトスナップショットであり、前のアニメーション片の終了状態ではありません。
:::

``` webgal
; 立ち絵オブジェクトの初期座標は (-500,0)
changeFigure:character_a/normal.png -id=aaa -transform={"position":{"x":-500,"y":0}};
; 多段アニメーションの座標は順に:
; (-500,0) -> (500,0) -> (-500,20)
setTempAnimation:[{"duration":0},{"position":{"x":500},"duration":500},{"position":{"y":20},"duration":500}] -target=aaa;
```

アニメーション内の最初の片は開始状態です。通常は duration を 0 に設定します。0 より大きくしてもアニメーション効果は発生しません。
最初の片にも変換・エフェクト属性を設定でき、その場合アニメーション開始時に指定状態へ直接ジャンプします。

``` webgal
; 立ち絵オブジェクトの初期座標は (0,0)
changeFigure:character_a/normal.png -id=aaa;
; 左から右へ移動し、アニメーション開始時に直接左側へジャンプします
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000}] -target=aaa;
```

## パラメータ

### duration
- 数値
- 単位: ミリ秒
- 必須

各アニメーション片の持続時間です。

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000}] -target=aaa;
```

<!-- @include: ../arguments/ease.md -->

``` webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000,"ease":"bounceOut"}] -target=aaa;
```

## 新しいアニメーション形式（Animation v2）

::: info
新しいアニメーション形式は v4.6.6 から利用できます。上で説明したキーフレーム配列の書き方も引き続き使用でき、動作も変わりません。
:::

新しい形式のアニメーションは JSON オブジェクトで、キーフレームを `keyframes` に記述します。

``` json
{
  "version": 2,
  "keyframes": [
    { "time": 250, "position": { "x": -100 }, "ease": "easeOut" },
    { "time": 750, "position": { "x": 100 } },
    { "time": 1000, "position": { "x": 0 }, "ease": "easeIn" }
  ]
}
```

このアニメーションは、オブジェクトを**現在の位置**を中心に左右へ 1 回揺らし、元の位置に戻します。オブジェクトがどこにあっても、その位置を中心に揺れます。

| フィールド | 説明 |
| :-- | :-- |
| `version` | 常に `2`。省略可能 |
| `keyframes` | キーフレームの配列 |
| `relative` | 相対アニメーションにするかどうか。デフォルトは `true` |
| `inherit` | キーフレーム継承を有効にするかどうか。デフォルトは `true` |
| `relativeCalc` | プロパティごとに相対値の計算方法を上書きします |

### キーフレーム

キーフレームは、[変換・エフェクト](../others/transform-reference.md)オブジェクトに次のプロパティを加えたものです。

- `time`：アニメーション内でのキーフレームの時刻。単位はミリ秒で、アニメーションの開始から数えます。アニメーション全体の長さは最大の `time` です。
- `ease`：前のキーフレームからこのキーフレームに到達するまでのイージング。デフォルトは `easeInOut` です。指定できる値は [ease](../arguments/ease.md) を参照してください。

`time` は旧形式の `duration` とは異なります。`duration` は前のキーフレームからの長さですが、`time` はアニメーションの開始からの時刻です。キーフレームは配列内の順序に関係なく `time` の順に並べ替えられます。`time` が同じ複数のキーフレームはジャンプになり、配列で前にあるものがジャンプ前、後にあるものがジャンプ後の状態です。

### 相対アニメーション

`relative` が `true` の場合、キーフレームの値はオブジェクトの現在の状態を基準に計算されます。`false` の場合、キーフレームの値がそのまま最終的な値になります。

各プロパティのデフォルトの計算方法：

- 現在の値に加算：`position`、`rotation`、`blur`、`bevel`、`bevelThickness`、`bevelRotation`、`bevelSoftness`、`bloom`、`bloomBlur`
- 現在の値に乗算（現在の値が 0 の場合は 1 として計算）：`scale`
- キーフレームの値をそのまま使用：その他のプロパティ（`alpha`、`brightness`、色、各種フィルターなど）

例えば `{"time":500,"position":{"x":100}}` は、オブジェクトを現在の位置から右へ 100 移動します。相対アニメーションは繰り返すと累積し、2 回実行すると右へ 200 移動します。

文で `-transformFrom=default` を使用した場合、「現在の状態」の代わりにデフォルトの変換が基準になります。

`relativeCalc` を使うと、プロパティの計算方法を変更できます。指定できる値：

| 値 | 計算方法 |
| :-- | :-- |
| `add` | 現在の値にキーフレームの値を加算 |
| `multiply` | 現在の値にキーフレームの値を乗算 |
| `multiplyWithZeroFallback` | `multiply` と同じですが、現在の値が 0 の場合は 1 として計算 |
| `absolute` | キーフレームの値をそのまま使用 |

例えば、次のアニメーションは、常に 1 までフェードインするのではなく、透明な状態から現在の不透明度までフェードインします。

``` json
{
  "version": 2,
  "relativeCalc": { "alpha": "multiplyWithZeroFallback" },
  "keyframes": [
    { "time": 0, "alpha": 0 },
    { "time": 300, "alpha": 1 }
  ]
}
```

`position`、`scale` の設定は両方の軸に適用されます。

### キーフレーム継承

`inherit` が `true` の場合、各プロパティは個別に処理されます。

- そのプロパティを記述した最初のキーフレームより前は、現在の状態からそのキーフレームへ遷移します。
- そのプロパティを記述した 2 つのキーフレームの間は、通常どおり補間されます。
- そのプロパティを記述した最後のキーフレームより後は、そのキーフレームの値を保ちます。
- アニメーションのどこにも記述されていないプロパティは変化しません。

そのため、各キーフレームにはその時点で変化するプロパティだけを書けば十分です。

`inherit` が `false` の場合、キーフレームに記述されていないプロパティは現在の状態の値になります。
