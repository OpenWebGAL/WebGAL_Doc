# Edit Game Configuration

Under the `game` folder, there is a file named `config.txt`, you can fill in the relevant information of your game in this file (you can edit it directly using a graphical editor).

| Parameter | Description |
| :------------ | :----------------------------------------------- |
| Game_name | Game name |
| Game_key | Game identification code, 6-10 characters in length, do not repeat with other games |
| Title_img | Title picture, put it in the `background` folder |
| Title_bgm | Title background music, put it in the `bgm` folder |
| Game_Logo | Game Logo, multiple can be displayed, separated by \| |
| Textbox_theme | Game dialog style, you can choose imss style or standard style |

The following is a sample configuration file:

``` text
Game_name:WebGAL;
Game_key:0f33fdGr;
Title_img:Title.png;
Title_bgm:夏影.mp3;
Game_Logo:WebGalEnter.png|bg.png;
Textbox_theme:imss;
```