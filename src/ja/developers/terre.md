# WebGAL Terre 貢献ガイド

WebGAL Terre への貢献を歓迎します！WebGAL Terre は、私たちが最も創造性と競争力を注ぎ込むプロジェクトです。プログラミングに不慣れなクリエイターが WebGAL を使って作品を制作できるように支援することに力を注いでいます。ゲームスクリプトからカスタム UI まで、ほぼすべての制作関連タスクにおいて、敷居を下げ、制作をより簡単にすべく、グラフィカルな編集方法を提供することに努めています。

それに加えて、ほぼすべての機能に対してコードによる記述方法も提供しています。コード編集とグラフィカル編集モジュールは完全に互換性を持つように設計されているため、クリエイターは 2 つのモードをシームレスに切り替えることができます。

このエキサイティングなプロジェクトに参加する前に、以下の規約をお読みください。

## 貢献の要件

貢献内容をより良く理解し、レビューするために、以下の点にご注意ください。

* **コードコメント:** コードのロジックを理解しやすくするために、重要な部分にコメントを追加することをお勧めします。

* **機能テスト:** 機能を追加または変更した場合、機能が正しく動作することを確認するためのテスト方法を提供してください。コードのリファクタリングを行った場合は、影響を受ける範囲をカバーし、リファクタリングによって新しい問題が発生していないことを確認するためのテスト方法も提供してください。

* **明確な説明:** プルリクエストを提出する際には、行った変更と、その背後にある理由を簡単に説明してください。これは、貢献内容をより早く理解するのに役立ちます。

## プロジェクト紹介

WebGAL Terre は、TypeScript を使用したフルスタック開発で、パッケージマネージャーとして yarn を、monorepo マネージャーとして yarn workspace を使用しています。

## プロジェクトの起動

### 依存関係のインストール

まず、[Yarn](https://yarnpkg.com/) がインストールされていることを確認してください。Yarn がインストールされていない場合は、公式ドキュメントに従ってインストールしてください。

### リポジトリのクローン

WebGAL Terre のリポジトリは [WebGAL Terre - GitHub](https://github.com/OpenWebGAL/WebGAL_Terre) にあります。

### 依存関係のインストール

```bash
yarn
```

### 開発サーバーの起動

```bash
yarn dev
```

これにより、開発サーバーが起動し、デフォルトブラウザでアプリケーションが開きます。

### プロジェクトのビルド

リリース可能なバージョンを生成するには、ビルドスクリプトを実行する必要があります。

* **Windows:** `release.sh`
* **その他の環境:** プロジェクトのルートディレクトリにある対応するビルドスクリプトを確認してください。

ビルドが完了すると、`release` ディレクトリにビルド成果物が配置されます。

## パッケージ紹介

| パッケージ名                                     | 説明                                                                                |
| ---------------------------------------- | ----------------------------------------------------------------------------------- |
| `packages/dev-server`                   | 80ポートでデバッグ、サーバーユーザーに便利                                                     |
| `packages/origine2`                     | エディターフロントエンド                                                                            |
| `packages/terre-electron`                | Electron 版 Terre エディター                                                      |
| `packages/terre2`                       | エディターバックエンド                                                                            |
| `packages/vscode-ws-jsonrpc-webgal`      | WebGAL エディターバックエンド用のカスタムパッケージ、いくつかのバグを修正                                      |
| `packages/WebGAL-electron`               | WebGAL の Electron パッケージ                                                             |


## WebGAL Terre フロントエンドとバックエンドの連携デバッグガイド

WebGAL Terre は、TypeScript を使用したフルスタックプロジェクトであり、OpenAPI を使用してバックエンドインターフェースをリクエストするためのコードを生成します。

このプロセスを正しく機能させるには、WebGAL Terre バックエンドのインターフェースを開発する際に、以下のアノテーションに注意してください。

**1. インターフェースアノテーションの紹介**

次のコード例は、バックエンドインターフェースに必要な主要なアノテーションを示しています。

```typescript
@Post('createGame')
  @ApiOperation({ summary: 'Create a new game' })
  @ApiResponse({ status: 200, description: 'Game creation result.' })
  @ApiBody({ type: CreateGameDto, description: 'Game creation data' })
  async createGame(@Body() createGameData: CreateGameDto) {
    const createResult = await this.manageGame.createGame(
      createGameData.gameName,
      createGameData.derivative,
      createGameData.templateName,
    );
    if (createResult) {
      return { status: 'success' };
    } else {
      return { status: 'failed' }; 
    }
  }
```

**2. コード例の詳細説明**

各アノテーションの役割を理解するために、このコードを 1 行ずつ分析してみましょう。

* **`@Post('createGame')`**:  
    * `@Post`: これが POST リクエストインターフェースであることを示します。
    * `'createGame'`: インターフェースのパス、つまり `/createGame` を定義します。

* **`@ApiOperation({ summary: 'Create a new game' })`**:
    * `@ApiOperation`: インターフェースの機能を記述するために使用されます。
    * `summary`: インターフェースの役割を簡単に要約し、生成された OpenAPI ドキュメントに表示されます。

* **`@ApiResponse({ status: 200, description: 'Game creation result.' })`**:
    * `@ApiResponse`: インターフェースの可能な応答を記述します。
    * `status`: HTTP ステータスコードを指定します。ここでは 200 で、成功を示します。
    * `description`: このステータスコードでの応答内容を記述します。

* **`@ApiBody({ type: CreateGameDto, description: 'Game creation data' })`**:
    * `@ApiBody`: リクエスト本文のデータ型と説明を指定します。
    * `type`: リクエスト本文のデータ構造を示します。ここでは、事前に定義された DTO（データ転送オブジェクト）である `CreateGameDto` を使用しています。
    * `description`: リクエスト本文データの意味を記述します。

* **`async createGame(@Body() createGameData: CreateGameDto)`**:
    * `async`: これが非同期関数であることを示します。
    * `createGame`: インターフェースの関数名です。
    * `@Body()`: リクエスト本文からデータを取得します。
    * `createGameData: CreateGameDto`: リクエスト本文データを `CreateGameDto` 型のオブジェクトに解析します。


**3. フロントエンドプロジェクトでの OpenAPI の更新**

フロントエンドプロジェクトで最新のバックエンドインターフェースを使用できるようにするには、開発中に OpenAPI 定義を定期的に更新する必要があります。

**手順:**

1. バックエンドプロジェクトが実行されていることを確認します（前述のように、`yarn dev` を実行します）。
2. `packages/origine2` ディレクトリで、コマンド `yarn openapi` を実行します。

このコマンドは、バックエンドコードのアノテーションに基づいて最新の OpenAPI 定義ファイルを自動的に生成します。フロントエンドプロジェクトは、このファイルを使用してインターフェースをリクエストするためのコードを生成し、フロントエンドとバックエンドのインターフェースの一貫性を保証します。

**4. フロントエンドプロジェクトでのインターフェースの使用**

WebGAL フロントエンドプロジェクトでは、次の方法でバックエンドインターフェースを呼び出すことができます。

1. `api` オブジェクトをインポートします: `import {api} from "@/api";`
2. `api` オブジェクトのメソッドを呼び出します。例: `api.manageGameControllerGetGameList()`。

`api` オブジェクトには、すべてのバックエンドインターフェースに対応するメソッドが含まれており、インターフェース名に基づいて直接呼び出すことができます。

## 開発に関するその他の情報

これに加えて、ソースコードの重要なディレクトリには、このモジュールの原理を説明するドキュメントもいくつか用意されています。この情報は中国語で提供されます。今日では、大規模言語モデルは翻訳において十分な性能を発揮するため、中国語が読めなくても心配する必要はありません。大規模言語モデルを使用して、自分の言語に翻訳してみてください。

