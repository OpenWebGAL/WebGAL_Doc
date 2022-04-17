# 开发信息文档

## 分支说明

```
main: 稳定版
4.X-dev: WebGAL 4.x 开发版
其他分支: 旧版本的留档
```

# 贡献者指引

## 有关脚本格式的说明

语法：

`command:content -parameter1 -parameter2 ......;`

例如：

`changeFigure:testFigure04.png -left -next;`

## 自定义演出的调用说明


如果你希望使用引擎调用一个自定义演出，请按照以下步骤逐步将你的脚本语句、演出调用与 WebGAL 整合。

### 第一步：设计自定义脚本

脚本的组成如前文所述，由命令、语句内容和参数列表组成。首先，你需要设计一段命令，用于执行你的自定义演出。

例如，你希望展示一段 cg 。

这时，你可以将命令设计为 cg 。命令的命名方式遵循小驼峰命名法。你也可以命名为 showCg 。

现在，你需要将命令的主要部分作为语句内容。比如说 cg 图像的文件名。

`cg:cg1.png;`

这样，一个基本的自定义脚本就设计好了。接下来介绍如何设计参数。

WebGAL 内置了一些参数，用于控制基本的流程。比如说 `-next` 这代表在这条语句执行后，无条件执行下一条语句，直至没有含有 `-next` 参数的语句为止。

如果你希望自定义参数，你可以将参数设计为 `-key:value` 的形式。

比如： `-duration=1s` `isHoldOn=true` `target_id=1`

如你所见，参数的值的类型可以是： 字符串、布尔值、数值。 WebGAL 会自动推算参数的类型。

如果一个参数的值的类型是布尔值，那么假如你希望设置这个值为 `true` ，你可以使用简化写法：`-key`。

在引擎里，其会被自动转化为 `-key=true`。

### 第二步，在脚本解析器里解析你的脚本。

脚本解析器的代码位于 `src/Core/parser` 目录内。

首先，你需要将脚本的命令部分解析为一个引擎内部表示的命令。你需要编辑 `src/Core/interface/sceneInterface` 中的 `commandType` 枚举类型，加入你的自定义脚本的类型。

然后，编辑 `src/Core/parser/scriptParser/commandParser.ts` 来将你设计的脚本命令的字符串表示与引擎的内部表示对应起来。

如果你希望你的脚本在执行时自动执行下一句脚本（比如你改变了bgm，很显然你希望这一句脚本不会导致游戏流程的暂停，而是继续执行下一条语句），那么就在文件末尾处的 `nextList` 中加入你的自定义脚本的类型。

#### 将语句中的文件名解析为资源路径

**如果你的语句不包含资源，那么这一步你什么都不用做。**

现在，让我们将脚本内容中的文件名解析为引擎可以获取的路径。

编辑 `src/Core/parser/scriptParser/contentParser.ts` ，将你的脚本所需要获取的资源类型与资源所在的目录对应起来。

WebGAL 有几种内置的文件类型：

```typescript
export enum fileType {
    background,
    bgm,
    figure,
    scene,
    tex,
    vocal,
    video
}
```

它们分别对应着 背景图像、背景音乐、人物立绘、场景文件、纹理文件、语音文件、视频文件。

如果你的自定义脚本所需要获取的资源在以上文件目录中，那么你可以直接调用 `assetSetter` 函数来将文件名转为实际的资源路径。

一个例子： `assetSetter(contentRaw, fileType.background);`

其中，`contentRaw` 是你的脚本的语句内容。WebGAL 会自动将参数和命令切割走，以保证在进行资源获取时不会出现干扰资源获取的字符。

如果你的资源类型不属于以上任意一种类型，你需要在 `src/Core/util/assetSetter.ts` 中将资源类型与资源所在的目录对应起来。

#### 预加载语句的资源

如果你的语句包含资源，你肯定希望这个资源可以在引擎运行时预加载，以获得更流畅的游戏体验。

编辑 `src/Core/parser/scriptParser/assetsScanner.ts` ，然后将你所需要的资源用一个对象表示出来：

```typescript
{
    name: content, //资源名称
    url: content, //资源所在路径，一般来说，在解析到这一步的时候， content 已经被转化为路径。
    lineNumber: 0, //资源所在的行号（目前预留，还没有实际作用）
    type: fileType.video, //资源的类型
}
```

### 第三步、让演出调用器调用你的演出

接下来，你需要编写一个函数，实际地执行你希望执行的演出效果，并生成一个对象，用于让演出管理器可以管理这个演出。

在 `src/Core/controller/gamePlay/scripts` 中找到 `template.ts` 将其复制一份，并重命名。

这个函数接受一个类型为 ISentence 的参数，这个参数表示着你的自定义演出语句的全部信息。

```typescript
/**
 * 单条语句接口
 * @interface ISentence
 */
export interface ISentence {
    command: commandType // 语句类型
    commandRaw: string // 命令的原始内容，方便调试
    content: string // 语句内容
    args: Array<arg> // 参数列表
    sentenceAssets: Array<IAsset> // 语句携带的资源列表，预加载用
    subScene: Array<string> // 语句包含子场景列表，预加载用
}
```

```typescript
/**
 * 语句执行的模板代码
 * @param sentence
 */
export const template = (sentence: ISentence): IPerform => {
    /**
     * 在这里编写你的自定义演出执行的逻辑。
     */

    return {
        performName: '演出名称', //在这里填写你的演出的名称，none代表这个语句只改变状态，不发生任何演出。
        duration: 0, //在这里填写你的演出完成所需要的时间，单位为ms
        isOver: false, //演出是否结束，如果这个值为false，那么演出将不会阻塞用户点击和自动播放
        isHoldOn: false, //演出是否会在语句结束后保持。所有非保持类型的演出会在当前的对话结束后被自动清除
        stopFunction: () => {
            //卸载或停止演出的函数。演出结束后会被自动调用，请在这里编写演出结束时卸载演出的逻辑。
        }, 
        blockingNext: () => false, //是否要阻塞用户点击，是一个函数，返回布尔值，代表要不要阻塞
        blockingAuto: () => true, //是否要阻塞自动播放，是一个函数，返回布尔值，代表要不要阻塞
        stopTimeout: undefined, // 一般来说，这个计时器会被自动设置
    };
};

```

### 最后一步、将你的演出函数与命令类型对应起来。

编辑 `src/Core/controller/gamePlay/runScript.ts` 中的`scriptToFuncMap` ，在数组中添加一个元素：

`[commandType.performType, performFunc]`

这样，你的演出调用函数就和演出类型对应起来了。

**你的自定义演出现在可以被 WebGAL 调用了。**