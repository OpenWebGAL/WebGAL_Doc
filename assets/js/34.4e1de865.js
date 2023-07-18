(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{309:function(a,e,t){"use strict";t.r(e);var v=t(14),_=Object(v.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"webgal-技術紹介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webgal-技術紹介"}},[a._v("#")]),a._v(" WebGAL 技術紹介")]),a._v(" "),e("h2",{attrs:{id:"シーンシステム-プリロード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#シーンシステム-プリロード"}},[a._v("#")]),a._v(" シーンシステム & プリロード")]),a._v(" "),e("h3",{attrs:{id:"シーンの取得"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#シーンの取得"}},[a._v("#")]),a._v(" シーンの取得")]),a._v(" "),e("p",[a._v("WebGAL のシーンは、ファイル単位で管理されます。一般的に、WebGAL シナリオファイルの拡張子は "),e("code",[a._v(".txt")]),a._v(" です。多くのプログラミング言語が "),e("code",[a._v("main")]),a._v(" 関数をエントリーポイントとして持つように、WebGAL のエントリーシーンは "),e("code",[a._v("start.txt")]),a._v(" です。WebGAL は最初に "),e("code",[a._v("start.txt")]),a._v(" を取得し、それを WebGAL パーサーによってシーンオブジェクトに解析します。任意のシーンでは、"),e("code",[a._v("choose")]),a._v("、"),e("code",[a._v("changeScene")]),a._v("、"),e("code",[a._v("callScene")]),a._v(" といった方法を使用してシーンの切り替えや呼び出しが行えます。シーンの切り替えは現在のシーンを直接置き換えますが、シーンの呼び出しは新しいシーンをスタックにプッシュして実行し、実行後に呼び出し元の親シーンに戻ります。")]),a._v(" "),e("h3",{attrs:{id:"シーンの事前読み込み"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#シーンの事前読み込み"}},[a._v("#")]),a._v(" シーンの事前読み込み")]),a._v(" "),e("p",[a._v("WebGAL は、シーンの解析と同時に、シーンに含まれるリソースも解析します。各シーンファイルには、画像、音声、およびビデオファイルなどのリソースが含まれています。これらのファイルは、シーンの解析が完了した後にプリロードが開始され、ユーザーがゲームプレイ中にリソースの読み込みを待つ可能性を最小限に抑えます。また、シーンの切り替え時にゲームのスムーズな動作を実現するために、WebGAL は現在のシーンファイルから参照されているシーンファイルのリソースも読み込みます。ただし、リソースの無駄を防ぐため、WebGAL はシーンの一層のみをプリロードします。")]),a._v(" "),e("h2",{attrs:{id:"webgal-パーサー"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webgal-パーサー"}},[a._v("#")]),a._v(" WebGAL パーサー")]),a._v(" "),e("h3",{attrs:{id:"シナリオ解析-i-シーンの分割"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#シナリオ解析-i-シーンの分割"}},[a._v("#")]),a._v(" シナリオ解析 Ⅰ - シーンの分割")]),a._v(" "),e("p",[a._v("WebGAL のシーンファイルは主に改行でステートメントを区切ります。解析の最初に、WebGAL パーサーは改行コードに基づいてステートメントを分割します。セミコロンがある場合は、セミコロンの前の文字列を取得します。つまり、WebGAL シナリオのコメント方法は、セミコロンの後に記述することです。")]),a._v(" "),e("h3",{attrs:{id:"シナリオ解析-ii-ステートメントタイプの解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#シナリオ解析-ii-ステートメントタイプの解析"}},[a._v("#")]),a._v(" シナリオ解析 Ⅱ - ステートメントタイプの解析")]),a._v(" "),e("p",[a._v("WebGAL のステートメントは一般的に次のような形式です。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("command:content -arg1 -arg2 ......;コメント\n")])])]),e("p",[a._v("ここで、command はステートメントのコマンドを表し、"),e("code",[a._v("bgm")]),a._v("、"),e("code",[a._v("changeFigure")]),a._v("、"),e("code",[a._v("choose")]),a._v(" などのコマンドがあります。これはステートメントに対する制御アクションを示します。"),e("code",[a._v("content")]),a._v(" はステートメントの主要な内容を表します。例えば、"),e("code",[a._v("bgm:Teabreak.mp3")]),a._v(" は、BGM として音声ファイルを再生することを表します。")]),a._v(" "),e("h3",{attrs:{id:"シナリオ解析-iii-会話の特殊処理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#シナリオ解析-iii-会話の特殊処理"}},[a._v("#")]),a._v(" シナリオ解析 Ⅲ - 会話の特殊処理")]),a._v(" "),e("p",[a._v("WebGALのシナリオファイルでは、通常以下の形式で会話が書かれます。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("森川由綺: 胸につかえていることを、时は解决してくれない。忘却のラベルを贴るだけで -voice_1.ogg;\n")])])]),e("p",[a._v("ビジュアルノベルでは、会話がシナリオの主要な構成要素であるため、WebGAL ではシンタックスシュガーが設計されています。もしシナリオの command 部分がどのコマンドとも解析できない場合、WebGAL はそれを会話として扱います。また、音声の指定もシンプルにされており、ファイル名のみを指定すれば十分です。上記の会話は実際に say コマンドとして解析されます。")]),a._v(" "),e("p",[a._v("したがって、この会話の正しい表現は次のようになります。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("say:胸につかえていることを、时は解决してくれない。忘却のラベルを贴るだけで -speaker=森川由綺 vocal=voice_1.ogg;\n")])])]),e("p",[a._v("また、もし対話が一人のキャラクターによって行われる場合、話者が変わる前にキャラクター名を省略することができます。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("森川由綺: 胸につかえていることを;\n时は解决してくれない; \n忘却のラベルを贴るだけで;\n")])])]),e("p",[a._v("会話の特殊な処理により、シナリオの作成効率が大幅に向上します。")]),a._v(" "),e("h3",{attrs:{id:"シナリオ解析-iv-パラメータ解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#シナリオ解析-iv-パラメータ解析"}},[a._v("#")]),a._v(" シナリオ解析 Ⅳ - パラメータ解析")]),a._v(" "),e("p",[a._v("content の後に "),e("code",[a._v("-")]),a._v(" で区切られたものは追加パラメータです。特に注意が必要なのは、追加パラメータの "),e("code",[a._v("-")]),a._v(" の前にはスペースが必要であることです。そうでない場合、WebGAL はそれを追加パラメータではなく普通の "),e("code",[a._v("-")]),a._v(" とみなします。")]),a._v(" "),e("p",[a._v("WebGAL のパラメータは "),e("code",[a._v("-key=value")]),a._v(" の形式で表されます。ここで、"),e("code",[a._v("key")]),a._v(" の型は "),e("code",[a._v("string")]),a._v(" であり、"),e("code",[a._v("value")]),a._v(" の型は動的に決定され、次の3つの可能な型のいずれかで存在することができます: "),e("code",[a._v("string")]),a._v("、"),e("code",[a._v("number")]),a._v("、"),e("code",[a._v("boolean")]),a._v("。")]),a._v(" "),e("p",[a._v("例えば、"),e("code",[a._v("-key=s")]),a._v(" の "),e("code",[a._v("value")]),a._v(" は "),e("code",[a._v("string")]),a._v(" です。"),e("code",[a._v("-key=1")]),a._v(" の "),e("code",[a._v("value")]),a._v(" は "),e("code",[a._v("number")]),a._v(" です。"),e("code",[a._v("-key=true")]),a._v(" または "),e("code",[a._v("-key=false")]),a._v(" の "),e("code",[a._v("value")]),a._v(" は "),e("code",[a._v("boolean")]),a._v(" です。")]),a._v(" "),e("p",[a._v("また、"),e("code",[a._v("value")]),a._v(" を省略して "),e("code",[a._v("key")]),a._v(" のみを記述するパラメータは "),e("code",[a._v("-key=true")]),a._v(" と解釈され、これは省略された形式のシンタックスシュガーです。このシンタックスシュガーは非常に重要であり、WebGAL には "),e("code",[a._v("-next")]),a._v(" という重要なパラメータがあります。これは、現在のステートメントの実行後に直ちに次のステートメントを実行することを示すために使用されます。このシンタックスシュガーがなっかた場合、常に "),e("code",[a._v("-next=true")]),a._v(" と書く必要があります。")]),a._v(" "),e("h3",{attrs:{id:"シナリオ解析-v-リソースの処理とプリロード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#シナリオ解析-v-リソースの処理とプリロード"}},[a._v("#")]),a._v(" シナリオ解析 Ⅴ - リソースの処理とプリロード")]),a._v(" "),e("p",[a._v("シナリオの解析中に、シナリオが必要とするリソースを取得することができます。例えば、"),e("code",[a._v("bgm")]),a._v(" ステートメントでは通常音声リソースが必要であり、"),e("code",[a._v("playVideo")]),a._v(" ステートメントでは通常ビデオリソースが必要です。また、"),e("code",[a._v("changeBg")]),a._v(" ステートメントでは通常画像リソースが必要です。WebGAL のシーンパーサーは、すべてのシーンのステートメントが必要とするリソースをまとめて、プリローダーに渡してリソースをプリロードします。また、"),e("code",[a._v("changeScene")]),a._v("、"),e("code",[a._v("choose")]),a._v("、"),e("code",[a._v("callScene")]),a._v(" など、サブシーンを呼び出す必要がある場合には、サブシーンもスキャンされ、解析され、その中のリソースがプリロードされます。")]),a._v(" "),e("h2",{attrs:{id:"実行制御システム"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#実行制御システム"}},[a._v("#")]),a._v(" 実行制御システム")]),a._v(" "),e("h3",{attrs:{id:"スタンバイフェイズ-開始準備"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#スタンバイフェイズ-開始準備"}},[a._v("#")]),a._v(" スタンバイフェイズ: 開始準備")]),a._v(" "),e("h3",{attrs:{id:"メインフェイズ-i-コマンドの読み取り、条件判断の実行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#メインフェイズ-i-コマンドの読み取り、条件判断の実行"}},[a._v("#")]),a._v(" メインフェイズ I: コマンドの読み取り、条件判断の実行")]),a._v(" "),e("h3",{attrs:{id:"メインフェイズ-ii-コマンド制御モジュールからコマンドコントローラーの呼び出し、取得"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#メインフェイズ-ii-コマンド制御モジュールからコマンドコントローラーの呼び出し、取得"}},[a._v("#")]),a._v(" メインフェイズ II: コマンド制御モジュールからコマンドコントローラーの呼び出し、取得")]),a._v(" "),e("h3",{attrs:{id:"エンドフェイズ-連続コマンドの処理、バックログの更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#エンドフェイズ-連続コマンドの処理、バックログの更新"}},[a._v("#")]),a._v(" エンドフェイズ: 連続コマンドの処理、バックログの更新")]),a._v(" "),e("h3",{attrs:{id:"オートモード-スキップモード"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#オートモード-スキップモード"}},[a._v("#")]),a._v(" オートモード & スキップモード")]),a._v(" "),e("h2",{attrs:{id:"コマンド制御"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#コマンド制御"}},[a._v("#")]),a._v(" コマンド制御")]),a._v(" "),e("h3",{attrs:{id:"webgal-コマンドタイプ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webgal-コマンドタイプ"}},[a._v("#")]),a._v(" WebGAL コマンドタイプ")]),a._v(" "),e("h3",{attrs:{id:"コマンドの自動破棄、終了判定、ブロックロジック"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#コマンドの自動破棄、終了判定、ブロックロジック"}},[a._v("#")]),a._v(" コマンドの自動破棄、終了判定、ブロックロジック")]),a._v(" "),e("h2",{attrs:{id:"シーン制御-アニメーション制御"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#シーン制御-アニメーション制御"}},[a._v("#")]),a._v(" シーン制御 & アニメーション制御")]),a._v(" "),e("h3",{attrs:{id:"データ駆動型-pixi-シーンコントローラー"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#データ駆動型-pixi-シーンコントローラー"}},[a._v("#")]),a._v(" データ駆動型 Pixi シーンコントローラー")]),a._v(" "),e("h3",{attrs:{id:"アニメーション-トランスフォム制御"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#アニメーション-トランスフォム制御"}},[a._v("#")]),a._v(" アニメーション & トランスフォム制御")]),a._v(" "),e("h2",{attrs:{id:"セーブ、ロード、ロールバックとユーザーデータ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#セーブ、ロード、ロールバックとユーザーデータ"}},[a._v("#")]),a._v(" セーブ、ロード、ロールバックとユーザーデータ")]),a._v(" "),e("h3",{attrs:{id:"webgal-ステートテーブルの紹介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webgal-ステートテーブルの紹介"}},[a._v("#")]),a._v(" WebGAL ステートテーブルの紹介")]),a._v(" "),e("h3",{attrs:{id:"実行状態の保存-復元"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#実行状態の保存-復元"}},[a._v("#")]),a._v(" 実行状態の保存 & 復元")]),a._v(" "),e("h3",{attrs:{id:"セーブデータ-その他のユーザーデータの保存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#セーブデータ-その他のユーザーデータの保存"}},[a._v("#")]),a._v(" セーブデータ & その他のユーザーデータの保存")]),a._v(" "),e("h2",{attrs:{id:"鑑賞モジュール-細かい機能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#鑑賞モジュール-細かい機能"}},[a._v("#")]),a._v(" 鑑賞モジュール & 細かい機能")]),a._v(" "),e("h3",{attrs:{id:"鑑賞モジュール"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#鑑賞モジュール"}},[a._v("#")]),a._v(" 鑑賞モジュール")]),a._v(" "),e("h3",{attrs:{id:"ブラウザを離れた際の状態保持-「続きから」"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ブラウザを離れた際の状態保持-「続きから」"}},[a._v("#")]),a._v(" ブラウザを離れた際の状態保持 & 「続きから」")]),a._v(" "),e("h3",{attrs:{id:"ショートカットキー-マウス操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ショートカットキー-マウス操作"}},[a._v("#")]),a._v(" ショートカットキー & マウス操作")])])}),[],!1,null,null,null);e.default=_.exports}}]);