# WebGAL Terre 贡献指南

欢迎参与 WebGAL Terre 的贡献！WebGAL Terre 是我们最具创造力和竞争力的项目。我们致力于帮助不适应编程的创作者使用 WebGAL 创作出自己的作品。从游戏脚本到自定义 UI，几乎任何和创作有关的任务，我们都致力于提供一种图形编辑的方式来降低门槛，让创作成为一件更加轻松的事。

除此以外，我们也为几乎所有功能提供了使用代码编写的方式。我们将代码编辑和图形化编辑模块设计为完全兼容的，创作者可以在两种模式间无缝切换。

在参与这个激动人心的项目前，我们希望你可以阅读以下规范：

## 参与贡献的要求

为了帮助我们更好地理解和审核您的贡献，请您注意以下几点：

*代码注释*： 为了方便我们理解您的代码思路，建议您在关键部分添加注释说明。

*功能测试*： 如果您添加或修改了功能，请提供相应的测试方法，以确保功能正常运行。如果您进行了代码重构，也请提供测试方法来覆盖受影响的范围，确保重构没有引入新的问题。

*清晰的说明*： 在提交 Pull Request 时，请简要说明您所做的改动以及背后的原因，这将有助于我们更快地理解您的贡献。

## 项目介绍

WebGAL Terre 使用 TypeScript 全栈开发，并使用 yarn 作为包管理器，yarn workspace 作为 monorepo 管理器。

## 启动项目

### 安装依赖

首先，请确保您已经安装了 [Yarn](https://yarnpkg.com/)。如果您没有安装 Yarn，请根据官方文档进行安装。

### 克隆仓库

WebGAL Terre 的仓库在 [WebGAL Terre - GitHub](https://github.com/OpenWebGAL/WebGAL_Terre)

### 安装依赖

```bash
yarn
```

### 启动开发服务器

```bash
yarn dev
```

这将启动开发服务器，并在默认浏览器中打开应用程序。

### 构建项目

您需要运行构建脚本以生成可发布的版本。

* **Windows:** `release.sh`
* **其他环境:** 请查看项目根目录下对应的构建脚本。

构建完成后，您可以在 `release` 目录下找到构建产物。

## 更新 Terre 附带的 WebGAL 引擎模板

一般来说，我们会在 WebGAL 更新后将最新版本的引擎模板更新到 Terre 项目中。假如你想在 Terre 中使用你定制的 WebGAL 引擎，请遵循以下步骤：

1、Clone WebGAL 引擎项目（推荐在相邻目录 Clone，这样可以使用自动化脚本）

```
git clone https://github.com/OpenWebGAL/WebGAL.git
```

2、**（假设你在 Terre 项目的相邻目录 Clone WebGAL 项目，未这样做的开发者请忽略）** 在 WebGAL 引擎仓库运行自动化脚本构建 WebGAL 到 WebGAL Terre 

```
sh release-to-terre.sh
```

:::warning
**以下步骤适用于手动构建并更新 Terre 中的引擎模板的情况。使用自动化脚本的开发者请忽略！**
:::

2、构建 WebGAL 项目（此步骤在 WebGAL 引擎仓库中执行）

```
yarn
yarn build
```

3、删除 WebGAL Terre 里的引擎模板，并移动引擎项目的构建产物到 WebGAL Terre 的模板目录

**此处假设你在 Terre 项目的相邻目录 Clone WebGAL 项目，如果你有不同的目录结构，请根据实际情况修改。**

```
# 进入 Terre 目录
cd ../WebGAL_Terre/packages/terre2/assets/templates/WebGAL_Template || exit
# 删除其他文件
rm -r assets
rm -r index.html
rm -r webgal-serviceworker.js

# 进入 WebGAL 构建目录
cd ../../../../../../WebGAL/packages/webgal || exit
# 复制
cp -r dist/index.html ../../../WebGAL_Terre/packages/terre2/assets/templates/WebGAL_Template
cp -r dist/assets ../../../WebGAL_Terre/packages/terre2/assets/templates/WebGAL_Template
cp -r dist/webgal-serviceworker.js ../../../WebGAL_Terre/packages/terre2/assets/templates/WebGAL_Template
```

## 包介绍

| 包名                                     | 说明                                                                                |
| ---------------------------------------- | ----------------------------------------------------------------------------------- |
| `packages/dev-server`                   | 在 80 端口调试，方便服务器用户                                                     |
| `packages/origine2`                     | 编辑器前端                                                                            |
| `packages/terre-electron`                | Electron 版本的 Terre 编辑器                                                      |
| `packages/terre2`                       | 编辑器后端                                                                            |
| `packages/vscode-ws-jsonrpc-webgal`      | 用于 WebGAL 编辑器后端的定制包，修复了一些 bug                                      |
| `packages/WebGAL-electron`               | WebGAL 的 Electron 封装                                                             |


##  WebGAL Terre 前后端联调指南

WebGAL Terre 是一个 TypeScript 全栈项目，使用 OpenAPI 来生成请求后端接口的代码。

要使得这个流程可以正常运作，在为 WebGAL Terre 后端开发接口时，注意以下注解：

**1. 接口注解介绍**

以下代码示例展示了后端接口需要使用的关键注解：

```typescript
@Post('createGame')
  @ApiOperation({ summary: 'Create a new game' })
  @ApiResponse({ status: 200, description: 'Game creation result.' })
  @ApiBody({ type: CreateGameDto, description: 'Game creation data' })
  async createGame(@Body() createGameData: CreateGameDto) {
    const createResult = await this.manageGame.createGame(
      createGameData.gameName,
      createGameData.derivative,
      createGameData.templateName,
    );
    if (createResult) {
      return { status: 'success' };
    } else {
      return { status: 'failed' }; 
    }
  }
```

**2. 代码示例详解**

让我们逐行分析这段代码，理解每个注解的作用：

* **`@Post('createGame')`**:  
    * `@Post`:  表明这是一个 POST 请求的接口。
    * `'createGame'`:  定义了接口的路径，即 `/createGame`。

* **`@ApiOperation({ summary: 'Create a new game' })`**:
    * `@ApiOperation`: 用于描述接口的功能。
    * `summary`: 简要概括接口的作用，会在生成的 OpenAPI 文档中显示。

* **`@ApiResponse({ status: 200, description: 'Game creation result.' })`**:
    * `@ApiResponse`: 描述接口可能的响应。
    * `status`:  指定 HTTP 状态码，这里是 200，表示成功。
    * `description`:  描述该状态码下的响应内容。

* **`@ApiBody({ type: CreateGameDto, description: 'Game creation data' })`**:
    * `@ApiBody`:  指定请求体的数据类型和描述。
    * `type`:  指明请求体的数据结构，这里使用了 `CreateGameDto`，这是一个预先定义的 DTO（Data Transfer Object）。
    * `description`: 描述请求体数据的含义。

* **`async createGame(@Body() createGameData: CreateGameDto)`**:
    * `async`:  表明这是一个异步函数。
    * `createGame`:  接口的函数名。
    * `@Body()`:  从请求体中获取数据。
    * `createGameData: CreateGameDto`:  将请求体数据解析为 `CreateGameDto` 类型的对象。


**3. 前端项目更新 OpenAPI**

为了让前端项目能够使用最新的后端接口，你需要在开发过程中定期更新 OpenAPI 定义。

**步骤如下：**

1. 确保后端项目正在运行 (前面提到的，执行：`yarn dev`)。
2. 在 `packages/origine2` 目录下，执行命令： `yarn openapi`。

这个命令会根据后端代码中的注解自动生成最新的 OpenAPI 定义文件。前端项目会使用这个文件来生成请求接口的代码，从而保证前后端接口的一致性。

**4. 前端项目使用接口**

在 WebGAL 前端项目中，你可以通过以下方式调用后端接口：

1. 导入 `api` 对象:  `import {api} from "@/api";`
2. 调用 `api` 对象上的方法，例如：`api.manageGameControllerGetGameList()`。

`api` 对象包含了所有后端接口的对应方法，你可以根据接口名称直接调用。

## 更多有关开发的信息

除此以外，在源代码的一些关键目录，我们也会提供一些说明文档来解释这个模块的原理。这些信息将以中文提供。如今，大语言模型在翻译上的表现已经足够好，所以如果你无法阅读中文，也不必担心。你可以尝试使用大语言模型将其翻译为你的语言。