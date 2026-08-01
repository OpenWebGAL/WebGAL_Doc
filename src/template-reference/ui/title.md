# 标题页 {#title}

标题页，也称为封面页，主菜单页，主页。

基础样式请查看[源码](https://github.com/OpenWebGAL/WebGAL/blob/main/packages/webgal/src/UI/Title/title.module.scss)

## 结构 {#structure}

``` tsx
const renderButtonText = (text: string) => {
  if (isEqualOrNewer(WEBGAL.version, "4.5.19")) {
    return (
      <div class="Title_button_text">
        {text}
        <span class="Title_button_text_outer">{text}</span>
        <span class="Title_button_text_inner">{text}</span>
      </div>
    );
  } else {
    return <div class="Title_button_text">{text}</div>;
  }
};

return (
  <>
    <div class="Title_backup_background" />
    {/* 您通常可以无视下面这行的元素，因为它只是用来触发开屏画面的 */}
    {/* <div class="title__enter-game-target" /> */}
    <div
      class="Title_main"
      style={{
        backgroundImage: getBackgroundImage(),
        backgroundSize: "cover",
      }}
    >
      <div class="Title_buttonList">
        <div class="Title_button">{renderButtonText("开始游戏")}</div>
        <div
          class={`Title_button ${isContinueDisabled() ? "Title_button_disabled" : ""}`}
        >
          {renderButtonText("继续游戏")}
        </div>
        <div class="Title_button">{renderButtonText("游戏选项")}</div>
        <div class="Title_button">{renderButtonText("存档读档")}</div>
        {showExtraButton() && (
          <div
            class={`Title_button ${isExtraDisabled() ? "Title_button_disabled" : ""}`}
          >
            {renderButtonText("鉴赏模式")}
          </div>
        )}
        <div class="Title_button">{renderButtonText("退出游戏")}</div>
      </div>
    </div>
  </>
);
```

## 样式 {#style}

### Title_backup_background

用于兜底的背景样式。通常会被 `Title_main` 的背景图覆盖。

### Title_main

标题页的主容器样式。

### Title_buttonList

标题页的按钮列表容器样式。

### Title_button

标题页的按钮样式。

### Title_button_disabled

标题页的禁用按钮样式。

### Title_button_text

标题页按钮文本的样式。从 4.5.19 版本开始，由于标题页按钮文本增加了外层和内层的文本元素，此样式仅作为它们的外层容器样式。

### Title_button_text_outer

标题页按钮文本的外层文本元素样式。4.5.19 版本新增。

### Title_button_text_inner

标题页按钮文本的内层文本元素样式。4.5.19 版本新增。
