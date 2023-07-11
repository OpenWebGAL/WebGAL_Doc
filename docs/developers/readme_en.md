# For Developers and Contributors

## Branches and their meanings

```
main: LTS
dev: WebGAL Develop
others: previous version
```

## Update Plan

See [WebGAL INFO](/info)

## Illustrates for Contributors

WebGAL uses *yarn* and *yarn workspace monorepo* for package management .

To install *yarn* , enter the following command :

```shell
npm install yarn -g
```

Then Clone This project , and rename the project's root directory as :

```shell
yarn
```

There are 3 package in this project :

| 包名   | 内容                             |
| ------ | -------------------------------- |
| parser | WebGAL Parser                    |
| server | WebGAL local testing server      |
| webgal | Main Engine                      |
| yukimi | Library for *yukimi*  (Planning) |

## Run Local WebGAL Project

WebGAL uses `vite` for packaging and testing . Under `webgal` project directory , you can shuttle the local server through the following command .

```shell
yarn dev
```

For packaging :

```shell
yarn build
```

The processed files are located in the `dist` directory.