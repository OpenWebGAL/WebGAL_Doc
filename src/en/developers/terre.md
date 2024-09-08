# WebGAL Terre Contribution Guidelines

Welcome to contribute to WebGAL Terre! WebGAL Terre is our most creative and competitive project. We are committed to helping creators who are not familiar with programming to create their own works using WebGAL. From game scripts to custom UI, we strive to provide a graphical editing method to lower the threshold and make creation easier for almost any creation-related task.

In addition, we also provide a way to write code for almost all functions. We have designed the code editing and graphical editing modules to be fully compatible, allowing creators to seamlessly switch between the two modes.

Before participating in this exciting project, we hope you can read the following specifications:

## Contribution Requirements

To help us better understand and review your contributions, please note the following points:

* **Code Comments:** To help us understand your code logic, it is recommended that you add comments to key parts.

* **Functional Testing:** If you add or modify a function, please provide corresponding test methods to ensure that the function works properly. If you have performed code refactoring, please also provide test methods to cover the affected scope and ensure that the refactoring has not introduced new issues.

* **Clear Explanation:** When submitting a Pull Request, please briefly explain the changes you made and the reasons behind them. This will help us understand your contributions faster.

## Project Introduction

WebGAL Terre is developed using a full-stack TypeScript approach and uses yarn as the package manager and yarn workspace as the monorepo manager.

## Starting the Project

### Installing Dependencies

First, make sure you have [Yarn](https://yarnpkg.com/) installed. If you don't have Yarn installed, please install it according to the official documentation.

### Cloning the Repository

The WebGAL Terre repository is located at [WebGAL Terre - GitHub](https://github.com/OpenWebGAL/WebGAL_Terre)

### Installing Dependencies

```bash
yarn
```

### Starting the Development Server

```bash
yarn dev
```

This will start the development server and open the application in the default browser.

### Building the Project

You need to run the build script to generate a releasable version.

* **Windows:** `release.sh`
* **Other environments:** Please check the corresponding build script in the project's root directory.

After the build is complete, you can find the build artifacts in the `release` directory.

## Update the WebGAL Engine Template Included in Terre

Generally, we will update the latest version of the engine template to the Terre project after the WebGAL update. If you want to use your customized WebGAL engine in Terre, please follow these steps:

1. Clone the WebGAL engine project (it is recommended to clone in the adjacent directory, so that you can use the automation script)

```
git clone https://github.com/OpenWebGAL/WebGAL.git
```

2. **(Assuming you cloned the WebGAL project in the directory adjacent to the Terre project, developers who did not do this please ignore)** Run the automation script in the WebGAL engine repository to build WebGAL to WebGAL Terre

```
sh release-to-terre.sh
```

:::warning
**The following steps apply to manually building and updating the engine template in Terre. Developers using automated scripts please ignore!**
:::

2. Build the WebGAL project (this step is executed in the WebGAL engine repository)

```
yarn
yarn build
```

3. Delete the engine template in WebGAL Terre and move the build product of the engine project to the template directory of WebGAL Terre

**Here we assume that you cloned the WebGAL project in the directory adjacent to the Terre project. If you have a different directory structure, please modify it according to the actual situation.**

```
# Enter the Terre directory
cd ../WebGAL_Terre/packages/terre2/assets/templates/WebGAL_Template || exit
# Delete other files
rm -r assets
rm -r index.html
rm -r webgal-serviceworker.js

# Enter the WebGAL build directory
cd ../../../../../../WebGAL/packages/webgal || exit
# Copy
cp -r dist/index.html ../../../WebGAL_Terre/packages/terre2/assets/templates/WebGAL_Template
cp -r dist/assets ../../../WebGAL_Terre/packages/terre2/assets/templates/WebGAL_Template
cp -r dist/webgal-serviceworker.js ../../../WebGAL_Terre/packages/terre2/assets/templates/WebGAL_Template
```

## Package Introduction

| Package Name                                     | Description                                                                                |
| ---------------------------------------- | ----------------------------------------------------------------------------------- |
| `packages/dev-server`                   | Debugging on port 80, convenient for server users                                                     |
| `packages/origine2`                     | Editor frontend                                                                            |
| `packages/terre-electron`                | Electron version of Terre editor                                                      |
| `packages/terre2`                       | Editor backend                                                                            |
| `packages/vscode-ws-jsonrpc-webgal`      | Custom package for the WebGAL editor backend, fixing some bugs                                      |
| `packages/WebGAL-electron`               | Electron packaging of WebGAL                                                             |


##  WebGAL Terre Frontend and Backend Joint Debugging Guide

WebGAL Terre is a TypeScript full-stack project that uses OpenAPI to generate code for requesting backend interfaces.

To make this process work correctly, pay attention to the following annotations when developing interfaces for the WebGAL Terre backend:

**1. Introduction to Interface Annotations**

The following code example demonstrates the key annotations required for backend interfaces:

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

**2. Detailed Explanation of the Code Example**

Let's analyze this code line by line to understand the role of each annotation:

* **`@Post('createGame')`**:  
    * `@Post`: Indicates that this is a POST request interface.
    * `'createGame'`: Defines the path of the interface, which is `/createGame`.

* **`@ApiOperation({ summary: 'Create a new game' })`**:
    * `@ApiOperation`: Used to describe the function of the interface.
    * `summary`: Briefly summarizes the role of the interface and will be displayed in the generated OpenAPI documentation.

* **`@ApiResponse({ status: 200, description: 'Game creation result.' })`**:
    * `@ApiResponse`: Describes the possible responses of the interface.
    * `status`: Specifies the HTTP status code, here it is 200, indicating success.
    * `description`: Describes the response content under this status code.

* **`@ApiBody({ type: CreateGameDto, description: 'Game creation data' })`**:
    * `@ApiBody`: Specifies the data type and description of the request body.
    * `type`: Indicates the data structure of the request body, here using `CreateGameDto`, which is a predefined DTO (Data Transfer Object).
    * `description`: Describes the meaning of the request body data.

* **`async createGame(@Body() createGameData: CreateGameDto)`**:
    * `async`: Indicates that this is an asynchronous function.
    * `createGame`: The function name of the interface.
    * `@Body()`: Gets data from the request body.
    * `createGameData: CreateGameDto`: Parses the request body data into an object of type `CreateGameDto`.


**3. Updating OpenAPI in the Frontend Project**

To allow the frontend project to use the latest backend interface, you need to update the OpenAPI definition regularly during development.

**Steps:**

1. Ensure that the backend project is running (as mentioned earlier, execute: `yarn dev`).
2. In the `packages/origine2` directory, execute the command: `yarn openapi`.

This command will automatically generate the latest OpenAPI definition file based on the annotations in the backend code. The frontend project will use this file to generate code for requesting interfaces, ensuring consistency between the frontend and backend interfaces.

**4. Using the Interface in the Frontend Project**

In the WebGAL frontend project, you can call the backend interface in the following way:

1. Import the `api` object: `import {api} from "@/api";`
2. Call the method on the `api` object, for example: `api.manageGameControllerGetGameList()`.

The `api` object contains corresponding methods for all backend interfaces, and you can call them directly based on the interface name.

## More Information about Development

In addition to this, we will also provide some documentation in key directories of the source code to explain the principles of this module. This information will be provided in Chinese. Nowadays, large language models perform well enough in translation, so you don't have to worry if you can't read Chinese. You can try using a large language model to translate it into your language.
