# WebGAL を始めるには？

::: warning
WebGALゲームを作る方法に関係なく、開発ガイドのすべてを一度読んでおくべきです。そう長くはかかりませんし、操作ミスによる問題を避けるのに役立ちます。

ご存知ですか？疑問に思うことのほとんどはドキュメントで答えが見つかります。バグに遭遇したと確信する場合は、[issues](https://github.com/MakinoharaShoko/WebGAL/issues)で問題を報告するか、<contact@openwebgal.com>にメールを送信してください。また、WebGALディスカッションコミュニティに参加する方法については、Webサイトの右上にある「その他」セクションを参照してください。
:::

::: danger
WebGALとエディターを開くには、最新のブラウザ（Chrome / Firefox / Edge）を使用してください。他のブラウザで発生する可能性のある問題は解決されません。
:::

## 方法1：WebGAL Terreビジュアルエディターを使用する（推奨されますが、カスタマイズの程度は低くなります）

**WebGAL Terreビジュアルエディターは、WebGALを作成、制作、公開するための最良の方法です。**

WebGAL Terreビジュアルエディターをダウンロードしたら、圧縮ファイルを解凍してWebGAL_Terre実行ファイルを開始してください。WebGAL Terreはデフォルトのブラウザを自動的に開きます。開かない場合は、[http://localhost:3001/](http://localhost:3001/)を入力してエディターを開きます。

WebGAL Terreビジュアルエディターをダウンロードする：

[WebGALホームページ（推奨）](https://openwebgal.com/zh-cn/download/)

[GitHubリリース](https://github.com/MakinoharaShoko/WebGAL_Terre/releases)

::: tip
WebGAL Terreビジュアルエディターはデフォルトで**Windows 7をサポートしません**。
Windows 7ユーザーは**[Windows 7でビジュアルエディターを使用して制作を開始する方法](./win7)**を参照してください。
:::

## 方法2：ソースコードからデバッグを開始する（より高いカスタマイズの程度を望む制作者向け）

``` shell
git clone https://github.com/MakinoharaShoko/WebGAL.git
```

yarnをインストールして依存関係をインストールします

``` shell
npm install yarn -g
yarn
```

WebGALはviteをバンドルとデバッグのツールとして使用しています。以下のスクリプトを実行して開発サーバーを起動することができます。

``` shell
yarn dev
```

開発にはVS Codeの使用と、構文のハイライトを実現するためのプラグインの使用をお勧めします：

[構文ハイライトプラグインのストアアドレス](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[構文ハイライトプラグインのソースコードリポジトリ](https://github.com/C6H5-NO2/webgal-script-basics)

バンドルする場合は、以下を使用してください。

``` shell
yarn build
```

バンドルされた製品はpackages/webgal/distディレクトリにあります。

::: tip
カスタマイズが完了したら、WebGALエディターを使用してリアルタイムでプレビューしたりリソースを管理したりできるように、バンドルされた製品をコピーして貼り付け、エディターディレクトリ内の`packages/terre2/assets/templates/WebGAL_Template`を置き換えることができます。これにより、WebGALエディターに組み込まれているエンジンを独自のカスタマイズしたものに変更することができます。WebGALリポジトリとWebGAL_Terreリポジトリが同じディレクトリにある場合、`release-to-terre`ショートカットスクリプトを使用して実行することができます。
:::