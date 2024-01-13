# あなたのゲームを展示する

まず、以下の情報を準備する必要があります：

* ゲーム ID：ゲームの一意の ID で、英語を使用し、他のゲームと重複しないものにします。
* ゲームのタイトル
* 開発者の名前
* リリース日
* リリース先の URL：プロジェクトのホームページ、ストア、ブログ、動画など、一般にアクセス可能なページへのリンクです。
* ゲームのカバー画像：幅 616 ピクセル、高さ 353 ピクセル

## プルリクエストであなたのゲームを提出する

[WebGAL_HomePage](https://github.com/MakinoharaShoko/WebGAL_HomePage) リポジトリをフォークします。

準備したカバー画像を `/public/images/games` に追加します。

`/data/games.ts` ファイルを開き、 `games` を見つけて、以下のテンプレートに従って末尾に追加します。

``` typescript
  {
    id: 'ゲーム ID',
    title: 'ゲームのタイトル',
    developer: '開発者の名前',
    releaseDate: 'xxxx-xx-xx',
    url: 'https://example.com/',
    cover: 'ゲームのカバー画像のファイル名.webp',
  },
```

間違いがないことを確認したら、プルリクエストを送信します。

## イシューであなたのゲームを提出する

WebGAL_HomePage リポジトリの [イシューページ](https://github.com/MakinoharaShoko/WebGAL_HomePage/issues) を開きます。

`New issue` をクリックし、準備した情報を入力します。間違いがないことを確認したら、`Submit new issue` をクリックします。

## 他のチャネルであなたのゲームを提出する

必要な情報を準備したら、ディスカッションコミュニティまたはメールで連絡して、あなたのゲームを提出することができます。