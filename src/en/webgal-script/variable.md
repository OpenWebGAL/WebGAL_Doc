# Variables

::: warning
Don't use the variable system until you figure out how to use scene jumping and branch jumping, it will be confusing!
:::

## Using Variables

To set a variable:

``` ws
setVar:a=1; // You can set a number
setVar:a=true // You can set a boolean
setVar:a=Character Name // You can set a string
```

To set a random number, use `random()`

```ws
setVar:a=random();
```

The random number is between 0 and 1, if you want to specify a range, you need to do some math. For example, if you want a random number between 5 and 10, you need to do:
```ws
setVar:a=5+a*5;
```

You can also use previously defined variables when setting variables.

``` ws
setVar:a=1;
setVar:b=a+1;
```

## Conditional Execution

You can add a `-when=(condition)` parameter after a statement to conditionally execute the current statement.

For example:

``` ws
setVar:a=1;
; // Jump to scene 1 when a is greater than 1
changeScene:1.txt -when=a>1;
; // Jump only when a is 1, note that the equality operator is ==
changeScene:2.txt -when=a==1;
; // If a is less than 1, the above statements won't execute, so this one will
changeScene:3.txt;

```

::: tip
`=` is the assignment operator, it cannot be used in conditional statements, `==` is the equality operator.
:::

Any statement can be conditionally executed with the `-when` parameter. By combining the `-when` parameter with `jumpLabel` `callScene` `changeScene`, you can achieve conditional flow control.

## Getting User Input

Use the `getUserInput` statement to get user input, for example:

```
getUserInput:name -title=What's your name? -buttonText=OK; Store the user input in the variable name
```

Where `title` is the prompt text, `buttonText` is the text on the OK button

## Variable Interpolation

You can use the `{}` syntax in statements to interpolate variables, passing a variable into the statement, for example:

```
setVar:name=WebGAL;
setVar:engine=WebGAL;
{name}:Welcome to {engine}! This is a brand new visual novel engine for web.;
```

## Persistent Variables (Global Variables)

Normal variables in WebGAL are存档 dependent, that is, any variable only exists in the current game scene, and only存档 can save it and read it back.

In order to solve the problem that the author may want to set multiple weeks, a persistent (global) variable is provided. Once set, it will take effect in the entire game, unless the user clears all data.

Adding the `-global` parameter can set persistent (global) variables

```ws
setVar:a=1 -global;
```

This sets a variable that does not change with存档 reading.

Example of use:

```ws
jumpLabel:turn-2 -when=a>0;
setVar:a=1 -global;
First playthrough;
changeScene:First playthrough plot.txt;
label:turn-2;
Second playthrough;
changeScene:Second playthrough plot.txt;
```

## Advanced Usage（`>=4.5.4`）
Use built-in variables to perform more advanced operations, such as making changes to configuration variables, executing logic based on specified conditions, and so on.

WebGal currently has two built-in variable domains: `stage` and `userData`.

::: tip
`stage` is a **runtime built-in variable** and `userData` is an **archive built-in variable**.

The properties for `stage` can be found in the `state` TAB under the WebGal editor, and `userData` can be found in `indexedDB` in the DevTools.
:::

You can access them using `$`, for example to get the value of BGM:

```ws
setVar:a=($stage.bgm.volume);
WebGAL:The current BGM volume is{a};
```

Of course, you can also use it directly in a conversation:

```ws
WebGAL:The current BGM volume is{$stage.bgm.volume};
```

::: warning
`Parentheses` are needed to get a **single-valued variable**, but not to do math.
:::

We can also access the global variables in `config.txt` :

```ws
setVar:title=(Game_name);
WebGAL:The current title of the game is{title};
```

Changes are no exception, changing the game title to the new game title and setVar variable names to the variable names we want to change

Adding the `global` flag indicates that we are modifying a configuration variable:

```ws
setVar:Game_name=('New Game Title') -global;
WebGAL:The current title of the game is{Game_name};
```

::: warning
Without `global`, the configuration variable is copied to a local variable. Be careful when to use the `global` parameter.
:::

::: tip
The original configuration variables `Title_img`、`Title_bgm`、`Game_name`、`Game_key`.
To do this, use `Clear all data` in the game options.
:::

Of course, you can also create a custom configuration variable in `config.txt`, such as a version number:

```text
Game_name:欢迎使用WebGAL！;
Game_key:f60ad5725c1588;
Title_img:WebGAL_New_Enter_Image.png;
Title_bgm:s_Title.mp3;
Textbox_theme:imss;
; Add version variable
version:1;
```

Then we can access it, modify it, and so on in a script:

```ws
setVar:v=(version);
WebGAL:The current version number is{v};
setVar:version=version*2 -global;
WebGAL:The current modified version number is{version};
```

::: warning
`config.txt` hasn't escaped any special symbols yet.
:::
