# 変数

::: warning
変数システムを使用する前に、シーンジャンプと分岐ジャンプの使い方を理解しておかないと、混乱する可能性がありますので、注意してください。
:::

## 変数の使い方

変数を設定する：

``` ws
setVar:a=1; // 数字を設定可能
setVar:a=true; // 真偽値を設定可能
setVar:a=キャラクター名; // 文字列を設定可能
setVar:a=; // 空の値（空の文字列）を設定可能
```

乱数を設定する場合は、`random()` を使用してください。

```ws
setVar:a=random();
```

` random([lower=0]、[upper=1]、[floating])`乱数は、複数の参照をサポートする**内蔵関数**です。

**パラメータ**：
1. [lower=0] (number): 下限。
2. [upper=1] (number): 上限。
3. [floating] (boolean): 浮動小数点数を返すかどうかを指定します。

パラメータを書かずに0-1区間の浮動小数点数ですを生成します
```ws
setVar:a=random();
```

もちろん、私たちは**範囲**を指定することもできます。たとえば、5～10の間の乱数が必要な場合は、書くことができます：
```ws
setVar:a=random(5,10);
```

もちろん、範囲を使用して生成したい数値にも小数があるので、3番目のパラメータを指定することができます。
```ws
setVar:a=random(5,10,true); # 5～10の浮動小数点数が生成されます
```

以前に他の変数を定義している場合は、変数を設定する際にそれらを使用することもできます。

``` ws
setVar:a=1;
setVar:b=a+1;
```

### 高度な式サポート

`setVar` は複雑な数学式と文字列演算をサポートしています：

``` ws
; 括弧と演算子優先度をサポート
setVar:result=(a+b)*2-c/3;

; 文字列は自動的に連結されます
setVar:a=hello;
setVar:b=world;
setVar:c=a+b; // c の値は "helloworld" になります

; 変数参照
setVar:baseScore=100;
setVar:bonus=50;
setVar:totalScore=baseScore+bonus; // totalScore は 150 になります
```

## 条件付き実行

文の後に `-when=(condition)` パラメータを追加すると、現在の文を実行するかどうかを条件で判断することができます。

例えば：

``` ws
setVar:a=1;
; // a が 1 より大きい場合、シーン 1 にジャンプする
changeScene:1.txt -when=a>1;
; // a が 1 の場合のみジャンプする。等号演算子は == に注意
changeScene:2.txt -when=a==1;
; // a が 1 より小さい場合、上の文は実行されず、当然この文が実行される
changeScene:3.txt;

```

::: tip
`=` は代入演算子であり、条件判断には使用できません。`==` は等号演算子です。
:::

どの文にも `-when` パラメータを追加して、実行するかどうかを制御することができます。`-when` パラメータと `jumpLabel` `callScene` `changeScene` を組み合わせることで、条件付きのフロー制御を実現することができます。

## ユーザー入力の取得

`getUserInput` 命令を使用してユーザー入力を取得します。例えば：

```
getUserInput:name -title=あなたの名前を教えてください -buttonText=確認; ユーザー入力を name 変数に書き込む
```

ここで、`title` パラメータはプロンプトのテキストで、`buttonText` は確認ボタンのテキストで、`defaultValue` はデフォルト値です。

## 変数のデバッグ

`showVars` 命令を使用すると、現在のすべての変数の値（通常の変数とグローバル変数の両方）を表示できます：

``` ws
setVar:score=100;
setVar:playerName=Alice -global;
showVars:; // すべての変数のJSON形式をダイアログボックスに表示
```

この命令は主にデバッグ用で、ゲーム内のすべての変数の状態を理解するのに役立ちます。

## 動的なUIスタイル切り替え

`applyStyle` 命令を使用すると、UI要素のCSSクラス名を動的に置き換えることができます：

``` ws
; 単一のスタイルを切り替え
applyStyle:textbox-default->textbox-dark;

; 複数のスタイルを一括切り替え
applyStyle:btn-primary->btn-dark,text-light->text-dark,bg-light->bg-dark;
```

この機能は以下の用途に使用できます：
- 動的なテーマ切り替え（昼間/夜間モードなど）
- 特定シーンでのUIスタイル変更
- ストーリーに応じたインターフェイススタイルの変更

## 変数補間

`{}` 構文を使用して文の中で変数補間を行い、変数を文に挿入することができます。例えば：

```
setVar:name=WebGAL;
setVar:engine=WebGAL;
{name}: {engine} へようこそ！これは、まったく新しいウェブベースのビジュアルノベルエンジンです。;
```

## 永続変数（グローバル変数）

WebGAL の通常の変数はセーブデータに依存します。つまり、どの変数も現在のゲームシーンにのみ存在し、セーブデータに保存され、ロードデータによって復元されるだけです。

作者がマルチエンディングを設定したい場合に問題が発生する可能性があるため、ゲーム全体で有効な永続（グローバル）変数が用意されています。一度設定すると、ユーザーがすべてのデータを消去しない限り、ゲーム全体で有効になります。

`-global` パラメータを追加すると、永続（グローバル）変数を設定することができます。

```ws
setVar:a=1 -global;
```

これにより、セーブデータの読み込みによって変更されない変数が設定されます。

使用例：

```ws
jumpLabel:turn-2 -when=a>0;
setVar:a=1 -global;
1周目;
changeScene:一周目ストーリー.txt;
label:turn-2;
2周目;
changeScene:二周目ストーリー.txt;
```

## 高度な使用法（`>=4.5.4`）
組み込み変数は、構成変数の変更や、組み込み変数に基づいて論理的に実行して条件を指定するなど、より高度な操作に使用します。

WebGAL には現在、`stage` と `userData` の 2 つの組み込み変数フィールドがあります。

::: tip
`stage` はランタイム組み込み変数で、`userData` はアーカイブ組み込み変数です。

`stage`はWebGalエディタの下の`state`タブにあり、`userData`は開発者ツールの`indexedDB`で表示できます。
:::

それらにアクセスするには `$` を使用します (例: BGM の値を取得します)。

```ws
setVar:a=($stage.bgm.volume);
WebGAL:現在のBGMボリュームは、以下の通りです{a};
```

もちろん、会話で直接使用することもできます：

```ws
WebGAL:現在のBGMボリュームは、以下の通りです{$stage.bgm.volume};
```

::: warning
`括弧付き`ラッパーは、`単一値`の変数を取得するために必要ですが、数学には必要ありません。
:::

また、`config.txt` のグローバル変数にもアクセスできます：

```ws
setVar:title=(Game_name);
WebGAL:現在のゲームのタイトルは次のとおりです{title};
```

変更も例外ではなく、ゲームのタイトルを新しいゲームのタイトルに変更する場合、setVar の変数名には変更する変数名を設定する必要があります。 

`global`パラメータを追加して、構成変数を変更していることを示します：

```ws
setVar:Game_name=新しいゲームタイトル -global;
WebGAL:現在のゲームのタイトルは次のとおりです{Game_name};
```

::: warning
`global` を付けないとゲーム内変数に代入されるので、`global` パラメータを使うタイミングに注意してください。
:::

::: tip
変更可能な元の構成変数 `Title_img`、`Title_bgm`、`Game_name`、`Game_key`。
回復したい場合は、ゲームオプションの`すべてのデータを消去`を使用して回復できます。
:::

もちろん、`config.txt`でカスタム構成変数を作成することもできます。たとえば、バージョン番号を作成します：

```text
Game_name:WebGALへようこそ！;
Game_key:f60ad5725c1588;
Title_img:WebGAL_New_Enter_Image.png;
Title_bgm:s_Title.mp3;
Textbox_theme:imss;
; バージョン番号を増やす
version:1;
```

次に、スクリプトでそれを取得して変更できます：

```ws
setVar:v=(version);
WebGAL:現在のバージョン番号は{v};
setVar:version=version*2 -global;
WebGAL:変更された現在のバージョン番号は次のとおりです{version};
```

::: warning
`config.txt`は、特別なシンボルとしてまだ逃れられていません。
:::
