# 文本框 {#textbox}

用于显示角色名称和对话文本的对话框。

基础样式请查看[源码](https://github.com/OpenWebGAL/WebGAL/blob/main/packages/webgal/src/Stage/TextBox/textbox.module.scss)

## 结构 {#structure}

```tsx
// 小头像组件
const renderAvatar = () => {
  return (
    <div
      id="miniAvatar"
      class="miniAvatarContainer"
    >
      {hasAvatar() && <img
        src={getAvatarSrc()}
        class="miniAvatarImg"
        alt="miniAvatar"
      />}
    </div>
  );
};

// 字符元素基础组件
const getCharElementBase = (charInfo: CharInfo) => {
  if (charInfo.rubyText) {
    // 有 ruby 时
    return (
      // 暂时无法用模板控制 __enhanced_text 样式
      <span className="__enhanced_text">
        <ruby>
          {charInfo.text}
          <rt>{charInfo.rubyText}</rt>
        </ruby>
      </span>
    );
  } else if (charInfo.styleText || charInfo.styleAllText) {
    // 没有 ruby 但有其他拓展属性时
    return (
      // 暂时无法用模板控制 __enhanced_text 样式
      <span className="__enhanced_text">
        {charInfo.text}
      </span>
    );
  } else {
    return charInfo.text;
  }
};

// 字符元素组件
const getCharElement = (
  charInfo: CharInfo,
  textClass: string,
  textStyle: React.CSSProperties,
  outerClass: string,
  innerClass: string
) => {
  const baseElement = getCharElementBase(charInfo);

  const styleCss = css(charInfo.styleText); // 文本拓展语法的 style
  const styleAllCss = css(charInfo.styleAllText); // 文本拓展语法的 style-alltext

  return (
    <span
      className={textClass}
      style={textStyle}
    >
      {/* 暂时无法用模板控制 zhanwei 样式 */}
      <span className={`zhanwei ${styleAllCss}`}>
        { baseElement }
        <span className={`${outerClass} ${styleCss} ${styleAllCss}`}>{ baseElement }</span>
        {showStroke() && <span className={`${innerClass} ${styleAllCss}`}>{ baseElement }</span>}
      </span>
    </span>
  );
}

// 行元素组件数组
const getLineElements =(
  charInfo: CharInfo[][],
  textClass: string,
  textStyle: React.CSSProperties,
  outerClass: string,
  innerClass: string
) => {
  return charInfo.map((line) => (
    <div
      style={{
        wordBreak: isSafari() || isFirefox() ? "break-all" : undefined,
        display: isSafari() ? "flex" : undefined,
        flexWrap: isSafari() ? "wrap" : undefined,
      }}
    >
      {line.map((char) => (getCharElement(
        char,
        textClass,
        textStyle,
        outerClass,
        innerClass
      )))}
    </div>
  ));
}


// 名称组件
const renderName = () => {
  const nameElement = getLineElements(
    getNameInfo(),
    "",
    { position: "relative" },
    "outerName",
    "innerName"
  );

  return <>
    {/* 名字背景组件 */}
    <div
      class="TextBox_showName TextBox_ShowName_Background"
      style={{
        opacity: getOpacity(),
        fontSize: "200%",
      }}
    >
      <span 
        style={{ opacity: 0 }}
      >
        {nameElement}
      </span>
    </div>
    {/* 名字主体组件 */}
    <div
      class="TextBox_showName"
      style={{fontSize: "200%"}}
    >
      <span>{nameElement}</span>
    </div>
  </>
};

// 获取文本行高的 CSS 样式
const getTextLineHeightCss = () => {
  const configLineHeight = WEBGAL.config.lineHeight;
  if (configLineHeight) {
    return { lineHeight: `${configLineHeight}em` };
  } else {
    if (WEBGAL.settings.textSize === "medium") {
      return { lineHeight: "2.2em" };
    } else {
      return { lineHeight: "2em" };
    }
  }
};

// 文本组件
const renderText = () => {
  const textElement = getLineElements(
    getTextInfo(),
    isTextAnimationFinished()
      ? `TextBox_textElement_Settled ${isRead() ? "readText" : ""}`
      : `TextBox_textElement_start ${isRead() ? "readText" : ""}`,
    { animationDelay: getTextAnimationDelay(), position: "relative" },
    `outer ${isRead() ? "readTextOuter" : ""}`,
    `inner ${isRead() ? "readTextInner" : ""}`
  );

  return <div
    class={`${getTextLineHeightCss()} text`}
    style={{
      fontSize: getTextSize(WEBGAL.settings.textSize),
      flexFlow: "column",
      overflow: "hidden",
      paddingLeft: "0.1em",
    }}
  >
    {textElement}
  </div>
};

return (
  // 模板暂时无法控制 TextBox_Container 样式
  <div class="TextBox_Container">
    {/* 文本框背景 */}
    <div
      class={`TextBox_main TextBox_Background ${hasAvatar() ? "" : "TextBox_main_miniavatarOff"}`}
      style={{ opacity: getOpacity() }}
    />
    {/* 文本框主体 */}
    <div
      id="textBoxMain"
      class={`TextBox_main ${hasAvatar() ? "" : "TextBox_main_miniavatarOff"}`}
      style={{ fontFamily: getFontFamily() }}
    >
      { renderAvatar() }
      { hasName() && renderName() }
      { renderText() }
    </div>
  </div>
);
```

## 样式 {#style}

### TextBox_main

文本框主体的样式。

### TextBox_Background

文本框背景的样式。

### TextBox_main_miniavatarOff

当没有小头像时，文本框主体的额外样式。

### miniAvatarContainer

小头像容器的样式。

### miniAvatarImg

小头像图片的样式。

### TextBox_showName

名字组件的主体样式。

### TextBox_ShowName_Background

名字组件的背景样式。

### outerName

名字组件外层文本的样式。

### innerName

名字组件内层文本的样式。

### text

文本组件的主体样式。

### TextBox_textElement_start

文本组件文本动画开始时的样式。

### TextBox_textElement_Settled

文本组件文本动画结束时的样式。

### readText

已读文本的额外样式。4.6.0 版本新增。

### outer

文本组件外层文本的样式。

### readTextOuter

已读文本外层的额外样式。4.6.0 版本新增。

### inner

文本组件内层文本的样式。

### readTextInner

已读文本内层的额外样式。4.6.0 版本新增。
