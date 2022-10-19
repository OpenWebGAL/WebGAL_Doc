(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{422:function(a,t,e){"use strict";e.r(t);var s=e(62),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"webgal-游戏开发指引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webgal-游戏开发指引"}},[a._v("#")]),a._v(" WebGAL 游戏开发指引")]),a._v(" "),e("h2",{attrs:{id:"如何开始制作-webgal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何开始制作-webgal"}},[a._v("#")]),a._v(" 如何开始制作 WebGAL？")]),a._v(" "),e("h3",{attrs:{id:"方法1-尝试使用图形化编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法1-尝试使用图形化编辑器"}},[a._v("#")]),a._v(" 方法1：尝试使用图形化编辑器")]),a._v(" "),e("p",[a._v("新手可以尝试使用 WebGAL Terre 编辑器技术预览版，这是一个图形化的 Galgame 脚本编辑器。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/MakinoharaShoko/WebGAL_Terre",target:"_blank",rel:"noopener noreferrer"}},[a._v("图形化编辑器"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://wwt.lanzouw.com/iCZue0e7e3mb",target:"_blank",rel:"noopener noreferrer"}},[a._v("蓝奏云(版本不一定是最新的)"),e("OutboundLink")],1),a._v(" 密码:5h26")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/MakinoharaShoko/WebGAL_Origine",target:"_blank",rel:"noopener noreferrer"}},[a._v("图形化编辑器的前端代码仓库"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("strong",[a._v("注意：图形化编辑器的功能有限，如果你需要更高级的演出，请学习本文档的脚本，然后参照以下的文档调试：")])]),a._v(" "),e("h3",{attrs:{id:"方法2-在本地通过书写脚本的形式开发-并实时调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法2-在本地通过书写脚本的形式开发-并实时调试"}},[a._v("#")]),a._v(" 方法2：在本地通过书写脚本的形式开发，并实时调试")]),a._v(" "),e("p",[a._v("首先，下载已经被构建为静态网页的 WebGAL 发行版以及配套的调试环境。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/MakinoharaShoko/WebGAL/releases/",target:"_blank",rel:"noopener noreferrer"}},[a._v("发行版"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("如果下载速度过慢，请尝试通过蓝奏云网盘下载，"),e("strong",[a._v("请注意！版本不一定是最新的。")])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://wwt.lanzouw.com/isa1S0dggqcj",target:"_blank",rel:"noopener noreferrer"}},[a._v("蓝奏云"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("现在，你可以直接运行对应版本的 WebGAL-server 开始调试你的视觉小说。如果遇到杀毒软件拦截或防火墙拦截等情况，请放行以允许该程序运行。")]),a._v(" "),e("h3",{attrs:{id:"如何将我的-galgame-部署到互联网上-并使他人能够访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何将我的-galgame-部署到互联网上-并使他人能够访问"}},[a._v("#")]),a._v(" 如何将我的 Galgame 部署到互联网上，并使他人能够访问？")]),a._v(" "),e("p",[a._v("首先，请知悉，可以部署到互联网的引擎应该是"),e("strong",[a._v("发行版或由 WebGAL 图形化编辑器导出的构建后网页")]),a._v("，而不是源代码。")]),a._v(" "),e("p",[a._v("复制/WebGAL 下的文件(不是文件夹，是/WebGAL 文件夹下的文件)到你想要部署的云服务器的指定目录下，或是部署到 GitHub Pages。")]),a._v(" "),e("p",[a._v("如果你使用源代码进行调试，你可以通过 npm run build 或 yarn run build 来创建一个静态网页（在/dist 文件夹），然后将这个文件夹内的内容部署到\nGitHub Pages 或你的云服务器上。")]),a._v(" "),e("h1",{attrs:{id:"游戏制作快速上手教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#游戏制作快速上手教程"}},[a._v("#")]),a._v(" 游戏制作快速上手教程：")]),a._v(" "),e("p",[a._v("现在，你应该已经运行起来了一个调试服务器，接下来让我来教你如何编写你自己的剧本")]),a._v(" "),e("p",[a._v("你应该能够发现，在解压后的文件夹下，有一个 WebGAL 文件夹，在 WebGAL 文件夹下，有一个 game 文件夹，那就是你的游戏资源应该存放的地方。")]),a._v(" "),e("p",[a._v("你的所有游戏剧本、图片、立绘都应该在放解压后目录的 WebGAL/game 文件夹下，目录对应的资源说明如下：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("文件夹")]),a._v(" "),e("th",[a._v("存放的资源")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("background")]),a._v(" "),e("td",[a._v("用于存放背景图片、标题页背景")])]),a._v(" "),e("tr",[e("td",[a._v("figure")]),a._v(" "),e("td",[a._v("用于存放人物立绘")])]),a._v(" "),e("tr",[e("td",[a._v("scene")]),a._v(" "),e("td",[a._v("用于存放用户剧本")])]),a._v(" "),e("tr",[e("td",[a._v("bgm")]),a._v(" "),e("td",[a._v("用于存放背景音乐")])]),a._v(" "),e("tr",[e("td",[a._v("vocal")]),a._v(" "),e("td",[a._v("用于存放配音文件")])]),a._v(" "),e("tr",[e("td",[a._v("video")]),a._v(" "),e("td",[a._v("用于存放视频")])]),a._v(" "),e("tr",[e("td",[a._v("tex")]),a._v(" "),e("td",[a._v("用于存放特效纹理文件")])])])]),a._v(" "),e("h2",{attrs:{id:"定制你的游戏信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定制你的游戏信息"}},[a._v("#")]),a._v(" 定制你的游戏信息")]),a._v(" "),e("p",[a._v("在/game 文件夹下，有一个文件 config.txt，你可以在这个文件中填写你游戏的相关信息：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Game_name:WebGAL;//你的游戏名称\nGame_key:0f33fdGr;//一串识别码，你应该尽可能随机地输入一串不容易与别人重复的字符，长度最好在6-10字符之间，否则可能会引发bug\nTitle_img:Title2.png;//标题的图片名称，图片放在/background 文件夹\nTitle_bgm:夏影.mp3;//标题的背景音乐，音乐文件应该放在/bgm文件夹\n")])])]),e("h2",{attrs:{id:"用户剧本的编写语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户剧本的编写语法"}},[a._v("#")]),a._v(" 用户剧本的编写语法：")]),a._v(" "),e("p",[a._v("首先，程序会从"),e("strong",[a._v("初始脚本")]),e("code",[a._v("start.txt")]),a._v("开始运行，在后续的脚本编写中，我会告诉你如何跳转章节或设置分支选项。")]),a._v(" "),e("p",[e("strong",[a._v("编写剧本的方式非常简单，且与自然语言几乎无异。")])]),a._v(" "),e("h3",{attrs:{id:"首先-让我们来学习编写基本的人物对话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先-让我们来学习编写基本的人物对话"}},[a._v("#")]),a._v(" 首先，让我们来学习编写基本的人物对话：")]),a._v(" "),e("p",[a._v("首先，使用记事本或 VS Code 、sublime 等文本编辑器，打开游戏资源目录下 scene 文件夹中的 start.txt，然后你就可以开始编写你的第一条对话了。")]),a._v(" "),e("p",[a._v("编写人物对话的方法非常简单，你只需要输入：")]),a._v(" "),e("p",[e("strong",[a._v("注意，每条对话的冒号、分号应当为英文字符！")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("人物:对话;\n")])])]),e("p",[a._v("示例：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("雪之下雪乃:请用茶;\n由比滨:啊，谢谢;\n小町:谢谢雪乃姐！;\n一色:谢谢学姐。;\n")])])]),e("p",[a._v("在每条对话/剧本后，使用分号作为结束。（如果不写分号有时候也行，但是作者还是建议加上分号以防止 bug）。")]),a._v(" "),e("h4",{attrs:{id:"连续对话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连续对话"}},[a._v("#")]),a._v(" 连续对话")]),a._v(" "),e("p",[a._v("如果你的多条对话没有改变人物名称，你可以使用连续对话，而可以省略人物名称，再在你需要的时候使用：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("雪之下雪乃:你到得真早;\n对不起，等很久了吗？;//此时，对话的人物名称仍然是“雪之下雪乃”。\n比企谷八幡:刚到而已;\n")])])]),e("h3",{attrs:{id:"黑屏文字演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#黑屏文字演示"}},[a._v("#")]),a._v(" 黑屏文字演示")]),a._v(" "),e("p",[a._v("在许多游戏中，会以黑屏显示一些文字，用来引入主题或表现人物的心理活动。你可以使用 intro 命令来演出独白：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("intro:回忆不需要适合的剧本，|反正一说出口，|都成了戏言。;\n")])])]),e("p",[a._v("独白的分拆以分隔符(|)来分割，也就是说，每一个英文逗号代表一个换行。在实际演出中，上面的文字会变成：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("回忆不需要适合的剧本，\n反正一说出口，\n都成了戏言。\n")])])]),e("h3",{attrs:{id:"改变背景-人物立绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改变背景-人物立绘"}},[a._v("#")]),a._v(" 改变背景/人物立绘：")]),a._v(" "),e("p",[a._v("要让 WebGAL 能够读取背景图片和人物立绘，你的背景图片应该被放在 background 文件夹内，而立绘图片则应该放在 figure 文件夹中。")]),a._v(" "),e("p",[a._v("接下来，你可以通过以下简单的语句来改变当前显示的背景图片和人物立绘：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("changeBg:testBG03.jpg;//改变背景\nchangeFigure:testFigure02.png;//改变人物立绘\nchangeBg:none;//关闭背景\nchangeFigure:none;//关闭人物立绘\n")])])]),e("p",[a._v("你有可能会发现，在你改变背景图片或人物立绘后，你需要再点击一下鼠标才能显示下一条对话，如果你希望在改变背景图片/立绘后立即执行下一条语句的内容，请使用：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("changeBg:testBG03.jpg -next;\nchangeFigure:testFigure02.png -next;//改变人物立绘\n一色:谢谢学姐！;\n")])])]),e("p",[a._v("如果你这样做，那么在背景图片/立绘替换后，程序会立刻执行下一条语句。")]),a._v(" "),e("h3",{attrs:{id:"将立绘放在不同的位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将立绘放在不同的位置"}},[a._v("#")]),a._v(" 将立绘放在不同的位置")]),a._v(" "),e("p",[a._v("现在，你可以在页面的三个不同位置放置不同的立绘，只需要在放置立绘的语句处加上你要放置的位置就可以了，示例如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("changeFigure:testFigure03.png -left;\nchangeFigure:testFigure04.png;\nchangeFigure:testFigure03.png -right;\n")])])]),e("p",[a._v("以上三行分别对应着左、中、右三个不同的位置。三个不同位置的立绘是相互独立的，所以如果你需要清除立绘，必须分别独立清除：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("changeFigure:none -left;\nchangeFigure:none;\nchangeFigure:none -right;\n")])])]),e("p",[a._v("如果你想要在立绘改变后立刻执行下一条语句，操作方法与之前一样，即加上参数 "),e("code",[a._v("-next")]),a._v(" :")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("changeFigure:testFigure03.png -left -next;\nchangeFigure:testFigure04.png -next;\nchangeFigure:testFigure03.png -right -next;\n")])])]),e("h3",{attrs:{id:"放置小头像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#放置小头像"}},[a._v("#")]),a._v(" 放置小头像：")]),a._v(" "),e("p",[a._v("很多游戏可以在文本框的左下角放置小头像，以下是在本引擎中使用的语法：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("miniAvatar:minipic_test.png;//在左下角显示minipic_test.png\nminiAvatar:none;//关闭这个小头像\n")])])]),e("h3",{attrs:{id:"跳转场景与分支选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跳转场景与分支选择"}},[a._v("#")]),a._v(" 跳转场景与分支选择：")]),a._v(" "),e("p",[a._v("在 Galgame 中，跳转章节、场景与分支选择是不可或缺的，因此，本游戏模组也支持场景跳转与分支选择。")]),a._v(" "),e("p",[a._v("你可以将你的剧本拆分成多个 txt 文档，并使用一个简单的语句来切换当前运行的剧本。")]),a._v(" "),e("p",[a._v("假如你现在写了两个章节的剧本，分别是 Chapter-1.txt 与 Chapter-2.txt ，在 Chapter-1.txt 运行结束后，你希望跳转到\nChapter-2.txt 对应的场景，请使用以下语句：")]),a._v(" "),e("h4",{attrs:{id:"场景跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景跳转"}},[a._v("#")]),a._v(" 场景跳转：")]),a._v(" "),e("p",[a._v("语句：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("changeScene:Chapter-2.txt;\n")])])]),e("p",[a._v("示例：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("(Chapter-1.txt)\n......\n......\nchangeScene:Chapter-2.txt;\n接下来执行的就是Chapter-2.txt的内容了。\n......\n......\n(Chapter-2.txt)\n")])])]),e("p",[a._v("通过执行这条命令，你将切换游戏场景，并使接下来的剧情发展按照新的场景剧本运行。新的剧本会在下一次鼠标点击后运行。")]),a._v(" "),e("h4",{attrs:{id:"场景调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景调用"}},[a._v("#")]),a._v(" 场景调用")]),a._v(" "),e("p",[a._v("如果你需要在执行完调用的场景后回到先前的场景（即父场景），你可以使用 "),e("code",[a._v("callScene")]),a._v(" 来调用场景")]),a._v(" "),e("p",[a._v("语句：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("callScene:Chapter-2.txt;\n")])])]),e("p",[a._v("示例：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("(Chapter-1.txt)\n......\n......\ncallScene:Chapter-2.txt;\n接下来执行的就是Chapter-2.txt的内容了。\n......\n......\n(Chapter-2.txt)\n......\n(Chapter-2.txt执行完毕)\n回父场景，继续执行父场景语句。\n......\n\n")])])]),e("h4",{attrs:{id:"分支选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支选择"}},[a._v("#")]),a._v(" 分支选择：")]),a._v(" "),e("p",[a._v("如果你的剧本存在分支选项，你希望通过选择不同的选项进入不同的章节，请使用以下语句：")]),a._v(" "),e("p",[a._v("其中，"),e("code",[a._v("|")]),a._v("是分隔符。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("choose:叫住她:Chapter-2.txt|回家:Chapter-3.txt;\n")])])]),e("p",[a._v("你只需要将选项的文本与选择选项后要进入的剧本名称一一对应起来，就可以实现分支选择的功能了。")]),a._v(" "),e("h3",{attrs:{id:"结束游戏并返回到标题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束游戏并返回到标题"}},[a._v("#")]),a._v(" 结束游戏并返回到标题")]),a._v(" "),e("p",[a._v("如果你想要在剧情结束后结束游戏并返回到标题，请使用：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("end;\n")])])]),e("p",[a._v("这样，就可以使游戏返回标题界面。")]),a._v(" "),e("h3",{attrs:{id:"引入背景音乐-bgm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入背景音乐-bgm"}},[a._v("#")]),a._v(" 引入背景音乐（BGM）")]),a._v(" "),e("p",[a._v("引入背景音乐的方法极其简单，你只需要将背景音乐放置在 /bgm 目录下，然后便可以简单地在需要的时候令其播放：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("bgm:夏影.mp3;\n")])])]),e("h3",{attrs:{id:"播放一小段视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#播放一小段视频"}},[a._v("#")]),a._v(" 播放一小段视频")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("playVideo:OP.mp4//视频应该放在/game/video/ 文件夹内\n")])])]),e("h3",{attrs:{id:"在显示对话时同时播放语音"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在显示对话时同时播放语音"}},[a._v("#")]),a._v(" 在显示对话时同时播放语音")]),a._v(" "),e("p",[a._v("众所周知，Galgame 最吸引人的地方往往在于其有优秀的配音。在此版本中，你可以为对话引入配音了，将你的配音放入 vocal\n文件夹，然后在参数加上语音文件名即可引入，语法示例如下：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("比企谷八幡:刚到而已 -V3.ogg;\n")])])]),e("p",[a._v("在连续对话时，语音的引入方式也是一样的：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("雪之下雪乃:你到得真早 -V1.ogg;\n对不起，等很久了吗？ -V2.ogg;\n")])])]),e("h3",{attrs:{id:"使用动画效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用动画效果"}},[a._v("#")]),a._v(" 使用动画效果")]),a._v(" "),e("h4",{attrs:{id:"为背景设置动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为背景设置动画"}},[a._v("#")]),a._v(" 为背景设置动画")]),a._v(" "),e("p",[a._v("使用语句 "),e("code",[a._v("setBgAni:动画名 时间(多少秒);")])]),a._v(" "),e("p",[a._v("背景动画设置之后会在每次替换背景时生效，除非再次使用"),e("code",[a._v("setBgAni")]),a._v("改变。")]),a._v(" "),e("p",[e("strong",[a._v("示例：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setBgAni:bg_softIn 5s;//渐入背景，执行5秒\n")])])]),e("p",[a._v("目前，预制的动画只有两个：渐入和缩放渐入，使用的动画预设名分别为：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("动画效果")]),a._v(" "),e("th",[a._v("动画名")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("渐入")]),a._v(" "),e("td",[a._v("bg_softIn")])]),a._v(" "),e("tr",[e("td",[a._v("缩放渐入")]),a._v(" "),e("td",[a._v("bg_down")])])])]),a._v(" "),e("h4",{attrs:{id:"为人物设置动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为人物设置动画"}},[a._v("#")]),a._v(" 为人物设置动画")]),a._v(" "),e("p",[a._v("使用语句"),e("code",[a._v("setFigAni:动画名 时间（多少秒） -位置;")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setFigAni:rightIn 1s -right;//对右侧立绘设置动画rightIn，执行1秒\n")])])]),e("p",[a._v("你需要指定 -left -center -right 用于设置要作用的立绘位置。")]),a._v(" "),e("p",[a._v("人物动画不像背景动画。每次设置动画时，这个动画都会立刻执行，且只执行一遍（因为你可能会设置一些例如摇晃之类的效果，但是不想让这个动画一直在切换人物时生效）")]),a._v(" "),e("p",[a._v("所以，你每次切换人物立绘，或是想要执行动画时，都要使用"),e("code",[a._v("setFigAni")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("changeFigure:testFigure03.png -left -next;\nsetFigAni:leftIn 1s -left;\n//这个动画只对这一次changeFigure生效\nchangeFigure:testFigure04.png -left -next;\nsetFigAni:rightIn 1s -left;\n//现在你改变了左侧立绘，如果你需要一个动画，你需要再重新设置\n")])])]),e("p",[a._v("同时，在你没有改变立绘的时候，你也可以在某句对话前加上"),e("code",[a._v("setFigAni")]),a._v("，这样在播放这句对话的时候，动画会同时执行。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setFigAni:shake 0.5s -right;\n右侧人物:现在我正在摇晃。//动画与这句对话同时执行\n")])])]),e("p",[a._v("动画的语句遵循 CSS 语法，因此，如果你需要更多参数，你可以参照")]),a._v(" "),e("p",[a._v("https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation")]),a._v(" "),e("p",[e("strong",[a._v("注意：-right 这样的参数是 WebGAL 语法的参数，与 CSS 语法无关。请在参数之前书写 CSS 语句。")])]),a._v(" "),e("p",[a._v("预制动画：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("动画效果")]),a._v(" "),e("th",[a._v("动画名")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("摇晃")]),a._v(" "),e("td",[a._v("shake")])]),a._v(" "),e("tr",[e("td",[a._v("从下向上进入")]),a._v(" "),e("td",[a._v("upIn")])]),a._v(" "),e("tr",[e("td",[a._v("从左向右进入")]),a._v(" "),e("td",[a._v("leftIn")])]),a._v(" "),e("tr",[e("td",[a._v("从右向左进入")]),a._v(" "),e("td",[a._v("rightIn")])]),a._v(" "),e("tr",[e("td",[a._v("渐显")]),a._v(" "),e("td",[a._v("centerIn")])]),a._v(" "),e("tr",[e("td",[a._v("前后移动")]),a._v(" "),e("td",[a._v("moveBaF")])])])]),a._v(" "),e("h3",{attrs:{id:"自定义动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义动画"}},[a._v("#")]),a._v(" 自定义动画")]),a._v(" "),e("p",[a._v("动画文件在"),e("code",[a._v("/game/userAnimation.css")]),a._v("，你可以学习 CSS 动画来自己写你想要的动画效果，然后添加到这个 CSS 里，在游戏脚本里用这个动画。")]),a._v(" "),e("p",[a._v("如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@keyframes leftIn {\n    0%{\n        opacity: 0;\n        transform: scale(1,1) translate(-5%,0);\n    }\n\n    100%{\n        opacity: 1;\n        transform: scale(1,1) translate(0,0);\n    }\n}\n")])])]),e("p",[a._v("然后，你就可以使用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setFigAni:leftIn 1s -left;\n")])])]),e("p",[a._v("调用这个动画。")]),a._v(" "),e("h3",{attrs:{id:"为背景设置变换与效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为背景设置变换与效果"}},[a._v("#")]),a._v(" 为背景设置变换与效果")]),a._v(" "),e("h4",{attrs:{id:"设置变换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置变换"}},[a._v("#")]),a._v(" 设置变换")]),a._v(" "),e("p",[e("code",[a._v("setBgTransform")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setBgTransform:scale(1.15, 1.15) translate(-5%, 0);//设置一个放大1.15倍，向左移动5%的变换\n")])])]),e("p",[a._v("有关变换的 CSS 语法，请参见： https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform")]),a._v(" "),e("h4",{attrs:{id:"设置效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置效果"}},[a._v("#")]),a._v(" 设置效果")]),a._v(" "),e("p",[e("code",[a._v("setBgFilter")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setBgFilter:blur(1px);//设置一个模糊效果\n")])])]),e("p",[a._v("有关效果的 CSS 语法，请参见： https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter")]),a._v(" "),e("h3",{attrs:{id:"为立绘设置变换与效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为立绘设置变换与效果"}},[a._v("#")]),a._v(" 为立绘设置变换与效果")]),a._v(" "),e("h4",{attrs:{id:"设置变换-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置变换-2"}},[a._v("#")]),a._v(" 设置变换")]),a._v(" "),e("p",[e("code",[a._v("setFigTransform")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setFigTransform:scale(1.15, 1.15) translate(-5%, 0) -center;//设置一个放大1.15倍，向左移动5%的变换\n")])])]),e("p",[a._v("同样地，你需要指定 -left -center -right 用于设置要作用的立绘位置。")]),a._v(" "),e("p",[a._v("有关变换的 CSS 语法，请参见： https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform")]),a._v(" "),e("h4",{attrs:{id:"设置效果-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置效果-2"}},[a._v("#")]),a._v(" 设置效果")]),a._v(" "),e("p",[e("code",[a._v("setFigFilter")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setFFilter:blur(1px);//设置一个模糊效果\n")])])]),e("p",[a._v("有关效果的 CSS 语法，请参见： https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter")]),a._v(" "),e("h3",{attrs:{id:"添加特效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加特效"}},[a._v("#")]),a._v(" 添加特效")]),a._v(" "),e("p",[a._v("目前，WebGAL 的特效系统由 PixiJS 实现。")]),a._v(" "),e("h4",{attrs:{id:"初始化-pixi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化-pixi"}},[a._v("#")]),a._v(" 初始化 Pixi")]),a._v(" "),e("p",[e("code",[a._v("pixiInit")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pixiInit;\n")])])]),e("p",[e("strong",[a._v("注意：")])]),a._v(" "),e("p",[e("strong",[a._v("1.如果你要使用特效，那么你必须先运行这个命令来初始化 Pixi。")])]),a._v(" "),e("p",[e("strong",[a._v("2.如果你想要消除已经作用的效果，你可以使用这个语法来清空效果。")])]),a._v(" "),e("h4",{attrs:{id:"添加特效-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加特效-2"}},[a._v("#")]),a._v(" 添加特效")]),a._v(" "),e("p",[e("code",[a._v("pixiPerform")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pixiPerform:rain;//添加一个下雨的特效\n")])])]),e("p",[a._v("注意：特效作用后，如果没有初始化，特效会一直运行。")]),a._v(" "),e("h4",{attrs:{id:"预制特效列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预制特效列表"}},[a._v("#")]),a._v(" 预制特效列表")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("效果")]),a._v(" "),e("th",[a._v("指令")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("下雨")]),a._v(" "),e("td",[a._v("pixiPerform:rain;")])]),a._v(" "),e("tr",[e("td",[a._v("下雪")]),a._v(" "),e("td",[a._v("pixiPerform:snow;")])])])]),a._v(" "),e("h4",{attrs:{id:"叠加特效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#叠加特效"}},[a._v("#")]),a._v(" 叠加特效")]),a._v(" "),e("p",[a._v("如果你想要叠加两种及以上效果，你可以在不使用"),e("code",[a._v("pixiInit")]),a._v("指令的情况下叠加不同的效果。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pixiPerform:rain;\npixiPerform:snow;\n")])])]),e("h4",{attrs:{id:"清除已叠加的特效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清除已叠加的特效"}},[a._v("#")]),a._v(" 清除已叠加的特效")]),a._v(" "),e("p",[a._v("使用 "),e("code",[a._v("pixiInit")]),a._v("来初始化，这样可以消除所有已经应用的效果。")]),a._v(" "),e("h4",{attrs:{id:"电影模式-测试功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#电影模式-测试功能"}},[a._v("#")]),a._v(" 电影模式（测试功能）")]),a._v(" "),e("p",[a._v("通过执行脚本"),e("code",[a._v("filmMode:enable;")]),a._v("来开启电影模式，"),e("code",[a._v("filmMode:none;")]),a._v("可以关闭。")]),a._v(" "),e("h3",{attrs:{id:"解锁bgm或cg以供鉴赏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解锁bgm或cg以供鉴赏"}},[a._v("#")]),a._v(" 解锁BGM或CG以供鉴赏")]),a._v(" "),e("p",[a._v("在 WebGAL 4.2 中，加入了BGM和CG的鉴赏功能，你可以执行以下语句在适当的时机解锁BGM或CG。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("unlockCg:xgmain.jpeg -name=星光咖啡馆与死神之蝶 -series=1; // 解锁CG并赋予名称\nunlockBgm:s_Title.mp3 -name=Smiling-Swinging!!; // 解锁bgm并赋予名称\n")])])]),e("p",[a._v("其中，"),e("code",[a._v("series")]),a._v("参数可选，代表当前立绘属于哪个系列。同系列的立绘以后会合并展示（即展示成可以切换的同系列CG）。")]),a._v(" "),e("h3",{attrs:{id:"关闭文本框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭文本框"}},[a._v("#")]),a._v(" 关闭文本框")]),a._v(" "),e("p",[a._v("有时候，为了一些特殊的演出效果，可能你希望临时关闭文本框，所以你可以使用以下指令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setTextbox:hide;\n")])])]),e("p",[a._v("来关闭文本框。当 "),e("code",[a._v("setTextbox")]),a._v(" 指令的值为 "),e("code",[a._v("hide")]),a._v(" 时，会关闭文本框，且用户无法以任何方式打开。如果想要重新显示文本框，请再次调用此命令，并输入除"),e("code",[a._v("hide")]),a._v("以外的任意值。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setTextbox:on; // 可以是除 hide 以外的任意值。\n")])])]),e("h2",{attrs:{id:"进阶教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进阶教程"}},[a._v("#")]),a._v(" 进阶教程：")]),a._v(" "),e("h3",{attrs:{id:"在同一个场景-txt-文件-内实现语句跳转、分支跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在同一个场景-txt-文件-内实现语句跳转、分支跳转"}},[a._v("#")]),a._v(" 在同一个场景（TXT 文件）内实现语句跳转、分支跳转")]),a._v(" "),e("p",[a._v("如果你想要创建一个分支，但是却觉得为此新建一个 TXT 文件太麻烦，你可以尝试使用以下方式在同一文件内实现创建分支和跳转语句。")]),a._v(" "),e("p",[e("strong",[a._v("注意：如果你的分支很长，我不建议你使用这种方式，因为一个 TXT 的行数不适宜太长，否则可能会导致加载慢、响应迟钝等性能问题。")])]),a._v(" "),e("h4",{attrs:{id:"首先-你必须理解如何使用-label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先-你必须理解如何使用-label"}},[a._v("#")]),a._v(" 首先，你必须理解如何使用 label：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("......\njumpLabel:label_1;\n//以下这些行会被忽略:\n......\n......\n......\n//然后，你需要创建label:\nlabel:label_1;\n然后，程序会在这里继续执行。;\n......\n......\n")])])]),e("p",[a._v("简而言之， jumpLabel 类似于 goto 语句，能够立刻让你的剧本跳到场景（TXT 文件）中的任意一个位置，而这个位置需要你用 label 创建。")]),a._v(" "),e("p",[a._v("如果把 jumpLabel 比作任意门，那么这个任意门的终点就是 label 所在的位置。")]),a._v(" "),e("h4",{attrs:{id:"有了上面的基础-你就可以通过-choose-来实现用分支来跳转到-label-所在的位置了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有了上面的基础-你就可以通过-choose-来实现用分支来跳转到-label-所在的位置了"}},[a._v("#")]),a._v(" 有了上面的基础，你就可以通过 choose 来实现用分支来跳转到 label 所在的位置了：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("WebGAL:让我们来测试分支跳转到label！;\nchoose:测试1:label_1|测试2:label_2;\nlabel:label_1;\n现在应该是1号分支;\njumpLabel:end;\nlabel:label_2;\n现在应该是2号分支;\njumpLabel:end;\nlabel:end;\n现在是统一的结束;\n")])])]),e("p",[a._v("注意，在每个分支的结尾，你应该用 jumpLabel 来跳转到你希望的位置。由于程序是线性执行的，所以如果你没有在分支的结束跳转，那么程序会继续往下运行，比如说：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("WebGAL:让我们来测试分支跳转到label！;\nchoose:测试1:label_1|测试2:label_2;\nlabel:label_1;\n现在应该是1号分支;\nlabel:label_2;\n现在应该是2号分支;\n现在是统一的结束;\n")])])]),e("p",[a._v("在这个剧本中，如果你选择了分支 2，那么一切看起来好像没有问题。但是如果你选择了分支 1，你会惊讶地发现，在分支 1 执行完后，竟然分支\n2 又执行了一遍。那是因为程序按顺序继续执行下一行了，而你没有指定在分支结束后跳到哪里。")]),a._v(" "),e("h3",{attrs:{id:"使用变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用变量"}},[a._v("#")]),a._v(" 使用变量")]),a._v(" "),e("p",[e("strong",[a._v("注意：在你弄清楚如何使用 label，如何在 label 内部跳转场景之前，请不要轻易使用变量系统，这可能会令你感到迷惑！")])]),a._v(" "),e("p",[a._v("设置变量：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setVar:a=1; // 可以设置数字\nsetVar:a=true // 可以设置布尔值\nsetVar:a=人物名称 // 可以设置字符串\n")])])]),e("p",[a._v("如果先前你定义过其他变量，也可以在设置变量时使用。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setVar:a=1;\nsetVar:b=a+1;\n")])])]),e("h3",{attrs:{id:"条件执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#条件执行"}},[a._v("#")]),a._v(" 条件执行")]),a._v(" "),e("p",[a._v("在语句后加上 "),e("code",[a._v("-when=(condition)")]),a._v(" 参数，可以根据条件判断当前语句是否要执行。")]),a._v(" "),e("p",[a._v("例如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("setVar:a=1;\nchangeScene:2.txt -when=a>1; // a>1时跳转到场景2\nchangeScene:3.txt; // 如果a<=1，那么上面的语句不执行，自然就执行这一句了。\n")])])]),e("p",[a._v("任何语句都可以加上 "),e("code",[a._v("-when")]),a._v(" 参数来控制是否执行。通过组合 "),e("code",[a._v("-when")]),a._v(" 参数和 "),e("code",[a._v("jumpLabel")]),a._v(" "),e("code",[a._v("callScene")]),a._v(" "),e("code",[a._v("changeScene")]),a._v("\n，你可以实现带条件判断的流程控制。")]),a._v(" "),e("h3",{attrs:{id:"在一句对话中加入演出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在一句对话中加入演出"}},[a._v("#")]),a._v(" 在一句对话中加入演出")]),a._v(" "),e("p",[a._v("有时候，可能你希望在某一句对话执行到某个阶段时加入演出效果，比如切换表情等。\n这时候，你可以使用 "),e("code",[a._v("-notend")]),a._v(" "),e("code",[a._v("-concat")]),a._v(" 参数来实现在对话中插入任意语句。")]),a._v(" "),e("p",[e("code",[a._v("-concat")]),a._v(" 代表本句对话连接在上一句对话之后")]),a._v(" "),e("p",[e("code",[a._v("-notend")]),a._v(" 代表本句对话没有结束，在后面可能连接演出或对话。")]),a._v(" "),e("p",[a._v("示例如下：这是一个在对话进行中切换立绘的演示。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("WebGAL:测试语句插演出！马上切换立绘...... -notend;\nchangeFigure:k1.png -next;\n切换立绘！马上切换表情...... -notend -concat;\nchangeFigure:k2.png -next;\n切换表情！ -concat;\n")])])]),e("h3",{attrs:{id:"添加自定义特效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加自定义特效"}},[a._v("#")]),a._v(" 添加自定义特效")]),a._v(" "),e("p",[a._v("你可以下载源代码，然后找到 /Core/controller/perform/pixi/pixiScripts/ 然后新建一个 "),e("code",[a._v("PIXI.Container")]),a._v("用于制作你所需要的特效。")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" runtime_gamePlay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("currentPixi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//获取当前的Pixi")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" container "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PIXI"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Container")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建自定义特效的container")]),a._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("addChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//添加特效")]),a._v("\n")])])]),e("p",[a._v("纹理文件可以放在 /game/tex 目录下。")]),a._v(" "),e("p",[a._v("然后，在 /Core/controller/gamePlay/scripts/pixi.ts 中加上你写的新特效。")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("switch")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("sentence"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'rain'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    container "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("pixiRain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'snow'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    container "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("pixiSnow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'yourPixiPerform'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    container "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yourPerform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("最后，编译出支持你自定义特效的 WebAPP")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" run build"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("这样，你就可以在脚本中调用你的特效了")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pixiPerform:你的新特效;\n")])])]),e("h2",{attrs:{id:"可能遇到的问题与解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可能遇到的问题与解决方案"}},[a._v("#")]),a._v(" 可能遇到的问题与解决方案")]),a._v(" "),e("h2",{attrs:{id:"stargazers-over-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stargazers-over-time"}},[a._v("#")]),a._v(" Stargazers over time")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://starchart.cc/MakinoharaShoko/WebGAL",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://starchart.cc/MakinoharaShoko/WebGAL.svg",alt:"Stargazers over time"}}),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);