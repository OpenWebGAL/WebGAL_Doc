# 开发信息文档

## 分支说明

```
main: 稳定版
4.X-dev: WebGAL 4.x 开发版
其他分支: 旧版本的留档
```

## 更新计划

WebGAL 引擎：参见 https://github.com/MakinoharaShoko/WebGAL/projects/1

WebGAL 编辑器：参见 https://github.com/users/MakinoharaShoko/projects/1

# 贡献者指引

WebGAL 目前使用 yarn 作为包管理器，以及 monorepo 管理器。

如果你没有 yarn ，请输入以下指令安装

```shell
npm install yarn -g
```

然后 Clone 本项目，在项目根目录输入

```shell
yarn
```

本项目有3个 package：

| 包名   | 内容                  |
| ------ | --------------------- |
| parser | WebGAL 解析器         |
| server | WebGAL 本地调试服务器 |
| webgal | 引擎本体              |

## 在本地启动 WebGAL 项目

WebGAL 使用 vite 作为打包与调试工具，进入 webgal 包下后，你可以通过运行以下脚本启动开发服务器

```shell
yarn dev
```

如果你要打包，请使用

```shell
yarn build
```