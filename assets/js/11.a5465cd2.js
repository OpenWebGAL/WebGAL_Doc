(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{424:function(a,e,t){"use strict";t.r(e);var v=t(62),_=Object(v.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"webgal-技术介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgal-技术介绍"}},[a._v("#")]),a._v(" WebGAL 技术介绍")]),a._v(" "),t("h2",{attrs:{id:"场景系统与预加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景系统与预加载"}},[a._v("#")]),a._v(" 场景系统与预加载")]),a._v(" "),t("h3",{attrs:{id:"场景获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景获取"}},[a._v("#")]),a._v(" 场景获取")]),a._v(" "),t("p",[a._v("WebGAL 的场景是以文件为单位的，一般来说是后缀名为"),t("code",[a._v(".txt")]),a._v("的WebGAL 脚本文件。就像很多编程语言有一个 "),t("code",[a._v("main")]),a._v("函数作为入口一样，WebGAL 的入口场景是"),t("code",[a._v("start.txt")]),a._v("。WebGAL 会首先尝试获取 "),t("code",[a._v("start.txt")]),a._v("，然后调用WebGAL 解析器将脚本文件解析为 WebGAL 引擎可以执行的场景对象。在任何一个场景中，都可以使用"),t("code",[a._v("choose")]),a._v("、"),t("code",[a._v("changeScene")]),a._v("、"),t("code",[a._v("callScene")]),a._v("这样的方式切换或“调用”场景。切换场景会直接替换当前的场景，而“调用”场景则会向场景调用栈中推入一个新的场景开始执行，并在执行后回到调用该场景的父场景。")]),a._v(" "),t("h3",{attrs:{id:"预加载场景中的资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预加载场景中的资源"}},[a._v("#")]),a._v(" 预加载场景中的资源")]),a._v(" "),t("p",[a._v("在 WebGAL 解析场景的同时，场景所包含的资源也会被解析出来。对于每个场景文件，WebGAL 都会将其包含的所有资源，包括图片、音频以及视频文件。这些文件会在场景被解析完后开始预加载，以尽可能减少用户在游戏流程中等待资源加载的可能性。同时，为了使游戏在切换场景时更为顺畅，WebGAL 也会加载被当前的场景文件引用的场景文件的资源。为了防止资源浪费，WebGAL 只会拓展一层场景做预加载。")]),a._v(" "),t("h2",{attrs:{id:"webgal-解析器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgal-解析器"}},[a._v("#")]),a._v(" WebGAL 解析器")]),a._v(" "),t("h3",{attrs:{id:"语句解析-i-拆分场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语句解析-i-拆分场景"}},[a._v("#")]),a._v(" 语句解析 Ⅰ 拆分场景")]),a._v(" "),t("p",[a._v("WebGAL 场景文件主要是以行来区分脚本的。在解析的一开始，WebGAL 解析器就会按照换行符将脚本分割开。如果有分号，则会取分号前的字符。所以，WebGAL 脚本的注释方式就是将脚本写在分号后。")]),a._v(" "),t("h3",{attrs:{id:"语句解析-ii-脚本类型解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语句解析-ii-脚本类型解析"}},[a._v("#")]),a._v(" 语句解析 Ⅱ 脚本类型解析")]),a._v(" "),t("p",[a._v("WebGAL 的脚本一般是形如")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("command:content -arg1 -arg2 ......;comment\n")])])]),t("p",[a._v("的形式。")]),a._v(" "),t("p",[a._v("其中，command 代表语句指令，比如 "),t("code",[a._v("bgm")]),a._v("、"),t("code",[a._v("changeFigure")]),a._v("、"),t("code",[a._v("choose")]),a._v("这样的指令，用于标明该语句对应的控制动作。而 "),t("code",[a._v("content")]),a._v("则代表语句的主要内容，比如 "),t("code",[a._v("bgm:Teabreak.mp3")]),a._v("表示的是播放一段音频文件作为 bgm。")]),a._v(" "),t("h3",{attrs:{id:"语句解析-iii-对话的特殊处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语句解析-iii-对话的特殊处理"}},[a._v("#")]),a._v(" 语句解析 Ⅲ 对话的特殊处理")]),a._v(" "),t("p",[a._v("WebGAL 的对话一般以如下形式书写：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("森川由绮:胸につかえていることを、时は解决してくれない。忘却のラベルを贴るだけで -voice_1.ogg;\n")])])]),t("p",[a._v("对于视觉小说来说，由于对话一般是脚本的主要组成部分，所以 WebGAL 设计了一个语法糖。如果任何一个脚本的 command 部分无法被解析为任何一种指令，那么 WebGAL 就会将其视为对话。而语音也可以简写其参数，只需要给出文件名即可。如上的对话实际上最终会被解析成 "),t("code",[a._v("say")]),a._v(" 指令。")]),a._v(" "),t("p",[a._v("所以，这段对话的真正表示应该为：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("say:胸につかえていることを、时は解决してくれない。忘却のラベルを贴るだけで -speaker=森川由绮 vocal=voice_1.ogg;\n")])])]),t("p",[a._v("除此以外，如果对话由一个人物发出，那么在对话人发生改变前，还可以省略人物名称：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("森川由绮:胸につかえていることを;\n时は解决してくれない;\n忘却のラベルを贴るだけで;\n")])])]),t("p",[a._v("对于对话的特殊处理大大提高了脚本编写的效率。")]),a._v(" "),t("h3",{attrs:{id:"语句解析-iv-参数解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语句解析-iv-参数解析"}},[a._v("#")]),a._v(" 语句解析 Ⅳ 参数解析")]),a._v(" "),t("p",[a._v("在 content 后以"),t("code",[a._v("-")]),a._v("分隔的是附加参数。格外需要注意的是，附加参数的连字符"),t("code",[a._v("-")]),a._v("前需要有空格，否则 WebGAL 可能会认为这不是一个参数而是一个正常的连字符。")]),a._v(" "),t("p",[a._v("WebGAL 的参数是以 "),t("code",[a._v("-key=value")]),a._v("的形式表示的，其中，"),t("code",[a._v("key")]),a._v(" 的类型为"),t("code",[a._v("string")]),a._v("，而"),t("code",[a._v("value")]),a._v("的类型则可以动态决定，并可以以下三种可能的类型存在： "),t("code",[a._v("string")]),a._v("、"),t("code",[a._v("number")]),a._v("、"),t("code",[a._v("boolean")]),a._v("。")]),a._v(" "),t("p",[a._v("比如 "),t("code",[a._v("-key=s")]),a._v("的"),t("code",[a._v("value")]),a._v("是 "),t("code",[a._v("string")]),a._v("；"),t("code",[a._v("-key=1")]),a._v("的"),t("code",[a._v("value")]),a._v("是"),t("code",[a._v("number")]),a._v("，"),t("code",[a._v("-key=true")]),a._v("或"),t("code",[a._v("-key=false")]),a._v("的"),t("code",[a._v("value")]),a._v("是"),t("code",[a._v("boolean")]),a._v("。")]),a._v(" "),t("p",[a._v("其中，只写出 "),t("code",[a._v("key")]),a._v("而省略"),t("code",[a._v("value")]),a._v("的参数会被解析成 "),t("code",[a._v("-key=true")]),a._v("，这是一个简写的语法糖。这个语法糖非常重要，因为WebGAL 中有一个重要参数 "),t("code",[a._v("-next")]),a._v("，用于表示在执行完当前语句后立刻执行下一条语句。如果没有省略表示，则每次都需要书写"),t("code",[a._v("-next=true")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"语句解析-v-资源处理与预加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语句解析-v-资源处理与预加载"}},[a._v("#")]),a._v(" 语句解析 Ⅴ 资源处理与预加载")]),a._v(" "),t("p",[a._v("在进行语句解析的时候，就可以获得语句所需要的资源了。比如，"),t("code",[a._v("bgm")]),a._v("语句一般需要音频资源，"),t("code",[a._v("playVideo")]),a._v("语句一般需要视频资源，"),t("code",[a._v("changeBg")]),a._v("语句一般需要图片资源。WebGAL 场景解析器会将所有场景中语句需要的资源合并起来，用于交给预加载器来预加载资源。同时，当遇到形如"),t("code",[a._v("changeScene")]),a._v("、"),t("code",[a._v("choose")]),a._v("、"),t("code",[a._v("callScene")]),a._v("等需要调用子场景的情况时，子场景也会被扫描出，解析并对其中的资源进行预加载。")]),a._v(" "),t("h2",{attrs:{id:"流程控制系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程控制系统"}},[a._v("#")]),a._v(" 流程控制系统")]),a._v(" "),t("h3",{attrs:{id:"准备阶段-步进前操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备阶段-步进前操作"}},[a._v("#")]),a._v(" 准备阶段：步进前操作")]),a._v(" "),t("h3",{attrs:{id:"正式阶段-i-读指令、执行条件判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正式阶段-i-读指令、执行条件判断"}},[a._v("#")]),a._v(" 正式阶段 Ⅰ：读指令、执行条件判断")]),a._v(" "),t("h3",{attrs:{id:"正式阶段-ii-调用、获取演出控制模块送演出控制器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正式阶段-ii-调用、获取演出控制模块送演出控制器"}},[a._v("#")]),a._v(" 正式阶段 Ⅱ：调用、获取演出控制模块送演出控制器")]),a._v(" "),t("h3",{attrs:{id:"结束阶段-处理连续演出、更新-backlog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束阶段-处理连续演出、更新-backlog"}},[a._v("#")]),a._v(" 结束阶段：处理连续演出、更新 Backlog")]),a._v(" "),t("h3",{attrs:{id:"自动与快进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动与快进"}},[a._v("#")]),a._v(" 自动与快进")]),a._v(" "),t("h2",{attrs:{id:"演出控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#演出控制"}},[a._v("#")]),a._v(" 演出控制")]),a._v(" "),t("h3",{attrs:{id:"webgal-演出类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgal-演出类型"}},[a._v("#")]),a._v(" WebGAL 演出类型")]),a._v(" "),t("h3",{attrs:{id:"演出的自动销毁、结束判断、阻塞逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#演出的自动销毁、结束判断、阻塞逻辑"}},[a._v("#")]),a._v(" 演出的自动销毁、结束判断、阻塞逻辑")]),a._v(" "),t("h2",{attrs:{id:"舞台控制器与动画控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#舞台控制器与动画控制"}},[a._v("#")]),a._v(" 舞台控制器与动画控制")]),a._v(" "),t("h3",{attrs:{id:"数据驱动的-pixi-舞台控制器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动的-pixi-舞台控制器"}},[a._v("#")]),a._v(" 数据驱动的 Pixi 舞台控制器")]),a._v(" "),t("h3",{attrs:{id:"动画与-变换-控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画与-变换-控制"}},[a._v("#")]),a._v(" 动画与“变换”控制")]),a._v(" "),t("h2",{attrs:{id:"存读档、回溯与用户数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存读档、回溯与用户数据"}},[a._v("#")]),a._v(" 存读档、回溯与用户数据")]),a._v(" "),t("h3",{attrs:{id:"webgal-状态表介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgal-状态表介绍"}},[a._v("#")]),a._v(" WebGAL 状态表介绍")]),a._v(" "),t("h3",{attrs:{id:"演出状态的存储与恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#演出状态的存储与恢复"}},[a._v("#")]),a._v(" 演出状态的存储与恢复")]),a._v(" "),t("h3",{attrs:{id:"存档与其他用户数据的存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存档与其他用户数据的存储"}},[a._v("#")]),a._v(" 存档与其他用户数据的存储")]),a._v(" "),t("h2",{attrs:{id:"鉴赏模块-以及一些细枝末节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#鉴赏模块-以及一些细枝末节"}},[a._v("#")]),a._v(" 鉴赏模块，以及一些细枝末节")]),a._v(" "),t("h3",{attrs:{id:"鉴赏模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#鉴赏模块"}},[a._v("#")]),a._v(" 鉴赏模块")]),a._v(" "),t("h3",{attrs:{id:"离开浏览器状态保持与-继续游戏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离开浏览器状态保持与-继续游戏"}},[a._v("#")]),a._v(" 离开浏览器状态保持与“继续游戏”")]),a._v(" "),t("h3",{attrs:{id:"快捷键与鼠标操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快捷键与鼠标操作"}},[a._v("#")]),a._v(" 快捷键与鼠标操作")])])}),[],!1,null,null,null);e.default=_.exports}}]);