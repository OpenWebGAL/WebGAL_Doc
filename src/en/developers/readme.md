# Customization and Contribution

## WebGAL Source Code Repository

[https://github.com/OpenWebGAL/WebGAL](https://github.com/OpenWebGAL/WebGAL)

## Branch Description

```
main: Stable version
dev: WebGAL development version
other branches: Archives of older versions
```

## Update Plan

See [WebGAL Information](/info)

## Contributor Guidelines

If you wish to contribute to the WebGAL Terre visual editor, please refer to the [WebGAL Terre Contributor Guide](terre)

### Contribution Requirements

To help us better understand and review your contribution, please note the following:

* **Code Comments:** To help us understand your code logic, we recommend adding comments to key sections.

* **Functional Testing:** If you add or modify functionality, please provide corresponding test methods to ensure the functionality works as expected. If you refactor code, please also provide test methods to cover the affected areas and ensure the refactoring does not introduce new issues.

* **Clear Explanation:** When submitting a Pull Request, please briefly describe the changes you made and the reasons behind them. This will help us understand your contribution more quickly.

### Starting the WebGAL Project Locally

WebGAL currently uses yarn as a package manager and yarn workspace as a monorepo manager.

If you don't have yarn, please install it using the following command:

```shell
npm install yarn -g
```

Then, execute the following command in the project root directory:

```shell
yarn
```

to install dependencies.

This project has 3 packages, each corresponding to different functionalities:

| Package Name | Content                  |
| ------------ | ------------------------- |
| parser      | WebGAL Parser             |
| server      | WebGAL Local Debug Server |
| webgal      | Engine Core                |
| yukimi      | Planned yukimi support library |

## Starting the WebGAL Engine Project Locally

You can start the development server by running the following script:

```shell
yarn dev
```

If you want to build WebGAL, use:

```shell
yarn build
```

The packaged output is located in the `packages/webgal/dist` directory.

## About WebGAL Technology

WebGAL is a project of considerable scale, and diving directly into the code can be overwhelming. Therefore, here is a reference document about WebGAL technology to help you understand it.

[WebGAL Technical Introduction](/en/tech)

In addition, we will also provide some documentation in some key directories of the source code to explain the principles of that module. This information will be provided in Chinese. Nowadays, large language models perform well enough in translation, so you don't have to worry if you can't read Chinese. You can try using a large language model to translate it into your language.

## Importing the Built WebGAL into the WebGAL Terre Editor

::: tip
After you have finished your customization, if you want to use the WebGAL editor to easily preview and manage resources in real-time, you can copy and paste the packaged product and replace the `packages/terre2/assets/templates/WebGAL_Template` directory under the editor directory. This way, you can replace the engine built into the WebGAL editor with your customized one. If your WebGAL repository and WebGAL_Terre repository are in the same directory, you can use the `release-to-terre` shortcut script to execute this.
:::
