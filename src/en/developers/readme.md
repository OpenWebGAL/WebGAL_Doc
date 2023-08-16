# For Developers and Contributors

## Branches and descriptions

```
main: stable branch
dev: current developing branch
others: previous version
```

## Update Plan

See [WebGAL INFO](/info)

## Guide for Contributors

WebGAL uses *yarn* and *yarn workspace monorepo* for package management .

To install *yarn* , enter the following command :

```shell
npm install yarn -g
```

Then Clone This project , and run this command in the root of the repo :

```shell
yarn
```

There are 3 package in this project :

| 包名   | 内容                             |
| ------ | -------------------------------- |
| parser | WebGAL Parser                    |
| server | WebGAL local developing server      |
| webgal | Main Engine                      |
| yukimi | Library for *yukimi*  (Planning) |

## Run Local WebGAL Project

Then, you can shuttle the local server through the following command .

```shell
yarn dev
```

For packaging :

```shell
yarn build
```

The processed files are located in the `dist` directory.