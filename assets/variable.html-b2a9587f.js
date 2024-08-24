import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,d}from"./app-cc05c0c2.js";const i={},s=d(`<h1 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在你弄清楚如何使用场景跳转和分支跳转之前，请不要轻易使用变量系统，这可能会令你感到迷惑！</p></div><h2 id="使用变量" tabindex="-1"><a class="header-anchor" href="#使用变量" aria-hidden="true">#</a> 使用变量</h2><p>设置变量：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1; // 可以设置数字
setVar:a=true // 可以设置布尔值
setVar:a=人物名称 // 可以设置字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置随机数，请使用 <code>random()</code></p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=random();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>随机数是一个0-1区间的数字，如果你需要指定随机数范围，你需要进行一些算数运算。比如，你想要5-10之间的随机数，你需要进行如下运算：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=5+a*5;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果先前你定义过其他变量，也可以在设置变量时使用。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1;
setVar:b=a+1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件执行" tabindex="-1"><a class="header-anchor" href="#条件执行" aria-hidden="true">#</a> 条件执行</h2><p>在语句后加上 <code>-when=(condition)</code> 参数，可以根据条件判断当前语句是否要执行。</p><p>例如：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1;
; // 当 a 大于 1 时跳转到场景 1
changeScene:1.txt -when=a&gt;1;
; // 只有 a 为 1 时才跳转，注意相等运算符是 ==
changeScene:2.txt -when=a==1;
; // 如果 a 小于 1，那么上面的语句不执行，自然就执行这一句了
changeScene:3.txt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>=</code> 是赋值符号，不可用于条件判断，<code>==</code>是相等运算符。</p></div><p>任何语句都可以加上 <code>-when</code> 参数来控制是否执行。通过组合 <code>-when</code> 参数和 <code>jumpLabel</code> <code>callScene</code> <code>changeScene</code>，你可以实现带条件判断的流程控制。</p><h2 id="获取用户输入" tabindex="-1"><a class="header-anchor" href="#获取用户输入" aria-hidden="true">#</a> 获取用户输入</h2><p>使用<code>getUserInput</code> 指令来获取用户输入，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>getUserInput:name -title=如何称呼你 -buttonText=确认; 将用户输入写入 name 变量中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>title</code> 参数是提示的文本，<code>buttonText</code> 是确认按钮的文本</p><h2 id="变量插值" tabindex="-1"><a class="header-anchor" href="#变量插值" aria-hidden="true">#</a> 变量插值</h2><p>可以在语句中使用 <code>{}</code> 语法来进行变量插值，将某个变量传入语句中，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setVar:name=WebGAL;
setVar:engine=WebGAL;
{name}:欢迎使用 {engine}！这是一款全新的网页端视觉小说引擎。;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="长效变量-全局变量" tabindex="-1"><a class="header-anchor" href="#长效变量-全局变量" aria-hidden="true">#</a> 长效变量（全局变量）</h2><p>WebGAL 的普通变量是跟随存档的，也就是说，任何变量只存在于当前的游戏场景中，只有存档才能将其保存下来，读档将其恢复。</p><p>为了解决可能存在的作者希望设置多周目的问题，提供长效（全局）变量，一旦设置，则在整个游戏中生效，除非用户清除全部数据。</p><p>加上 <code>-global</code> 参数可以设置长效（全局）变量</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1 -global;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就设置了一个不随存档读取而改变的变量。</p><p>使用例：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>jumpLabel:turn-2 -when=a&gt;0;
setVar:a=1 -global;
一周目;
changeScene:一周目剧情.txt;
label:turn-2;
二周目;
changeScene:二周目剧情.txt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级用法-4-5-4" tabindex="-1"><a class="header-anchor" href="#高级用法-4-5-4" aria-hidden="true">#</a> 高级用法（<code>&gt;=4.5.4</code>）</h2><p>使用内置变量进行更为高级的操作，如对配置变量进行修改，根据内置变量进行指定条件的逻辑运行等。</p><p>WebGAL 目前内置变量域有两个：<code>stage</code>和<code>userData</code>。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>stage</code> 为<strong>运行时内置变量</strong>，<code>userData</code> 为<strong>存档内置变量</strong>。</p><p><code>stage</code> 可在 WebGAL 编辑器下面的<code>state</code>选项卡查看有哪些属性，<code>userData</code>则是可以在开发者工具中<code>indexedDB</code>查看。</p></div><p>使用<code>$</code>可以访问他们，如获取BGM的值：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=($stage.bgm.volume);
WebGAL:当前的BGM音量为{a};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，你也可以直接在对话中使用它：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>WebGAL:当前的BGM音量为{$stage.bgm.volume};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>获取<strong>单值变量</strong>时需要使用<code>括号</code>包裹，但进行数学运算时不需要。</p></div><p>我们还可以访问<code>config.txt</code>中的全局变量：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:title=(Game_name);
WebGAL:当前的游戏标题为{title};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改也不例外，当要修改游戏标题为新游戏标题时，setVar的变量名称需要设置为我们将修改的变量名称</p><p>加<code>global</code>参数表示我们要修改的是配置变量：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:Game_name=新游戏标题 -global;
WebGAL:当前的游戏标题为{Game_name};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不加<code>global</code>则会赋值到游戏内变量，请注意何时使用<code>global</code>参数。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以修改的原始配置变量<code>Title_img</code>、<code>Title_bgm</code>、<code>Game_name</code>、<code>Game_key</code>。<br> 想要恢复则可以在游戏选项中使用<code>清空所有数据</code>即可恢复。</p></div><p>当然，你也可以在<code>config.txt</code>中创建一个自定义配置变量，如 创建一个版本号：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Game_name:欢迎使用WebGAL！;
Game_key:f60ad5725c1588;
Title_img:WebGAL_New_Enter_Image.png;
Title_bgm:s_Title.mp3;
Textbox_theme:imss;
; 增加版本号
version:1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我们就可以在脚本里面对它进行获取，修改等操作：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:v=(version);
WebGAL:当前的版本号为{v};
setVar:version=version*2 -global;
WebGAL:当前被修改的版本号为{version};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>config.txt</code>暂未做特殊符号的转义处理。</p></div>`,53),c=[s];function l(r,t){return a(),n("div",null,c)}const u=e(i,[["render",l],["__file","variable.html.vue"]]);export{u as default};
