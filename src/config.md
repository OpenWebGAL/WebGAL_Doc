# 编辑游戏配置

在 `game` 文件夹下，有一个名为 `config.txt` 的文件，你可以在这个文件中填写你游戏的相关信息（使用图形化编辑器可以直接编辑）。

| 参数          | 描述                         |
| :------------ |:---------------------------|
| Game_name     | 游戏名称                       |
| Game_key      | 游戏识别码，长度 6-10 字符，不要与别的游戏重复 |
| Title_img     | 标题图片，放在 `background` 文件夹   |
| Title_bgm     | 标题背景音乐，放在 `bgm` 文件夹        |
| Game_Logo     | 游戏 Logo，可以显示多个，用 \| 分割     |
| Enable_Appreciation     | 是否启用鉴赏功能，包括 CG 和背景音乐鉴赏。    |
| Default_Language     | 默认语言，可设置为 'zh_CN', 'zh_TW', 'en', 'ja', 'fr', 'de' |

以下是配置文件示例：

``` text
Game_name:WebGAL; 
Game_key:0f33fdGr;
Title_img:Title.png;
Title_bgm:夏影.mp3;
Game_Logo:WebGalEnter.png|bg.png;
Enable_Appreciation:true;
```
