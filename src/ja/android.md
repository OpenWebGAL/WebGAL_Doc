# ゲームを Android プラットフォームにパッケージ化する

## その 1: ゲームを自動的にエクスポートする

**WebGAL エディターユーザー向け**

::: warning
Android Studio を使用してプロジェクトから直接にエクスポートしたフォルダーを開きたい場合は、新しいゲームを作成するときに**英語**のゲーム名を入力してください。ゲーム名がすでに中国語の場合は、`WebGAL_Terre\public\games` を開いてゲーム名を変更し、プロジェクトのファイルパスに英語以外の文字がないことを確認してください。
:::

### 事前準備

- [Android Studio](https://developer.android.com/studio/) をダウンロードして、インストールする

### エクスポートとゲーム情報の変更

WebGAL エディターの左側のサイドバーで、`ゲーム名`と`パッケージ名`を変更することができます。パッケージ名は、逆に書かれたウェブサイトのドメイン名です。ドメイン名をお持ちでない場合は、`webgaldev.mygalgame` のように、開発者とゲーム名の組み合わせの使用することを検討してください。**半角英字**のみ使用可能**です。

WebGAL エディターの右上隅にある**ゲームを出力**をクリックし、**Androidアプリとしてエクスポート**を選択します。Android Studio を開いて、エクスポートした `android` フォルダーを選択し、依存関係のダウンロードが完了するのを待ちます。

メニューバーの `File -> New -> Image Asset` をクリックして、ゲームアイコンを変更します。アイコンは前面と背面のレイヤーに分割されていることに注意してください。

### 実行とコンパイル

Android スマートフォンで USB デバッグをオンにして、コンピューターに接続します。上部のツールバーのデバイスタイトルの横にある実行アイコンをクリックして、スマホで実行します。

メニューバーの `Build -> Generate Signed Bundle or APK` をクリックし、プロンプトに従ってキーを作成してコンパイルし、コンパイルが完了するのを待ちます。

## その 2: ゲームを手動編集する

**スクリプトの作成やソースからコンパイルしてローカルでゲームを開発する開発者向け**

### 事前準備

- [Android Studio](https://developer.android.com/studio/) をダウンロードして、インストールする
- [WebGAL](https://github.com/MakinoharaShoko/WebGAL) を使用して開発したゲームをウェブバージョンにエクスポートする
- [WebGAL Android ゲームのテンプレート](https://github.com/nini22P/WebGAL-Android) をダウンロードする

### ゲームのインポート

まずゲームを Web ページとしてエクスポートし、[WebGAL Android ゲームのテンプレート](https://github.com/nini22P/WebGAL-Android)を解凍し、フォルダーの名前を変更します(必ず半角英字を使用してください)。`ルート\app\src\main\assets\webgal` フォルダーを開き、パッケージ化するゲームをここに配置します。

::: tip
`ルート\app\src\main\assets\webgal\index.html` を読み込むのはゲームのデフォルト設定です。読み込みリンク(オンラインリンクなど)をカスタマイズする場合は、`ルート\app\src\main\res\values\values.xml` ファイルにある `load_url` の値を変更してください。
:::

### 情報の変更

Android Studio を開いてゲームをインポートします。`ルート\settings.gradle` ファイルにある `rootProject.name` の値を変更します。

```gradle
...
rootProject.name = "WebGAL" // ゲーム名を変更する
...
```

`ルート\app\src\main\res\values\strings.xml` ファイルにあるゲーム名を変更します。

```xml
<resources>
    <string name="app_name">WebGAL</string> // ゲーム名を変更する
</resources>
```

`ルート\app\build.gradle` にある `namespace` と `applicationId` の値を逆に書かれたウェブサイトのドメイン名に変更します。

```gradle
...
android {
    namespace 'com.openwebgal.demo' // パッケージ名を変更する
...
    defaultConfig {
        applicationId "com.openwebgal.demo" // パッケージ名を変更する
...
```

メニューバーの `File -> Sync Project with Gradle files` をクリックして、同期が完了するのを待ちます。

`ルート\app\src\main\java\com\openwebgal\demo\MainActivity.kt` の最初の行の `package` の値を変更したパッケージ名に変更します。

```kotlin
package com.openwebgal.demo // パッケージ名を変更す
...
```

このフィールドを変更すると、エラーが報告されます。この時点で、変更したパッケージ名をクリックし、「黄色の電球」をクリックして `Move file to 'パッケージ名'` を選択し、元のパッケージ名のフォルダーを削除します。

メニューバーの `File -> New -> Image Asset` をクリックして、ゲームアイコンを変更します。アイコンは二つのレイヤーに分割されていることに注意してください。

### 実行とコンパイル

Android スマートフォンで USB デバッグをオンにして、コンピューターに接続します。上部のツールバーのデバイスタイトルの横にある実行アイコンをクリックして、スマホで実行します。

メニューバーの `Build -> Generate Signed Bundle or APK` をクリックし、プロンプトに従ってキーを作成してコンパイルし、コンパイルが完了するのを待ちます。

## ビデオチュートリアル

[Android Studio を使用して WebGAL ゲームを Android プラットフォームにパッケージ化する](https://www.bilibili.com/video/BV1m24y1J7ct/) (Chinese)

## 互換性とソリューション

現在サポートされている最も古いバージョンは Android 5.0 であり、システムにプリインストールされている Android System WebView に依存しています。ホーム画面をクリックした後にデバイスがブラックアウトする場合は、次のいずれかの解決策を試してください。

1. [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)を更新するために Google Play Store に移動する
2. 手動で Android System WebView をダウンロードして更新する

Android System WebView のダウンロードリンク: [Android 5.0](https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-95-0-4638-74-release/) | [Android 6.0](https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-106-0-5249-126-release/) | [Android 7.0+](https://www.apkmirror.com/apk/google-inc/android-system-webview/)
