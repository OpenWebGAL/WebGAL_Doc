
# How to deploy or publish my visual novel?

First, please be aware that the engine that can be deployed to the Internet should be a **release or web page exported from the WebGAL visual editor**, not the source code.

**If you use the WebGAL editor, you can select Export Game in the top right corner. Generally, File Explorer will open automatically after export is complete. If it does not open automatically, you can find it under Exported_Games in the WebGAL editor directory.**

## Web page

*If you use the **editor***:

In the upper right corner of the editor, select Export to Web Page. The method of deploying web pages is no different from deploying a normal website. You can purchase cloud servers (Tencent Cloud, Alibaba Cloud) and other deployment methods, or use GitHub Pages.

*If you use the **release version***:

 the files under /WebGAL (not the folders, the files under the /WebGAL folder) to the specified directory on your cloud server where you want to deploy, or deploy to GitHub Pages.

*For developers using **source code development***:

If you use the source code for debugging, you can create a static web page (in the /dist folder) by `yarn build`, and then deploy the content of this folder to GitHub Pages or your cloud server.

## Windows / macOS / Linux

In the upper right corner of the editor, select Export to Executable File. The executable file can run directly on current system.

## Android

[Package the game for android platforms](./android.md)
