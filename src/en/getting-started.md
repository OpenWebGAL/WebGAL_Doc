# How to start making a WebGAL?

::: warning
No matter which way you choose to make a WebGAL game, you should spend some time reading through the entirety of the development guide. It won't take long, and it will save you from running into problems due to improper operation.

You know, most of the questions you are wondering about can be found in the documentation. If you firmly believe that you have encountered a bug, please raise an issue at [issues](https://github.com/OpenWebGAL/WebGAL/issues) or send an email to <contact@openwebgal.com>, you can also find a way to join the WebGAL discussion community in the "More" column at the top right corner of the website.
:::

::: danger
Please use a modern browser (Chrome / Firefox / Edge) to open WebGAL and the editor. Problems that may be caused by using other browsers will not be solved.
:::

## Method 1: Use WebGAL Terre Visual Editor (Recommended)

**WebGAL Terre Visual Editor is the best way to create, make and publish a WebGAL.**

After downloading the WebGAL Terre Visual Editor, please unzip the package and launch the WebGAL_Terre executable file. WebGAL Terre will automatically open the default browser, if not, please enter [http://localhost:3001/](http://localhost:3001/) to open the editor.

Download WebGAL Terre Visual Editor:

[WebGAL Homepage (Recommended)](https://openwebgal.com/en/download/)

[GitHub Releases](https://github.com/OpenWebGAL/WebGAL_Terre/releases)

::: tip
WebGAL Terre Visual Editor does not support Windows 7 by default.
Windows 7 users please refer to **[How to start making with Visual Editor on Windows 7](./win7)**.
:::

## Method 2: Start debugging from source code (For makers who want higher customization)

``` shell
git clone https://github.com/OpenWebGAL/WebGAL.git
```

Install and use yarn to install dependencies

``` shell
npm install yarn -g
yarn
```

WebGAL uses vite as a packaging and debugging tool, you can start the development server by running the following script

``` shell
yarn dev
```

It is recommended to use VS Code for development, and use plugins to achieve syntax highlighting:

[Marketplace address of syntax highlighting plugin](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[Source code repository of syntax highlighting plugin](https://github.com/C6H5-NO2/webgal-script-basics)

If you want to package, please use

``` shell
yarn build
```

The packaged product is in the packages/webgal/dist directory

::: tip
After you have finished customizing, if you want to use the WebGAL editor to easily preview and manage resources in real time, you can copy and paste the packaged product and replace the `packages/terre2/assets/templates/WebGAL_Template` in the editor directory, so that you can replace the built-in engine of the WebGAL editor with your own customized one. If your WebGAL repository and WebGAL_Terre repository are in the same directory, you can use the `release-to-terre` quick script to execute
:::