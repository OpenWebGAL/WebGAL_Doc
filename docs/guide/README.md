# WebGAL 游戏开发指引

## 如何开始制作 WebGAL？

### 方法1（推荐）：使用 WebGAL 编辑器

**WebGAL 编辑器是创建、制作并发布一个 WebGAL 的最佳方式。**

在下载 WebGAL 编辑器后，请解压压缩包并启动 WebGAL_Terre 应用程序。WebGAL Terre 将会自动打开默认浏览器，如果没有打开，请输入 [http://localhost:3001/](http://localhost:3001/) 打开编辑器。

::: tip 提示
请使用现代浏览器 (Chrome / Firefox / Edge) 打开编辑器。使用其他浏览器所可能产生的问题，将不会得到解决。
:::

::: warning 警告
本页方法**不支持 Windows 7** , Windows 7 用户请参考 **[Windows 7 使用可视化编辑器开始制作的方法](./win7)**。
:::

你可以使用以下下载链接：

[GitHub](https://github.com/MakinoharaShoko/WebGAL_Terre/releases)

[蓝奏云](https://wwrl.lanzouw.com/iaHSP0wvz1za)

### 方法2：在本地通过书写脚本的形式开发，并实时调试

首先，下载已经被构建为静态网页的 WebGAL 发行版以及配套的调试环境。

你可以使用以下下载链接：

[GitHub](https://github.com/MakinoharaShoko/WebGAL/releases/)

[蓝奏云](https://wwrl.lanzouw.com/iVttg0wvz2pg)

下载并解压后，你可以直接运行对应版本的 WebGAL-server 开始调试你的视觉小说。如果遇到杀毒软件拦截或防火墙拦截等情况，请放行以允许该程序运行。

推荐使用 VS Code 进行开发，并使用插件来实现语法高亮：

[语法高亮插件的商店地址](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[语法高亮插件的源代码仓库](https://github.com/C6H5-NO2/webgal-script-basics)

### 方法3（适用于想要更高自定义程度的前端开发者）：从源代码开始调试

```shell
git clone https://github.com/MakinoharaShoko/WebGAL.git
```

安装并使用 yarn 安装依赖

```
npm install yarn -g
yarn
```

进入 WebGAL 包

```shell
cd packages/webgal
```

WebGAL 使用 vite 作为打包与调试工具，进入 webgal 包下后，你可以通过运行以下脚本启动开发服务器

```shell
yarn dev
```

如果你要打包，请使用

```shell
yarn build
```

### 如何部署或发布我的视觉小说？

首先，请知悉，可以部署到互联网的引擎应该是**发行版或由 WebGAL 图形化编辑器导出的网页**，而不是源代码。

**Web 网页：**

*如果你使用**编辑器**：*

在编辑器右上角选择导出为网页。网页的部署方式，与部署一个正常网站的方式无异。你可以购买云服务器（腾讯云、阿里云）等部署或使用 GitHub Pages。

*如果你使用**发行版**：*

复制/WebGAL 下的文件(不是文件夹，是/WebGAL 文件夹下的文件)到你想要部署的云服务器的指定目录下，或是部署到 GitHub Pages。

*使用**源代码开发**的开发者：*

如果你使用源代码进行调试，你可以通过 `yarn build` 来创建一个静态网页（在/dist 文件夹），然后将这个文件夹内的内容部署到 GitHub Pages 或你的云服务器上。

**Windows：**

在编辑器右上角选择导出为可执行文件，可执行文件可以直接在 Windows 上运行。

**Android：**

[将游戏打包到 andoird 平台](./android.md)

## 游戏脚本编写教程

现在，你应该已经启动了 WebGAL 编辑器或运行起来了一个调试服务器，接下来介绍如何编写你自己的剧本。

你应该能够发现，在解压后的文件夹下，有一个 WebGAL 文件夹，在 WebGAL 文件夹下，有一个 game 文件夹，那就是你的游戏资源应该存放的地方。**（如果你使用图形化编辑器，你可以在左侧的工具栏中直接打开对应的资源文件夹）**

你的所有游戏剧本、图片、立绘都应该放在 game 文件夹下，目录对应的资源说明如下：

| 文件夹     | 存放的资源                   |
| ---------- | ---------------------------- |
| animation  | 动画描述文件                 |
| background | 用于存放背景图片、标题页背景 |
| figure     | 用于存放人物立绘             |
| scene      | 用于存放用户剧本             |
| bgm        | 用于存放背景音乐             |
| vocal      | 用于存放配音文件             |
| video      | 用于存放视频                 |
| tex        | 用于存放特效纹理文件         |

## 定制你的游戏信息

在/game 文件夹下，有一个文件 config.txt，你可以在这个文件中填写你游戏的相关信息（使用图形化编辑器可以直接编辑）：

```
Game_name:WebGAL;//你的游戏名称
Game_key:0f33fdGr;//一串识别码，你应该尽可能随机地输入一串不容易与别人重复的字符，长度最好在6-10字符之间，否则可能会引发bug
Title_img:Title2.png;//标题的图片名称，图片放在/background 文件夹
Title_bgm:夏影.mp3;//标题的背景音乐，音乐文件应该放在/bgm文件夹
```

## 注释

WebGAL的脚本只会解析每一行的分号前的内容，因此分号后的内容会被视作注释

```
WebGAL:你好！; （分号后的内容会被视作注释）
;可以直接输入一个分号，然后写一条单行注释
```

## `-next` 参数

你可以在任意语句后加上参数 `-next`，这样做可以在执行完本条语句后立刻跳转到下一条语句。这对需要在同一时间内执行多步操作非常有用。

示例：

```
changeBg:testBG03.jpg -next; 会立刻执行下一条语句
```

## `none`关键字

在设置立绘、bgm、背景等**资源**时，通过设置为 `none` 关键字，可以关闭这个对象。

## 用户剧本的编写语法

首先，程序会从**初始脚本**`start.txt`开始运行，在后续的脚本编写中，会介绍如何跳转章节或设置分支选项。

**编写剧本的方式非常简单，且与自然语言几乎无异。**

### 基本人物对话

首先，使用记事本或 VS Code 、sublime 等文本编辑器，打开游戏资源目录下 scene 文件夹中的 start.txt，然后你就可以开始编写你的第一条对话了。

编写人物对话的方法非常简单，你只需要输入：

**注意，每条对话的冒号、分号应当为英文字符！**

```
人物:对话;
```

示例：

```
雪之下雪乃:请用茶;
由比滨:啊，谢谢;
小町:谢谢雪乃姐！;
一色:谢谢学姐。;
```

在每条对话/剧本后，使用分号作为结束。（如果不写分号有时候也行，但是作者还是建议加上分号以防止 bug）。

#### 连续对话

如果你的多条对话没有改变人物名称，你可以使用连续对话，而可以省略人物名称，再在你需要的时候使用：

```
雪之下雪乃:你到得真早;
对不起，等很久了吗？;//此时，对话的人物名称仍然是“雪之下雪乃”。
比企谷八幡:刚到而已;
```

#### 旁白

如果你想要创建没有人物名称的旁白对话，请在冒号前留空（但不能省去冒号）：

```
:这是一句旁白;
```

### 在显示对话时同时播放语音

众所周知，视觉小说 最吸引人的地方往往在于其有优秀的配音。在此版本中，你可以为对话引入配音了，将你的配音放入 vocal
文件夹，然后在参数加上语音文件名即可引入，语法示例如下：

```
比企谷八幡:刚到而已 -V3.ogg;
```

在连续对话时，语音的引入方式也是一样的：

```
雪之下雪乃:你到得真早 -V1.ogg;
对不起，等很久了吗？ -V2.ogg;
```

### 黑屏文字演示

在许多游戏中，会以黑屏显示一些文字，用来引入主题或表现人物的心理活动。你可以使用 intro 命令来演出独白：

```
intro:回忆不需要适合的剧本，|反正一说出口，|都成了戏言。;
```

独白的分拆以分隔符(|)来分割，也就是说，每一个 | 代表一个换行。在实际演出中，上面的文字会变成：

```
回忆不需要适合的剧本，
反正一说出口，
都成了戏言。
```

### 改变背景/人物立绘

要让 WebGAL 能够读取背景图片和人物立绘，你的背景图片应该被放在 background 文件夹内，而立绘图片则应该放在 figure 文件夹中。

接下来，你可以通过以下简单的语句来改变当前显示的背景图片和人物立绘：

```
changeBg:testBG03.jpg;//改变背景
changeFigure:testFigure02.png;//改变人物立绘
changeBg:none;//关闭背景
changeFigure:none;//关闭人物立绘
```

你有可能会发现，在你改变背景图片或人物立绘后，你需要再点击一下鼠标才能显示下一条对话，如果你希望在改变背景图片/立绘后立即执行下一条语句的内容，请使用：

```
changeBg:testBG03.jpg -next;
changeFigure:testFigure02.png -next;//改变人物立绘
一色:谢谢学姐！;
```

如果你这样做，那么在背景图片/立绘替换后，程序会立刻执行下一条语句。

### 将立绘放在不同的位置

现在，你可以在页面的三个不同位置放置不同的立绘，只需要在放置立绘的语句处加上你要放置的位置就可以了，示例如下：

```
changeFigure:testFigure03.png -left;
changeFigure:testFigure04.png;
changeFigure:testFigure03.png -right;
```

以上三行分别对应着左、中、右三个不同的位置。三个不同位置的立绘是相互独立的，所以如果你需要清除立绘，必须分别独立清除：

```
changeFigure:none -left;
changeFigure:none;
changeFigure:none -right;
```

如果你想要在立绘改变后立刻执行下一条语句，操作方法与之前一样，即加上参数 `-next` :

```
changeFigure:testFigure03.png -left -next;
changeFigure:testFigure04.png -next;
changeFigure:testFigure03.png -right -next;
```

### 带ID的自由立绘

如果你想要更精确地控制立绘，可以为立绘指定`id`和初始位置：

```
changeFigure:testFigure03.png -left -id=test1; // 一个初始位置在右侧的自由立绘
changeFigure:none -id=test1; // 通过id关闭立绘
```

注意：如果你要重设某个带ID立绘的位置，请先关闭再重新打开。

### 放置小头像

很多游戏可以在文本框的左下角放置小头像，以下是在本引擎中使用的语法：

```
miniAvatar:minipic_test.png;//在左下角显示minipic_test.png
miniAvatar:none;//关闭这个小头像
```

### 跳转场景与分支选择

在 视觉小说 中，跳转章节、场景与分支选择是不可或缺的，因此，本游戏模组也支持场景跳转与分支选择。

你可以将你的剧本拆分成多个 txt 文档，并使用一个简单的语句来切换当前运行的剧本。

假如你现在写了两个章节的剧本，分别是 Chapter-1.txt 与 Chapter-2.txt ，在 Chapter-1.txt 运行结束后，你希望跳转到
Chapter-2.txt 对应的场景，请使用以下语句：

#### 场景跳转

语句：

```
changeScene:Chapter-2.txt;
```

示例：

```
(Chapter-1.txt)
......
......
changeScene:Chapter-2.txt;
接下来执行的就是Chapter-2.txt的内容了。
......
......
(Chapter-2.txt)
```

通过执行这条命令，你将切换游戏场景，并使接下来的剧情发展按照新的场景剧本运行。新的剧本会在下一次鼠标点击后运行。

#### 场景调用

如果你需要在执行完调用的场景后回到先前的场景（即父场景），你可以使用 `callScene` 来调用场景

语句：

```
callScene:Chapter-2.txt;
```

示例：

```
(Chapter-1.txt)
......
......
callScene:Chapter-2.txt;
接下来执行的就是Chapter-2.txt的内容了。
......
......
(Chapter-2.txt)
......
(Chapter-2.txt执行完毕)
回父场景，继续执行父场景语句。
......

```

#### 分支选择

如果你的剧本存在分支选项，你希望通过选择不同的选项进入不同的章节，请使用以下语句：

其中，`|`是分隔符。

```
choose:叫住她:Chapter-2.txt|回家:Chapter-3.txt;
```

你只需要将选项的文本与选择选项后要进入的剧本名称一一对应起来，就可以实现分支选择的功能了。

### 结束游戏并返回到标题

如果你想要在剧情结束后结束游戏并返回到标题，请使用：

```
end;
```

这样，就可以使游戏返回标题界面。

### 引入背景音乐（BGM）

引入背景音乐的方法极其简单，你只需要将背景音乐放置在 /bgm 目录下，然后便可以简单地在需要的时候令其播放：

```
bgm:夏影.mp3;
```

### 使用效果音

```
playEffect:xxx.mp3;
```

可以播放一小段效果音

**效果音循环**

为效果音赋予一个 id 将会自动启用效果音循环，后续使用相同的 id 来停止

```
playEffect:xxx.mp3 -id=xxx;
playEffect:none -id=xxx;停止这个循环的效果音
```

### 播放一小段视频

```
playVideo:OP.mp4//视频应该放在/game/video/ 文件夹内
```

### 解锁BGM或CG以供鉴赏

在 WebGAL 4.2 中，加入了BGM和CG的鉴赏功能，你可以执行以下语句在适当的时机解锁BGM或CG。

```
unlockCg:xgmain.jpeg -name=星光咖啡馆与死神之蝶 -series=1; // 解锁CG并赋予名称
unlockBgm:s_Title.mp3 -name=Smiling-Swinging!!; // 解锁bgm并赋予名称
```

其中，`series`参数可选，代表当前立绘属于哪个系列。同系列的立绘以后会合并展示（即展示成可以切换的同系列CG）。

### 关闭文本框

有时候，为了一些特殊的演出效果，可能你希望临时关闭文本框，所以你可以使用以下指令：

```
setTextbox:hide;
```

来关闭文本框。当 `setTextbox` 指令的值为 `hide` 时，会关闭文本框，且用户无法以任何方式打开。如果想要重新显示文本框，请再次调用此命令，并输入除`hide`以外的任意值。

```
setTextbox:on; // 可以是除 hide 以外的任意值。
```

### 使用动画效果

#### 为背景或立绘设置动画

使用语句 `setAnimation:动画名 -target=作用目标;`

**示例：**

```
setAnimation:enter-from-bottom -target=fig-center -next;//为中间立绘设置一个从下方进入的动画，并转到下一句。
```

目前，预制的动画有：

| 动画效果 | 动画名    | 持续时间（毫秒） |
| -------- | --------- | --------- |
| 渐入     | enter | 300 |
| 渐出 | exit | 300 |
| 左右摇晃一次     | shake    | 1000 |
| 从下侧进入 | enter-from-bottom | 500 |
| 从左侧进入 | enter-from-right | 500 |
| 从右侧进入 | enter-from-right | 500 |
| 前后移动一次   | move-front-and-back | 1000 |

目前，动画的作用目标有：

| target     | 实际目标       |
| ---------- | -------------- |
| fig-left   | 左立绘         |
| fig-center | 中间立绘       |
| fig-right  | 右侧立绘       |
| bg-main    | 背景           |
|            | 某个有id的立绘 |

#### 自定义动画

动画文件在`/game/animation`，你可以创建自己的自定义动画。

动画文件使用 JSON 描述，你可以在 [参考文档](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/JSON) 参考JSON语法。

每一个动画文件都代表一个**动画序列**，使用一个JSON数组来描述。下面是一个示例，描述了一个从左侧进入的动画：

`enter-from-left.json`

```json
[
  {
    "alpha": 0,
    "scale": {
      "x": 1,
      "y": 1
    },
    "pivot": {
      "x": 0.5,
      "y": 0.5
    },
    "position": {
      "x": -50,
      "y": 0
    },
    "rotation": 0,
    "blur": 5,
    "duration": 0
  },
  {
    "alpha": 1,
    "scale": {
      "x": 1,
      "y": 1
    },
    "pivot": {
      "x": 0.5,
      "y": 0.5
    },
    "position": {
      "x": 0,
      "y": 0
    },
    "rotation": 0,
    "blur": 0,
    "duration": 500
  }
]

```

其中各个属性代表的释义为：

| 属性名   | 释义                                 |
| -------- | ------------------------------------ |
| alpha    | 透明度，范围0-1                      |
| scale    | 缩放                                 |
| pivot    | 锚点                                 |
| position | 位置偏移                                 |
| rotation | 旋转角度，单位为弧度                 |
| blur     | 高斯模糊半径                         |
| duration | 这个时间片的持续时间，单位为毫秒(ms) |

然后，你需要在 `animationTable`中加上你的自定义动画的文件名（不需要后缀名）

在文件`animationTable.json`：

```json
["enter-from-left","enter-from-bottom","enter-from-right"]
```

然后，你就可以在脚本中调用：

```
setAnimation:enter-from-left -target=fig-left -next;
```

#### 省略部分属性

如果你的动画只需要操作部分属性，你可以将其他不参与动画的属性留空，使它们保持默认：

**示例：`enter.json`**

```json
[
  {
    "alpha": 0,
    "duration": 0
  },
  {
    "alpha": 1,
    "duration": 300
  }
]

```

#### 使用变换

一个持续时间为0毫秒，且只有一个时间片的动画就是变换。

**示例：**

```
[
  {
    "alpha": 0,
    "duration": 0
  }
]
```

### 添加特效

目前，WebGAL 的特效系统由 PixiJS 实现。

#### 初始化 Pixi

`pixiInit`

```
pixiInit;
```

**注意：**

**1.如果你要使用特效，那么你必须先运行这个命令来初始化 Pixi。**

**2.如果你想要消除已经作用的效果，你可以使用这个语法来清空效果。**

#### 添加特效

`pixiPerform`

```
pixiPerform:rain;//添加一个下雨的特效
```

注意：特效作用后，如果没有初始化，特效会一直运行。

#### 预制特效列表

| 效果 | 指令              |
| ---- | ----------------- |
| 下雨 | pixiPerform:rain; |
| 下雪 | pixiPerform:snow; |

#### 叠加特效

如果你想要叠加两种及以上效果，你可以在不使用`pixiInit`指令的情况下叠加不同的效果。

```
pixiPerform:rain;
pixiPerform:snow;
```

#### 清除已叠加的特效

使用 `pixiInit`来初始化，这样可以消除所有已经应用的效果。

#### 电影模式（测试功能）

通过执行脚本`filmMode:enable;`来开启电影模式，`filmMode:none;`可以关闭。

## 进阶教程

### 在同一个场景（TXT 文件）内实现语句跳转、分支跳转

如果你想要创建一个分支，但是却觉得为此新建一个 TXT 文件太麻烦，你可以尝试使用以下方式在同一文件内实现创建分支和跳转语句。

**注意：如果你的分支很长，我不建议你使用这种方式，因为一个 TXT 的行数不适宜太长，否则可能会导致加载慢、响应迟钝等性能问题。**

#### 首先，你必须理解如何使用 label

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

#### 有了上面的基础，你就可以通过 choose 来实现用分支来跳转到 label 所在的位置了

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

### 使用变量

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

### 条件执行

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

### 在一句对话中加入演出

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

### 添加自定义特效

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

```shell
yarn run build;
```

这样，你就可以在脚本中调用你的特效了

```
pixiPerform:你的新特效;
```

## 其它教程

### Add Other UI Language into WebGal

See the [Add Other Language into WebGal](./add-lang). 

## 可能遇到的问题与解决方案

### 为什么我的文件没有正常被识别

文件的命名应当避免使用特殊符号、空格等难以被识别的文件名。尽可能使用纯英文命名。文件的后缀名应当为完全小写字符。

### 为什么我的音频文件没有被正常播放

在苹果浏览器上，不支持播放 ogg 文件，需要转换文件格式，比如转换到 mp3.

### 导出的网页为什么无法打开

由于浏览器安全策略，你无法从文件打开一个本地网页。你需要使用一个http 服务器，按部署网站的方法部署 WebGAL。常见的有: Nginx, Apache http server, VS Code Live Server 插件, Python http server.

### Windows 7 上为什么可视化编辑器闪一下就没了

由于 node.js 的版本高于 Windows 7 所支持的最高版本导致的。请参考 [Windows 7 使用可视化编辑器开始制作的方法](./win7) 解决。

## Stargazers over time

[![Stargazers over time](https://starchart.cc/MakinoharaShoko/WebGAL.svg)](https://starchart.cc/MakinoharaShoko/WebGAL)
