# Spine アニメーション

WebGAL は Spine アニメーション機能をサポートしており、スムーズな 2D スケルタルアニメーション効果を作成できます。Spine アニメーションは立ち絵と背景の両方に使用でき、静的な画像よりも豊かな視覚効果を提供します。

## 基本的な使用方法

### Spine 立ち絵の設定

`.skel` ファイル拡張子または `type=spine` パラメータを使用して Spine アニメーションを指定します：

``` ws
changeFigure:character.skel;
changeFigure:character.json?type=spine;
```

### Spine 背景の設定

Spine アニメーションは背景としても使用できます：

``` ws
changeBg:background.skel;
changeBg:background.json?type=spine;
```

## ファイル形式

Spine アニメーションは通常、以下のファイルを含みます：
- `.skel` - スケルトンデータファイル（バイナリ形式）
- `.json` - スケルトンデータファイル（JSON形式）
- `.atlas` - テクスチャアトラス記述ファイル
- `.png` - テクスチャ画像ファイル

## 立ち絵位置設定

Spine 立ち絵は通常の立ち絵と同様にプリセット位置をサポートします：

``` ws
changeFigure:character.skel -left;
changeFigure:character.skel -right;
changeFigure:character.skel; // デフォルトは中央位置
```

## アニメーション制御

### 特定のアニメーションの再生

`setAnimation` コマンドを使用して Spine アニメーションの再生を制御します：

``` ws
setAnimation:idle -target=fig-center;
setAnimation:walk -target=fig-left;
```

### アニメーションパラメータ

Spine アニメーションは以下の制御パラメータをサポートします：
- `target` - 対象オブジェクト（fig-left、fig-center、fig-right、またはカスタムID）
- アニメーション名は Spine ファイルで定義されたアニメーション名と一致する必要があります

## 高度な機能

### カスタムID Spine 立ち絵

Spine 立ち絵にカスタムIDを指定できます：

``` ws
changeFigure:character.skel -id=mainCharacter -left;
setAnimation:happy -target=mainCharacter;
```

### デフォルトアニメーション

- Spine アニメーションが読み込まれると、最初の利用可能なアニメーションが自動的に再生されます
- 状態で特定のアニメーションが指定されている場合、そのアニメーションが優先的に再生されます

### スケーリングと位置調整

Spine アニメーションは画面サイズに合わせて自動的にスケーリングされます：
- 立ち絵はアスペクト比を保持し、画面に合わせてスケーリングされます
- 背景は画面全体を埋めるために拡大または縮小されます

## パフォーマンスに関する考慮事項

1. **メモリ使用量**：Spine アニメーションは静的画像よりも多くのメモリを使用します
2. **読み込み時間**：初回読み込みに時間がかかる場合があります
3. **互換性**：ブラウザの WebGL サポートが必要です

## 使用例

``` ws
; 主人公の立ち絵を設定
changeFigure:mainCharacter.skel -id=hero -center;

; 挨拶アニメーションを再生
setAnimation:greeting -target=hero;

; 脇役の立ち絵を設定
changeFigure:sidekick.skel -left;

; 動的背景を設定
changeBg:forest.skel;

; 背景アニメーションを再生
setAnimation:windy -target=bg-main;
```

## トラブルシューティング

### 一般的な問題

1. **アニメーションが再生されない**：アニメーション名が Spine ファイルで定義された名前と一致しているか確認してください
2. **ファイルの読み込みに失敗**：`.skel`、`.atlas`、テクスチャファイルが同じディレクトリにあることを確認してください
3. **表示異常**：Spine バージョンの互換性を確認してください

### デバッグのヒント

- ブラウザの開発者ツールを使用してコンソールログを確認
- ネットワークパネルですべてのファイルが正しく読み込まれているか確認
- Spine ファイルのエクスポート設定が正しいか確認

## 他の機能との組み合わせ

Spine アニメーションは他の WebGAL 機能と組み合わせて使用できます：

``` ws
; 音声再生との組み合わせ
キャラクター名:こんにちは！ -V1.ogg -figureId=hero;
setAnimation:speaking -target=hero;

; シーン切り替えとの組み合わせ
changeFigure:character.skel -id=hero;
setAnimation:idle -target=hero;
changeScene:next_scene.txt;
```

Spine アニメーションは WebGAL に強力なアニメーション機能を提供します。適切に使用することで、ゲームの視覚効果と没入感を大幅に向上させることができます。