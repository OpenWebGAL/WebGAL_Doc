# setTextbox

テキストボックスの表示と非表示を行う 2 in 1 コマンドです。

## ステートメント内容

`hide` を指定すると会話ボックスを非表示にします。それ以外の文字列は会話ボックスを表示します。
よく使う書き方は、`setTextbox:hide;` でテキストボックスを非表示にし、`setTextbox:on;` または `setTextbox:show;` で表示を戻す方法です。

::: info
`setTextbox` で会話ボックスを非表示にした後、後続に会話ボックスを表示する `setTextbox` コマンドがない場合、会話ボックスは非表示のまま維持されます。
:::

`setTextbox` で会話ボックスを表示しても表示されない場合、次の原因が考えられます。
- 発話内容とキャラクター名がどちらも空
- __すべての UI を非表示__ が有効

``` webgal
キャラA:ある場所へ連れていくよ。;
setTextbox:hide;
changeBg:shop.png;
setTextbox:on;
キャラA:着いたよ。;
```
