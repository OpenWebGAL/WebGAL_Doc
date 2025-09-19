# ゲーム設定を編集する

`game` フォルダの下に `config.txt` というファイルがあり、このファイルにゲームの関連情報を記入することができます（グラフィカルなエディタを使って直接編集することもできます）。

| パラメータ | 説明 |
| :------------ | :----------------------------------------------- |
| Game_name | ゲーム名 |
| Game_key | ゲーム識別コード、長さ 6-10 文字、他のゲームと重複しないようにしてください |
| Title_img | タイトル画像、`background` フォルダに入れてください |
| Title_bgm | タイトルの BGM、`bgm` フォルダに入れてください |
| Game_Logo | ゲームのロゴ、複数表示することができ、\| で区切ります |
| Enable_Appreciation     | 鑑賞機能（CGおよび背景音楽の鑑賞を含む）を有効にするかどうか。    |
| Default_Language     | デフォルト言語、「zh_CN」、「zh_TW」、「en」、「ja」、「fr」、「de」に設定可能。 |
| Show_panic     | パニックボタン機能を有効にするかどうか、true または false に設定 |
| Legacy_Expression_Blend_Mode     | Live2D の旧表情ブレンドモードを有効にするかどうか、true または false に設定 |

以下は設定ファイルの例です。

``` text
Game_name:WebGAL;
Game_key:0f33fdGr;
Title_img:Title.png;
Title_bgm:夏影.mp3;
Game_Logo:WebGalEnter.png|bg.png;
Enable_Appreciation:true;
```
