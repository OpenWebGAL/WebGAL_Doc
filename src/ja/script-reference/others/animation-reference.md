# アニメーションリファレンス

WebGAL は連続した[変換・エフェクト](../others/transform-reference.md)を設定することで、多段アニメーションを実現できます。

変換・エフェクトオブジェクトの例:

```json
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

```json
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

```json
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

```webgal
; 立ち絵オブジェクトの初期座標は (-500,0)
changeFigure:character_a/normal.png -id=aaa -transform={"position":{"x":-500,"y":0}};
; 多段アニメーションの座標は順に:
; (-500,0) -> (500,0) -> (-500,20)
setTempAnimation:[{"duration":0},{"position":{"x":500},"duration":500},{"position":{"y":20},"duration":500}] -target=aaa;
```

アニメーション内の最初の片は開始状態です。通常は duration を 0 に設定します。0 より大きくしてもアニメーション効果は発生しません。
最初の片にも変換・エフェクト属性を設定でき、その場合アニメーション開始時に指定状態へ直接ジャンプします。

```webgal
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

```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000}] -target=aaa;
```

<!-- @include: ../arguments/ease.md -->

```webgal
changeFigure:1/open_eyes.png -id=aaa;
setTempAnimation:[{"position":{"x":-500},"duration":0},{"position":{"x":500},"duration":1000,"ease":"bounceOut"}] -target=aaa;
```
