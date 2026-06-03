# applyStyle

UI スタイルを変更します。

## ステートメント内容

まず UI テンプレート内に新しいスタイルを作成し、`applyStyle` コマンドで元のスタイルを新しいスタイルに置き換えます。
元のスタイル名と新しいスタイル名は `->` で接続します。複数の置換を同時に指定でき、各置換は英語のカンマ `,` で区切ります。
形式は、元スタイル名->新スタイル名,元スタイル名2->新スタイル名2,... です。

```webgal
; UI テンプレート内に新しいスタイルがある前提で、キャラ名背景を赤に置き換える
applyStyle:TextBox_ShowName_Background->TextBox_ShowName_Background_Red;
キャラ名:これは一文です;
; 複数のスタイルを同時に置き換える
applyStyle:TextBox_ShowName_Background->TextBox_ShowName_Background_Green,TextBox_main->TextBox_main_Black;
```

元のスタイルがどの新しいスタイルに置き換えられていても、置換は常に元のスタイル名から指定します。

```webgal
applyStyle:元スタイル名->新スタイル名1;
applyStyle:新スタイル名1->新スタイル名2; 誤り
applyStyle:元スタイル名->新スタイル名2;
```

## よく使う置換可能なスタイル

選択肢では次のスタイル名を使用します。

| スタイル名 | 用途 |
| :--- | :--- |
| `Choose_Main` | 選択肢リストのコンテナ |
| `Choose_item_outer` | 1 つの選択肢の外側コンテナ |
| `Choose_item` | クリック可能な選択肢 |
| `Choose_item_disabled` | 条件を満たさずクリックできない選択肢 |

```webgal
; クリック可能な選択肢をテンプレートで定義した Choose_item_Red に置き換える
applyStyle:Choose_item->Choose_item_Red;
```
