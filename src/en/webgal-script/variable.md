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