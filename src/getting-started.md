# 如何开始制作 WebGAL？

::: warning
无论你使用何种方式制作 WebGAL 游戏，你都应该花一点时间将开发指引的全部内容阅读一遍。这不需要多长时间，并且将有利于你避开一些因操作不当导致的问题。

你知道吗，大多数你感到疑惑的问题都可以在文档中找到答案。如果你坚信你遇到了 Bug，请在 [issues](https://github.com/MakinoharaShoko/WebGAL/issues) 提出问题或者发送电子邮件联系 <contact@openwebgal.com>，你也可以在网站的右上角的“更多”一栏找到加入 WebGAL 讨论社区的方法。
:::

::: danger
请使用现代浏览器 (Chrome / Firefox / Edge) 打开 WebGAL 和编辑器。使用其他浏览器所可能产生的问题，将不会得到解决。
:::

## 方法1：使用 WebGAL Terre 可视化编辑器（推荐）

**WebGAL Terre 可视化编辑器是创建、制作并发布一个 WebGAL 的最佳方式。**

在下载 WebGAL Terre 可视化编辑器后，请解压压缩包并启动 WebGAL_Terre 可执行文件。WebGAL Terre 将会自动打开默认浏览器，如果没有打开，请输入 [http://localhost:3001/](http://localhost:3001/) 打开编辑器。

下载 WebGAL Terre 可视化编辑器：

[WebGAL 主页](https://openwebgal.com/zh-cn/download/)

[GitHub Releases](https://github.com/MakinoharaShoko/WebGAL_Terre/releases)

[123网盘](https://www.123pan.com/s/YHszVv-jqzJ.html)

::: tip
WebGAL Terre 可视化编辑器默认 **不支持 Windows 7**。
Windows 7 用户请参考 **[Windows 7 使用可视化编辑器开始制作的方法](./win7)**。
:::

## 方法2：在本地通过书写脚本的形式开发，并实时调试

首先，下载已经被构建为静态网页的 WebGAL 发行版以及配套的调试环境。

下载 WebGAL 引擎本体及调试环境（不包括可视化编辑器）：

[GitHub Releases](https://github.com/MakinoharaShoko/WebGAL/releases/)

下载并解压后，你可以直接运行对应版本的 WebGAL-server 开始调试你的视觉小说。如果遇到杀毒软件拦截或防火墙拦截等情况，请放行以允许该程序运行。

推荐使用 VS Code 进行开发，并使用插件来实现语法高亮：

[语法高亮插件的商店地址](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[语法高亮插件的源代码仓库](https://github.com/C6H5-NO2/webgal-script-basics)

## 方法3：从源代码开始调试（适用于想要更高自定义程度的前端开发者）

``` shell
git clone https://github.com/MakinoharaShoko/WebGAL.git
```

安装并使用 yarn 安装依赖

``` shell
npm install yarn -g
yarn
```

WebGAL 使用 vite 作为打包与调试工具，你可以通过运行以下脚本启动开发服务器

``` shell
yarn dev
```

如果你要打包，请使用

``` shell
yarn build
```

打包产物在 packages/webgal/dist 目录下
