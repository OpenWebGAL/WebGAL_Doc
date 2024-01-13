# 開発者・貢献者向け情報

## WebGAL ソースコードリポジトリのアドレス

[https://github.com/MakinoharaShoko/WebGAL](https://github.com/MakinoharaShoko/WebGAL)

## ブランチの説明

```
main: 安定版
dev: WebGAL 開発版
その他ブランチ: 旧バージョンのアーカイブ
```

## 更新予定

[WebGAL 情報](/info) を参照

## 貢献者ガイド

WebGAL は現在、パッケージマネージャーとして yarn、そして yarn workspace monorepo 管理者を使用しています。

yarn がない場合は、以下のコマンドを入力してインストールしてください。

```shell
npm install yarn -g
```

そして本プロジェクトをクローンし、プロジェクトのルートディレクトリで

```shell
yarn
```

を実行してください。

本プロジェクトには3つのパッケージがあります。

| パッケージ名 | 内容 |
|---|---|
| parser | WebGAL パーサー |
| server | WebGAL ローカルデバッグサーバー |
| webgal | エンジン本体 |
| yukimi | 計画中の yukimi サポートライブラリ |

## WebGAL プロジェクトをローカルで起動する

そして、以下のスクリプトを実行することで開発サーバーを起動することができます。

```shell
yarn dev
```

もしパッケージングしたい場合は、

```shell
yarn build
```

を使用してください。

パッケージングされた成果物は `packages/webgal/dist` ディレクトリにあります。

::: tip
カスタマイズが完了したら、WebGAL エディターを使ってリアルタイムプレビューやリソース管理を便利に行いたい場合は、パッケージングされた成果物をコピーして WebGAL_Terre リポジトリの `packages/terre2/assets/templates/WebGAL_Template` ディレクトリにある成果物と置き換えることができます。そうすることで、WebGAL エディターに内蔵されているエンジンをカスタマイズしたものに変更することができます。WebGAL リポジトリと WebGAL_Terre リポジトリが同じディレクトリにある場合は、`release-to-terre` ショートカットスクリプトを使って実行することができます。
:::