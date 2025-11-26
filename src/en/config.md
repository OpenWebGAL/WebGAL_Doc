# Edit Game Configuration

Under the `game` folder, there is a file named `config.txt`, you can fill in the relevant information of your game in this file (you can edit it directly using a graphical editor).

| Parameter                    | Description                                                                                 |
| :--------------------------- | :------------------------------------------------------------------------------------------ |
| Game_name                    | Game name                                                                                   |
| Game_key                     | Game identification code, 6-10 characters in length, do not repeat with other games         |
| Title_img                    | Title picture, put it in the `background` folder                                            |
| Title_bgm                    | Title background music, put it in the `bgm` folder                                          |
| Game_Logo                    | Game Logo, multiple can be displayed, separated by \|                                       |
| Enable_Appreciation          | Whether to enable the Appreciation feature, including CG and background music appreciation. |
| Default_Language             | Default language, can be set to 'zh_CN', 'zh_TW', 'en', 'ja', 'fr', 'de'                    |
| Show_panic                   | Whether to enable the panic button feature, set to true or false                            |
| Legacy_Expression_Blend_Mode | Whether to enable legacy expression blend mode for Live2D, set to true or false             |
| Max_lineHeight               | The line height of the text box, in `em`                                                    |

The following is a sample configuration file:

``` text
Game_name:WebGAL;
Game_key:0f33fdGr;
Title_img:Title.png;
Title_bgm:夏影.mp3;
Game_Logo:WebGalEnter.png|bg.png;
Enable_Appreciation:true;
```
