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
