import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,e as a}from"./app-edf4f7a7.js";const s={},i=a(`<h1 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> Base</h1><p>First of all, the program will start from <strong>initial script</strong> <code>start.txt</code> when it starts, please do not rename or delete it.</p><p>The following tutorial will show you how to use WebGAL scripts.</p><h2 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h2><p>The WebGAL script will only parse the content before the semicolon on each line, so the content after the semicolon will be treated as comments.</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>WebGAL:Hello!; The content after the semicolon will be treated as comments
; You can directly input a semicolon and then write a single line comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="none-keyword" tabindex="-1"><a class="header-anchor" href="#none-keyword" aria-hidden="true">#</a> <code>none</code> keyword</h2><p>When setting <strong>resources</strong> such as sprites, bgm, backgrounds, etc., set it to the <code>none</code> keyword to close that object.</p><h2 id="next-parameter" tabindex="-1"><a class="header-anchor" href="#next-parameter" aria-hidden="true">#</a> <code>-next</code> parameter</h2><p>You can add the parameter <code>-next</code> after any statement to jump to the next statement immediately after executing this statement. This is very useful when you need to perform multiple steps at the same time.</p><p>Example:</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeBg:testBG03.jpg -next; // Will immediately execute the next statement
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="notend-and-concat-parameter" tabindex="-1"><a class="header-anchor" href="#notend-and-concat-parameter" aria-hidden="true">#</a> <code>-notend</code> and <code>-concat</code> parameter</h2><p>Sometimes, you may want to insert effects like changing expressions at a certain stage when a line of dialogue is executed.<br> At this time, you can use the <code>-notend</code> <code>-concat</code> parameters to insert any statement in the dialogue.</p><p><code>-concat</code> means this line of dialogue is connected after the previous line of dialogue</p><p><code>-notend</code> means this line of dialogue does not end, and effects or dialogue may be connected afterwards.</p><p>Example as follows: This is a demo of switching sprites during dialogue.</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>WebGAL: Test inserting effects during dialogue! Switching sprite now... -notend;
changeFigure:k1.png -next;
Switched sprite! Switching expression now... -notend -concat; 
changeFigure:k2.png -next;
Switched expression! -concat;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[i];function d(r,c){return t(),n("div",null,o)}const m=e(s,[["render",d],["__file","base.html.vue"]]);export{m as default};