# jumpLabel

指定したラベルへジャンプします。
詳しくは[ラベルジャンプ](../../webgal-script/scenes.md#ラベルジャンプ)を参照してください。

## ステートメント内容

ジャンプ先のラベル名を指定します。

``` webgal
label:think;
;
キャラA:彼女が好きだったのはたしか……;
choose:クマのぬいぐるみ:wrong|ウサギのぬいぐるみ:correct;
;
label:wrong;
キャラA:違う気がする。もう一度考えよう。;
jumpLabel:think;
;
label:correct;
キャラA:そうだ、ウサギのぬいぐるみだ。;
```

### 条件付きジャンプ

`jumpLabel` は共通パラメータ `-when` と組み合わせて使用できます。条件を満たさない場合、この文はスキップされ、物語は次の文を実行します。

``` webgal
setVar:score=2;
jumpLabel:scoreHigh -when=score>1;
キャラA:点数が足りない場合はここが表示されます。;
jumpLabel:scoreEnd;
;
label:scoreHigh;
キャラA:score が 1 より大きいため、ジャンプに成功しました。;
;
label:scoreEnd;
```

条件式の書き方は [(global)](global.md#when) を参照してください。
