# 特效

目前，WebGAL 的特效系统由 PixiJS 实现。

## 使用特效

### 初始化 Pixi

使用 `pixiInit` 初始化 Pixi。

``` ws
pixiInit;
```

::: warning
如果你要使用特效，那么你必须先运行这个命令来初始化 Pixi。

如果你想要消除已经作用的效果，你可以使用这个语法来清空效果。
:::

### 添加特效

使用 `pixiPerform` 添加特效。

``` ws
pixiPerform:rain; // 添加一个下雨的特效
```

注意：特效作用后，如果没有初始化，特效会一直运行。

### 预制特效列表

| 效果 | 指令                        |
| :--- | :-------------------------- |
| 下雨 | pixiPerform:rain;           |
| 下雪 | pixiPerform:snow;           |
| 樱花 | pixiPerform:cherryBlossoms; |

### 叠加特效

如果你想要叠加两种及以上效果，你可以在不使用 `pixiInit` 指令的情况下叠加不同的效果。

``` ws
pixiPerform:rain;
pixiPerform:snow;
```

### 清除已叠加的特效

使用 `pixiInit` 来初始化，这样可以消除所有已经应用的效果。

## 添加自定义特效

你可以下载源代码，然后找到 `/Core/gameScripts/pixiPerformScripts/` 然后新建一个 `PIXI.Container` 用于制作你所需要的特效。

``` ts
// 获取当前的 Pixi 效果 Container
const effectsContainer = RUNTIME_GAMEPLAY.pixiStage!.effectsContainer!;
// 调用 Pixi App 的方式，对确定屏幕尺寸等可能有用
const app = RUNTIME_GAMEPLAY.pixiStage!.currentApp!;
// 创建自定义特效的container
const container = new PIXI.Container();
// 添加特效
effectsContainer.addChild(container);
```

纹理文件可以放在 `game/tex` 目录下。

然后，在 文件开头导入 `特效注册方法` 注册你写的新特效。

在文件末尾使用其注册你的特效, 第一个参数是特效名, 第二个是调用特效的方法.

``` ts
import {registerPerform} from '../pixiPerformManager';

// 假设这是你的特效
function myPerform() {
    // ...
}

// 注册
registerPerform('myPerform', () => myPerform(参数));
```

最后，编译出支持你自定义特效的 WebGAL

``` shell
yarn run build;
```

这样，你就可以在脚本中调用你的特效了

``` ws
pixiPerform:你的新特效;
```
