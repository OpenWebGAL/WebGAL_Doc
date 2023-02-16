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

# WebGAL 技术介绍

## 场景系统与预加载

### 场景获取

### 预加载场景中的资源

## WebGAL 解析器

### 语句解析 Ⅰ 拆分场景

### 语句解析 Ⅱ 脚本类型解析

### 语句解析 Ⅲ 对话的特殊处理

### 语句解析 Ⅳ 参数解析

### 语句解析 Ⅴ 资源处理与预加载

## 流程控制系统

### 准备阶段：步进前操作

### 正式阶段 Ⅰ：读指令、执行条件判断

### 正式阶段 Ⅱ：调用、获取演出控制模块送演出控制器

### 结束阶段：处理连续演出、更新 Backlog

### 自动与快进

## 演出控制

### WebGAL 演出类型

### 演出的自动销毁、结束判断、阻塞逻辑

## 舞台控制器与动画控制

### 数据驱动的 Pixi 舞台控制器

### 动画与“变换”控制

## 存读档、回溯与用户数据

### WebGAL 状态表介绍

### 演出状态的存储与恢复

### 存档与其他用户数据的存储

## 鉴赏模块，以及一些细枝末节

### 鉴赏模块

### 离开浏览器状态保持与“继续游戏”

### 快捷键与鼠标操作