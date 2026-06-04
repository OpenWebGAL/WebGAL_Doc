# 编辑游戏配置

在 `game` 文件夹下，有一个名为 `config.txt` 的文件，你可以在这个文件中填写你游戏的相关信息（使用图形化编辑器可以直接编辑）。

| 参数                         | 描述                                                        |
| :--------------------------- | :---------------------------------------------------------- |
| Game_name                    | 游戏名称                                                    |
| Game_key                     | 游戏识别码，长度 6-10 字符，不要与别的游戏重复              |
| Title_img                    | 标题图片，放在 `background` 文件夹                          |
| Title_bgm                    | 标题背景音乐，放在 `bgm` 文件夹                             |
| Game_Logo                    | 游戏 Logo，可以显示多个，用 \| 分割                         |
| Enable_Appreciation          | 是否启用鉴赏功能，包括 CG 和背景音乐鉴赏。                  |
| Default_Language             | 默认语言，可设置为 'zh_CN', 'zh_TW', 'en', 'ja', 'fr', 'de' |
| Show_panic                   | 是否启用紧急回避功能，设置为 true 或 false                  |
| Legacy_Expression_Blend_Mode | 是否启用 Live2D 的旧表情混合模式，设置为 true 或 false      |
| Max_line                     | 文本框的最大显示行数                                        |
| Line_height                  | 文本框的行高（单位：em）                                    |
| Steam_AppID                  | Steam 应用 ID，用于初始化 Steam 集成，仅在 Electron 构建环境下有效 |

以下是配置文件示例：

``` text
Game_name:WebGAL; 
Game_key:0f33fdGr;
Title_img:Title.png;
Title_bgm:夏影.mp3;
Game_Logo:WebGalEnter.png|bg.png;
Enable_Appreciation:true;
```

## 切换语言

`Default_Language` 只用于设置玩家首次进入游戏时的默认界面语言。玩家之后仍可在游戏菜单的 `选项 -> 系统 -> Language` 中切换语言，所选结果会保存在本地，下次进入游戏时优先使用本地设置。

如果你同时准备了多语言剧本，需要在脚本中读取当前界面语言，并跳转到对应的场景文件。可以使用内部变量 `$userData.optionData.language`：

```webgal
setVar:lang=($userData.optionData.language);
changeScene:start_zh.txt -when=lang==0;
changeScene:start_en.txt -when=lang==1;
changeScene:start_ja.txt -when=lang==2;
```

其中，不同数字对应的语言如下：

| 值 | 语言 |
| :-- | :-- |
| 0 | 简体中文 |
| 1 | English |
| 2 | 日本語 |
| 3 | Français |
| 4 | Deutsch |
| 5 | 繁體中文 |

::: tip
菜单中的语言切换会改变引擎界面语言。如果你希望游戏正文也跟随切换，需要像上面这样在脚本里自行分流到不同语言的场景。
:::
