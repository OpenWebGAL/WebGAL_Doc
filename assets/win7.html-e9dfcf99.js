import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as l,a as n,d as e,b as a,e as t}from"./app-7008dfd5.js";const p={},d=t('<h1 id="windows-7-使用可视化编辑器开始制作的方法" tabindex="-1"><a class="header-anchor" href="#windows-7-使用可视化编辑器开始制作的方法" aria-hidden="true">#</a> Windows 7 使用可视化编辑器开始制作的方法</h1><h2 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h2><h3 id="安装-14-16-3-版本的-node-js" tabindex="-1"><a class="header-anchor" href="#安装-14-16-3-版本的-node-js" aria-hidden="true">#</a> 安装 14~16.3 版本的 node.js</h3>',3),c={href:"https://nodejs.org/dist/v16.3.0/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://registry.npmmirror.com/binary.html?path=node/v16.3.0/",target:"_blank",rel:"noopener noreferrer"},h=n("ol",null,[n("li",null,[n("p",null,"根据自己的系统选择合适的安装包，"),n("p",null,[e("注意在 "),n("em",null,"win-x64"),e(", "),n("em",null,"win-x86"),e(" 两个文件夹中选择，不要下载其它文件。")])]),n("li",null,[n("p",null,[e("选择对应版本文件夹后下载里面的 "),n("em",null,"node.exe"),e("。")])])],-1),m=t("<li><p>设置绕过系统检查的环境变量</p><ol><li>右键 <em>我的电脑 / 计算机</em> ，在菜单中点击 <em>属性</em>。</li><li>在左侧面板中打开 <em>高级系统设置</em> 。</li><li>点击右下 <em>环境变量</em> 。</li><li>在系统变量中添加变量 <em>NODE_SKIP_PLATFORM_CHECK</em>，值为 <em>1</em> 。</li><li>保存。</li></ol></li><li><p>运行 node.js 的安装包 (刚才下载的 <em>node.exe</em>)，安装 node.js。</p></li>",2),v=n("hr",null,null,-1),b=n("h2",{id:"方法一-使用-terre-win7-支持补丁",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法一-使用-terre-win7-支持补丁","aria-hidden":"true"},"#"),e(" 方法一：使用 Terre Win7 支持补丁")],-1),k=n("h3",{id:"下载支持-win7-的-terre-补丁",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载支持-win7-的-terre-补丁","aria-hidden":"true"},"#"),e(" 下载支持 Win7 的 Terre 补丁")],-1),g=n("p",null,"下载地址：",-1),_={href:"https://github.com/hshqwq/WebGAL_Terre/releases",target:"_blank",rel:"noopener noreferrer"},q={href:"https://wwh.lanzoue.com/i2xqa0uy2fuh",target:"_blank",rel:"noopener noreferrer"},f=t(`<h3 id="下载可视化编辑器" tabindex="-1"><a class="header-anchor" href="#下载可视化编辑器" aria-hidden="true">#</a> 下载可视化编辑器</h3><p>下载补丁对应版本的[可视化编辑器](./guide#方法1（推荐）：使用 WebGAL 编辑器)并解压。<br> 对应版本请查看补丁中诸如 <em>使用说明, README</em> 等文件, 或查看 <em>package.json</em> 中 <em>version</em> 对应的值.</p><h3 id="使用补丁" tabindex="-1"><a class="header-anchor" href="#使用补丁" aria-hidden="true">#</a> 使用补丁</h3><p>解压补丁，并将补丁中文件复制到可视化编辑器的根目录下。</p><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><p>运行 <em>Install_Dependencies.bat</em> 安装依赖，出现 <em>node_modules</em> 文件夹即代表成功。</p><p>手动方法：</p><ol><li><p>打开任意终端。</p></li><li><p>打开编辑器所在目录。</p></li><li><p>运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i 
<span class="token comment"># 或（如果你有安装yarn）</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="启动可视化编辑器" tabindex="-1"><a class="header-anchor" href="#启动可视化编辑器" aria-hidden="true">#</a> 启动可视化编辑器</h3><p>运行 <em>WebGal_Terre-Win7.bat</em> 启动编辑器。</p><p>手动方法：</p><ol><li><p>打开任意终端。</p></li><li><p>打开编辑器所在目录。</p></li><li><p>运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><div class="hint-container tip"><p class="hint-container-title">注意</p><p>如果电脑装过低于 14 版本的 node 请先切换为 14~16.3 版本的 node。</p></div><hr><h2 id="方法二-从源码编译-推荐有一定编程经验的人采取" tabindex="-1"><a class="header-anchor" href="#方法二-从源码编译-推荐有一定编程经验的人采取" aria-hidden="true">#</a> 方法二：从源码编译（推荐有一定编程经验的人采取）</h2><h3 id="获取源代码" tabindex="-1"><a class="header-anchor" href="#获取源代码" aria-hidden="true">#</a> 获取源代码</h3>`,16),x={href:"https://github.com/MakinoharaShoko/WebGAL_Terre",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/MakinoharaShoko/WebGAL_Terre.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装包管理器-可选" tabindex="-1"><a class="header-anchor" href="#安装包管理器-可选" aria-hidden="true">#</a> 安装包管理器 (可选)</h3><p>安装 yarn （可选，推荐）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编译可视化编辑器" tabindex="-1"><a class="header-anchor" href="#编译可视化编辑器" aria-hidden="true">#</a> 编译可视化编辑器</h3><h4 id="方式一-编译整个可视化编辑器" tabindex="-1"><a class="header-anchor" href="#方式一-编译整个可视化编辑器" aria-hidden="true">#</a> 方式一: 编译整个可视化编辑器</h4>`,6),j=t(`<li><p>安装依赖</p><p>在项目根目录执行依赖安装。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),w={href:"http://release.sh",target:"_blank",rel:"noopener noreferrer"},T=n("em",null,"Terre",-1),W=n("li",null,[n("p",null,[e("手动编译 "),n("em",null,"Terre"),e("，参考 ["),n("em",null,"仅编译 Terre"),e("](./#方式二: 仅编译 "),n("em",null,"Terre"),e(")。")])],-1),L=t(`<h4 id="方式二-仅编译-terre2" tabindex="-1"><a class="header-anchor" href="#方式二-仅编译-terre2" aria-hidden="true">#</a> 方式二: 仅编译 <em>Terre2</em></h4><ol><li><p>打开 <em>packages/terre2</em> 。</p></li><li><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>打包 <em>terre2</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除 <em>dist</em> 目录下所有 <em>.d.ts</em> 结尾文件 (可选)。</p></li><li><p>在 <em>dist</em> 中添加 <em>package.json</em> 文件，内容（注意填写相关信息）：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webgal-terre-2-win7-server&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;版本号&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MPL-2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@nestjs/common&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@nestjs/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@nestjs/platform-express&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@nestjs/serve-static&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.2.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;open&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.4.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reflect-metadata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.13&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rimraf&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rxjs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vscode-languageserver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ws&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.8.1&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>复制 <code>dist</code>目录到已编译的编辑器目录下。</p></li></ol><h3 id="运行可视化编辑器" tabindex="-1"><a class="header-anchor" href="#运行可视化编辑器" aria-hidden="true">#</a> 运行可视化编辑器</h3><ol><li><p>在可视化编辑器目录下安装依赖。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i
<span class="token comment"># 或（推荐yarn）</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行 <code>node main.js</code> 启动可视化编辑器。可根据需求写成 bat, sh 脚本。</p></li></ol>`,4);function A(E,G){const s=i("ExternalLinkIcon");return r(),l("div",null,[d,n("ol",null,[n("li",null,[n("p",null,[e("打开 "),n("a",c,[e("node.js 官网 node v16.3.0 下载地址"),a(s)]),e(" 下载安装包。")]),n("p",null,[e("镜像站: "),n("a",u,[e("https://registry.npmmirror.com/binary.html?path=node/v16.3.0/"),a(s)])]),h]),m]),v,b,k,n("blockquote",null,[g,n("p",null,[n("a",_,[e("GitHub（第三方补丁支持）"),a(s)])]),n("p",null,[n("a",q,[e("蓝奏云（第三方补丁支持）"),a(s)])])]),f,n("p",null,[e("克隆 "),n("a",x,[e("WebGAL_Terre"),a(s)]),e(" 仓库。")]),y,n("ol",null,[j,n("li",null,[n("p",null,[e("按照 "),n("em",null,[n("a",w,[e("release.sh"),a(s)])]),e(" 中命令打包除 "),T,e(" 以外的 packages。")])]),W]),L])}const I=o(p,[["render",A],["__file","win7.html.vue"]]);export{I as default};
