import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as l,a as e,e as t,b as o,d as n}from"./app-dac030e0.js";const d={},c=e("h1",{id:"how-to-start-making-a-webgal",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-start-making-a-webgal","aria-hidden":"true"},"#"),t(" How to start making a WebGAL?")],-1),h={class:"hint-container warning"},u=e("p",{class:"hint-container-title"},"Note",-1),p=e("p",null,"No matter which way you choose to make a WebGAL game, you should spend some time reading through the entirety of the development guide. It won't take long, and it will save you from running into problems due to improper operation.",-1),g={href:"https://github.com/MakinoharaShoko/WebGAL/issues",target:"_blank",rel:"noopener noreferrer"},m=e("a",{href:"mailto:contact@openwebgal.com"},"contact@openwebgal.com",-1),b=e("div",{class:"hint-container danger"},[e("p",{class:"hint-container-title"},"Warning"),e("p",null,"Please use a modern browser (Chrome / Firefox / Edge) to open WebGAL and the editor. Problems that may be caused by using other browsers will not be solved.")],-1),f=e("h2",{id:"method-1-use-webgal-terre-visual-editor-recommended-but-less-customizable",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#method-1-use-webgal-terre-visual-editor-recommended-but-less-customizable","aria-hidden":"true"},"#"),t(" Method 1: Use WebGAL Terre Visual Editor (Recommended, but less customizable)")],-1),_=e("p",null,[e("strong",null,"WebGAL Terre Visual Editor is the best way to create, make and publish a WebGAL.")],-1),v={href:"http://localhost:3001/",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"Download WebGAL Terre Visual Editor:",-1),k={href:"https://openwebgal.com/en/download/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/MakinoharaShoko/WebGAL_Terre/releases",target:"_blank",rel:"noopener noreferrer"},W=n(`<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>WebGAL Terre Visual Editor does not support Windows 7 by default.<br> Windows 7 users please refer to <strong><a href="./win7">How to start making with Visual Editor on Windows 7</a></strong>.</p></div><h2 id="method-2-start-debugging-from-source-code-for-makers-who-want-higher-customization" tabindex="-1"><a class="header-anchor" href="#method-2-start-debugging-from-source-code-for-makers-who-want-higher-customization" aria-hidden="true">#</a> Method 2: Start debugging from source code (For makers who want higher customization)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/MakinoharaShoko/WebGAL.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Install and use yarn to install dependencies</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">yarn</span> <span class="token parameter variable">-g</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>WebGAL uses vite as a packaging and debugging tool, you can start the development server by running the following script</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It is recommended to use VS Code for development, and use plugins to achieve syntax highlighting:</p>`,8),A={href:"https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/C6H5-NO2/webgal-script-basics",target:"_blank",rel:"noopener noreferrer"},G=n(`<p>If you want to package, please use</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The packaged product is in the packages/webgal/dist directory</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>After you have finished customizing, if you want to use the WebGAL editor to easily preview and manage resources in real time, you can copy and paste the packaged product and replace the <code>packages/terre2/assets/templates/WebGAL_Template</code> in the editor directory, so that you can replace the built-in engine of the WebGAL editor with your own customized one. If your WebGAL repository and WebGAL_Terre repository are in the same directory, you can use the <code>release-to-terre</code> quick script to execute</p></div>`,4);function x(T,V){const a=r("ExternalLinkIcon");return i(),l("div",null,[c,e("div",h,[u,p,e("p",null,[t("You know, most of the questions you are wondering about can be found in the documentation. If you firmly believe that you have encountered a bug, please raise an issue at "),e("a",g,[t("issues"),o(a)]),t(" or send an email to "),m,t(', you can also find a way to join the WebGAL discussion community in the "More" column at the top right corner of the website.')])]),b,f,_,e("p",null,[t("After downloading the WebGAL Terre Visual Editor, please unzip the package and launch the WebGAL_Terre executable file. WebGAL Terre will automatically open the default browser, if not, please enter "),e("a",v,[t("http://localhost:3001/"),o(a)]),t(" to open the editor.")]),w,e("p",null,[e("a",k,[t("WebGAL Homepage (Recommended)"),o(a)])]),e("p",null,[e("a",y,[t("GitHub Releases"),o(a)])]),W,e("p",null,[e("a",A,[t("Marketplace address of syntax highlighting plugin"),o(a)])]),e("p",null,[e("a",L,[t("Source code repository of syntax highlighting plugin"),o(a)])]),G])}const I=s(d,[["render",x],["__file","getting-started.html.vue"]]);export{I as default};
