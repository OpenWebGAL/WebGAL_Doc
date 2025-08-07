# comment

单行注释。`comment` 并非注释命令保留字，以英文分号 `;` 开头的行被视为单行注释。

## 语句内容

`;` 后面可以跟随注释内容，该命令本身不执行任何操作。
详情请见[注释](../../webgal-script/base.md#注释)。

```webgal
; 这是一个注释
```

任何命令语句的第一个 `;` (`\;` 除外) 后的内容被视为行内注释。行内注释不会改变该行的命令类型。

```webgal
changeFigure:character_a/normal.png -id=aaa;
setTransform:{"position":{"x":-500}} -target=aaa -duration=500; 给立绘 B 让位置
changeFigure:character_b/normal.png -id=bbb -transform={"position":{"x":500}};
```
