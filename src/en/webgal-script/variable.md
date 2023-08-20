# Variable

## Use variables

::: warning
Do not use the variable system lightly until you have figured out how to use scene jumping and branch jumping, which can be confusing!
::::

Set variable:

``` ws
setVar:a=1; // Can set numbers
setVar:a=true // Can set boolean values 
setVar:a=Character name // Can set strings
```

If you have defined other variables before, you can also use them when setting variables.

``` ws
setVar:a=1;
setVar:b=a+1;
```

## Conditional execution

Add the parameter `-when=(condition)` after the statement to determine whether to execute the current statement based on the condition.

For example:

``` ws
setVar:a=1;
; // Jump to scene 1 when a > 1
changeScene:1.txt -when=a>1;
; // Only jump when a equals 1, note that the equality operator is ==
changeScene:2.txt -when=a==1;
; // If a < 1, the above statement is not executed, so naturally this one is executed
changeScene:3.txt;
```

::: tip
`=` is the assignment symbol and cannot be used for conditional judgment. `==` is the equality operator.
:::

Any statement can be added with the `-when` parameter to control whether to execute it. By combining the `-when` parameter and `jumpLabel` `callScene` `changeScene`, you can achieve conditional flow control.
