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
| Max_line                     | Maximum number of displayed lines in the text box                                           |
| Line_height                  | Line height of the text box (unit: em)                                                      |
| Steam_AppID                  | Steam App ID, used to initialize Steam integration. Only effective in Electron builds        |

The following is a sample configuration file:

``` text
Game_name:WebGAL;
Game_key:0f33fdGr;
Title_img:Title.png;
Title_bgm:夏影.mp3;
Game_Logo:WebGalEnter.png|bg.png;
Enable_Appreciation:true;
```

## Switching Languages

`Default_Language` only sets the default interface language when the player launches the game for the first time. Players can still switch languages later in `Menu -> Options -> System -> Language`, and the selected language will be saved locally and reused on the next launch.

If you also prepare multiple script languages, read the current interface language in your script and jump to the corresponding scene file. You can use the internal variable `$userData.optionData.language`:

``` webgal
setVar:lang=($userData.optionData.language);
changeScene:start_zh.txt -when=lang==0;
changeScene:start_en.txt -when=lang==1;
changeScene:start_ja.txt -when=lang==2;
```

The numeric values map to languages as follows:

| Value | Language |
| :-- | :-- |
| 0 | Simplified Chinese |
| 1 | English |
| 2 | Japanese |
| 3 | French |
| 4 | German |
| 5 | Traditional Chinese |

::: tip
Changing the language from the menu only changes the engine UI language. If you want the game script itself to switch too, branch to different scene files in your script as shown above.
:::
