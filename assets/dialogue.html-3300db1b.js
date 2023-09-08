import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,e as i}from"./app-edf4f7a7.js";const s={},n=i(`<h1 id="对话" tabindex="-1"><a class="header-anchor" href="#对话" aria-hidden="true">#</a> 对话</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>每条对话的冒号、分号应当为英文字符！</p></div><p><strong>编写角色对话的方式非常简单，且与自然语言几乎无异。</strong></p><h2 id="基本角色对话" tabindex="-1"><a class="header-anchor" href="#基本角色对话" aria-hidden="true">#</a> 基本角色对话</h2><p>首先，使用记事本或 VS Code 、sublime 等文本编辑器，打开游戏资源目录下 <code>scene</code> 文件夹中的 <code>start.txt</code>，然后你就可以开始编写你的第一条对话了。</p><p>编写角色对话的方法非常简单，你只需要输入 <code>角色:对话;</code></p><p>示例：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>雪之下雪乃:请用茶;
由比滨:啊，谢谢;
小町:谢谢雪乃姐！;
一色:谢谢学姐。;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在每条对话/剧本后，使用分号作为结束。（如果不写分号有时候也行，但是作者还是建议加上分号以防止 bug）。</p><h2 id="连续对话" tabindex="-1"><a class="header-anchor" href="#连续对话" aria-hidden="true">#</a> 连续对话</h2><p>如果你的多条对话没有改变角色名称，你可以使用连续对话，而可以省略角色名称，再在你需要的时候使用：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>雪之下雪乃:你到得真早;
; // 此时，对话的角色名称仍然是 “雪之下雪乃”
对不起，等很久了吗？;
比企谷八幡:刚到而已;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="旁白" tabindex="-1"><a class="header-anchor" href="#旁白" aria-hidden="true">#</a> 旁白</h2><p>如果你想要创建没有角色名称的旁白对话，请在冒号前留空（但不能省去冒号）：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>:这是一句旁白;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="黑屏文字" tabindex="-1"><a class="header-anchor" href="#黑屏文字" aria-hidden="true">#</a> 黑屏文字</h2><p>在许多游戏中，会以黑屏显示一些文字，用来引入主题或表现角色的心理活动。你可以使用 intro 命令来演出独白：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>intro:回忆不需要适合的剧本，|反正一说出口，|都成了戏言。;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>独白的分拆以分隔符(|)来分割，也就是说，每一个 | 代表一个换行。在实际演出中，上面的文字会变成：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>回忆不需要适合的剧本，
反正一说出口，
都成了戏言。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭文本框" tabindex="-1"><a class="header-anchor" href="#关闭文本框" aria-hidden="true">#</a> 关闭文本框</h2><p>有时候，为了一些特殊的演出效果，可能你希望临时关闭文本框，所以你可以使用以下指令来关闭文本框：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setTextbox:hide; // 关闭文本框
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当 <code>setTextbox</code> 指令的值为 <code>hide</code> 时，会关闭文本框，且用户无法以任何方式打开。如果想要重新显示文本框，请再次调用此命令，并输入除<code>hide</code>以外的任意值。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setTextbox:on; // 可以是除 hide 以外的任意值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="结束游戏并返回到标题" tabindex="-1"><a class="header-anchor" href="#结束游戏并返回到标题" aria-hidden="true">#</a> 结束游戏并返回到标题</h2><p>如果你想要在剧情结束后结束游戏并返回到标题，请使用：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>end;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，就可以使游戏返回标题界面。</p><h2 id="电影模式-测试功能" tabindex="-1"><a class="header-anchor" href="#电影模式-测试功能" aria-hidden="true">#</a> 电影模式（测试功能）</h2><p>使用 <code>filmMode:enable;</code> 来开启电影模式。<br> 使用 <code>filmMode:none;</code> 来关闭电影模式。</p>`,31),r=[n];function l(c,o){return a(),d("div",null,r)}const v=e(s,[["render",l],["__file","dialogue.html.vue"]]);export{v as default};