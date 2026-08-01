# 変換・エフェクトリファレンス

`transform` はステージオブジェクトの変換・エフェクト属性で、位置、回転、拡大縮小、各種フィルター属性を含みます。形式は次の例のようになります。

``` json
{"position":{"x":0,"y":0},"rotation":0,"scale":{"x":1,"y":1},"alpha":1,"blur":0,"colorRed":255,"colorGreen":255,"colorBlue":255}
```

通常、すべての属性を完全に書く必要はありません。変更したい属性だけを書けば、未変更の属性は状況に応じて既存値を継承するか、デフォルト値を使用します。

``` webgal
setTransform:{"position":{"x":100},"rotation":45} -target=aaa -duration=500;
; この文は既存の変換・エフェクトを継承し、その上でぼかしフィルターの値を変更します
setTransform:{"blur":20} -target=aaa -duration=500;
; この文は saturation 以外のすべての属性をデフォルト値にリセットします
setTransform:{"saturation":0} -target=aaa -duration=500 -writeDefault;
```

フィルター属性については、そのフィルターのすべての値がデフォルト値になったときだけ、フィルターが完全に無効になります。そうでない場合、フィルターはオブジェクトが退場するまで存在し続け、不要なパフォーマンスコストにつながる可能性があります。そのため、必要に応じて関連属性を明示的にデフォルト値へ戻し、フィルターを無効化することを推奨します。

``` webgal
changeBg:bg.png -transform={"brightness":0.5,"blur":10} -next;
changeFigure:1/open_eyes.png -id=aaa;
;
; 色調整、ベベル、ブルームフィルターを有効化し、パラメータを調整する
setTempAnimation:[{"bloomBlur":20,"bloomThreshold":0.8,"duration":0},{"brightness":0.5,"bevel":1,"bevelThickness":20,"bevelRotation":45,"bloom":1,"bloomBlur":20,"bloomThreshold":0.8,"duration":500}] -target=aaa;
; ブルーム効果の一部をオフにするが、bloomBlur と bloomThreshold がデフォルトではないためブルームフィルターは残る
setTransform:{"bloom":0} -target=aaa -duration=500;
; ブルームフィルターの全パラメータをデフォルト値に戻し、ブルームフィルターを無効化する
setTransform:{"bloomBlur":0,"bloomThreshold":0} -target=aaa -duration=500;
```

現在、フィルターは次の順序で画像に適用されます。
- 反射フィルター
- 放射状透明グラデーションフィルター
- 衝撃波フィルター
- ぼかしフィルター
- RGB 分離フィルター
- ドットフィルター
- グリッチフィルター
- オールドフィルムフィルター
- ブルームフィルター
- ゴッドレイフィルター
- ベベルフィルター
- 色調整フィルター
- 元画像

## 基本変換

### position
- デフォルト値: `{"x":0,"y":0}`
- 単位: キャンバスピクセル

位置です。x と y 属性を変更すると、ステージ内のオブジェクト座標を変更できます。

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"position":{"x":500,"y":-50}};
setTransform:{"position":{"x":-200,"y":50}} -target=aaa -duration=500;
```

### rotation
- デフォルト値: 0
- 単位: ラジアン

回転です。オブジェクトの回転ラジアンを変更します。時計回りが正方向です。

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"rotation":-3.14};
setTransform:{"rotation":1.57} -target=aaa -duration=500;
```

### scale
- デフォルト値: `{"x":1,"y":1}`

拡大縮小です。x と y 属性を変更すると、オブジェクトの拡大率を変更できます。

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"scale":{"x":0.5,"y":0.5}};
setTransform:{"scale":{"x":2,"y":2}} -target=aaa -duration=500;
```

## 基本エフェクト

### alpha
- デフォルト値: 1
- 範囲: 0 から 1（完全透明 -> 完全不透明）

透明度です。

### blur
- デフォルト値: 0
- 範囲: 0 から正の無限大
- 単位: キャンバスピクセル

ぼかしです。

## 色調整フィルター

### brightness / contrast / saturation / gamma
- デフォルト値: 1

明るさ、コントラスト、彩度、ガンマ値です。

### colorRed / colorGreen / colorBlue
- デフォルト値: 255
- 範囲: 0 から 255

色調の赤、緑、青成分です。

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"brightness":0.3,"colorRed":128};
setTransform:{"contrast":2,"colorBlue":64} -target=aaa -duration=500;
```

## ブルームフィルター

### bloom
- デフォルト値: 0
- 範囲: 0 から正の無限大

ブルームの強度です。

### bloomBrightness
- デフォルト値: 1

ブルームの明るさです。色調整フィルターの `brightness` と異なり、このパラメータはブルーム重ね合わせレイヤーの明るさには影響しません。

### bloomBlur
- デフォルト値: 0
- 範囲: 0 から正の無限大
- 単位: キャンバスピクセル

ブルームのぼかし量です。`bloom` と `bloomBrightness` がどちらもデフォルト値の場合、この属性だけを調整しても見た目の違いはありません。

### bloomThreshold
- デフォルト値: 0
- 範囲: 0 から 1（全体ブルーム -> 最も明るい部分のみブルーム）

ブルームのしきい値です。値を上げると、画像内の明るい部分だけにブルーム効果が発生します。

``` webgal
changeFigure:1/open_eyes.png -id=aaa -transform={"bloom":1,"bloomBlur":10,"bloomThreshold":0};
setTransform:{"bloom":1,"bloomBlur":10,"bloomThreshold":0.8} -target=aaa -duration=500;
```

## ベベルフィルター

### bevel
- デフォルト値: 0
- 範囲: 0 から 1（完全透明 -> 完全不透明）

ベベルの透明度です。

### bevelThickness
- デフォルト値: 0
- 範囲: 0 から正の無限大
- 単位: キャンバスピクセル

ベベルの厚さです。

### bevelRed / bevelGreen / bevelBlue
- デフォルト値: 255
- 範囲: 0 から 255

ベベル色の赤、緑、青成分です。

## その他フィルター

### oldFilm / dotFilm / rgbFilm / glitchFilm / godrayFilm / reflectionFilm
- デフォルト値: 0
- 範囲: 0 から 1（オフ -> オン）

オールドフィルム、ドット、RGB 分離、グリッチ、ゴッドレイ、反射フィルターのスイッチです。

### shockwave
- デフォルト値: 0

衝撃波の位相です。

### radiusAlpha
- デフォルト値: 0

放射状透明グラデーションの半径です。
