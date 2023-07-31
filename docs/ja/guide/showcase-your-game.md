# 作品を出展しよう

まず、以下の情報を準備してください：

* ゲーム ID：識別コードの文字列で、他のゲームと重複してはいけません
* ゲーム名
* 開発者情報：開発者または開発グループのネーム
* 公開日：YYYY-MM-DD の形式で指定してください
* 公開リンク：任意のリンクが使用できます
* ゲームのカバー画像：幅 616 ピクセル、高さ 353 ピクセル、できれば webp 形式を推奨します

## Pull Requests を使用してゲームを提出する

[WebGAL_HomePage](https://github.com/MakinoharaShoko/WebGAL_HomePage) リポジトリをフォークします。

準備したカバー画像を `/public/images/games` フォルダに追加します。

`/data/gamesData.ts` ファイルを開き、`gamesData` を検索し、以下のテンプレートに従って、JSON 配列の最後に追加します：

```typescript
  {
    id: 'ゲーム ID',
    title: 'ゲーム名',
    developer: '開発者情報',
    releaseDate: 'YYYY-MM-DD',
    url: 'https://example.com/',
    cover: '幅616ピクセル、高さ353ピクセル、webpファイルを推奨'
  },
```

間違いがないことを確認したら、pull requests を作成します。

## Issues を使用してゲームを提出する

WebGAL_HomePage リポジトリの [Issues ページ](https://github.com/MakinoharaShoko/WebGAL_HomePage/issues) を開きます。

`New issue` をクリックし、準備した情報を入力し、確認後に `Submit new issue` をクリックします。

## その他の方法でゲームを提出する

必要な情報を準備した後、コミュニティやメールで私たちに連絡し、ゲームを提出することができます。
