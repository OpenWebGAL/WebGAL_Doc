# callScene

调用场景。

## 语句内容

临时加载新场景的内容，新场景结束后，继续执行原场景。

::: warning
调用场景不会清空当前场景（如立绘、背景），若没有主动关闭，它们将被带到新场景中。
:::

``` webgal
角色A:我记得在商店的时候......;
callScene:chapter_01/shop.txt;
角色A:原来是这样，我知道是怎么回事了;
```

被调用的场景执行到末尾时自动返回调用位置，也可以用 [`return`](./return) 提前返回。

在被调用的场景里使用 `changeScene` 或 `choose`，不会改变「结束后回到哪里」——它们只是把当前正在读的文本换掉，返回地址和传入的参数都不受影响。

::: tip
场景调用最多嵌套 64 层，超出后调用不会执行，并在控制台报错，用于防止 `callScene` 无限递归。
:::

## 参数

### 自定义参数

写成 `-参数名=值` 的参数会成为被调用场景的[局部变量](../../webgal-script/variable.md#局部变量)，同一个场景就可以用不同的参数复用。

```webgal
; start.txt
callScene:battle.txt -enemy=史莱姆 -hp=100;

; battle.txt
旁白:遭遇了 {enemy}，我方剩余血量 {hp}。;
```

参数值的类型规则和其他参数一致：`100` 是数字，`true` / `false` 是布尔值，其余按字符串处理。要把调用方的某个变量传进去，用变量插值：

```webgal
callScene:battle.txt -hp={player_hp};
```

::: warning
参数名不要使用 `when`、`next` 这类[通用参数](./global)的名字，也不要使用 `writeReturnTo`。这些名字会先被引擎自己消费掉，不会得到你期望的效果。编辑器会对这种写法给出警告。
:::

### writeReturnTo
- 字符串

指定被调用场景的[返回值](./return)写回调用方的哪个变量，写入方式与不带参数的 `setVar` 相同。

```webgal
; start.txt
callScene:battle.txt -enemy=史莱姆 -writeReturnTo=result;
旁白:战斗结果是 {result}。;

; battle.txt
旁白:遭遇了 {enemy}。;
return:胜利;
```

被调用的场景没有执行 `return` 而自然结束时，写回的是空字符串。
