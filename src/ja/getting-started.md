# WebGAL でゲーム開発を行う方法

::: danger 警告
エディターを開くには、最新のブラウザ (Chrome / Firefox / Edge) を使用してください。その他のブラウザはサポート対象外です。
:::

## その1：WebGALエディターを使用 (推奨)

**WebGAL エディターは、WebGAL でゲームを作成し、開発し、公開するための最良の方法です。**

WebGAL エディターをダウンロードした後、zipを解凍し、WebGAL_Terre.exe を起動します。WebGAL_Terre はブラウザを自動的に開きます。開かない場合は、ブラウザから [http://localhost:3001/](http://localhost:3001/)にアクセスしてください。

::: tip ヒント
このページの内容は Windows 7 にサポートしていません。Windows 7 をご利用の方は、**[Windows 7 でビジュアルエディターを使用してゲーム開発を行う方法](./win7)** を参照してください。

WebGAL エディターは現在 Windows 10+ システムでのみテストされています。Mac OS および Linux のサポートは、今後順次追加していく予定です。
:::

WebGAL エディターのダウンロードリンク:

[GitHub](https://github.com/MakinoharaShoko/WebGAL_Terre/releases)

## その2：スクリプトを作成してローカルで開発し、リアルタイムでデバッグ

まず、静的なウェブページとデバッグ環境が組み込まれた WebGAL 配布をダウンロードしてください。

WebGAL エンジンとデバッグ環境（ビジュアルエディターは含まれていません）をダウンロードします。

[GitHub](https://github.com/MakinoharaShoko/WebGAL/releases/)

ダウンロードして解凍した後、対応するバージョンの WebGAL-server を直接実行して、ビジュアルノベルゲームをデバッグできます。もしアンチウイルスソフトウェアやファイアウォールによる遮断が発生した場合は、実行を許可してください。

開発には VS Code を使用することをお勧めし、シンタックスハイライトを有効にするためにプラグインを利用してください：

[シンタックスハイライトプラグインのストアリンク](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[シンタックスハイライトプラグインのソースコードリポジトリ](https://github.com/C6H5-NO2/webgal-script-basics)

## その3：ソースコードからデバッグ（高いカスタマイズ性を望むフロントエンド開発者向け）

```
git clone https://github.com/MakinoharaShoko/WebGAL.git
```

yarn をインストールします。次に、yarn を使用して依存関係をインストールします

```
npm install yarn -g
yarn
```

WebGAL パッケージに移動します

```
cd packages/webgal
```

WebGAL は、vite をパッケージ化およびデバッグツールとして使用します。webgal パッケージを入力した後、次のコマンドを実行してローカルサーバーを起動します

```
yarn dev
```

パッケージは、

```
yarn build 
```
