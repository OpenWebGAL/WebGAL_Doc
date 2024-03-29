# シーンと分岐

ビジュアルノベルでは、章、シーン、分岐の選択は欠かせないため、WebGALでもシーンのジャンプと分岐の選択がサポートされています。

スクリプトを複数のtxtドキュメントに分割し、簡単なステートメントを使用して現在実行中のスクリプトを切り替えることができます。

::: warning
シーンのジャンプ、分岐の選択、またはシーンの呼び出しの後、ステージはクリアされません。これは、前のシーンで適用された背景音楽、立ち絵、背景画像などの効果が次のシーンに継承されることを意味します。

WebGAL Terreビジュアルエディタを使用している場合は、エディタは単一のシーンをプレビューするときに前のシーンがどのような効果をもたらすかを考慮しないため、特に注意する必要があります。そのため、プレビュー効果と実際のゲームの実行効果が異なる場合があります。シーンのジャンプ前のステージのクリーンアップ作業を適切に処理することを検討する必要があります。
:::

## シーンのジャンプ

現在、2つの章のスクリプト、つまり`Chapter-1.txt`と`Chapter-2.txt`を作成したとします。`Chapter-1.txt`の実行が終了したら、`Chapter-2.txt`に対応するシーンにジャンプするには、次のステートメントを使用します。

``` ws
changeScene:Chapter-2.txt;
```

例：

``` ws
(Chapter-1.txt)
......
......
; // ここからChapter-2.txtの内容を実行します
changeScene:Chapter-2.txt;
......
......
(Chapter-2.txt)
......
```

このコマンドを実行すると、ゲームシーンが切り替わり、その後のプロットの展開が新しいシーンのスクリプトに従って実行されます。新しいスクリプトは、次のマウスクリック後に実行されます。

## シーンの呼び出し

シーン内で別のシーンを呼び出す必要がある場合は、`callScene`を使用できます。呼び出されたシーンの実行が完了すると、元のシーンに戻ります。

ステートメント：

``` ws
callScene:Chapter-2.txt;
```

例：

``` ws
(Chapter-1.txt)
......
......
callScene:Chapter-2.txt;
; // ここからChapter-2.txtの内容を実行します
......
......
(Chapter-2.txt)
......
......
(Chapter-2.txtの実行が完了)
; // 親シーンに戻り、親シーンのステートメントの実行を続行します
......
```

## 分岐の選択

スクリプトに分岐オプションがあり、異なるオプションを選択して異なる章に移動したい場合は、`choose`を使用します。

`選択肢のテキスト:章ファイル名`を使用して選択肢を定義します。異なる選択肢を区切るには`|`を使用します。例を以下に示します。

``` ws
choose:彼女を呼び止める:Chapter-2.txt|家に帰る:Chapter-3.txt;
```

選択肢のテキストと、選択肢を選択した後に移動するスクリプト名を1対1で対応付けるだけで、分岐選択機能を実装できます。

### 条件付き表示と選択

変数に応じて、オプションを条件付きで表示したり、ユーザーがオプションをクリックできるようにしたりすることもできます。構文は次のとおりです。

```ws
choose:(showConditionVar>1)[enableConditionVar>2]->彼女に声を掛ける:Chapter-2.txt|家に帰る:Chapter-3.txt;
```

ここでは、showConditionVar>1 の場合にのみ最初のオプションが表示され、enableConditionVar>2 の場合にのみユーザーがクリックできます。

## ラベルジャンプ

分岐を作成したいが、そのために新しいTXTファイルを作成するのは面倒だと感じる場合は、同じファイル内で分岐とジャンプステートメントを作成する方法を試すことができます。

::: warning
分岐が長い場合は、この方法を使用しないことをお勧めします。TXTの行数は長すぎないようにしてください。そうしないと、読み込みが遅くなったり、応答が遅くなったりするなどのパフォーマンスの問題が発生する可能性があります。
:::

### ラベル（`label`）の作成

``` ws
......
jumpLabel:label_1; // label_1にジャンプします
......
......
label:label_1; // label_1という名前のラベルを作成します
......
```

簡単に言うと、`jumpLabel`は`goto`ステートメントに似ており、スクリプトをシーン（TXTファイル）内の任意の位置にすぐにジャンプさせることができます。この位置は`label`を使用して作成する必要があります。

`jumpLabel`をどこでもドアと例えると、このどこでもドアの終点は`label`のある場所です。

### 選択肢の追加

上記の基本事項がわかれば、`choose`を使用して分岐を使用して`label`のある場所にジャンプできます。

``` ws
......
choose:分岐1:label_1|分岐2:label_2;
label:label_1; // label_1という名前のラベルを作成します
......
......
jumpLabel:end; // endにジャンプします
label:label_2; // label_2という名前のラベルを作成します
......
......
jumpLabel:end; // endにジャンプします
label:end; // endという名前のラベルを作成します
......
```

各分岐の最後に、希望する場所にジャンプするために`jumpLabel`を使用する必要があります。プログラムは線形に実行されるため、分岐の最後にジャンプしない場合、プログラムは次の行に実行を続行します。例えば、以下のような場合です。

``` ws
......
choose:分岐1:label_1|分岐2:label_2;
label:label_1; // label_1という名前のラベルを作成します
......
......
label:label_2; // label_2という名前のラベルを作成します
......
```

このスクリプトでは、`分岐2`を選択した場合、すべて問題ないように見えます。しかし、`分岐1`を選択すると、`分岐1`の実行後に`分岐2`が実行されることに驚かれるでしょう。これは、プログラムが順番に次の行を実行し続け、分岐の終了後にジャンプする場所を指定していないためです。