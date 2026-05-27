# Web 网页

## 如果你使用**编辑器**

在编辑器右上角选择导出为网页。网页的部署方式，与部署一个正常网站的方式无异。你可以购买云服务器（腾讯云、阿里云）等部署或使用 GitHub Pages。

### GitHub Pages

1. 在 GitHub 上创建一个仓库，将仓库克隆到本地。

2. 将导出的项目源文件`全部复制`到克隆仓库的根目录下。

3. 在克隆仓库的 `.github/workflows` 目录中创建一个名为 `deploy.yml` 的文件，它的内容应该如下：
```yaml
name: WebGal Web Deploy to GitHub Pages

on:
    push:
        branches:
            - main # 当推送到 main 分支时触发工作流
    workflow_dispatch: # 允许手动触发工作流

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
                  path: ./ # 你也可以自定义上传的文件路径（如果你更改了路径的话）

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

4. 在你创建的仓库存储库设置中的`Pages`菜单项下，选择`Build and deployment > Source > GitHub Actions`，这样它将开启 `GitHub Actions`

5. 推送到 `main` 分支并等待 `GitHub Action` 完成。你应该看到站点部署到 `https://<username>.github.io/[repository]/` 或 `https://<custom-domain>/`，这取决于你的设置。此后每次推送到 `main` 分支时自动部署。


## 如果你使用**发行版**

复制/WebGAL 下的文件(不是文件夹，是/WebGAL 文件夹下的文件)到你想要部署的云服务器的指定目录下，或是部署到 GitHub Pages。

## 使用**源代码开发**的开发者

如果你使用源代码进行调试，你可以通过 `yarn build` 来创建一个静态网页（在 packages/webgal/dist 文件夹），然后将这个文件夹内的内容部署到 GitHub Pages 或你的云服务器上。
