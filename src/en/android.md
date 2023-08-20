# Build the Game to Android Platform

## Method 1: Auto Export Project Files (For WebGAL Terre Visual Editor Users)

::: warning
If you want to open the exported folder directly from the project using Android Studio, please fill in **English** when creating a new game. If the game name is already in Chinese, please open `WebGAL_Terre\public\games` to modify your game name, and make sure there are no characters other than English in the file path of the project, otherwise it will report an error.
:::

## Preparations

- Download and install [Android Studio](https://developer.android.com/studio/)

### Export and Modify

On the left sidebar of the editor, modify the `Game Title` and `Game Package Name`. The game package name is the reverse domain name of your website. If you don't have a domain name, you can consider using the combination of developer and game name, like `webgaldev.mygalgame`. It **must** be in **English**.

In the upper right corner of the editor, select Export to Android Project Files, then open Android Studio and select the `android` directory just exported, and wait for the dependencies to finish downloading.

Click `File -> New -> Image Asset` in the menu bar to modify the game icon. Note that the icon is divided into front and back layers.

### Run and Build

Turn on USB debugging on the Android phone and connect it to the computer. Click the run icon next to the device title in the toolbar at the top to run it on the phone.

Click `Build -> Generate Signed Bundle or APK` in the menu bar, create a key according to the prompts and compile, waiting for the compilation to complete.

## Method 2: Manually Edit Project Files (For developers who develop games locally by writing scripts or compiling from source)

## Preparations

- Download and install [Android Studio](https://developer.android.com/studio/)
- Export the [WebGAL](https://github.com/MakinoharaShoko/WebGAL) game to web version
- Download the [WebGAL Android project template](https://github.com/nini22P/WebGAL-Android)

### Import Game

First export the game as a web page, unzip the [project template](https://github.com/nini22P/WebGAL-Android), and rename the folder (be sure to use English). Open the `project folder\app\src\main\assets\webgal` folder and put the game you want to package here.

::: tip
By default, the game loads `project folder\app\src\main\assets\webgal\index.html`. If you want to customize the loading link (such as online link), please modify the `load_url` field in the `project folder\app\src\main\res\values\values.xml` file.
:::

### Modify Info

Open Android Studio to import the project. Modify the `rootProject.name` field in the `project folder\settings.gradle` file.

``` gradle
...
rootProject.name = "WebGAL" // Modify project title
...
```

Modify the title information in `project folder\app\src\main\res\values\strings.xml`.

``` xml
<resources>
    <string name="app_name">WebGAL</string> // Modify game title
</resources>
```

Modify the `namespace` and `applicationId` fields in `project folder\app\build.gradle`, formatted as reverse domain names.

``` gradle
...
android {
    namespace 'com.openwebgal.demo' // Modify package name
...
    defaultConfig {
        applicationId "com.openwebgal.demo" // Modify package name
...
```

Click `File -> Sync Project with Gradle files` in the menu bar to wait for sync to complete.

Modify the `package` field in the first line of `project folder\app\src\main\java\com\openwebgal\demo\MainActivity.kt` to the target package name changed earlier.

``` kotlin
package com.openwebgal.demo // Modify package name 
...
```

After modifying this field, an error will be reported. At this point, click on the package name just modified, then click the "yellow bulb" and select `Move file to 'target package name'`, and then delete the original package name folder.

Click `File -> New -> Image Asset` in the menu bar to modify the game icon. Note that the icon is divided into front and back layers.

### Run and Build

Turn on USB debugging on the Android phone and connect it to the computer. Click the run icon next to the device title in the toolbar at the top to run it on the phone.

Click `Build -> Generate Signed Bundle or APK` in the menu bar, create a key according to the prompts and compile, waiting for the compilation to complete.

## Video Tutorial

[Package WebGAL Game to Android Platform Using Android Studio](https://www.bilibili.com/video/BV1m24y1J7ct/) (Chinese)

## Compatibility and Solutions

The currently supported minimum version is Android 5.0, and it relies on the system pre-installed Android System WebView. If your device blacks out after clicking the home screen, please try any of the following solutions:

1. Go to Play Store to update [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)
2. Manually download and update Android System WebView

Android System WebView download links: [Android 5.0](https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-95-0-4638-74-release/) | [Android 6.0](https://www.apkmirror.com/apk/google-inc/android-system-webview/android-system-webview-106-0-5249-126-release/) | [Android 7.0+](https://www.apkmirror.com/apk/google-inc/android-system-webview/)
