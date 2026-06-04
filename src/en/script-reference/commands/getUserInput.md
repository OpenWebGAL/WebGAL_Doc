# getUserInput

Gets user input.

## Statement Content

Sets the variable name. The value entered by the user will be saved to this variable.

```webgal
CharacterB:Thank you so much. Could you tell me your name?;
getUserInput:player_name -title=Your Name -buttonText=Confirm -defaultValue=Bob;
CharacterB:{player_name}, I'll remember that.;
```

After the player confirms input, the engine writes the variable, closes the input box, and continues to the next statement. If validation is set and fails, the input box remains open and the variable is not written.

## Parameters

### title
- String

Sets the title of the input box.

```webgal
getUserInput:player_name -title=Your Name;
```

### buttonText
- String

Sets the confirmation button text.

```webgal
getUserInput:player_name -buttonText=Confirm;
```

### defaultValue
- String

Sets the default value of the input box.

```webgal
getUserInput:player_name -defaultValue=Bob;
```

If the player confirms without entering anything, the engine writes `defaultValue` to the variable. If `defaultValue` is not set, a single space is written.

### rule
- String

Sets the regular expression rule used to validate the input.

```webgal
getUserInput:player_name -rule=^.{1,2}$;
```

### ruleFlag
- String

Sets regular expression flags, such as `g` for global matching and `i` for case-insensitive matching.

For details, see [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#flags).

```webgal
getUserInput:player_name -rule=^.{1,2}$ -ruleFlag=g;
```

### ruleText
- String

Sets the text shown in the error popup when validation fails. You can use `$0` to get the user's input.

```webgal
getUserInput:player_name -rule=^.{1,2}$ -ruleText=$0 must be 1-2 characters;
```

### ruleButtonText
- String

Sets the button text of the error popup when validation fails.

Default: `OK`

```webgal
getUserInput:player_name -rule=^.{1,2}$ -ruleText=$0 must be 1-2 characters -ruleButtonText=OK;
```
