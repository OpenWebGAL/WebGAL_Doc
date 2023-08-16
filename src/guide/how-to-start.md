# 如何开始制作 WebGAL？

## 方法1：使用 WebGAL 可视化编辑器（推荐）

**WebGAL 编辑器是创建、制作并发布一个 WebGAL 的最佳方式。**

在下载 WebGAL 编辑器后，请解压压缩包并启动 WebGAL_Terre 应用程序。WebGAL Terre 将会自动打开默认浏览器，如果没有打开，请输入 [http://localhost:3001/](http://localhost:3001/) 打开编辑器。

::: danger 警告
请使用现代浏览器 (Chrome / Firefox / Edge) 打开 WebGAL 和编辑器。使用其他浏览器所可能产生的问题，将不会得到解决。
:::

::: tip 提示
本页方法**不支持 Windows 7** , Windows 7 用户请参考 **[Windows 7 使用可视化编辑器开始制作的方法](./win7)**。

WebGAL 编辑器目前只在 Windows 10+ 系统上经过测试，我们将逐步添加对 Mac OS 和 Linux 的支持。
:::

下载 WebGAL 可视化编辑器：

[GitHub](https://github.com/MakinoharaShoko/WebGAL_Terre/releases)

[123网盘（所有版本被放在一个文件夹内，请下载最新版本）](https://www.123pan.com/s/YHszVv-jqzJ.html)

## 方法2：在本地通过书写脚本的形式开发，并实时调试

首先，下载已经被构建为静态网页的 WebGAL 发行版以及配套的调试环境。

下载 WebGAL 引擎本体及调试环境（不包括可视化编辑器）：

[GitHub](https://github.com/MakinoharaShoko/WebGAL/releases/)

下载并解压后，你可以直接运行对应版本的 WebGAL-server 开始调试你的视觉小说。如果遇到杀毒软件拦截或防火墙拦截等情况，请放行以允许该程序运行。

推荐使用 VS Code 进行开发，并使用插件来实现语法高亮：

[语法高亮插件的商店地址](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[语法高亮插件的源代码仓库](https://github.com/C6H5-NO2/webgal-script-basics)

## 方法3：从源代码开始调试（适用于想要更高自定义程度的前端开发者）

``` Shell
git clone https://github.com/MakinoharaShoko/WebGAL.git
```

安装并使用 yarn 安装依赖

``` Shell
npm install yarn -g
yarn
```

WebGAL 使用 vite 作为打包与调试工具，你可以通过运行以下脚本启动开发服务器

``` Shell
yarn dev
```

如果你要打包，请使用

``` Shell
yarn build
```

打包产物在 packages/webgal/dist 目录下
