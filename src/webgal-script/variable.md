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
