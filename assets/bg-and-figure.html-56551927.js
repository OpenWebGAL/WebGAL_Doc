import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as a}from"./app-7008dfd5.js";const d={},s=a(`<h1 id="背景与立绘" tabindex="-1"><a class="header-anchor" href="#背景与立绘" aria-hidden="true">#</a> 背景与立绘</h1><h2 id="改变背景-人物立绘" tabindex="-1"><a class="header-anchor" href="#改变背景-人物立绘" aria-hidden="true">#</a> 改变背景/人物立绘</h2><p>要让 WebGAL 能够读取背景和人物立绘，你的背景图片应该被放在 <code>background</code> 文件夹内，而立绘图片则应该放在 <code>figure</code> 文件夹中。</p><p>接下来，你可以通过以下简单的语句来改变当前显示的背景图片和人物立绘：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeBg:testBG03.jpg; // 改变背景
changeFigure:testFigure02.png; // 改变人物立绘
changeBg:none; // 关闭背景
changeFigure:none; // 关闭人物立绘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你有可能会发现，在你改变背景图片或人物立绘后，你需要再点击一下鼠标才能显示下一条对话，如果你希望在改变背景/立绘后立即执行下一条语句的内容，请使用 <code>-next</code> 参数。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeBg:testBG03.jpg -next;
changeFigure:testFigure02.png -next; // 改变人物立绘
一色:谢谢学姐！;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你这样做，那么在背景/立绘替换后，程序会立刻执行下一条语句。</p><h2 id="将立绘放在不同的位置" tabindex="-1"><a class="header-anchor" href="#将立绘放在不同的位置" aria-hidden="true">#</a> 将立绘放在不同的位置</h2><p>现在，你可以在页面的三个不同位置放置不同的立绘，只需要在放置立绘的语句处加上你要放置的位置就可以了，示例如下：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeFigure:testFigure03.png -left;
changeFigure:testFigure04.png;
changeFigure:testFigure03.png -right;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上三行分别对应着左、中、右三个不同的位置。三个不同位置的立绘是相互独立的，所以如果你需要清除立绘，必须分别独立清除：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeFigure:none -left;
changeFigure:none;
changeFigure:none -right;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想要在立绘改变后立刻执行下一条语句，操作方法与之前一样，即加上参数 <code>-next</code> :</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeFigure:testFigure03.png -left -next;
changeFigure:testFigure04.png -next;
changeFigure:testFigure03.png -right -next;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="带id的自由立绘" tabindex="-1"><a class="header-anchor" href="#带id的自由立绘" aria-hidden="true">#</a> 带ID的自由立绘</h2><p>如果你想要更精确地控制立绘，可以为立绘指定 <code>id</code> 和初始位置：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>; // 一个初始位置在右侧的自由立绘
changeFigure:testFigure03.png -left -id=test1;
; // 通过 id 关闭立绘
changeFigure:none -id=test1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你要重设某个带ID立绘的位置，请先关闭再重新打开。</p></div><h2 id="放置小头像" tabindex="-1"><a class="header-anchor" href="#放置小头像" aria-hidden="true">#</a> 放置小头像</h2><p>很多游戏可以在文本框的左下角放置小头像，以下是在本引擎中使用的语法：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>; // 在左下角显示minipic_test.png
miniAvatar:minipic_test.png;
; // 关闭这个小头像
miniAvatar:none;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解锁-cg-以供鉴赏" tabindex="-1"><a class="header-anchor" href="#解锁-cg-以供鉴赏" aria-hidden="true">#</a> 解锁 CG 以供鉴赏</h2><p>使用 <code>unlockCg</code> 来解锁 CG 鉴赏中的 CG。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>; // 解锁CG并赋予名称
unlockCg:xgmain.jpeg -name=星光咖啡馆与死神之蝶 -series=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>-series</code> 参数可选，代表当前立绘属于哪个系列。同系列的立绘以后会合并展示（即展示成可以切换的同系列CG）。</p>`,26),r=[s];function c(l,t){return i(),n("div",null,r)}const v=e(d,[["render",c],["__file","bg-and-figure.html.vue"]]);export{v as default};
