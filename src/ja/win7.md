# Windows 7 でビジュアルエディタを使用してゲーム開発を行う方法

## 前提条件

### バージョン 14 ~ 16.3 の node.js をインストール

1. [node.js 公式サイト](https://nodejs.org/dist/v16.3.0/) でバージョン 16.3.0 の node.js のダウンロードリンクをクリック、インストールパッケージをダウンロードする。

    1. システムに適したインストールパッケージを選ぶ。

        フォルダ **win-x64** またはフォルダ **win-x86** から選択してください。

    2. その中の **node.exe** をダウンロードする。

2. システムチェックをバイパスするように環境変数を設定する。

    1. デスクトップで **コンピュータ** を右クリックし、メニューの **アトリビューション** をクリックする。
    2. 左側のパネルで **システムの詳細設定** を開く。
    3. ウィンドウの右下隅にある **環境変数** をクリックしする。
    4. システム変数に変数 **NODE_SKIP_PLATFORM_CHECK** を追加し、値は **1** にする。
    5. 環境変数を保存する。

3. インストールパッケージ(ダウンロードした **node.exe**)を実行して、node.js をインストールする。

---

## その 1: WebGAL Terre Win7 サポートパッチを使用する

### パッチをダウンロードする

> ダウンロードリンク：
>
> [GitHub (サードパーティのパッチ)](https://github.com/hshqwq/WebGAL_Terre/releases)

### WebGAL Terre をダウンロードする

パッチに対応する[WebGal Terre](./README###その1：WebGALエディターを使用(推奨))をダウンロードし、解凍してください。
対応するバージョンについては、**使用说明、README** などの名前のファイルを確認するか、または **package.json** 内の **version** の値を確認してください。

### パッチを使用する

パッチを解凍し、パッチ内のファイルを WebGAL Terre のフォルダにコピーする。

### 依存関係のインストール

**Install_Dependencies.bat** を実行して依存関係をインストールする。フォルダ **node_modules** が表示された場合は成功を意味する。

手動インストール：

1. 任意のターミナルを開く。

2. WebGAL Terre のフォルダに移動する。

3. 次のコマンドを実行する。

```bash
npm i 
# または (yarnをインストールする必要がある)
yarn
```

### WebGAL Terre を起動する

**WebGal_Terre-Win7.bat** を実行する。

手動で実行する:

1. 任意のターミナルを開く。

2. WebGAL Terre のフォルダに移動する。

3. 次のコマンドを実行する。

```bash
node main.js
```

::: tip

お使いのパソコンに他のバージョンの node.js がインストールされている場合は、バージョン 14 ~ 16.3 に切り替えてください。

:::

---

## その 2：ソースコードをコンパイルする(プログラミング経験のある人に推奨)

### ソースコードの取得

[WebGAL_Terre](https://github.com/MakinoharaShoko/WebGAL_Terre) リポジトリをクローンする。

```shell
git clone https://github.com/MakinoharaShoko/WebGAL_Terre.git
```

### パッケージマネージャーをインストールする(オプション)

yarn をインストールする(オプション)

```shell
npm i -g yarn
```

### WebGAL Terre をコンパイルする

#### その1：すべてのパッケージをコンパイルする

1. 依存関係をインストールする。

    WebGAL Terre フォルダーのルートで実行する。

```shell
yarn
```

2. **release.sh** のコマンドを参照して、**Terre** を除くすべてのパッケージをコンパイルする。

3. 手動で **Terre** をコンパイルする方法については、[**Terre2のみをコンパイルする**](####その2：Terre2のみをコンパイルする)を参照してください。

#### その2：Terre2のみをコンパイルする

1. **packages/terre2** フォルダを開く。

2. 依存関係をインストールする。

```shell
yarn
```

3. **terre2** をパッケージする

    ```shell
    yarn run build
    ```

4. フォルダー **dist** 内の **.d.ts** で終わるファイルを削除する。(オプション)

5. ファイル **package.json** をフォルダー **dist** に追加し、内容を以下のように変更してください。

    ```json
    {
        "name": "webgal-terre-2-win7-server",
        "version": "バージョン",
        "description": "",
        "private": true,
        "license": "MPL-2.0",
        "dependencies": {
        "@nestjs/common": "^8.0.0",
        "@nestjs/core": "^8.0.0",
        "@nestjs/platform-express": "^8.0.0",
        "@nestjs/serve-static": "^2.2.2",
        "open": "^8.4.0",
        "reflect-metadata": "^0.1.13",
        "rimraf": "^3.0.2",
        "rxjs": "^7.2.0",
        "vscode-languageserver": "^8.1.0",
        "ws": "^8.8.1"
        }
    }
    ```

6. フォルダー **dist** をコンパイルされた WebGAL Terre フォルダにコピーする。

### WebGAL Terre を起動する

1.依存関係を WebGAL Terre フォルダーのルートで実行する。

```shell
npm i
# 或（推荐yarn）
yarn
```

2.ターミナルで `node main.js` を実行して、WebGAL Terre を起動する。bat または sh スクリプトとしてコーディングできます。
