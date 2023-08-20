import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as l,a,d as e,b as n,e as t}from"./app-7008dfd5.js";const c={},p=t('<h1 id="showcase-your-game" tabindex="-1"><a class="header-anchor" href="#showcase-your-game" aria-hidden="true">#</a> Showcase your game</h1><p>First you need to prepare the following information:</p><ul><li>Game ID: the unique ID of the game, cannot be duplicated with other games</li><li>Game title</li><li>Developer name</li><li>Release date</li><li>Publishing address: a link to a publicly accessible page, such as the project homepage, store, blog, video, etc.</li><li>Game cover: width 616 pixels, height 353 pixels</li></ul><h2 id="submit-your-game-via-pull-requests" tabindex="-1"><a class="header-anchor" href="#submit-your-game-via-pull-requests" aria-hidden="true">#</a> Submit your game via Pull Requests</h2>',4),u={href:"https://github.com/MakinoharaShoko/WebGAL_HomePage",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>Add the prepared cover to <code>/public/images/games</code>.</p><p>Open the file <code>/data/games.ts</code>, find <code>games</code> and add at the end according to the following template:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&#39;Game ID&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;Game title&#39;</span><span class="token punctuation">,</span>
    developer<span class="token operator">:</span> <span class="token string">&#39;Developer name&#39;</span><span class="token punctuation">,</span>
    releaseDate<span class="token operator">:</span> <span class="token string">&#39;xxxx-xx-xx&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;https://example.com/&#39;</span><span class="token punctuation">,</span>
    cover<span class="token operator">:</span> <span class="token string">&#39;Game cover filename.webp&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Confirm that there are no errors and launch a pull requests request.</p><h2 id="submit-your-game-via-issues" tabindex="-1"><a class="header-anchor" href="#submit-your-game-via-issues" aria-hidden="true">#</a> Submit your game via Issues</h2>`,5),h={href:"https://github.com/MakinoharaShoko/WebGAL_HomePage/issues",target:"_blank",rel:"noopener noreferrer"},m=a("p",null,[e("Click "),a("code",null,"New issue"),e(", fill in the information you have prepared, and then click "),a("code",null,"Submit new issue"),e(".")],-1),g=a("h2",{id:"submit-your-game-through-other-channels",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#submit-your-game-through-other-channels","aria-hidden":"true"},"#"),e(" Submit your game through other channels")],-1),b=a("p",null,"Once you've prepared the necessary information, you can submit your game by contacting us via the community or email.",-1);function v(k,_){const s=i("ExternalLinkIcon");return r(),l("div",null,[p,a("p",null,[e("Fork "),a("a",u,[e("WebGAL_HomePage"),n(s)]),e(" this repository.")]),d,a("p",null,[e("Open the "),a("a",h,[e("Issues page"),n(s)]),e(" of the WebGAL_HomePage repository.")]),m,g,b])}const x=o(c,[["render",v],["__file","showcase-your-game.html.vue"]]);export{x as default};
