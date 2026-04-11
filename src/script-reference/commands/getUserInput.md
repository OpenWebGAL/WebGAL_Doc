# getUserInput

获取用户输入。

## 语句内容

填写变量名称，用户输入的值将保存在该变量中。

```webgal
角色B:真的是太感谢您了，能告诉我您的名字吗？;
getUserInput:player_name -title=您的名字 -buttonText=确认 -defaultValue=Bob;
角色B:{player_name}，我记住了。;
```

## 参数

### title
- 字符串

设置输入框的标题。

```webgal
getUserInput:player_name -title=您的名字;
```

### buttonText
- 字符串

设置确认按钮文本。

```webgal
getUserInput:player_name -buttonText=确认;
```

### defaultValue
- 字符串

设置输入框的默认值。

```webgal
getUserInput:player_name -defaultValue=Bob;
```

### rule
- 字符串

设置输入验证的正则表达式规则。输入的内容将以此正则进行校验。

```webgal
getUserInput:player_name -rule=^.{1,2}$;
```

### ruleFlag
- 字符串

设置正则表达式的标识，如 `g`（全局匹配）、`i`（不区分大小写）等。

具体参数详情请查看 [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags)。

```webgal
getUserInput:player_name -rule=^.{1,2}$ -ruleFlag=g;
```

### ruleText
- 字符串

设置校验不通过时弹出的错误弹窗的提示文本，可使用 `$0` 获取用户输入的内容。

```webgal
getUserInput:player_name -rule=^.{1,2}$ -ruleText=$0不符合1-2个字符;
```

### ruleButtonText
- 字符串

设置校验不通过时弹出的错误弹窗的按钮文本。

默认为`OK`

```webgal
getUserInput:player_name -rule=^.{1,2}$ -ruleText=$0不符合1-2个字符 -ruleButtonText=确定;
```
