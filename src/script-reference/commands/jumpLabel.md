# jumpLabel

跳转到指定标签。
详情请见[标签跳转](../../webgal-script/scenes.md#标签跳转)。

## 语句内容

填写要跳转的目标标签名称。

```webgal
label:think;
;
角色A:我记得她好像喜欢......;
choose:小熊玩偶:wrong|兔子玩偶:correct;
;
label:wrong;
角色A:好像不太对，再想想。;
jumpLabel:think;
;
label:correct;
角色A:对，是兔子玩偶。;
```

### 条件跳转

`jumpLabel` 可以配合通用参数 `-when` 使用。条件不满足时，本句会被跳过，剧情继续执行下一句。

```webgal
setVar:score=2;
jumpLabel:scoreHigh -when=score>1;
角色A:分数不足时会看到这里。;
jumpLabel:scoreEnd;
;
label:scoreHigh;
角色A:分数大于 1，跳转成功。;
;
label:scoreEnd;
```

条件表达式的写法请见 [(global)](global.md#when)。
