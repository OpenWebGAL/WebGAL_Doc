# 变量

::: warning
在你弄清楚如何使用场景跳转和分支跳转之前，请不要轻易使用变量系统，这可能会令你感到迷惑！
:::

## 使用变量

设置变量：

``` ws
setVar:a=1; // 可以设置数字
setVar:a=true; // 可以设置布尔值
setVar:a=人物名称; // 可以设置字符串
setVar:a=; // 可以设置空值（空字符串）
```

设置随机数，请使用 `random()`

```ws
setVar:a=random();
```

`random([lower=0], [upper=1], [floating])` 随机数是一个**内置函数**，它支持多个传参：

**参数**：
1. [lower=0] (number): 下限。
2. [upper=1] (number): 上限。
3. [floating] (boolean): 指定是否返回浮点数。

不写参数，它会生成一个是一个0-1区间的浮点数
```ws
setVar:a=random();
```

当然，我们也可以指定**范围**。比如，你想要5-10之间的随机数，你可以写成：
```ws
setVar:a=random(5,10);
```

当然你想要它使用范围生成的数值也有小数，那么可指定第三个参数：
```ws
setVar:a=random(5,10,true); # 将会生成5-10之间的浮点数
```

如果先前你定义过其他变量，也可以在设置变量时使用。

``` ws
setVar:a=1;
setVar:b=a+1;
```

### 高级表达式支持

`setVar` 支持复杂的数学表达式和字符串运算：

``` ws
; 支持括号和运算优先级
setVar:result=(a+b)*2-c/3;

; 字符串会自动拼接
setVar:a=hello;
setVar:b=world;
setVar:c=a+b; // c 的值将是 "helloworld"

; 变量引用
setVar:baseScore=100;
setVar:bonus=50;
setVar:totalScore=baseScore+bonus; // totalScore 将是 150
```

## 条件执行

在语句后加上 `-when=(condition)` 参数，可以根据条件判断当前语句是否要执行。

例如：

``` ws
setVar:a=1;
; // 当 a 大于 1 时跳转到场景 1
changeScene:1.txt -when=a>1;
; // 只有 a 为 1 时才跳转，注意相等运算符是 ==
changeScene:2.txt -when=a==1;
; // 如果 a 小于 1，那么上面的语句不执行，自然就执行这一句了
changeScene:3.txt;

```

::: tip
`=` 是赋值符号，不可用于条件判断，`==`是相等运算符。
:::

任何语句都可以加上 `-when` 参数来控制是否执行。通过组合 `-when` 参数和 `jumpLabel` `callScene` `changeScene`，你可以实现带条件判断的流程控制。

## 获取用户输入

使用`getUserInput` 指令来获取用户输入，例如：

```
getUserInput:name -title=如何称呼你 -buttonText=确认; 将用户输入写入 name 变量中
```

其中，`title` 参数是提示的文本，`buttonText` 是确认按钮的文本，`defaultValue` 是默认值。

## 调试变量

使用 `showVars` 指令可以显示当前所有变量的值，包括普通变量和全局变量：

``` ws
setVar:score=100;
setVar:playerName=Alice -global;
showVars:; // 将在对话框中显示所有变量的 JSON 格式
```

这个指令主要用于调试，可以帮助你了解当前游戏中所有变量的状态。

## 动态切换 UI 样式

使用 `applyStyle` 指令可以动态替换 UI 元素的 CSS 类名：

``` ws
; 切换单个样式
applyStyle:textbox-default->textbox-dark;

; 批量切换样式
applyStyle:btn-primary->btn-dark,text-light->text-dark,bg-light->bg-dark;
```

这个功能可以用于实现：
- 动态主题切换（如日间/夜间模式）
- 特定场景的 UI 风格变化
- 根据剧情需要改变界面样式

## 变量插值

可以在语句中使用 `{}` 语法来进行变量插值，将某个变量传入语句中，例如：

```
setVar:name=WebGAL;
setVar:engine=WebGAL;
{name}:欢迎使用 {engine}！这是一款全新的网页端视觉小说引擎。;
```

## 长效变量（全局变量）

WebGAL 的普通变量是跟随存档的，也就是说，任何变量只存在于当前的游戏场景中，只有存档才能将其保存下来，读档将其恢复。

为了解决可能存在的作者希望设置多周目的问题，提供长效（全局）变量，一旦设置，则在整个游戏中生效，除非用户清除全部数据。

加上 `-global` 参数可以设置长效（全局）变量

```ws
setVar:a=1 -global;
```

这样就设置了一个不随存档读取而改变的变量。

使用例：

```ws
jumpLabel:turn-2 -when=a>0;
setVar:a=1 -global;
一周目;
changeScene:一周目剧情.txt;
label:turn-2;
二周目;
changeScene:二周目剧情.txt;
```

## 高级用法（`>=4.5.4`）
使用内置变量进行更为高级的操作，如对配置变量进行修改，根据内置变量进行指定条件的逻辑运行等。

WebGAL 目前内置变量域有两个：`stage`和`userData`。

::: tip
`stage` 为**运行时内置变量**，`userData` 为**存档内置变量**。

`stage` 可在 WebGAL 编辑器下面的`state`选项卡查看有哪些属性，`userData`则是可以在开发者工具中`indexedDB`查看。
:::

使用`$`可以访问他们，如获取BGM的值：

```ws
setVar:a=($stage.bgm.volume);
WebGAL:当前的BGM音量为{a};
```

当然，你也可以直接在对话中使用它：

```ws
WebGAL:当前的BGM音量为{$stage.bgm.volume};
```

::: warning
获取**单值变量**时需要使用`括号`包裹，但进行数学运算时不需要。
:::

我们还可以访问`config.txt`中的全局变量：

```ws
setVar:title=(Game_name);
WebGAL:当前的游戏标题为{title};
```

修改也不例外，当要修改游戏标题为新游戏标题时，setVar的变量名称需要设置为我们将修改的变量名称

加`global`参数表示我们要修改的是配置变量：

```ws
setVar:Game_name=新游戏标题 -global;
WebGAL:当前的游戏标题为{Game_name};
```

::: warning
不加`global`则会赋值到游戏内变量，请注意何时使用`global`参数。
:::

::: tip
可以修改的原始配置变量`Title_img`、`Title_bgm`、`Game_name`、`Game_key`。
想要恢复则可以在游戏选项中使用`清空所有数据`即可恢复。
:::

当然，你也可以在`config.txt`中创建一个自定义配置变量，如 创建一个版本号：

```text
Game_name:欢迎使用WebGAL！;
Game_key:f60ad5725c1588;
Title_img:WebGAL_New_Enter_Image.png;
Title_bgm:s_Title.mp3;
Textbox_theme:imss;
; 增加版本号
version:1;
```

那么我们就可以在脚本里面对它进行获取，修改等操作：

```ws
setVar:v=(version);
WebGAL:当前的版本号为{v};
setVar:version=version*2 -global;
WebGAL:当前被修改的版本号为{version};
```

::: warning
`config.txt`暂未做特殊符号的转义处理。
:::
