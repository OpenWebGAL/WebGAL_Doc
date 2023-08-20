# オーディオ

## BGMの使用

BGM を使用する方法は非常に簡単です。BGM ファイル を `bgm` フォルダーに配置し、必要なときに再生するだけです。

``` ws
bgm:サマーシャドウ.mp3;
```

BGM の `-volume` パラメータを設定して、音量を調整できます。
`-volume` が数値で、値が 0 ~ 100 の範囲にある場合に使用できる

``` ws
bgm:サマーシャドウ.mp3 -volume=30;
```

さらに、フェードイン再生に `-enter` パラメータを使用できます。
`-enter` should be a numeric value greater than or equal to 0.

``` ws
bgm:サマーシャドウ.mp3 -enter=3000;
```

最後に、次のステートメントを使用して、BGM をフェードアウトできます。
`-enter` should be a numeric value greater than or equal to 0.

``` ws
bgm:none enter=3000;
```

::: tip
`-volume` と `-enter` はオプションのパラメータです。
`-volume` が使用されていない場合、または使用できない値が使用されている場合は、デフォルト値の 100 が使用されます。
`-enter` が使用されていない場合、または使用できない値が使用されている場合は、デフォルト値の 0 が使用されます。
:::

## Play voice

ご存知のように、ビジュアルノベルゲームの最も魅力的な部分は、優れた吹き替えです。このバージョンでは、セリフにボイスを導入することができます。ボイスファイルを `vocal` フォルダーに入れ、パラメータとしてセリフに追加します。構文の例は次のとおりです。

``` ws
比企谷八幡:今着いたところ。 -V3.ogg;
```

連続セリフの場合は、同じ方法でボイスを導入します。

``` ws
雪之下雪乃:早かったわね。 -V1.ogg;
結構待ったの？ -V2.ogg;
```

ボイスの `-volume` パラメータを設定して、音量を調整できます。
`-volume` が数値で、値が 0 ~ 100 の範囲にある場合に使用できる

``` ws
比企谷八幡:今着いたところ。 -V3.ogg -volume=30;
```

::: tip
これは省略可能なパラメータです。
使用されていない場合、または 0 ~ 100 以外の値が使用されている場合は、デフォルト値の 100 が使用されます。
:::

## 効果音の使用

``` ws
playEffect:xxx.mp3;
```

短い効果音を再生できます。

### 効果音のループ

効果音に ID を指定すると、効果音のループが自動的に有効になります。後で同じ ID を使用して停止します。

``` ws
playEffect:xxx.mp3 -id=xxx; // 効果音のループを有効にする
playEffect:none -id=xxx; // 効果音のループを停止する
```

## Unlock audio for appreciation

Use `unlockBgm` to unlock audio in Audio Appreciation.

``` ws
; // Unlock the bgm and give it a name.
unlockBgm:s_Title.mp3 -name=Smiling-Swinging!!!;
```
