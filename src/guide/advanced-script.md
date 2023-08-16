# 进阶语法

## 在同一个场景（TXT 文件）内实现语句跳转、分支跳转

如果你想要创建一个分支，但是却觉得为此新建一个 TXT 文件太麻烦，你可以尝试使用以下方式在同一文件内实现创建分支和跳转语句。

**注意：如果你的分支很长，我不建议你使用这种方式，因为一个 TXT 的行数不适宜太长，否则可能会导致加载慢、响应迟钝等性能问题。**

### 首先，你必须理解如何使用 label

```
......
jumpLabel:label_1;
//以下这些行会被忽略:
......
......
......
//然后，你需要创建label:
label:label_1;
然后，程序会在这里继续执行。;
......
......
```

简而言之， jumpLabel 类似于 goto 语句，能够立刻让你的剧本跳到场景（TXT 文件）中的任意一个位置，而这个位置需要你用 label 创建。

如果把 jumpLabel 比作任意门，那么这个任意门的终点就是 label 所在的位置。

### 有了上面的基础，你就可以通过 choose 来实现用分支来跳转到 label 所在的位置了

```
WebGAL:让我们来测试分支跳转到label！;
choose:测试1:label_1|测试2:label_2;
label:label_1;
现在应该是1号分支;
jumpLabel:end;
label:label_2;
现在应该是2号分支;
jumpLabel:end;
label:end;
现在是统一的结束;
```

注意，在每个分支的结尾，你应该用 jumpLabel 来跳转到你希望的位置。由于程序是线性执行的，所以如果你没有在分支的结束跳转，那么程序会继续往下运行，比如说：

```
WebGAL:让我们来测试分支跳转到label！;
choose:测试1:label_1|测试2:label_2;
label:label_1;
现在应该是1号分支;
label:label_2;
现在应该是2号分支;
现在是统一的结束;
```

在这个剧本中，如果你选择了分支 2，那么一切看起来好像没有问题。但是如果你选择了分支 1，你会惊讶地发现，在分支 1 执行完后，竟然分支
2 又执行了一遍。那是因为程序按顺序继续执行下一行了，而你没有指定在分支结束后跳到哪里。

## 使用变量

**注意：在你弄清楚如何使用 label，如何在 label 内部跳转场景之前，请不要轻易使用变量系统，这可能会令你感到迷惑！**

设置变量：

```
setVar:a=1; // 可以设置数字
setVar:a=true // 可以设置布尔值
setVar:a=人物名称 // 可以设置字符串
```

如果先前你定义过其他变量，也可以在设置变量时使用。

```
setVar:a=1;
setVar:b=a+1;
```

## 条件执行

在语句后加上 `-when=(condition)` 参数，可以根据条件判断当前语句是否要执行。

例如：

```
setVar:a=1;
changeScene:2.txt -when=a>1; // a>1时跳转到场景2
changeScene:3.txt; // 如果a<=1，那么上面的语句不执行，自然就执行这一句了。
changeScene:3.txt -when=a==1; 只有a为1时才跳转，注意相等运算符是 ==
```

**注意：`=` 是赋值符号，不可用于条件判断，`==`是相等运算符。**

任何语句都可以加上 `-when` 参数来控制是否执行。通过组合 `-when` 参数和 `jumpLabel` `callScene` `changeScene`
，你可以实现带条件判断的流程控制。

## 在一句对话中加入演出

有时候，可能你希望在某一句对话执行到某个阶段时加入演出效果，比如切换表情等。
这时候，你可以使用 `-notend` `-concat` 参数来实现在对话中插入任意语句。

`-concat` 代表本句对话连接在上一句对话之后

`-notend` 代表本句对话没有结束，在后面可能连接演出或对话。

示例如下：这是一个在对话进行中切换立绘的演示。

```
WebGAL:测试语句插演出！马上切换立绘...... -notend;
changeFigure:k1.png -next;
切换立绘！马上切换表情...... -notend -concat;
changeFigure:k2.png -next;
切换表情！ -concat;
```

## 添加自定义特效

你可以下载源代码，然后找到 /Core/gameScripts/pixiPerformScripts/ 然后新建一个 `PIXI.Container`用于制作你所需要的特效。

```ts
const effectsContainer = RUNTIME_GAMEPLAY.pixiStage!.effectsContainer!; //获取当前的 Pixi 效果 Container
const app = RUNTIME_GAMEPLAY.pixiStage!.currentApp!; // 调用 Pixi App 的方式，对确定屏幕尺寸等可能有用
const container = new PIXI.Container(); //创建自定义特效的container
effectsContainer.addChild(container); //添加特效
```

纹理文件可以放在 /game/tex 目录下。

然后，在 文件开头导入特效注册方法 注册你写的新特效。

在文件末尾使用其注册你的特效, 第一个参数是特效名, 第二个是调用特效的方法.

```typescript
import {registerPerform} from '../pixiPerformManager';

// 假设这是你的特效
function myPerform() {
    // ...
}

// 注册
registerPerform('myPerform', () => myPerform(参数));
```

最后，编译出支持你自定义特效的 WebAPP

``` shell
yarn run build;
```

这样，你就可以在脚本中调用你的特效了

```
pixiPerform:你的新特效;
```
