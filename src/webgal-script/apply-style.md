# 使用 applyStyle 动态切换界面样式

`applyStyle` 可以在游戏运行时，把模板中的一个 CSS 类替换为另一个类。它适合制作角色专属文本框、危险选项、高亮按钮和临时主题等效果。

## 准备样式类

先打开游戏目录中的模板样式文件。例如，要改变选项样式，可以编辑：

``` text
game/template/UI/Choose/choose.scss
```

保留模板原有的 `.Choose_item`，再添加一个包含完整样式的变体：

``` scss
.Choose_item_danger {
  color: #ffffff;
  background: #b42318;
  border: 2px solid #f97066;
}
```

::: warning
新类应包含替换后需要的完整样式。`applyStyle` 会替换类名，不会自动继承原类的规则。
:::

## 在脚本中切换

类名之间使用 `->`：左边始终是模板原始类名，右边是要应用的变体类名。

``` webgal
角色A:接下来是危险选项。;
applyStyle:Choose_item->Choose_item_danger;
choose:继续:continue|离开:leave;
```

要恢复原样式，把原始类名同时写在两侧：

``` webgal
applyStyle:Choose_item->Choose_item;
```

## 同时替换多个类

多个替换之间使用英文逗号分隔：

``` webgal
applyStyle:TextBox_main->TextBox_main_dark,TextBox_ShowName_Background->TextBox_ShowName_Background_red;
```

恢复时仍以原始类名为左侧：

``` webgal
applyStyle:TextBox_main->TextBox_main,TextBox_ShowName_Background->TextBox_ShowName_Background;
```

不要把当前变体写在左侧。下面第二句不能正确切换：

``` webgal
applyStyle:Choose_item->Choose_item_danger;
applyStyle:Choose_item_danger->Choose_item_blue; // 错误
```

## 查找可替换类名

常用类名可以在 [applyStyle 命令参考](../script-reference/commands/applyStyle.md)中查询。其他组件的类名以当前游戏模板的 SCSS 文件为准；自定义模板可能使用不同的类名。
