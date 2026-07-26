# applyStyle

更换 UI 样式。

## 语句内容

首先需要在 UI 模板中新写一个样式，然后可以用 `applyStyle` 命令，将新样式替换原样式。
原样式名与新样式名之间用 `->` 连接，您可以同时替换多个样式，每个替换之间用英文逗号 `,` 分隔。
格式如:原样式名->新样式名,原样式名2->新样式名2,...

``` webgal
; 将角色名背景替换为红色，前提是在 UI 模板里写了新样式
applyStyle:TextBox_ShowName_Background->TextBox_ShowName_Background_Red;
角色名:这是一句话;
; 同时替换多个样式
applyStyle:TextBox_ShowName_Background->TextBox_ShowName_Background_Green,TextBox_main->TextBox_main_Black;
```

无论原样式被替换为什么新样式，替换样式依旧是原样式名在前;

``` webgal
applyStyle:原样式名->新样式名1;
applyStyle:新样式名1->新样式名2; 错误
applyStyle:原样式名->新样式名2;
```

## 常用可替换样式

选择枝使用以下样式名：

| 样式名 | 作用 |
| :--- | :--- |
| `Choose_Main` | 选项列表容器 |
| `Choose_item_outer` | 单个选项的外层容器 |
| `Choose_item` | 可点击选项 |
| `Choose_item_disabled` | 条件未满足、不可点击的选项 |

``` webgal
; 将可点击选项替换成模板中定义的 Choose_item_Red
applyStyle:Choose_item->Choose_item_Red;
```
