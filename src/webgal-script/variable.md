# 变量

::: warning
在你弄清楚如何使用场景跳转和分支跳转之前，请不要轻易使用变量系统，这可能会令你感到迷惑！
:::

## 使用变量

设置变量：

``` ws
setVar:a=1; // 可以设置数字
setVar:a=true // 可以设置布尔值
setVar:a=人物名称 // 可以设置字符串
```

设置随机数，请使用 `random()`

```ws
setVar:a=random();
```

随机数是一个0-1区间的数字，如果你需要指定随机数范围，你需要进行一些算数运算。比如，你想要5-10之间的随机数，你需要进行如下运算：
```ws
setVar:a=5+a*5;
```

如果先前你定义过其他变量，也可以在设置变量时使用。

``` ws
setVar:a=1;
setVar:b=a+1;
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

其中，`title` 参数是提示的文本，`buttonText` 是确认按钮的文本

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