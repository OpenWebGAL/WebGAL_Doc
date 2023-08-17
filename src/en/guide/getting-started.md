# How to start making a WebGAL game?

::: danger Warning
Please use a modern browser (Chrome / Firefox / Edge) to open WebGAL and the editor. Issues that may arise from using other browsers will not be addressed.
:::

## Method 1: Use the WebGAL Editor (Recommended)

**The WebGAL editor is the best way to create, produce, and publish a WebGAL game.**

After downloading the WebGAL editor, unzip the compressed package and launch the WebGAL_Terre application. WebGAL Terre will automatically open the default browser, or go to [http://localhost:3001/](http://localhost:3001/) to open the editor if it does not open automatically.

::: tip Tip
The method on this page **does not support Windows 7**. Windows 7 users please refer to **[Method to start production with visual editor on Windows 7](win7)**.

The WebGAL editor has only been tested on Windows 10+ systems so far. We will gradually add support for Mac OS and Linux.
:::

Download the WebGAL visual editor:

[GitHub](https://github.com/MakinoharaShoko/WebGAL_Terre/releases)

[123 Cloud Disk (All versions are placed in one folder, please download the latest version)](https://www.123pan.com/s/YHszVv-jqzJ.html)

## Method 2: Develop locally by writing scripts and debug in real time

First, download the WebGAL distribution that has been built into a static web page and the accompanying debugging environment.

Download the WebGAL engine itself and debugging environment (does not include visual editor):

[GitHub](https://github.com/MakinoharaShoko/WebGAL/releases/)

After downloading and unzipping, you can directly run the corresponding version of WebGAL-server to debug your visual novel. If you encounter interception by antivirus software or firewall, please allow it to run.

It is recommended to use VS Code for development and use plugins to enable syntax highlighting:

[Store address of syntax highlighting plugin](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[Source code repository of syntax highlighting plugin](https://github.com/C6H5-NO2/webgal-script-basics)

## Method 3: Debug from source code (suitable for front-end developers who want higher customizability)

```
git clone https://github.com/MakinoharaShoko/WebGAL.git
```

Install and use yarn to install dependencies

```
npm install yarn -g
yarn
```

Enter the WebGAL package

```
cd packages/webgal
```

WebGAL uses vite as the bundling and debugging tool. After entering the webgal package, you can start the development server by running the following script:

```
yarn dev
```

If you want to package, please use:

```
yarn build 
```
