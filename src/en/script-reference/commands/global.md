# (global)

`global` is not a command. This page describes common parameters that can be used by all commands.

## Parameters

### next
- Boolean

When the value is `true`, the next statements are executed while the current statement is being executed, until a statement whose `next` value is `false` is found.

``` webgal
label:loop;
;
changeBg:bg.png -next;
changeFigure:1/open_eyes.png -next -id=aaa;
Character:Background, character, and this line appear together;
;
changeBg:none -next;
changeFigure:none -next -id=aaa;
Character:Background and character exit together;
;
jumpLabel:loop;
```

Some commands include the `next` parameter by default, such as:
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

Some commands are not compatible with `next`. For example, adding `next` to the `wait` command makes the wait ineffective.

### when
- String

Writes a conditional expression. The current statement is executed only when the condition is `true`.

``` webgal
label:start;
;
setVar:coin=10;
Character:I have {coin} coins now.
;
label:buy;
;
jumpLabel:not_enough_coin -when=coin<3;
;
setVar:coin=coin-3;
Character:Spent 3 coins on soda, {coin} coins left.;
jumpLabel:buy;
;
label:not_enough_coin;
Character:Not enough money for 3-coin soda, only {coin} coins left.;
jumpLabel:start;
```

### continue
- Boolean

After this statement's performance ends, automatically executes the next statement even if the player has not enabled autoplay.

``` webgal
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

Some commands include the `continue` parameter by default, such as:
- wait
- intro, when both `hold` and `userForward` are `false`
- playVideo
