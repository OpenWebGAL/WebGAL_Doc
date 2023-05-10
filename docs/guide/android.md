# 将游戏打包到 andoird 平台

## 前期准备

::: tip 提示
使用 WebGAL 编辑器自动导出工程文件的游戏开发者只需安装 android studio 即可
:::

* 下载安装 [Android Studio](https://developer.android.google.cn/studio/)。
* 将 [WebGAL](https://github.com/MakinoharaShoko/WebGAL) 游戏导出 Web 版本。
* 下载 [WebGAL Android 项目模板](https://github.com/nini22P/WebGAL-Android)。

## 方法一：自动导出工程文件 (适用于使用 WebGAL 编辑器的游戏开发者)

::: warning 注意
如果想要使用 android studio 直接从项目导出的文件夹打开，请新建游戏时填入**英文**，如果游戏名已经是中文，请打开 `WebGAL_Terre\public\games` 修改你的游戏名，并保证项目的文件路径中不会出现英文以外的字符，否则会报错。
:::

### 导出和修改

在编辑器左边侧边栏修改`游戏标题`和`游戏包名`。游戏包名是你的网站域名反写，如果没有域名可以考虑使用开发者加游戏名的组合，比如 `webgalteam.mygalgame` 这种形式，**必须**使用**英文**。

在编辑器右上角选择导出为安卓工程文件，然后打开 android studio 选择刚刚导出的 `android` 目录，等待依赖下载完毕。

点击菜单栏中的 `File -> New -> Image Asset` 修改游戏图标，注意图标分为前后两层。

### 运行和编译

将安卓手机的 USB 调试打开插入电脑，点击上方工具栏设备标题旁的运行图标后在手机上运行。

点击菜单栏中 `Build -> Generate Signed Bundle or APK`，根据提示创建密钥并编译，等待编译完毕。

## 方法二：手动编辑工程文件 (适用于在本地通过书写脚本的形式或者通过源码编译开发的游戏开发者)

### 游戏导入

首先将游戏导出为 Web 网页，解压 [项目模板](https://github.com/nini22P/WebGAL-Android)，将文件夹改名（切记必须使用英文）。
打开 `项目文件夹\app\src\main\assets\webgal` 文件夹，将你要打包的游戏放到这里。

::: tip 提示
游戏默认加载 `项目文件夹\app\src\main\assets\webgal\index.html`，如果想要自定义加载链接（比如在线链接），请修改  `项目文件夹\app\src\main\res\values\values.xml` 文件里面的 `load_url` 字段。
:::

### 信息修改

打开 Android Studio 导入项目。
修改`项目文件夹\settings.gradle` 文件中的 `rootProject.name` 字段。

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
    namespace 'io.github.nini22p.webgal' //修改包名
...
    defaultConfig {
        applicationId "io.github.nini22p.webgal" //修改包名
...
```

点击菜单栏中的 `File -> Sync Project with Gradle files` 等待同步完毕。

修改 `项目文件夹\app\src\main\java\io\github\nini22p\webgal\MainActivity.kt` 首行的 `package` 字段为前面更改的目标包名。

``` kotlin
package io.github.nini22p.webgal //修改包名
...
```

上面这个字段修改后会报错，这时候点击刚刚修改的包名，然后点击“黄色灯泡”选择 `Move file to '目标包名'`，再将原本包名文件夹删掉。

点击菜单栏中的 `File -> New -> Image Asset` 修改游戏图标，注意图标分为前后两层。

### 运行和编译

将安卓手机的 USB 调试打开插入电脑，点击上方工具栏设备标题旁的运行图标后在手机上运行。

点击菜单栏中 `Build -> Generate Signed Bundle or APK`，根据提示创建密钥并编译，等待编译完毕。

## 视频教程（方法二）

[使用 Android Studio 打包 WebGAL 游戏到 Android 平台](https://www.bilibili.com/video/BV1m24y1J7ct/)
