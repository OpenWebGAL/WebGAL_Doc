# return

从被 [`callScene`](./callScene) 调用的场景中返回。

## 语句内容

`return;` 立即结束当前被调用的场景，回到 `callScene` 的调用位置继续执行。

冒号后面的内容是返回值，求值规则与 `setVar` 完全相同，可以是数字、布尔值、字符串、表达式或变量。返回值写回调用方的哪个变量，由调用方的 `-writeReturnTo` 参数决定；调用方没有写 `-writeReturnTo` 时，返回值被丢弃。

```webgal
; start.txt
callScene:check_key.txt -writeReturnTo=has_key;
jumpLabel:open_door -when=has_key;
:门锁着，进不去。;

; check_key.txt
return:true -when=key_count>0;
return:false;
```

不写返回值时（`return;`）返回空字符串。

::: tip
被调用的场景执行到末尾时会自动返回，不必在结尾专门写一条 `return;`。`return` 用于在场景中途提前返回。
:::

::: warning
带参数时必须写冒号，否则整条语句会被当成对话。没有返回值又要加 `-when` 时，写成 `return: -when=...;`。
:::

::: warning
`return` 只对 `callScene` 调用进来的场景有效。在最外层场景使用 `return` 不会有任何效果。
:::
