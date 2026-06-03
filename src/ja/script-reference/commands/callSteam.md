# callSteam

Electron / Steam ブリッジを通じて Steam 実績を解除します。

:::warning プラットフォーム制限
このコマンドは Steam / Electron ブリッジ機能を備えたビルド環境でのみ有効です。通常の Web 配信（ブラウザで直接アクセスする場合）では使用できず、エンジンは呼び出しをスキップして失敗結果を返します。
:::

## 事前設定

`game/config.txt` に `Steam_AppID` を記入します。WebGAL は起動時に Steam 連携を初期化します。

```text
Steam_AppID:480;
```

詳しくは[ゲーム設定を編集する](../../config.md)を参照してください。

## ステートメント内容

ステートメント内容はありません。すべての値は名前付きパラメータで渡します。

## パラメータ

### achievementId
- 文字列

解除する Steam 実績 ID を指定します。Steam バックエンドで設定した実績 API 名と一致している必要があります。

```webgal
callSteam: -achievementId=ACH_WIN_ONE_GAME;
```

## 例

```webgal
; 実績を解除
callSteam: -achievementId=ACH_WIN_ONE_GAME;
```
