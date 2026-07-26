# 自定义 UI {#custom-ui}

::: note
本章默认读者对 HTML/CSS/JS 有一定的了解。
:::

WebGAL 允许用户使用 CSS 来自定义部分游戏界面的样式，如文本框、标题页等。通过修改模板中的 SCSS 文件，您可以改变这些界面的外观，以更好地符合您的游戏的美术风格和设计需求。

WebGAL 称这套方案为「模板」。您可以在 `您的游戏名称目录/game/template/` 找到相关的模板文件。

- [选择](../template-reference/ui/choose.md)：`Stage/Choose/choose.scss`
- [文本框](../template-reference/ui/textbox.md)：`Stage/Textbox/textbox.scss`
- [标题页](../template-reference/ui/title.md)：`UI/Title/title.scss`

## 示例 {#example}

以标题页为例，您可以在 `您的游戏名称目录/game/template/UI/Title/title.scss` 中找到标题页的样式文件。打开该文件，您会看到一些 SCSS 代码，这些代码定义了标题页的样式。您可以根据需要修改这些代码，例如改变背景颜色、调整按钮的样式等。

您可以在[这里](../template-reference/ui/title.md)了解标题页每个 CSS 类的作用，以及标题页的 HTML 结构，以便更好地进行自定义。

将以下内容完全复制到 `title.scss` 中，覆盖原有内容：

::: details 展开示例代码

``` scss
.Title_main {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 13;
  display: flex;
  align-items: flex-end;
}

.Title_buttonList {
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  left: unset;
  min-width: unset;
  width: 100%;
  height: auto;
  padding-left: unset;

  background-color: #000000b5;
  font-family: "资源圆体", serif;

  transition: unset;
}

.Title_button {
  flex: 0 1 auto;
  cursor: pointer;
  padding: unset;
  margin: unset;
  background: transparent;
  background-color: transparent;
  backdrop-filter: none;

  border: 0;
  border-radius: 0;
  border-bottom: 16px;
  border-color: transparent;
  border-style: solid;
  transform: none;
  
  font-weight: bold;
  text-align: left;
  text-shadow: none;

  overflow: visible;
  transition: background-color 0.5s ease-out;

  &:hover {
    transform: unset;
    padding: unset;
    text-shadow: none;
    filter: unset;
    background-color: #ffffff42;
    border-color: #ffffff;
    transition: background-color 0s;
  }
}

.Title_button_text {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 32px 48px;

  font-size: 200%;
  font-family: '资源圆体', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  letter-spacing: 0.16em;
  line-height: 1.2;

  transform-origin: left center;
  transition: unset;
  color: #ffffff;

  white-space: nowrap;
}

.Title_button_text_outer {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  
  white-space: nowrap;

  background-image: none;
  background-clip: border-box;
  -webkit-background-clip: border-box;

  color: #ffffff;
  -webkit-text-fill-color: unset;
  z-index: 2;
  text-shadow: unset;
}

.Title_button_text_inner {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  color: inherit;
  -webkit-text-stroke: #000000 10px;
  z-index: 1;
}

.Title_backup_background {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 13;
  background: linear-gradient(135deg, #fdfbfb 0%, #dcddde 100%);
}

.Title_button_disabled {
  cursor: not-allowed !important;
  opacity: 0.45;
  background-color: transparent !important;
  border-color: transparent !important;
}
```

:::

修改完成后，保存文件，并重新加载游戏，您就可以看到标题页的样式已经发生了变化，现在所有按钮都在底部居中显示。

## 基础样式 {#base-style}

即使用户没有使用自定义模板，WebGAL 也内置了一套基础的 UI 样式，以保证游戏界面在没有自定义样式的情况下也能正常显示。

然而这可能会导致一些问题，在 4.6.1 版本之前，基础样式会与用户的自定义样式共存，如：

``` html
<!-- 假设 Title_button_base 是基础类 -->
<!-- Title_button 是用户自定义类 -->
<!-- 但这并非它们的实际名称，仅作示例 -->
<div class="Title_button_base Title_button">
  <!-- ... -->
</div>
<!-- ... -->
```

一个很常见的问题是，用户经常会疑惑为什么按钮会有斜切的效果，而他们的自定义样式中并没有定义这个效果。实际上这是基础样式中的一个设计，用户可以通过覆盖相关的 CSS 属性来去掉这个效果，例如：

``` scss
.Title_button {
  /* 覆盖基础样式中的斜切效果 */
  transform: none;
}
```

您可以在模板参考的文档中，找到每个界面的基础样式定义文件的链接。

从 4.6.1 版本开始，WebGAL 引入了一个新的机制，允许用户完全覆盖基础样式，避免了上述问题的发生。现在，如果用户定义了一个 CSS 类，例如 `Title_button`，WebGAL 将不会再应用基础样式中的 `Title_button_base` 类，从而避免了这类问题。

``` html
<!-- 一旦用户定义了 Title_button 类 -->
<!-- WebGAL 将不会再应用基础样式中的 Title_button_base 类 -->
<div class="Title_button">
  <!-- ... -->
</div>
<!-- ... -->
```

但这也意味着完全移除了基础样式兜底的能力，先前版本制作的模板可能会因为依赖了基础样式而出现样式缺失的问题。因此，对于在之前版本制作的模板，建议在升级到 4.6.1 版本后，检查并适当调整模板中的样式定义，以确保它们能够正确显示。

## 格式 {#format}

您可以像平常写 CSS 一样编写自定义样式。但是有一些特殊的要求和建议，以确保您的样式能够正确应用并且与 WebGAL 的机制兼容：

### 内嵌而非展平 {#nested-not-flattened}

例如对于像 `:hover` 这样的伪类，您需要将它们写在对应的 CSS 类下，而不是直接写在全局作用域中：

``` scss
.Title_button {
  /* ... */

  &:hover {
    /* 正确的写法 */
  }
}

.Title_button:hover {
  /* 错误的写法 */
}
```

其他比如选择器也同样如此。

### 使用 CSS 的写法 {#css-syntax}

虽然文件的后缀是 `.scss`，但实际上 WebGAL 并不支持 Sass 特性，比如 $变量、@mixin、@include 等等。

## 动态切换 {#dynamic-switching}

WebGAL 允许用户在游戏运行时动态切换不同的模板样式。请参考[applyStyle](../webgal-script/api.md#applystyle)命令的文档。

``` scss
.outer {
  /* 其他属性 */
  color: #ffffff;
}

.outer_orange {
  /* 其他属性与 .outer 相同 */
  color: #ff8800; // 仅 color 属性不同
}
```

``` webgal
角色A: 这句话是原色。
applyStyle: outer->outer_orange;
角色A: 这句话是橙色。
applyStyle: outer->outer;
角色A: 这句话是原色。
```
