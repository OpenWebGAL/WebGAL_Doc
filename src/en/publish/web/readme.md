# Web

## If you use **Editor**

Select Export to Web in the upper right corner of the editor. The deployment method of the web page is the same as that of deploying a normal website. You can purchase cloud servers (Tencent Cloud, Alibaba Cloud) for deployment or use GitHub Pages.

## If you use **Release Version**

Copy the files under /WebGAL (not the folder, the files under the /WebGAL folder) to the specified directory of the cloud server you want to deploy, or deploy to GitHub Pages.

## Developers who use **Source Code Development**

If you use the source code for debugging, you can create a static web page by `yarn build` (in the packages/webgal/dist folder), and then deploy the contents of this folder to GitHub Pages or your cloud server.