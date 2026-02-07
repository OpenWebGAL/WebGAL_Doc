# Web

## If you use **Editor**

Select Export to Web in the upper right corner of the editor. The deployment method of the web page is the same as that of deploying a normal website. You can purchase cloud servers (Tencent Cloud, Alibaba Cloud) for deployment or use GitHub Pages.

### GitHub Pages

1. Create a repository on GitHub and clone it to your local machine. 

2. `Copy all` the exported project source files to the root directory of the cloned repository. 

3. In the `.github/workflows` directory of the cloned repository, create a file named `deploy.yml`, and its content should be as follows: 
```yaml
name: WebGal Web Deploy to GitHub Pages

on:
    push:
        branches:
            - main # The workflow is triggered when pushed to the main branch
    workflow_dispatch: # Allows manual triggering of the workflow 

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
                  path: ./ # You can also customize the file upload path (if you change the path) 

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

4. In your repository's **Settings**, go to the **Pages** section. Under **Build and deployment**, set the **Source** to **GitHub Actions**.

5. Push the code to the `main` branch and wait for the `GitHub Action` to complete. You should see the site deployed to `https://<username>.github.io/[repository]/` or `https://<custom-domain>/`, depending on your settings. From then on, the deployment will be automatically triggered every time you push to the `main` branch.

## If you use **Release Version**

Copy the files under /WebGAL (not the folder, the files under the /WebGAL folder) to the specified directory of the cloud server you want to deploy, or deploy to GitHub Pages.

## Developers who use **Source Code Development**

If you use the source code for debugging, you can create a static web page by `yarn build` (in the packages/webgal/dist folder), and then deploy the contents of this folder to GitHub Pages or your cloud server.