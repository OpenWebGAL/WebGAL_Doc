# setTextbox

显示和隐藏文本框的二合一命令。

## 语句内容

填写 `hide` 时，隐藏对话框，其他任何字符串均表示显示对话框。

::: info
用 `setTextbox` 隐藏对话框后，若后续没有其他 `setTextbox` 命令显示对话框，则对话框将一直保持隐藏状态。
:::

如果用 `setTextbox` 显示对话框，但是对话框仍然没有出现，可能是因为以下情况：
- 说话内容与角色名均为空
- 开启了 __隐藏所有 UI__

```webgal
角色A:带你去一个地方。;
setTextbox:hide;
changeBg:shop.png;
setTextbox:show;
角色A:我们到了。;
```
