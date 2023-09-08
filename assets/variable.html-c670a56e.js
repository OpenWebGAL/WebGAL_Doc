import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as i}from"./app-edf4f7a7.js";const t={},s=i(`<h1 id="variable" tabindex="-1"><a class="header-anchor" href="#variable" aria-hidden="true">#</a> Variable</h1><h2 id="use-variables" tabindex="-1"><a class="header-anchor" href="#use-variables" aria-hidden="true">#</a> Use variables</h2><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Do not use the variable system lightly until you have figured out how to use scene jumping and branch jumping, which can be confusing!</p></div><p>Set variable:</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1; // Can set numbers
setVar:a=true // Can set boolean values 
setVar:a=Character name // Can set strings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you have defined other variables before, you can also use them when setting variables.</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1;
setVar:b=a+1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conditional-execution" tabindex="-1"><a class="header-anchor" href="#conditional-execution" aria-hidden="true">#</a> Conditional execution</h2><p>Add the parameter <code>-when=(condition)</code> after the statement to determine whether to execute the current statement based on the condition.</p><p>For example:</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>setVar:a=1;
; // Jump to scene 1 when a &gt; 1
changeScene:1.txt -when=a&gt;1;
; // Only jump when a equals 1, note that the equality operator is ==
changeScene:2.txt -when=a==1;
; // If a &lt; 1, the above statement is not executed, so naturally this one is executed
changeScene:3.txt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p><code>=</code> is the assignment symbol and cannot be used for conditional judgment. <code>==</code> is the equality operator.</p></div><p>Any statement can be added with the <code>-when</code> parameter to control whether to execute it. By combining the <code>-when</code> parameter and <code>jumpLabel</code> <code>callScene</code> <code>changeScene</code>, you can achieve conditional flow control.</p>`,13),d=[s];function c(r,o){return a(),n("div",null,d)}const u=e(t,[["render",c],["__file","variable.html.vue"]]);export{u as default};