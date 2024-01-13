# Andoird

WebGAL Terre 可視化編輯器をお勧めします。一键でアンドロイドプロジェクトファイルのエクスポートオプションを提供しています。

ソースコードでプロジェクトを構築する場合は、ソースコードオプションに切り替えてください。

## 前期準備

::: tabs#android

@tab WebGAL Terre

* [Android Studio](https://developer.android.com/studio)をダウンロードしてインストールします。

@tab ソースコード

* [Android Studio](https://developer.android.com/studio)をダウンロードしてインストールします。
* [WebGAL](https://github.com/MakinoharaShoko/WebGAL)をWebウェブにコンパイルします。
* [WebGAL Android プロジェクトテンプレート](https://github.com/nini22P/WebGAL-Android)をダウンロードします。

:::

## Android Studioでプロジェクトを開く

::: warning
プロジェクトのエクスポートされたフォルダから直接Android Studioで開きたい場合は、ゲームを新規作成する際に**英語**を入力してください。ゲームフォルダ名が英語でない場合は、詳細メニューで英語に名前を変更するか、`WebGAL_Terre\public\games`を開いてゲーム名を変更し、プロジェクトのファイルパスに英語以外の文字が含まれないようにしてください。そうしないと、エラーが発生します。
:::

::: tabs#android

@tab WebGAL Terre

エディタの左側のサイドバーで、ゲーム設定の「ゲームタイトル」と「ゲームパッケージ名」を変更します。
ゲームパッケージ名は、あなたのウェブサイトのドメインを逆にしたものです。ドメインがない場合は、デベロッパーとゲーム名を組み合わせたもの、例えば「webgaldev.mygalgame」のような形式を検討してください。**必ず****英語**を使用してください。

エディタの右上にある「アンドロイドプロジェクトファイルにエクスポート」を選択すると、システムが自動的にフォルダを開きます。

android studioを開き、エクスポートしたばかりの「android」ディレクトリを開き、依存関係のダウンロードが完了するまで待ちます。

![Android Studioでプロジェクトを開く](open-in-android-studio.jpg)

@tab ソースコード

[プロジェクトテンプレート](https://github.com/nini22P/WebGAL-Android)をダウンロードして解凍し、フォルダの名前を変更します（必ず英語を使用してください）。
「プロジェクトフォルダ\app\src\main\assets\webgal」フォルダを開き、パッケージ化するゲームをここに置きます。

ゲームはデフォルトで「プロジェクトフォルダ\app\src\main\assets\webgal\index.html」を読み込みます。オンラインリンクなど、読み込みリンクをカスタマイズしたい場合は、「プロジェクトフォルダ\app\src\main\res\values\values.xml」ファイル内の「load_url」フィールドを変更してください。

Android Studioを開いてプロジェクトを開きます。
「プロジェクトフォルダ\settings.gradle」ファイルの「rootProject.name」フィールドを変更します。

``` gradle
...
rootProject.name = "WebGAL" //プロジェクトタイトルを変更
...
```

「プロジェクトフォルダ\app\src\main\res\values\strings.xml」のタイトル情報を変更します。

``` xml
<resources>
    <string name="app_name">WebGAL</string> //ゲームタイトルを変更
</resources>
```

「プロジェクトフォルダ\app\build.gradle」の「namespace」と「applicationId」フィールドを、ドメインを逆にした形式に変更します。

``` gradle
...
android {
    namespace 'com.openwebgal.demo' //パッケージ名を変更
...
    defaultConfig {
        applicationId "com.openwebgal.demo" //パッケージ名を変更
...
```

メニューバーの「ファイル -> Gradleファイルでプロジェクトを同期」をクリックして、同期が完了するまで待ちます。

「プロジェクトフォルダ\app\src\main\java\com\openwebgal\demo\MainActivity.kt」の最初の行の「package」フィールドを、前に変更したターゲットパッケージ名に変更します。

``` kotlin
package com.openwebgal.demo //パッケージ名を変更
...
```

このフィールドを変更するとエラーが発生します。このとき、変更したばかりのパッケージ名をクリックして、「黄色い電球」をクリックし、「ファイルを「ターゲットパッケージ名」に移動」を選択し、元の「パッケージ名」フォルダを削除します。

:::

メニューバーの「ファイル -> 新規 -> 画像アセット」をクリックしてゲームアイコンを変更します。アイコンは前後2層に分かれています。

![アイコンを作成する](create-icons.jpg)

## デバッグ実行

アンドロイド携帯のUSBデバッグをオンにしてパソコンに接続し、ツールバーの上にあるデバイスタイトルの横にある実行アイコンをクリックして携帯で実行します。

![デバイスで実行する](run-app.jpg)

## APKをコンパイルする

メニューバーの「ビルド -> 署名付きバンドルまたはAPKを生成」をクリックし、ポップアップメニューで「APK」を選択します。

プロンプトに従ってキーを作成または選択します。

![キーを作成または選択する](keystore.jpg)

「release」を選択して「作成」をクリックし、コンパイルが完了するまで待ちます。

![コンパイルバリアントを選択する](build.jpg)

![コンパイル完了](finsh.jpg)

## ビデオチュートリアル

[Android Studioを使ってWebGALゲームをAndroidプラットフォームにパッケージする](https://www.bilibili.com/video/BV1m24y1J7ct/)

## 互換性とソリューション

現在サポートされている最低バージョンはAndroid 5.0で、システムにプリインストールされているAndroid System WebViewに依存しています。デバイスで最初の画面をクリックした後に黒くなる場合は、以下のいずれかの方法を試してください。

1. Playストアにアクセスして[Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)を更新する。
2. Android System WebViewを手動でダウンロードして更新する

Android System WebViewのダウンロードリンク：[Android 5.0](https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-95-0-4638-74-release/) | [Android 6.0](https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-106-0-5249-126-release/) | [Android 7.0 +](https://www.apkmirror.com/apk/google-inc/android-system-webview/)