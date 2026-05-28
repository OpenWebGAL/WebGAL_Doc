# choose

显示选项。

## 语句内容

填写多个选项。每个选项包括 __选项文本__ 和 __跳转目标__ 两个部分，用英文冒号 `:` 分割；每个选项之间用 `|` 分隔。
详情请见[分支选择](../../webgal-script/scenes.md#分支选择)。

目前可以跳转至
- 场景文件
- 本场景的某个标签

```webgal
角色A:今天去哪儿呢？;
choose:去商店:chapter_01/shop.txt|某人家里:chapter_01/house_b.txt|待在家里:home;
;
label:home;
角色A:还是待在家里吧。;
```

在玩家选择一个选项前，`choose` 会暂停后续剧情和自动播放。玩家点击选项后，选项会消失，剧情会跳转到对应的场景文件或标签。

### 条件展示和条件启用

每个选项可以在选项文本前添加条件前缀：

- `(条件表达式)`：控制选项是否显示。
- `[条件表达式]`：控制选项是否可点击。
- `->`：分隔条件前缀和实际选项内容。

```webgal
setVar:hasTicket=true;
setVar:doorPower=1;
choose:(hasTicket==true)->出示门票:ticket|(doorPower>0)[doorPower>1]->强行开门:force|回家:home;
;
label:ticket;
角色A:有票就能进去了。;
jumpLabel:end;
;
label:force;
角色A:力量足够时才能选择这里。;
jumpLabel:end;
;
label:home;
角色A:还是先回家吧。;
;
label:end;
```

在上面的例子中：

- `出示门票` 只有在 `hasTicket==true` 时显示。
- `强行开门` 只有在 `doorPower>0` 时显示，且只有在 `doorPower>1` 时可点击。
- 没有条件前缀的选项始终显示且可点击。

条件表达式的写法与通用参数 `-when` 相同，详情请见 [(global)](global.md#when)。

::: warning
`()` 和 `[]` 必须写在 `->` 左侧。若选项文本中需要显示冒号、分号或竖线等特殊符号，请使用转义写法，详情请见[特殊符号转义](../../webgal-script/base.md#特殊符号转义)。
:::
