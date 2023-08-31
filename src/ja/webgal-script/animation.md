# アニメーション効果

## 背景画像または立ち絵にアニメーションを設定する

ステートメントの形式は次のとおりです。 

`setAnimation:アニメーション -target=オブジェクト;`

**例:**

``` ws
; // 真ん中の立ち絵に下から入るアニメーションを設定し、次のステートメントに進む
setAnimation:enter-from-bottom -target=fig-center -next;
```

## 事前に作成されたアニメーション

| アニメーション             | ファイル                  | 継続時間 (ミリ秒) |
| :------------------------ | :----------------------- | :--------------- |
| フェードイン               | enter.json               | 300              |
| フェードアウト             | exit.json                | 300              |
| 左右に振る                 | shake.json               | 1000             |
| 下から入る                 | enter-from-bottom.json   | 500              |
| 左から入る                 | enter-from-right.json    | 500              |
| 右から入る                 | enter-from-left.json     | 500              |
| 1回前後に動かす            | move-front-and-back.json | 1000             |

現在、アニメーション化できるオブジェクトは次のとおりです。

| オブジェクト     | 実際のオブジェクト    |
| :--------- | :----------------------- |
| fig-left   | 左の立ち絵                |
| fig-center | 真ん中の立ち絵            |
| fig-right  | 右の立ち絵                |
| bg-main    | 背景                     |
|            | ID 付き立ち絵             |

## カスタムアニメーション

アニメーションファイルは `game/animation` にあります。独自のカスタムアニメーションを作成することができます。

アニメーションファイルは JSON を使用して記述します。JSON 構文を知りたい方は [こちら](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) 。

各アニメーションファイルは、JSON 配列を使用して記述された **アニメーションシーケンス** を表します。サンプルとして、「左から入る」のアニメーションを次に示します。

**例: `enter-from-left.json`**

``` json
[
  {
    "alpha": 0, 
    "scale": {
      "x": 1,
      "y": 1
    },
    "pivot": {
      "x": 0.5,
      "y": 0.5
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
    "pivot": {
      "x": 0.5,
      "y": 0.5
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

各アトリビュートの意味は次のとおりです。

| アトリビュート | 意味                                               |
| :------------ | :------------------------------------------------- |
| alpha         | 透明度、範囲 0 ～ 1                                 |
| scale         | ズーム                                              |
| pivot         | アンカーポイント                                    |
| position      | 位置オフセット                                      |
| rotation      | 回転角度                                            |
| blur          | ガススぼかし                                        |
| duration      | 継続時間 (ミリ秒 (ms) 単位)                          |

次に、カスタムアニメーションのファイル名(拡張子なし)を `animationTable` に追加する必要があります。

ファイル `animationTable.json` で:

``` json
["enter-from-left","enter-from-bottom","enter-from-right"]
```

次に、スクリプトでそれを呼び出すことができます。

``` ws
setAnimation:enter-from-left -target=fig-left -next;
```

### 一部の属性を省略する

アニメーションで一部のアトリビュートのみを操作する必要がある場合は、ほかのアトリビュートを空のままにして、デフォルトのままにすることができます。

**例:`enter.json`**

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

### 変換の使用

継続時間が 0 ミリ秒で、タイムスライスが 1 つだけのアニメーションは変換です。

**例:**

``` json
[
  {
    "alpha": 0, 
    "duration": 0
  }
]
```
