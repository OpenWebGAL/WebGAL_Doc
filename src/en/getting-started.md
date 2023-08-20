# How to start making a WebGAL game?

::: warning Warning
No matter which method you use to make a WebGAL game, you should take some time to read through this entire page. It won't take long, and it will help you avoid some issues that might arise from improper operation.

Did you know that you can find answers to most of the issues you find confusing in the documentation? If you are convinced you have encountered a bug, please raise the issue in [issues](https://github.com/MakinoharaShoko/WebGAL/issues) or contact [contact@openwebgal.com](mailto:contact@openwebgal.com). You can also find ways to join the WebGAL community discussion in the "More" section in the top right corner of the site.
:::

::: danger Warning
Please use a modern browser (Chrome / Firefox / Edge) to open WebGAL and the editor. Issues that may arise from using other browsers will not be addressed.
:::

## Method 1: Use the WebGAL Terre Visual Editor (Recommended)

**The WebGAL editor is the best way to create, produce, and publish a WebGAL game.**

After downloading the WebGAL Terre Visual editor, unzip the compressed package and launch the WebGAL_Terre application. WebGAL Terre will automatically open the default browser, or go to [http://localhost:3001/](http://localhost:3001/) to open the editor if it does not open automatically.

Download the WebGAL visual editor:

[WebGAL HomePage](https://openwebgal.com/en/download/)

[GitHub Releases](https://github.com/MakinoharaShoko/WebGAL_Terre/releases)

::: tip Tip
The method on this page **does not support Windows 7**.
Windows 7 users please refer to **[Method to start production with visual editor on Windows 7](win7)**.
:::

## Method 2: Develop locally by writing scripts and debug in real time

First, download the WebGAL distribution that has been built into a static web page and the accompanying debugging environment.

Download the WebGAL engine itself and debugging environment (does not include visual editor):

[GitHub Releases](https://github.com/MakinoharaShoko/WebGAL/releases/)

After downloading and unzipping, you can directly run the corresponding version of WebGAL-server to debug your visual novel. If you encounter interception by antivirus software or firewall, please allow it to run.

It is recommended to use VS Code for development and use plugins to enable syntax highlighting:

[Store address of syntax highlighting plugin](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[Source code repository of syntax highlighting plugin](https://github.com/C6H5-NO2/webgal-script-basics)

## Method 3: Debug from source code (suitable for front-end developers who want higher customizability)

``` shell
git clone https://github.com/MakinoharaShoko/WebGAL.git
```

Install and use yarn to install dependencies

``` shell
npm install yarn -g
yarn
```

Enter the WebGAL package

``` shell
cd packages/webgal
```

WebGAL uses vite as the bundling and debugging tool. After entering the webgal package, you can start the development server by running the following script:

``` shell
yarn dev
```

If you want to build, please use:

``` shell
yarn build 
```
