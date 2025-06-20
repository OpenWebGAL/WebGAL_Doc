# Windows 7 でビジュアルエディタを使って制作を始める方法

## 前提条件

### node.js の 14~16.3 バージョンをインストールする

1. [node.js 公式サイトの node v16.3.0 のダウンロードページ](https://nodejs.org/dist/v16.3.0/) を開き、インストーラーをダウンロードする。

    ミラーサイト: <https://registry.npmmirror.com/binary.html?path=node/v16.3.0/>

    1. 自分のシステムに合ったインストーラーを選択する。

        *win-x64*, *win-x86* の 2 つのフォルダから選択し、それ以外のファイルはダウンロードしないように注意する。

    2. 対応するバージョンのフォルダを選択したら、その中の *node.exe* をダウンロードする。

2. システムチェックを回避する環境変数を設定する

    1. *マイコンピュータ / コンピュータ* を右クリックし、メニューから *プロパティ* をクリックする。
    2. 左側のペインで *システムの詳細設定* を開く。
    3. 右下の *環境変数* をクリックする。
    4. システム変数に *NODE_SKIP_PLATFORM_CHECK* という変数を追加し、値を *1* にする。
    5. 保存する。

3. node.js のインストーラー（先ほどダウンロードした *node.exe*）を実行して、node.js をインストールする。

---

## 方法 1: Terre Win7 サポートパッチを使用する

### Win7 対応 Terre パッチをダウンロードする

> ダウンロード先:
>
> [GitHub（サードパーティパッチサポート）](https://github.com/hshqwq/WebGAL_Terre/releases)
>
> [藍奏雲（サードパーティパッチサポート）](https://wwh.lanzoue.com/i2xqa0uy2fuh)

### ビジュアルエディタをダウンロードする

パッチに対応するバージョンの[ビジュアルエディタ](./guide#方法1（推奨）：WebGALエディタを使用する)をダウンロードして解凍する。  
対応するバージョンはパッチ内の *使用説明書, README* などのファイル、または *package.json* の *version* に対応する値を確認する。

### パッチを使用する

パッチを解凍し、パッチ内のファイルをビジュアルエディタのルートディレクトリにコピーする。

### 依存関係をインストールする

*Install_Dependencies.bat* を実行して依存関係をインストールする。*node_modules* フォルダが出現すれば成功。

手動で行う方法:

1. 任意のターミナルを開く。

2. エディタのあるディレクトリを開く。

3. 以下のコマンドを実行する。

    ```bash
    npm i 
    # あるいは（yarn をインストールしている場合）
    yarn
    ```

### ビジュアルエディタを起動する

*WebGal_Terre-Win7.bat* を実行してエディタを起動する。

手動で行う方法:

1. 任意のターミナルを開く。

2. エディタのあるディレクトリを開く。

3. 以下のコマンドを実行する。

    ```bash
    node main.js
    ```

::: tip

コンピュータに 14 よりも低いバージョンの node がインストールされている場合は、まず 14~16.3 バージョンの node に切り替える。

:::

---

## 方法 2: ソースコードからコンパイルする（ある程度のプログラミング経験がある人におすすめ）

### ソースコードを取得する

[WebGAL_Terre](https://github.com/OpenWebGAL/WebGAL_Terre) リポジトリをクローンする。

``` shell
git clone https://github.com/OpenWebGAL/WebGAL_Terre.git
```

### パッケージマネージャー（任意）

yarn をインストールする（任意だが推奨）。  

``` shell
npm i -g yarn
```

### ビジュアルエディタをコンパイルする

#### 方法 1: ビジュアルエディタ全体をコンパイルする

1. 依存関係をインストールする

    プロジェクトのルートディレクトリで依存関係をインストールする。

    ```shell
    yarn
    ```

2. *release.sh* のコマンドに従って、*Terre* 以外の packages をパッケージ化する。

3. *Terre* を手動でコンパイルする。[*Terre のみコンパイル*](./#方法2: *Terre* のみコンパイルする) を参照。

#### 方法 2: *Terre2* のみコンパイルする

1. *packages/terre2* を開く。

2. 依存関係をインストールする

    ``` shell
    yarn
    ```

3. *terre2* をパッケージ化する

    ``` shell
    yarn run build
    ```

4. *dist* ディレクトリ内のすべての *.d.ts* で終わるファイルを削除する（任意）。

5. *dist* に *package.json* ファイルを追加する。内容は以下の通り（関連情報を必ず入力すること）。

    ```json
    {
        "name": "webgal-terre-2-win7-server",
        "version": "バージョン番号",
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

6. `dist` ディレクトリをコンパイル済みのエディタディレクトリにコピーする。

### ビジュアルエディタを実行する

1. ビジュアルエディタのディレクトリで依存関係をインストールする。

    ``` shell
    npm i
    # あるいは（yarn を推奨）
    yarn
    ```

2. `node main.js` を実行してビジュアルエディタを起動する。必要に応じて bat, sh スクリプトとして記述することができる。