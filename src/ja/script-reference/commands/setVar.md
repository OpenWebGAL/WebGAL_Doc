# setVar

変数の追加と変更を行う 2 in 1 コマンドです。

## ステートメント内容

形式は `setVar:変数名=値;` または `setVar:変数名=式;` です。
詳しくは[変数](../../webgal-script/variable.md)を参照してください。

対応している値の型:
- 数値（例: 15、5e3、-5.5）
- 真偽値（`true` または `false`）
- 文字列

WebGAL は認識できない値の型を文字列に変換しようとします。

``` webgal
setVar:char_b_fav=15; キャラ B の初期好感度
;
キャラB:ねえねえ、今日の私どこが違うかわかる？;
choose:リボン:good_answer|太った？:bad_answer; プレイヤーの選択に応じて異なるラベル位置へジャンプ
;
label:good_answer;
プレイヤー:リボンを変えたんだよね。;
setVar:char_b_fav=char_b_fav+10; キャラ B 好感度 +10
キャラB:正解。どう、似合ってる？;
プレイヤー:うん、よく似合ってる。;
jumpLabel:ask_go_out; ask_go_out ラベルへジャンプし、下の bad_answer 部分を避ける
;
label:bad_answer;
プレイヤー:太った？;
setVar:char_b_fav=char_b_fav-10; キャラ B 好感度 -10
キャラB:あなたって本当につまらないね……;
;
label:ask_go_out;
プレイヤー:ところで、今夜は空いてる？;
;
jumpLabel:not_enough_fav -when=char_b_fav<10; 好感度が 10 未満なら not_enough_fav ラベルへジャンプ
;
キャラB:今夜は予定ないよ。どうしたの？;
changeScene:chapter_01/part_02.txt;
;
label:not_enough_fav;
;
キャラB:ない。ごめん、先に行くね。;
:キャラ B は去っていった。;
changeScene:chapter_02/part_01.txt;
;
```

## パラメータ

### global
- 真偽値

値が `true` の場合、長期（グローバル）変数を設定します。長期変数はユーザーが全データを削除しない限り、ゲーム全体で有効です。
値が `false` の場合、通常変数を設定します。通常変数は現在のシーン内でのみ有効で、セーブ時に保存され、ロード時に復元されます。

``` webgal
; 新規ゲーム開始時だと仮定
; すでに周回プレイなら、周回専用の物語へ直接ジャンプする
jumpLabel:another_life -when=multiple_playthroughs;
;
; そうでなければ一周目として扱い、変数を初期化して一周目の物語へ入る
setVar:multiple_playthroughs=false -global; 周回プレイではない状態として初期化
changeScene:chapter_01/part_01.txt;
;
; ここは周回専用の物語
; multiple_playthroughs が true のときだけここへジャンプする
label:another_life;
謎の声:もし機会があるなら、別の人生を選びますか？;
changeScene:chapter_01/part_01_extra.txt;
;
; ......
;
; 最終章の終盤だと仮定
setVar:multiple_playthroughs=true -global; 周回プレイとして設定
```

### local
- 真偽値

値が `true` の場合、現在のシーンの[ローカル変数](../../webgal-script/variable.md#ローカル変数)に書き込みます。これは `callScene` の引数が入るのと同じ名前空間です。ローカル変数はシーン呼び出しの終了とともに消滅し、呼び出し元の同名変数には影響しません。

``` webgal
; battle.txt、callScene:battle.txt -hp=100 から呼び出される
setVar:hp=hp-30 -local; 渡された hp を書き換える
ナレーション:攻撃を受けた。残り HP は {hp}。;
```

`-local` を付けない `setVar:hp=hp-30;` は通常変数に書き込みますが、`{hp}` の読み取りはローカル変数を優先するため、書いた値を読み出せません。渡された引数を書き換えるには `-local` が必要です。

::: warning
`-local` と `-global` は排他です。両方を書いた場合は `-global` が優先されます。
:::
