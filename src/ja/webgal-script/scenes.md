# シーンの切り替えと選択肢

ビジュアルノベルゲームでは、シーンの切り替えと選択肢が欠かせないです。WebGAL でも、シーンの切り替えと選択肢をサポートしています。

スクリプトを複数の `txt` ファイルに分割し、簡単なステートメントを使用して現在実行中のシーンを切り替えることができます。

::: warning
シーンジャンプまたはシーンコールの後、シーンはクリアされません。これは、前のシーンの BGM 、立ち絵、背景画像、およびその他のリソースが次のシーンに継承されることも意味します。

WebGAL エディターを使用する場合は、WebGAL エディターは、1つのシーンのみをプレビューするときに前のシーンの効果が表示されないため、特に注意を払う必要があります。そのため、プレビュー効果と実際のゲーム実行効果は異なる場合があります。シーンジャンプの前にシーンクリーンアップを適切に処理することを検討する必要があります。
:::

## シーンジャンプ

`Chapter-1.txt` と `Chapter-2.txt` の 2 つのスクリプトがある場合、`Chapter-1.txt` の実行が終了した後に `Chapter-2.txt` に対応するシーンにジャンプする場合は、次のステートメントを使用します。

``` ws
changeScene:Chapter-2.txt; 
```

例:

```
(Chapter-1.txt) 
......
......
; // 次に実行するのは、Chapter-2.txt の内容です
changeScene:Chapter-2.txt;
...... 
......
(Chapter-2.txt)
......
```

このコマンドを実行すると、新しいシーンに切り替えてゲームを続行します。新しいシーンは、次にマウスをクリックした後に実行されます。

## シーンコール

呼び出したシーンを実行した後、前のシーン(親シーン)に戻る必要がある場合は、`callScene` コマンドを使用してシーンを呼び出す必要があります。

ステートメント:

``` ws
callScene:Chapter-2.txt;
```

例:

``` ws
(Chapter-1.txt)
...... 
......
callScene:Chapter-2.txt;
; // 次に実行するのは、Chapter-2.txt の内容です。
......
......
(Chapter-2.txt) 
......
......
(Chapter-2.txt の実行が完了しました)  
; // 親シーンに戻り、親シーンの実行を続行します。
......
```

## 選択肢

スクリプトに分岐オプションがあり、別のオプションを選択して別の章に進みたい場合は、`choose`を使用します。

選択肢を定義するには `choose text:chapter filename` を使う。 選択項目を区切るには `|` を使います。

以下に例を示す：

``` ws
choose:彼女に声をかける:Chapter-2.txt|家に帰る:Chapter-3.txt;
```

オプションのテキストを、オプションを選択した後に入りたいスクリプトファイルと 1 対 1 で対応させるだけで、選択肢の機能を実現できます。

これにより、ゲームはタイトル画面に戻ります。

## ジャンプラベル

分岐を作成したいが、新しい TXT ファイルを作成するのが面倒だと感じた場合は、以下を読んでみてください。

::: warning
分岐が非常に長い場合は、1 つの TXT の行数が長すぎてはいけないため、この方法を使用することはお勧めしません。
:::

### ラベルを作成する

``` ws
......
jumpLabel:label_1; // label_1 へジャンプ
......
......
label:label_1; // label_1 というラベルを作成する
......
```

つまり、`jumpLabel` は `goto` ステートメントに似ており、スクリプトをシーン内の任意の位置(TXT ファイル)にすぐにジャンプさせることができ、この位置は ラベルを使用して作成する必要があります。

`jumpLabel` を任意のゲートと比較すると、この任意のゲートの終点はラベルが配置されている位置になります。

### 選択肢を作成する

choose コマンドを使用して選択肢を作成することができます。オプションを選択して、対応するラベルの位置にジャンプします。

``` ws
......
choose:テスト 1:label_1|テスト 2:label_2;
label:label_1; // label_1 というラベルを作成する
......
......
jumpLabel:end; // end へジャンプ
label:label_2; // label_2 というラベルを作成する
......
......
jumpLabel:end; // end へジャンプ
label:end; //// end というラベルを作成する
......
```

各分岐の最後に、`jumpLabel` を使用して目的の場所にジャンプする必要があることに注意してください。ゲームは直線的に実行されるため、分岐の最後にジャンプしないと、ゲームは次のように継続して実行されます。

``` ws
......
choose:テスト 1:label_1|テスト 2:label_2;  
label:label_1; // label_1 というラベルを作成する
......
......
label:label_2; // label_2 というラベルを作成する
......
```

In this scenes, if you select `Branch 2`, everything seems to be fine. But if you choose `Branch 1`, you'll be surprised to find that after `Branch 1` finishes executing, `Branch 2` continues. That's because the program went on to the next line in order, and you didn't specify where to jump to at the end of the branch.
