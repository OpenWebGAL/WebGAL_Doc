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
