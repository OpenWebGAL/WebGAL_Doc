# jumpLabel

Jumps to the specified label.
See [Label Jump](../../webgal-script/scenes.md#label-jump) for details.

## Statement Content

Sets the target label name to jump to.

```webgal
label:think;
;
CharacterA:I remember she likes...;
choose:Teddy bear:wrong|Rabbit plush:correct;
;
label:wrong;
CharacterA:That doesn't seem right. Think again.;
jumpLabel:think;
;
label:correct;
CharacterA:Right, it was the rabbit plush.;
```

### Conditional Jump

`jumpLabel` can be used with the common `-when` parameter. If the condition is not met, this statement is skipped and the story continues with the next statement.

```webgal
setVar:score=2;
jumpLabel:scoreHigh -when=score>1;
CharacterA:You see this when the score is not enough.;
jumpLabel:scoreEnd;
;
label:scoreHigh;
CharacterA:Score is greater than 1, jump succeeded.;
;
label:scoreEnd;
```

See [(global)](global.md#when) for condition expression syntax.
