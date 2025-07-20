# 定制开发与参与贡献

## WebGAL 源代码仓库的地址

[https://github.com/OpenWebGAL/WebGAL](https://github.com/OpenWebGAL/WebGAL)

## 分支说明

```
main: 稳定版
dev: WebGAL 开发版
其他分支: 旧版本的留档
```

## 更新计划

参见 [WebGAL 情报](/info)

## 贡献者指引

如果你想要参与的是 WebGAL Terre 可视化编辑器的贡献，请参考 [WebGAL Terre 贡献者指南](terre)

### 参与贡献的要求

为了帮助我们更好地理解和审核您的贡献，请您注意以下几点：

**提交 Pull Request 前的准备工作**：

*先提交 Issue*： **在开始任何开发工作前，请先提交一个 Issue 来讨论您的想法和设计方案**。这有助于避免重复工作，确保您的贡献符合项目的方向，并避免 PR 因设计问题无法合并的情况。

*RFC（Request for Comments）*： 对于大型改动或新功能，建议先提交 RFC 或详细的设计提案，与维护者和社区成员讨论技术方案的可行性。

**代码质量要求**：

*代码注释*： 为了方便我们理解您的代码思路，建议您在关键部分添加注释说明。

*功能测试*： 如果您添加或修改了功能，请提供相应的测试方法，以确保功能正常运行。如果您进行了代码重构，也请提供测试方法来覆盖受影响的范围，确保重构没有引入新的问题。

*清晰的说明*： 在提交 Pull Request 时，请简要说明您所做的改动以及背后的原因，并引用相关的 Issue，这将有助于我们更快地理解您的贡献。

### 在本地启动 WebGAL 项目

WebGAL 目前使用 yarn 作为包管理器，以及 yarn workspace monorepo 管理器。

如果你没有 yarn ，请输入以下指令安装

```shell
npm install yarn -g
```

然后在项目根目录执行

```shell
yarn
```
以安装依赖。

本项目有3个 package，分别对应不同的功能：

| 包名   | 内容                       |
| ------ | -------------------------- |
| parser | WebGAL 解析器              |
| server | WebGAL 本地调试服务器      |
| webgal | 引擎本体                   |
| yukimi | 正在计划中的 yukimi 支持库 |

## 在本地启动 WebGAL 引擎项目

你可以通过运行以下脚本启动开发服务器

```shell
yarn dev
```

如果你想要构建 WebGAL，请使用

```shell
yarn build
```

打包产物在  `packages/webgal/dist` 目录下。

## 关于 WebGAL 的技术

WebGAL 是一个已经有一定规模的项目，直接钻进代码中可能会令人感到一时间难以适应。因此，在这里有一份关于 WebGAL 技术的参考文档，帮助你理解 WebGAL 。

[WebGAL 技术介绍](/tech)

除此以外，在源代码的一些关键目录，我们也会提供一些说明文档来解释这个模块的原理。这些信息将以中文提供。如今，大语言模型在翻译上的表现已经足够好，所以如果你无法阅读中文，也不必担心。你可以尝试使用大语言模型将其翻译为你的语言。

## 将构建后的 WebGAL 导入 WebGAL Terre 编辑器

::: tip
在你完成自定义后，如果你想要使用 WebGAL 编辑器来方便地实时预览和进行资源管理，你可以将打包后的产物复制粘贴并替换掉编辑器目录下的 `packages/terre2/assets/templates/WebGAL_Template`，这样你可以将 WebGAL 编辑器内置的引擎换成自己定制过的。如果你的 WebGAL 仓库 和 WebGAL_Terre 仓库在同一目录下，你可以使用 `release-to-terre` 快捷脚本来执行
:::
