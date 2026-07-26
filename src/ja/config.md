# ゲーム設定を編集する

`game` フォルダの下に `config.txt` というファイルがあり、このファイルにゲームの関連情報を記入することができます（グラフィカルなエディタを使って直接編集することもできます）。

| パラメータ                   | 説明                                                                             |
| :--------------------------- | :------------------------------------------------------------------------------- |
| Game_name                    | ゲーム名                                                                         |
| Game_key                     | ゲーム識別コード、長さ 6-10 文字、他のゲームと重複しないようにしてください       |
| Title_img                    | タイトル画像、`background` フォルダに入れてください                              |
| Title_bgm                    | タイトルの BGM、`bgm` フォルダに入れてください                                   |
| Game_Logo                    | ゲームのロゴ、複数表示することができ、\| で区切ります                            |
| Enable_Appreciation          | 鑑賞機能（CGおよび背景音楽の鑑賞を含む）を有効にするかどうか。                   |
| Default_Language             | デフォルト言語、「zh_CN」、「zh_TW」、「en」、「ja」、「fr」、「de」に設定可能。 |
| Show_panic                   | パニックボタン機能を有効にするかどうか、true または false に設定                 |
| Legacy_Expression_Blend_Mode | Live2D の旧表情ブレンドモードを有効にするかどうか、true または false に設定      |
| Max_line                     | テキスト表示フレームの最大行数                                                   |
| Line_height                  | テキストフレームの行高(単位:em)                                                  |
| Steam_AppID                  | Steam アプリ ID。Steam 連携の初期化に使用します。Electron ビルド環境でのみ有効です |

以下は設定ファイルの例です。

``` text
Game_name:WebGAL;
Game_key:0f33fdGr;
Title_img:Title.png;
Title_bgm:夏影.mp3;
Game_Logo:WebGalEnter.png|bg.png;
Enable_Appreciation:true;
```

## 言語の切り替え

`Default_Language` は、プレイヤーが初回起動したときのデフォルトの UI 言語を設定するための項目です。プレイヤーはその後もゲームメニューの `オプション -> システム -> Language` から言語を切り替えることができ、選択結果はローカルに保存され、次回起動時にも優先して使われます。

複数言語のスクリプトも用意している場合は、スクリプト内で現在の UI 言語を読み取り、対応するシーンファイルへ分岐してください。内部変数 `$userData.optionData.language` を利用できます。

``` webgal
setVar:lang=($userData.optionData.language);
changeScene:start_zh.txt -when=lang==0;
changeScene:start_en.txt -when=lang==1;
changeScene:start_ja.txt -when=lang==2;
```

各数値と言語の対応は次のとおりです。

| 値 | 言語 |
| :-- | :-- |
| 0 | 简体中文 |
| 1 | English |
| 2 | 日本語 |
| 3 | Français |
| 4 | Deutsch |
| 5 | 繁體中文 |

::: tip
メニューでの言語切り替えは、エンジン UI の言語を変更します。ゲーム本文も連動して切り替えたい場合は、上記のようにスクリプト側で言語ごとのシーンへ分岐してください。
:::
