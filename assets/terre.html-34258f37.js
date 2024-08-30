import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,a as n,e,b as t,d as s}from"./app-2b136723.js";const d={},p=s('<h1 id="webgal-terre-contribution-guidelines" tabindex="-1"><a class="header-anchor" href="#webgal-terre-contribution-guidelines" aria-hidden="true">#</a> WebGAL Terre Contribution Guidelines</h1><p>Welcome to contribute to WebGAL Terre! WebGAL Terre is our most creative and competitive project. We are committed to helping creators who are not familiar with programming to create their own works using WebGAL. From game scripts to custom UI, we strive to provide a graphical editing method to lower the threshold and make creation easier for almost any creation-related task.</p><p>In addition, we also provide a way to write code for almost all functions. We have designed the code editing and graphical editing modules to be fully compatible, allowing creators to seamlessly switch between the two modes.</p><p>Before participating in this exciting project, we hope you can read the following specifications:</p><h2 id="contribution-requirements" tabindex="-1"><a class="header-anchor" href="#contribution-requirements" aria-hidden="true">#</a> Contribution Requirements</h2><p>To help us better understand and review your contributions, please note the following points:</p><ul><li><p><strong>Code Comments:</strong> To help us understand your code logic, it is recommended that you add comments to key parts.</p></li><li><p><strong>Functional Testing:</strong> If you add or modify a function, please provide corresponding test methods to ensure that the function works properly. If you have performed code refactoring, please also provide test methods to cover the affected scope and ensure that the refactoring has not introduced new issues.</p></li><li><p><strong>Clear Explanation:</strong> When submitting a Pull Request, please briefly explain the changes you made and the reasons behind them. This will help us understand your contributions faster.</p></li></ul><h2 id="project-introduction" tabindex="-1"><a class="header-anchor" href="#project-introduction" aria-hidden="true">#</a> Project Introduction</h2><p>WebGAL Terre is developed using a full-stack TypeScript approach and uses yarn as the package manager and yarn workspace as the monorepo manager.</p><h2 id="starting-the-project" tabindex="-1"><a class="header-anchor" href="#starting-the-project" aria-hidden="true">#</a> Starting the Project</h2><h3 id="installing-dependencies" tabindex="-1"><a class="header-anchor" href="#installing-dependencies" aria-hidden="true">#</a> Installing Dependencies</h3>',11),l={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},u=n("h3",{id:"cloning-the-repository",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cloning-the-repository","aria-hidden":"true"},"#"),e(" Cloning the Repository")],-1),h={href:"https://github.com/OpenWebGAL/WebGAL_Terre",target:"_blank",rel:"noopener noreferrer"},g=s(`<h3 id="installing-dependencies-1" tabindex="-1"><a class="header-anchor" href="#installing-dependencies-1" aria-hidden="true">#</a> Installing Dependencies</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="starting-the-development-server" tabindex="-1"><a class="header-anchor" href="#starting-the-development-server" aria-hidden="true">#</a> Starting the Development Server</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will start the development server and open the application in the default browser.</p><h3 id="building-the-project" tabindex="-1"><a class="header-anchor" href="#building-the-project" aria-hidden="true">#</a> Building the Project</h3><p>You need to run the build script to generate a releasable version.</p><ul><li><strong>Windows:</strong> <code>release.sh</code></li><li><strong>Other environments:</strong> Please check the corresponding build script in the project&#39;s root directory.</li></ul><p>After the build is complete, you can find the build artifacts in the <code>release</code> directory.</p><h2 id="package-introduction" tabindex="-1"><a class="header-anchor" href="#package-introduction" aria-hidden="true">#</a> Package Introduction</h2><table><thead><tr><th>Package Name</th><th>Description</th></tr></thead><tbody><tr><td><code>packages/dev-server</code></td><td>Debugging on port 80, convenient for server users</td></tr><tr><td><code>packages/origine2</code></td><td>Editor frontend</td></tr><tr><td><code>packages/terre-electron</code></td><td>Electron version of Terre editor</td></tr><tr><td><code>packages/terre2</code></td><td>Editor backend</td></tr><tr><td><code>packages/vscode-ws-jsonrpc-webgal</code></td><td>Custom package for the WebGAL editor backend, fixing some bugs</td></tr><tr><td><code>packages/WebGAL-electron</code></td><td>Electron packaging of WebGAL</td></tr></tbody></table><h2 id="webgal-terre-frontend-and-backend-joint-debugging-guide" tabindex="-1"><a class="header-anchor" href="#webgal-terre-frontend-and-backend-joint-debugging-guide" aria-hidden="true">#</a> WebGAL Terre Frontend and Backend Joint Debugging Guide</h2><p>WebGAL Terre is a TypeScript full-stack project that uses OpenAPI to generate code for requesting backend interfaces.</p><p>To make this process work correctly, pay attention to the following annotations when developing interfaces for the WebGAL Terre backend:</p><p><strong>1. Introduction to Interface Annotations</strong></p><p>The following code example demonstrates the key annotations required for backend interfaces:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&#39;createGame&#39;</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiOperation</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> summary<span class="token operator">:</span> <span class="token string">&#39;Create a new game&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiResponse</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&#39;Game creation result.&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ApiBody</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> CreateGameDto<span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&#39;Game creation data&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">createGame</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> createGameData<span class="token operator">:</span> CreateGameDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> createResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>manageGame<span class="token punctuation">.</span><span class="token function">createGame</span><span class="token punctuation">(</span>
      createGameData<span class="token punctuation">.</span>gameName<span class="token punctuation">,</span>
      createGameData<span class="token punctuation">.</span>derivative<span class="token punctuation">,</span>
      createGameData<span class="token punctuation">.</span>templateName<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>createResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token string">&#39;success&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token string">&#39;failed&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. Detailed Explanation of the Code Example</strong></p><p>Let&#39;s analyze this code line by line to understand the role of each annotation:</p><ul><li><p><strong><code>@Post(&#39;createGame&#39;)</code></strong>:</p><ul><li><code>@Post</code>: Indicates that this is a POST request interface.</li><li><code>&#39;createGame&#39;</code>: Defines the path of the interface, which is <code>/createGame</code>.</li></ul></li><li><p><strong><code>@ApiOperation({ summary: &#39;Create a new game&#39; })</code></strong>:</p><ul><li><code>@ApiOperation</code>: Used to describe the function of the interface.</li><li><code>summary</code>: Briefly summarizes the role of the interface and will be displayed in the generated OpenAPI documentation.</li></ul></li><li><p><strong><code>@ApiResponse({ status: 200, description: &#39;Game creation result.&#39; })</code></strong>:</p><ul><li><code>@ApiResponse</code>: Describes the possible responses of the interface.</li><li><code>status</code>: Specifies the HTTP status code, here it is 200, indicating success.</li><li><code>description</code>: Describes the response content under this status code.</li></ul></li><li><p><strong><code>@ApiBody({ type: CreateGameDto, description: &#39;Game creation data&#39; })</code></strong>:</p><ul><li><code>@ApiBody</code>: Specifies the data type and description of the request body.</li><li><code>type</code>: Indicates the data structure of the request body, here using <code>CreateGameDto</code>, which is a predefined DTO (Data Transfer Object).</li><li><code>description</code>: Describes the meaning of the request body data.</li></ul></li><li><p><strong><code>async createGame(@Body() createGameData: CreateGameDto)</code></strong>:</p><ul><li><code>async</code>: Indicates that this is an asynchronous function.</li><li><code>createGame</code>: The function name of the interface.</li><li><code>@Body()</code>: Gets data from the request body.</li><li><code>createGameData: CreateGameDto</code>: Parses the request body data into an object of type <code>CreateGameDto</code>.</li></ul></li></ul><p><strong>3. Updating OpenAPI in the Frontend Project</strong></p><p>To allow the frontend project to use the latest backend interface, you need to update the OpenAPI definition regularly during development.</p><p><strong>Steps:</strong></p><ol><li>Ensure that the backend project is running (as mentioned earlier, execute: <code>yarn dev</code>).</li><li>In the <code>packages/origine2</code> directory, execute the command: <code>yarn openapi</code>.</li></ol><p>This command will automatically generate the latest OpenAPI definition file based on the annotations in the backend code. The frontend project will use this file to generate code for requesting interfaces, ensuring consistency between the frontend and backend interfaces.</p><p><strong>4. Using the Interface in the Frontend Project</strong></p><p>In the WebGAL frontend project, you can call the backend interface in the following way:</p><ol><li>Import the <code>api</code> object: <code>import {api} from &quot;@/api&quot;;</code></li><li>Call the method on the <code>api</code> object, for example: <code>api.manageGameControllerGetGameList()</code>.</li></ol><p>The <code>api</code> object contains corresponding methods for all backend interfaces, and you can call them directly based on the interface name.</p><h2 id="more-information-about-development" tabindex="-1"><a class="header-anchor" href="#more-information-about-development" aria-hidden="true">#</a> More Information about Development</h2><p>In addition to this, we will also provide some documentation in key directories of the source code to explain the principles of this module. This information will be provided in Chinese. Nowadays, large language models perform well enough in translation, so you don&#39;t have to worry if you can&#39;t read Chinese. You can try using a large language model to translate it into your language.</p>`,31);function m(k,b){const a=i("ExternalLinkIcon");return r(),c("div",null,[p,n("p",null,[e("First, make sure you have "),n("a",l,[e("Yarn"),t(a)]),e(" installed. If you don't have Yarn installed, please install it according to the official documentation.")]),u,n("p",null,[e("The WebGAL Terre repository is located at "),n("a",h,[e("WebGAL Terre - GitHub"),t(a)])]),g])}const y=o(d,[["render",m],["__file","terre.html.vue"]]);export{y as default};
