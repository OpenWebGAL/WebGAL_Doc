# How to start making a WebGAL?

::: warning
No matter which way you choose to make a WebGAL game, you should spend some time reading through the entirety of the development guide. It won't take long, and it will help you avoid issues caused by incorrect operations.

Note: most questions are already answered in the documentation. If you are confident that you have encountered a bug, please submit an issue on [GitHub](https://github.com/OpenWebGAL/WebGAL/issues) or email <contact@openwebgal.com>. You can also find links to the WebGAL community under "More" in the top-right corner of the website.
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

``` bash
git clone https://github.com/OpenWebGAL/WebGAL.git
```

Install and use yarn to install dependencies

``` bash
npm install yarn -g
yarn
```

WebGAL uses Vite as its build and development tool. Start the dev server with the following command:

``` bash
yarn dev
```

We recommend using VS Code with an extension that enables syntax highlighting:

[Marketplace address of syntax highlighting plugin](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[Source code repository of syntax highlighting plugin](https://github.com/C6H5-NO2/webgal-script-basics)

If you want to package, please use

``` bash
yarn build
```

The packaged product is in the packages/webgal/dist directory

::: tip
After you have finished customizing, if you want to use the WebGAL editor to preview and manage resources in real time, import the build output into WebGAL Terre as a custom engine. See [How to use custom engine](derivative). If you are developing WebGAL Terre from source, you can also replace `packages/terre2/assets/templates/WebGAL_Template` to update the built-in engine template.
:::
