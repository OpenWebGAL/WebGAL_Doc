# (global)

global 并非一个命令。此页面介绍的是所有命令均可使用的通用参数。

## 参数

### next
- 布尔值

当值为 `true` 时，在执行当前语句的同时，同步执行接下来的语句，直至找到 `next` 为 `false` 的语句为止。

```webgal
label:loop;
;
changeBg:bg.png -next;
changeFigure:1/open_eyes.png -next -id=aaa;
角色名:背景，角色与这段话同时出现;
;
changeBg:none -next;
changeFigure:none -next -id=aaa;
角色名:背景，角色同时退场;
;
jumpLabel:loop;
```

部分命令自带 `next` 参数，如
- bgm
- pixiPerform
- pixiInit
- miniAvatar
- label
- setVar
- unlockCg
- unlockBgm
- filmMode
- playEffect
- setTransition
- applyStyle

部分命令与 `next` 参数不兼容，例如在 `wait` 命令加 `next` 参数, 等待不会生效。

### when
- 字符串

书写条件表达式，仅当条件为 `true` 时，执行当前语句。

```webgal
label:start;
;
setVar:coin=10;
角色名:我现在有 {coin} 块钱。
;
label:buy;
;
setVar:coin=coin-3 -when=coin>=3;
角色名:花 3 块钱买汽水，剩下 {coin} 块。
;
角色名:没钱买 3 块钱的汽水了，只剩下 {coin} 块。 -when=coin<3; 
jumpLabel:start -when=coin<3;
;
jumpLabel:buy;
```

### continue
- 布尔值

在这一句的演出结束后，自动执行下一句，即使玩家未开启自动播放。

```webgal
changeBg:bg.png -next;
changeFigure:1/open_eyes.png -transform={"position":{"x":-500}} -id=aaa -next;
changeFigure:2/open_eyes.png -transform={"position":{"x":500}} -id=bbb;
;
label:loop;
;
setTransform:{"position":{"x":500}} -target=aaa -continue;
setTransform:{"position":{"x":-500}} -target=bbb -continue;
setTransform:{"position":{"x":-500}} -target=aaa -continue;
setTransform:{"position":{"x":500}} -target=bbb -continue;
;
jumpLabel:loop;
```

部分命令自带 `continue` 参数，如
- wait
- intro (`hold` 与 `userForward` 均为 `false` 时)
- playVideo
