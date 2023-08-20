# Windows 7 使用可视化编辑器开始制作的方法

## 前置条件

### 安装 14~16.3 版本的 node.js

1. 打开 [node.js 官网 node v16.3.0 下载地址](https://nodejs.org/dist/v16.3.0/) 下载安装包。

    镜像站: <https://registry.npmmirror.com/binary.html?path=node/v16.3.0/>

    1. 根据自己的系统选择合适的安装包，

        注意在 *win-x64*, *win-x86* 两个文件夹中选择，不要下载其它文件。

    2. 选择对应版本文件夹后下载里面的 *node.exe*。

2. 设置绕过系统检查的环境变量

    1. 右键 *我的电脑 / 计算机* ，在菜单中点击 *属性*。
    2. 在左侧面板中打开 *高级系统设置* 。
    3. 点击右下 *环境变量* 。
    4. 在系统变量中添加变量 *NODE_SKIP_PLATFORM_CHECK*，值为 *1* 。
    5. 保存。

3. 运行 node.js 的安装包 (刚才下载的 *node.exe*)，安装 node.js。

---

## 方法一：使用 Terre Win7 支持补丁

### 下载支持 Win7 的 Terre 补丁

> 下载地址：
>
> [GitHub（第三方补丁支持）](https://github.com/hshqwq/WebGAL_Terre/releases)
>
> [蓝奏云（第三方补丁支持）](https://wwh.lanzoue.com/i2xqa0uy2fuh)

### 下载可视化编辑器

下载补丁对应版本的[可视化编辑器](./guide#方法1（推荐）：使用 WebGAL 编辑器)并解压。  
对应版本请查看补丁中诸如 *使用说明, README* 等文件, 或查看 *package.json* 中 *version* 对应的值.

### 使用补丁

解压补丁，并将补丁中文件复制到可视化编辑器的根目录下。

### 安装依赖

运行 *Install_Dependencies.bat* 安装依赖，出现 *node_modules* 文件夹即代表成功。

手动方法：

1. 打开任意终端。

2. 打开编辑器所在目录。

3. 运行以下命令：

    ```bash
    npm i 
    # 或（如果你有安装yarn）
    yarn
    ```

### 启动可视化编辑器

运行 *WebGal_Terre-Win7.bat* 启动编辑器。

手动方法：

1. 打开任意终端。

2. 打开编辑器所在目录。

3. 运行以下命令：

    ```bash
    node main.js
    ```

::: tip

如果电脑装过低于 14 版本的 node 请先切换为 14~16.3 版本的 node。

:::

---

## 方法二：从源码编译（推荐有一定编程经验的人采取）

### 获取源代码

克隆 [WebGAL_Terre](https://github.com/MakinoharaShoko/WebGAL_Terre) 仓库。

``` shell
git clone https://github.com/MakinoharaShoko/WebGAL_Terre.git
```

### 安装包管理器 (可选)

安装 yarn （可选，推荐）  

``` shell
npm i -g yarn
```

### 编译可视化编辑器

#### 方式一: 编译整个可视化编辑器

1. 安装依赖

    在项目根目录执行依赖安装。

    ```shell
    yarn
    ```

2. 按照 *release.sh* 中命令打包除 *Terre* 以外的 packages。

3. 手动编译 *Terre*，参考 [*仅编译 Terre*](./#方式二: 仅编译 *Terre*)。

#### 方式二: 仅编译 *Terre2*

1. 打开 *packages/terre2* 。

2. 安装依赖

    ``` shell
    yarn
    ```

3. 打包 *terre2*

    ``` shell
    yarn run build
    ```

4. 删除 *dist* 目录下所有 *.d.ts* 结尾文件 (可选)。

5. 在 *dist* 中添加 *package.json* 文件，内容（注意填写相关信息）：

    ```json
    {
        "name": "webgal-terre-2-win7-server",
        "version": "版本号",
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

6. 复制 `dist`目录到已编译的编辑器目录下。

### 运行可视化编辑器

1. 在可视化编辑器目录下安装依赖。

    ``` shell
    npm i
    # 或（推荐yarn）
    yarn
    ```

2. 运行 `node main.js` 启动可视化编辑器。可根据需求写成 bat, sh 脚本。
