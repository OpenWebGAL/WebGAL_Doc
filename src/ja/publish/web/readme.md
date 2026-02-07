# Web ウェブ

## **エディタ** を使用している場合

エディタの右上にある「Web にエクスポート」を選択します。Web のデプロイ方法は、通常の Web サイトをデプロイする方法と変わりません。クラウドサーバー（Tencent Cloud、Alibaba Cloud など）を購入してデプロイするか、GitHub Pages を使用することができます。

### GitHub Pages

1. GitHub上にリポジトリを作成し、そのリポジトリをローカルに複製します。

2.エクスポートしたソースファイルをクローンリポジトリのルートディレクトリに`すべてコピーします`。

3.クローンリポジトリの`.github/workflows`ディレクトリに`deploy.yml`というファイルを作成します。
```yaml
name: WebGal Web Deploy to GitHub Pages

on:
    push:
        branches:
            - main # ワークフローは、mainブランチにプッシュされるとトリガされます。
    workflow_dispatch: # 手動でワークフローをトリガーできるようにしました

permissions:
    contents: read
    pages: write
    id-token: write

jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout repository
              uses: actions/checkout@v4

            - name: Upload Pages artifact
              uses: actions/upload-pages-artifact@v3
              with:
                  path: ./ # アップロードするファイルのパスをカスタマイズすることもできます(パスを変更した場合)。

    deploy:
        needs: build
        runs-on: ubuntu-latest
        environment:
            name: github-pages
            url: ${{ steps.deployment.outputs.page_url }}
        steps:
            - name: Deploy to GitHub Pages
              id: deployment
              uses: actions/deploy-pages@v4
```

4. 作成したリポジトリの `Pages` メニューから`Build and deployment > Source > GitHub Actions`を選択します。

5. `main` ブランチにプッシュして `GitHub Action` が完了するまで待ちます。サイトは`https://<username>.github.io/[repository]/`または`https://<custom-domain>/`に配置されています。設定によります。以後、`main`ブランチにプッシュされるたびに自動的に配置されます。

## **リリース版** を使用している場合

/WebGAL の下にあるファイル（フォルダではなく、/WebGAL フォルダの下にあるファイル）を、デプロイしたいクラウドサーバーの指定されたディレクトリにコピーするか、GitHub Pages にデプロイします。

## **ソースコード開発** を使用している開発者

ソースコードを使用してデバッグを行う場合、`yarn build` を使用して静的 Web ページ（packages/webgal/dist フォルダ内）を作成し、このフォルダ内のコンテンツを GitHub Pages またはクラウドサーバーにデプロイすることができます。