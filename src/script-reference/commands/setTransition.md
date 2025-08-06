# setTransition

设置舞台对象的入场或出场动画。

## 语句内容

不需要填写任何语句内容。
详情请见[设置进出场效果](../../webgal-script/animation.md#设置进出场效果)。

```webgal
changeFigure:1/open_eyes.png -id=aaa -next;
setTransition: -target=aaa -enter=enter-from-left;
角色A: 你好！
setTransition: -target=aaa -exit=exit-to-right;
changeFigure:none -id=aaa -next;
角色A: 再见！
```

## 参数

<!-- @include: ../arguments/target.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa -next;
setTransition: -target=aaa -enter=enter-from-left;
角色A: 你好！
```

<!-- @include: ../arguments/enter.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa -next;
setTransition: -target=aaa -enter=enter-from-left;
角色A: 你好！
```

<!-- @include: ../arguments/exit.md -->
```webgal
changeFigure:1/open_eyes.png -id=aaa -next;
角色A: 你好！
setTransition: -target=aaa -exit=exit-to-right;
changeFigure:none -id=aaa -next;
角色A: 再见！
```
