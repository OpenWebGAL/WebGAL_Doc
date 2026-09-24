### writeDefault
- 真偽値

:::warning
このパラメータは非推奨です。代わりに `transformFrom` を使用してください。`-writeDefault` は `-transformFrom=default` と同じです。`transformFrom` を指定した場合、このパラメータは無視されます。
:::

値が `true` の場合、代入されていない[変換・エフェクト](../others/transform-reference.md)プロパティにはデフォルト値が書き込まれます。
値が `false` の場合、代入されていないプロパティは既存の値を継承します。
