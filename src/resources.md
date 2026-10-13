# 管理游戏资源

::: tip
如果你使用图形化编辑器，你可以在左侧的工具栏中直接打开对应的资源文件夹。如果你基于源代码开发，该文件夹在 `public` 下。
:::

你的所有游戏剧本、图片、立绘都应该放在游戏工程对应的 `game` 文件夹下，目录对应的资源说明如下：

| 文件夹     | 存放的资源                   |
| :--------- | :-------------------------- |
| animation  | 动画描述文件                 |
| background | 用于存放背景图片、标题页背景  |
| figure     | 用于存放人物立绘             |
| scene      | 用于存放用户剧本             |
| bgm        | 用于存放背景音乐             |
| vocal      | 用于存放配音文件             |
| video      | 用于存放视频                 |
| tex        | 用于存放特效纹理文件         |

此外，`game` 文件夹下还有以下文件：

| 文件 / 文件夹      | 用途 |
| :----------------- | :-- |
| config.txt         | 游戏配置，详见[编辑游戏配置](config.md) |
| template           | 界面模板，详见[自定义 UI](webgal-script/custom-ui.md) |
| userStyleSheet.css | 全局样式表，详见[自定义 UI](webgal-script/custom-ui.md#user-style-sheet) |
| flowchart.json     | 流程图数据，详见[流程图](webgal-script/flowchart.md) |
