# How to Use WebGal Terre in Windows 7

**Other language versions:** 

[zh-cn](./win7)

## Precondition

### Install node.js of version 14~16.3

1. Open [Node.js Official Website - Node v16.3.0 Download Address](https://nodejs.org/dist/v16.3.0/) to download installation package.

    1. Download the appropriate installation package for your system，

        Please choose between folder **win-x64** or folder **win-x86**，don't download other files.

    2. Download **node.exe** in folder.

2. Set the environment variable to skip node.js platform check, that it is able to install node.js.

    1. Right click **Computer** in desktop，Click **Attributes** in menu.
    2. Open the **Advanced System Settings** in left panel.
    3. Click the **Environment variable** in bottom right corner of window.
    4. Add variable **NODE_SKIP_PLATFORM_CHECK** in system variable，value is **1**.
    5. Save Environment variables.

3. Run the installation package (The node.exe you just downloaded) to install node.js.

---

## Way 1: Use WebGal Terre Win7 Support Patch

### Download Patch

>  Download address：
>
>  [GitHub (Third-party patch)](https://github.com/hshqwq/WebGAL_Terre/releases)
>
>  [Lanzou Cloud (Third-party patch)](https://wwh.lanzoue.com/i2xqa0uy2fuh)

### Download WebGal Terre

Download the [WebGal Terre](./guide#方法1（推荐）：使用 WebGAL 编辑器) corresponding to the patch, then decompress it.  
View file with name such as **使用说明, README** , Or View the value of **version** in **package.json**, that to obtain the corresponding version.

### Patch Usage

Decompress patch, copy files in the patch to the folder of WebGal Terre.

### Install Dependencies

Run **Install_Dependencies.bat** to install dependencies. If appeared the folder *node_modules*, that meant success.

Manually Installation:

1. Open any terminal.

2. Cd to folder WebGal Terre.

3. Run this command:

    ```bash
    npm i 
    # or (need to install yarn before)
    yarn
    ```

### Run the WebGal Terre

Run **WebGal_Terre-Win7.bat**.

Manually Run：

1. Open any terminal.

2. Cd to folder WebGal Terre.

3. Run this command:

    ```bash
    node main.js
    ```

::: tip Notice

If your computer installed the other version node.js, please switch to version 14~16.3.

:::

---

## Way 2: Build with Source Code (Someone with some programming experience is recommended)

### Get Source Code

Clone [WebGAL_Terre](https://github.com/MakinoharaShoko/WebGAL_Terre) repo.

```shell
git clone https://github.com/MakinoharaShoko/WebGAL_Terre.git
```

### Install Yarn Package Manager (Optional)

Install yarn (Optional)  

```
npm i -g yarn
```

### Build WebGal Terre

#### Way 1: Build All Packages

1. Install dependencies. run in project root.

    ```shell
    yarn
    ```
    
2. See the commands in **release.sh** to build all packages except **Terre**.

3. Manually build **Terre**, see [**Build Terre2 Only**](./#Way 2: Build *Terre2* Only).

#### Way 2: Build *Terre2* Only

1. open folder **packages/terre2**.

2. Install dependencies.

    ```
    yarn
    ```

3. Build *terre2*.

    ```shell
    yarn run build
    ```

4. Delete files ending in **.d.ts** in folder **dist**. (optional)

5. Add **package.json** in folder **dist**，value of it is (Fill the version please)：

    ```json
    {
        "name": "webgal-terre-2-win7-server",
        "version": "version",
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

6. Copy folder **dist** to WebGal Terre folder which is built.

### Run WebGal Terre

1. Install dependencies in WebGal Terre folder root.

    ```shell
    npm i
    # 或（推荐yarn）
    yarn
    ```

2. Run `node main.js` in terminal. You can code it as a bat or sh script.