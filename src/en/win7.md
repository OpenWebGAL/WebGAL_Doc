# Windows 7 Using Visual Editor to Start Making

## Prerequisites

### Install node.js version 14~16.3

1. Open [node.js official website node v16.3.0 download address](https://nodejs.org/dist/v16.3.0/) to download the installation package.

    Mirror site: <https://registry.npmmirror.com/binary.html?path=node/v16.3.0/>

    1. Select the appropriate installation package according to your system.

        Be careful to select from the *win-x64*, *win-x86* folders, do not download other files.

    2. Download *node.exe* inside the corresponding version folder after selecting it.

2. Set environment variables to bypass system checks

    1. Right-click *My Computer / Computer*, and click *Properties* in the menu.
    2. Open *Advanced system settings* in the left panel.
    3. Click *Environment Variables* in the lower right corner.
    4. Add the variable *NODE_SKIP_PLATFORM_CHECK* in the system variables, with a value of *1*.
    5. Save.

3. Run the node.js installation package (the *node.exe* you just downloaded) to install node.js.

---

## Method 1: Use Terre Win7 Support Patch

### Download Terre patch that supports Win7

> Download address:
>
> [GitHub (third-party patch support)](https://github.com/hshqwq/WebGAL_Terre/releases)
>
> [LanZou Cloud (third-party patch support)](https://wwh.lanzoue.com/i2xqa0uy2fuh)

### Download the visual editor

Download the [visual editor](./guide#Method 1 (Recommended): Using WebGAL Editor) corresponding to the patch version and unzip it.

For the corresponding version, please check files such as *Instructions, README* in the patch, or check the value corresponding to *version* in *package.json*.

### Use patch

Unzip the patch and copy the files in the patch to the root directory of the visual editor.

### Install dependencies

Run *Install_Dependencies.bat* to install dependencies. The appearance of the *node_modules* folder indicates success.

Manual method:

1. Open any terminal.

2. Open the directory where the editor is located.

3. Run the following command:

    ```bash
    npm i 
    # or (if you have yarn installed)
    yarn
    ```

### Start the visual editor

Run *WebGal_Terre-Win7.bat* to start the editor.

Manual method:

1. Open any terminal.

2. Open the directory where the editor is located.

3. Run the following command:

    ```bash
    node main.js
    ```

::: tip

If your computer has installed a version of node lower than 14, please switch to node version 14~16.3 first.

:::

---

## Method 2: Compile from source code (recommended for people with certain programming experience)

### Get the source code

Clone the [WebGAL_Terre](https://github.com/MakinoharaShoko/WebGAL_Terre) repository.

``` shell
git clone https://github.com/MakinoharaShoko/WebGAL_Terre.git
```

### Package manager (optional)

Install yarn (optional, recommended)

``` shell
npm i -g yarn
```

### Compile the visual editor

#### Method 1: Compile the entire visual editor

1. Install dependencies

    Install dependencies in the project root directory.

    ```shell
    yarn
    ```

2. Package the packages other than *Terre* according to the commands in *release.sh*.

3. Compile *Terre* manually, refer to [*Compile Terre Only*](./#Method 2: Compile *Terre* Only).

#### Method 2: Compile *Terre2* Only

1. Open *packages/terre2*.

2. Install dependencies

    ``` shell
    yarn
    ```

3. Package *terre2*

    ``` shell
    yarn run build
    ```

4. Delete all *.d.ts* ending files in the *dist* directory (optional).

5. Add a *package.json* file in *dist*, content (note to fill in the relevant information):

    ```json
    {
        "name": "webgal-terre-2-win7-server",
        "version": "version number",
        "description": "",
        "private": true,
        "license": "MPL-2.0",
        "dependencies": {
        "@nestjs/common": "^8.0.0",
        "@nestjs/core": "^8.0.0",
        "@nestjs/platform-express": "^8.0.0",
        "@nestjs/serve-static": "^2.2.2",
        "open": "^8.4.0",
        "reflect-metadata": "^0.1.13",
        "rimraf": "^3.0.2",
        "rxjs": "^7.2.0",
        "vscode-languageserver": "^8.1.0",
        "ws": "^8.8.1"
        }
    }
    ```

6. Copy the `dist` directory to the compiled editor directory.

### Run the visual editor

1. Install dependencies in the visual editor directory.

    ``` shell
    npm i
    # or (yarn recommended)
    yarn
    ```

2. Run `node main.js` to start the visual editor. It can be written as a bat, sh script according to needs.