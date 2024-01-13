# Development and Contributors' Information

## WebGAL Source Code Repository

[https://github.com/MakinoharaShoko/WebGAL](https://github.com/MakinoharaShoko/WebGAL)

## Branch Explanation

```
main: Stable version
dev: WebGAL development version
Other branches: Archives of old versions
```

## Update Plan

See [WebGAL News](/info)

## Contributors' Guide

WebGAL currently uses yarn as the package manager, and yarn workspace monorepo manager.

If you don't have yarn, please install it with the following command

```shell
npm install yarn -g
```

Then clone this project, and in the project root directory, run

```shell
yarn
```

There are 3 packages in this project:

| Package Name | Content |
|---|---|
| parser | WebGAL parser |
| server | WebGAL local debugging server |
| webgal | Engine本体 |
| yukimi | Planned yukimi support library |

## Start WebGAL Project Locally

Then, you can start the development server by running the following script

```shell
yarn dev
```

If you want to package, please use

```shell
yarn build
```

The packaged product is in the `packages/webgal/dist` directory.

::: tip
After you finish customization, if you want to use WebGAL editor to conveniently preview in real time and manage resources, you can copy and paste the packaged product and replace the `packages/terre2/assets/templates/WebGAL_Template` under the editor directory, so that you can replace the built-in engine of WebGAL editor with your own customized one. If your WebGAL repository and WebGAL_Terre repository are in the same directory, you can use the `release-to-terre` shortcut script to execute
:::