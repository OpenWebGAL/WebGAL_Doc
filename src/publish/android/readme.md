# Andoird

推荐使用 WebGAL Terre 可视化编辑器，提供了一键导出安卓项目文件的选项。

如果你使用源代码构建项目请切换到源代码选项卡。

## 前期准备

::: tabs#android

@tab WebGAL Terre

* 下载安装 [Android Studio](https://developer.android.com/studio)

@tab 源代码

* 下载安装 [Android Studio](https://developer.android.com/studio)
* 将 [WebGAL](https://github.com/MakinoharaShoko/WebGAL) 编译为 Web 网页
* 下载 [WebGAL Android 项目模板](https://github.com/nini22P/WebGAL-Android)

:::

## 在 Android Studio 中打开项目

::: warning
如果想要使用 Android Studio 直接从项目导出的文件夹打开，请新建游戏时填入**英文**，如果游戏文件夹名不是英文，请在更多菜单中重命名为英文或者打开 `WebGAL_Terre\public\games` 修改你的游戏名，并保证项目的文件路径中不会出现英文以外的字符，否则会报错
:::

::: tabs#android

@tab WebGAL Terre

在编辑器顶栏修改游戏配置中的 `游戏标题` 、 `游戏包名` 和 `游戏图标`。
游戏包名是你的网站域名反写，如果没有域名可以考虑使用开发者加游戏名的组合，比如 `webgaldev.mygame` 这种形式，**必须**使用**英文**。

在编辑器右上角选择导出为安卓项目文件，系统会自动打开文件夹。

打开 android studio 选择刚刚导出的 `android` 目录，等待依赖下载完毕。

![在 Android Studio 中打开项目](open-in-android-studio.jpg)

@tab 源代码

下载并解压 [项目模板](https://github.com/nini22P/WebGAL-Android)，将文件夹改名（切记必须使用英文）。
打开 `项目文件夹\app\src\main\assets\webgal` 文件夹，将你要打包的游戏放到这里。

游戏默认加载 `项目文件夹\app\src\main\assets\webgal\index.html`，如果想要自定义加载链接（比如在线链接），请修改 `项目文件夹\app\src\main\res\values\values.xml` 文件里面的 `load_url` 字段。

打开 Android Studio 打开项目。
修改 `项目文件夹\settings.gradle` 文件中的 `rootProject.name` 字段。

``` gradle
...
rootProject.name = "WebGAL" //修改项目标题
...
```

修改 `项目文件夹\app\src\main\res\values\strings.xml` 中的标题信息。

``` xml
<resources>
    <string name="app_name">WebGAL</string> //修改游戏标题
</resources>
```

修改 `项目文件夹\app\build.gradle` 中的 `namespace` 和 `applicationId` 字段，格式为域名反写。

``` gradle
...
android {
    namespace 'com.openwebgal.demo' //修改包名
...
    defaultConfig {
        applicationId "com.openwebgal.demo" //修改包名
...
```

点击菜单栏中的 `File -> Sync Project with Gradle files` 等待同步完毕。

修改 `项目文件夹\app\src\main\java\com\openwebgal\demo\MainActivity.kt` 首行的 `package` 字段为前面更改的目标包名。

``` kotlin
package com.openwebgal.demo //修改包名
...
```

上面这个字段修改后会报错，这时候点击刚刚修改的包名，然后点击“黄色灯泡”选择 `Move file to '目标包名'`，再将原本包名文件夹删掉。

点击菜单栏中的 `File -> New -> Image Asset` 修改游戏图标，注意图标分为前后两层。

![创建图标](create-icons.jpg)

:::

## 调试运行

打开安卓手机的 USB 调试并连接电脑，点击上方工具栏设备标题旁的运行图标后在手机上运行。

![在设备上运行](run-app.jpg)

## 编译 APK

点击菜单栏中 `Build -> Generate Signed Bundle or APK` ，在弹出的菜单中选择 `APK`。

根据提示创建或者选择密钥。

![创建或者选择密钥](keystore.jpg)

选择 `release` 后点击 `Create` 等待编译完毕。

![选择编译变体](build.jpg)

![编译完毕](finsh.jpg)

## 视频教程

[使用 Android Studio 打包 WebGAL 游戏到 Android 平台](https://www.bilibili.com/video/BV1m24y1J7ct/)

## 兼容性以及解决方案

目前支持最低版本是安卓 5.0，并依赖于系统预装的 Android System WebView, 如果您的设备在点击首屏后黑屏或者有其他问题，请尝试以下任意一种方案：

* 进入 Play 商店更新 [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)
* 手动下载 [Android System WebView](https://www.apkmirror.com/apk/google-inc/android-system-webview/) 进行更新
* 如果是华为安卓设备，可以尝试下载安装 [Huawei WebView](https://www.apkmirror.com/apk/huawei/huawei-webview-2/)
