# 如何使用定制引擎

定制引擎功能是 WebGAL Terre 4.5.0 版本加入的功能。相比于只能使用 WebGAL 官方模板创建一个新的游戏项目，定制引擎允许你在创建游戏项目时使用你自己开发或他人开发的，针对某种类型游戏的定制版本。

## 定制引擎的文件结构

定制引擎一般以压缩包的形式分发。解压后，得到以定制引擎为名称的一个目录，目录结构大致是这样的（name 是定制引擎在 WebGAL Terre 中显示的名称）：

```
name
├── assets
├── game
├── icons
├── index.html
├── manifest.json
└── webgal-serviceworker.js
```

然后，将这样的目录放入 WebGAL Terre 的 assets/templates/Derivative_Engine 下，形成形如如下文件结构（否则不能正常创建游戏）：

```
Derivative_Engine
└── name
    ├── assets
    ├── game
    ├── icons
    ├── index.html
    ├── manifest.json
    └── webgal-serviceworker.js

```

启动 WebGAL Terre，你应该可以在创建游戏时选择使用定制引擎创建游戏。