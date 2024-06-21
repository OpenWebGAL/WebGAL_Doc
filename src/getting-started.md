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

[WebGAL 主页（推荐）](https://openwebgal.com/zh-cn/download/)

[GitHub Releases](https://github.com/MakinoharaShoko/WebGAL_Terre/releases)

::: tip
WebGAL Terre 可视化编辑器默认 **不支持 Windows 7**。
Windows 7 用户请参考 **[Windows 7 使用可视化编辑器开始制作的方法](./win7)**。
:::

## 方法2：从源代码开始调试（适用于想要更高自定义程度的制作者）

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

推荐使用 VS Code 进行开发，并使用插件来实现语法高亮：

[语法高亮插件的商店地址](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[语法高亮插件的源代码仓库](https://github.com/C6H5-NO2/webgal-script-basics)

如果你要打包，请使用

``` shell
yarn build
```

打包产物在 packages/webgal/dist 目录下

::: tip
在你完成自定义后，如果你想要使用 WebGAL 编辑器来方便地实时预览和进行资源管理，你可以将打包后的产物复制粘贴并替换掉编辑器目录下的 `packages/terre2/assets/templates/WebGAL_Template`，这样你可以将 WebGAL 编辑器内置的引擎换成自己定制过的。如果你的 WebGAL 仓库 和 WebGAL_Terre 仓库在同一目录下，你可以使用 `release-to-terre` 快捷脚本来执行
:::
