# 在编辑器更新后迁移游戏文件

WebGAL Terre 4.6 大幅调整了用户数据组织方式。本文保留 4.5 及更早版本的手动迁移说明，并额外说明从 4.5 升级到 4.6 时应如何迁移。

## 从 4.5 升级到 4.6

从 4.6 开始，WebGAL Terre 会把游戏、模板、定制引擎和导出内容统一管理在用户数据目录中。4.6 的安装目录下不再默认提供旧版本使用的 `public/games`、`public/templates`、`assets/templates/Derivative_Engine` 等用户工程目录，因此把 4.5 的文件复制到 4.6 安装目录下的同名目录不再可行。

请按以下方式手动迁移：

1. 先打开一次 WebGAL Terre 4.6，让 Terre 创建新的用户数据目录。
2. 在 WebGAL Terre 4.6 中打开设置，进入用户数据相关设置，点击打开用户数据目录。
3. 打开旧版 WebGAL Terre 4.5 的安装目录。
4. 将 4.5 中 `public/games` 目录下的每个游戏工程文件夹复制到 4.6 用户数据目录的 `games` 目录下。
5. 如果你有自定义模板，将 4.5 中 `public/templates` 下的自定义模板文件夹复制到 4.6 用户数据目录的 `templates` 目录下。内置模板不需要复制。
6. 如果你导入过定制引擎，将 4.5 中 `assets/templates/Derivative_Engine` 下的定制引擎文件夹复制到 4.6 用户数据目录的 `derivative-engines` 目录下。
7. 回到 WebGAL Terre 4.6，刷新游戏列表、模板列表或重启 Terre，确认内容是否已经出现。

4.6 用户数据目录中主要目录的作用如下：

- `games`：保存你的游戏工程。旧版 `public/games/<游戏名>` 应迁移为 `games/<游戏名>`。
- `templates`：保存你创建或导入的自定义模板。旧版 `public/templates/<模板名>` 应迁移为 `templates/<模板名>`。
- `derivative-engines`：保存定制引擎。旧版 `assets/templates/Derivative_Engine/<引擎名>` 应迁移为 `derivative-engines/<引擎名>`。
- `Exported_Games`：保存从 Terre 导出的游戏文件。
- `config.json`：保存 Terre 的用户数据配置，请不要在不了解含义的情况下手动修改。

如果你使用 portable 模式，实际用户数据目录是安装目录下的 `data` 文件夹；迁移时仍然把游戏、模板和定制引擎放入该目录下的 `games`、`templates`、`derivative-engines`。

自 4.6 开始，后续升级 WebGAL Terre 时不再需要手动迁移游戏文件。用户数据目录会在版本升级后继续复用，除非你主动更改用户数据目录或使用 portable 模式切换了数据位置。

## 4.5 及更早版本的迁移游戏

WebGAL Terre 编辑器的游戏工程文件目录在 `public/games` 目录下。在这个目录下，你可以看到你所创建的游戏名称。

当你下载或安装了新的编辑器后，你可以将旧版本编辑器下的游戏直接迁移到新版本编辑器的相同目录下，然后打开新版本编辑器，即可使用。

除大版本（版本号的第一位数字）升级的兼容性不保证之外，一般来说游戏都可以向下兼容。

## 4.5 及更早版本的迁移模板和定制引擎

如果你创建了模板，或导入了定制引擎，你也需要迁移这些文件到新版本的编辑器。模板文件在 `public/templates` 目录下。
定制引擎在 `assets/templates/Derivative_Engine` 目录下。你需要将这些文件迁移到新版本的相同目录下。