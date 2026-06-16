# 选择 {#choose}

`choose` 命令调用的选择按钮列表。

基础样式请查看[源码](https://github.com/OpenWebGAL/WebGAL/blob/main/packages/webgal/src/Core/gameScripts/choose/choose.module.scss)

## 结构 {#structure}

```tsx
return (
  <div class="Choose_Main">
    {getChoices().map((choice) => (
      <div class="Choose_item_outer">
        <div
          class={choice.disabled ? "Choose_item_disabled" : "Choose_item"}
          style={{fontFamily: getFontFamily()}}
        >
          {choice.text}
        </div>
      </div>
    ))}
  </div>
);
```

## 样式 {#style}

### Choose_Main

选择按钮列表的容器样式。

### Choose_item_outer

选择按钮的外层元素样式。

### Choose_item

选择按钮的内层元素样式。

### Choose_item_disabled

选择按钮被禁用时的样式。
