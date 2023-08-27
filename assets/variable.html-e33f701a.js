import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as i}from"./app-10d44f4b.js";const d={},s=i(`<h1 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在你弄清楚如何使用场景跳转和分支跳转之前，请不要轻易使用变量系统，这可能会令你感到迷惑！</p></div><h2 id="使用变量" tabindex="-1"><a class="header-anchor" href="#使用变量" aria-hidden="true">#</a> 使用变量</h2><p>设置变量：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1; // 可以设置数字
setVar:a=true // 可以设置布尔值
setVar:a=人物名称 // 可以设置字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果先前你定义过其他变量，也可以在设置变量时使用。</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1;
setVar:b=a+1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件执行" tabindex="-1"><a class="header-anchor" href="#条件执行" aria-hidden="true">#</a> 条件执行</h2><p>在语句后加上 <code>-when=(condition)</code> 参数，可以根据条件判断当前语句是否要执行。</p><p>例如：</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1;
; // 当 a 大于 1 时跳转到场景 1
changeScene:1.txt -when=a&gt;1;
; // 只有 a 为 1 时才跳转，注意相等运算符是 ==
changeScene:2.txt -when=a==1;
; // 如果 a 小于 1，那么上面的语句不执行，自然就执行这一句了
changeScene:3.txt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>=</code> 是赋值符号，不可用于条件判断，<code>==</code>是相等运算符。</p></div><p>任何语句都可以加上 <code>-when</code> 参数来控制是否执行。通过组合 <code>-when</code> 参数和 <code>jumpLabel</code> <code>callScene</code> <code>changeScene</code>，你可以实现带条件判断的流程控制。</p>`,13),c=[s];function r(l,t){return a(),n("div",null,c)}const h=e(d,[["render",r],["__file","variable.html.vue"]]);export{h as default};
