# playEffect

効果音の再生、置き換え、停止を行う 3 in 1 コマンドです。

## ステートメント内容

効果音ファイルのパスを指定します。ファイルパスが空、または `none` の場合は効果音の再生を停止します。
詳しくは[効果音を再生する](../../webgal-script/audio.md#効果音を再生する)を参照してください。

```webgal
; 効果音が存在しない場合、この文は効果音を再生します。
playEffect:rain.wav;
; すでに効果音が存在する場合、この文は効果音を置き換えます。
playEffect:heavy_rain.wav;
; none を指定するか空にした場合、この文は効果音を停止します。
playEffect:none;
```

## パラメータ

### id
- 文字列

効果音に id を設定すると、効果音をループ再生できます。
異なる id の効果音と id なしの効果音は重ねて再生できます。

```webgal
; 足音をループ再生
playEffect:footsteps.wav -id=footsteps;
; 雨音をループ再生
playEffect:rain.wav -id=rain;
; 雷鳴を一度だけ再生
playEffect:thunder.wav;
```

### volume
- 数値
- 範囲: 0 から 100
- デフォルト値: 100

効果音の音量パーセンテージを設定します。0 はミュート、100 は最大音量です。

```webgal
playEffect:rain.wav -id=rain -volume=60;
```
