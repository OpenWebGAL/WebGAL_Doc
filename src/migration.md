# 在编辑器更新后迁移游戏文件

## 迁移游戏

WebGAL Terre 编辑器的游戏工程文件目录在 `public/games` 目录下。在这个目录下，你可以看到你所创建的游戏名称。

当你下载或安装了新的编辑器后，你可以将旧版本编辑器下的游戏直接迁移到新版本编辑器的相同目录下，然后打开新版本编辑器，即可使用。

除大版本（版本号的第一位数字）升级的兼容性不保证之外，一般来说游戏都可以向下兼容。

## 迁移模板和定制引擎

如果你创建了模板，或导入了定制引擎，你也需要迁移这些文件到新版本的编辑器。模板文件在 `public/templates` 目录下。
定制引擎在 `assets/templates/Derivative_Engine`目录下。你需要将这些文件迁移到新版本的相同目录下。
