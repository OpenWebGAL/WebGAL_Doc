# changeScene

シーンを切り替えます。

## ステートメント内容

切り替え先のシーンファイルのパスを指定します。
詳しくは[シーンと分岐](../../webgal-script/scenes.md)を参照してください。

このコマンドが成功した場合、現在のシーン内で後続のコマンドは実行されません。

```webgal
キャラA:そろそろ出発しよう。;
changeScene:chapter_01/part_02.txt;
デバッグ:この文が見えた場合、シーン切り替えに失敗しています。;
デバッグ:changeScene が成功すると、その後ろのコマンドは実行されないためです。;
```

::: warning
シーンを切り替えても、現在のシーンの立ち絵や背景はクリアされません。明示的に閉じていない場合、それらは新しいシーンへ引き継がれます。
:::

- chapter_01/part_01.txt
```webgal
changeBg:home/character_a/bedroom.png;
changeFigure:main_character/character_a/thinking.png -next;
キャラA:今日は彼女の家に行こう！;
changeBg:none -next; 背景を手動で閉じる
changeFigure:none -next; 立ち絵を手動で閉じる
:; 会話ボックスを手動で閉じる
changeScene:chapter_01/part_02.txt;
```
- chapter_01/part_02.txt
```webgal
changeBg:home/character_b/living_room.png;
changeFigure:main_character/character_b/smile.png -next;
キャラB:あなたでしたか。何か用ですか？;
```
