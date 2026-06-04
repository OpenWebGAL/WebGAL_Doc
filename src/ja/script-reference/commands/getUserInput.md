# getUserInput

ユーザー入力を取得します。

## ステートメント内容

変数名を指定します。ユーザーが入力した値はこの変数に保存されます。

```webgal
キャラB:本当にありがとうございます。お名前を教えていただけますか？;
getUserInput:player_name -title=あなたの名前 -buttonText=確認 -defaultValue=Bob;
キャラB:{player_name}、覚えておきます。;
```

プレイヤーが入力を確定すると、エンジンは変数を書き込み、入力ボックスを閉じて次の文へ進みます。入力検証が設定されていて検証に失敗した場合は、入力ボックスに留まり、変数は書き込まれません。

## パラメータ

### title
- 文字列

入力ボックスのタイトルを設定します。

```webgal
getUserInput:player_name -title=あなたの名前;
```

### buttonText
- 文字列

確認ボタンのテキストを設定します。

```webgal
getUserInput:player_name -buttonText=確認;
```

### defaultValue
- 文字列

入力ボックスのデフォルト値を設定します。

```webgal
getUserInput:player_name -defaultValue=Bob;
```

プレイヤーが何も入力せずに確定した場合、エンジンは `defaultValue` を変数に書き込みます。`defaultValue` が設定されていない場合は、半角スペース 1 つを書き込みます。

### rule
- 文字列

入力検証に使う正規表現ルールを設定します。

```webgal
getUserInput:player_name -rule=^.{1,2}$;
```

### ruleFlag
- 文字列

正規表現フラグを設定します。例: `g`（グローバルマッチ）、`i`（大文字小文字を区別しない）など。

詳しくは [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags) を参照してください。

```webgal
getUserInput:player_name -rule=^.{1,2}$ -ruleFlag=g;
```

### ruleText
- 文字列

検証に失敗したときに表示するエラーポップアップの文言を設定します。`$0` でユーザー入力を取得できます。

```webgal
getUserInput:player_name -rule=^.{1,2}$ -ruleText=$0は1-2文字にしてください;
```

### ruleButtonText
- 文字列

検証に失敗したときに表示するエラーポップアップのボタン文言を設定します。

デフォルトは `OK` です。

```webgal
getUserInput:player_name -rule=^.{1,2}$ -ruleText=$0は1-2文字にしてください -ruleButtonText=OK;
```
