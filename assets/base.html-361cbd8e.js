import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,d as n}from"./app-dac030e0.js";const i={},s=n(`<h1 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h1><p>First of all, when the program starts, it will run from the <strong>startup script</strong> <code>start.txt</code>. Please do not rename or delete it.</p><p>The following tutorials will teach you how to use WebGAL script.</p><h2 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h2><p>WebGAL script will only parse the content before the semicolon in each line, so the content after the semicolon will be regarded as a comment.</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>WebGAL:Hello!; The content after semicolon will be regarded as a comment
; You can directly input a semicolon, then write a single-line comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="none-keyword" tabindex="-1"><a class="header-anchor" href="#none-keyword" aria-hidden="true">#</a> <code>none</code> Keyword</h2><p>When setting <strong>resources</strong> such as立ち絵, BGM, backgrounds, you can turn off this object by setting it to <code>none</code>.</p><h2 id="next-parameter" tabindex="-1"><a class="header-anchor" href="#next-parameter" aria-hidden="true">#</a> <code>-next</code> Parameter</h2><p>You can add the parameter <code>-next</code> after any statement. This will cause the next statement to be executed immediately after this statement is executed. This is very useful when you need to perform multiple operations at the same time.</p><p>Example:</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>changeBg:testBG03.jpg -next; // Will execute the next statement immediately
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="notend-and-concat-parameters" tabindex="-1"><a class="header-anchor" href="#notend-and-concat-parameters" aria-hidden="true">#</a> <code>-notend</code> and <code>-concat</code> Parameters</h2><p>Sometimes, you may want to add 演出効果, such as switching expressions, when a certain stage of a dialogue is executed.<br> At this time, you can use the <code>-notend</code> <code>-concat</code> parameters to insert any statement in the dialogue.</p><p><code>-concat</code> means that this dialogue is connected after the previous dialogue</p><p><code>-notend</code> means that this dialogue is not over, and there may be 演出 or dialogue connected later.</p><p>An example is given below: This is a demonstration of switching 立ち絵 in the middle of a dialogue.</p><div class="language-ws line-numbers-mode" data-ext="ws"><pre class="language-ws"><code>WebGAL:Test statement insert 演出！Switch 立ち絵 immediately...... -notend;
changeFigure:k1.png -next;
Switch 立ち絵！Switch expression immediately...... -notend -concat;
changeFigure:k2.png -next;
Switch expression！ -concat;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[s];function d(r,c){return t(),a("div",null,o)}const m=e(i,[["render",d],["__file","base.html.vue"]]);export{m as default};
