# Special Scripts

## Comments

The WebGAL script will only parse the content before the semicolon on each line, so the content after the semicolon will be treated as comments.

```
WebGAL:Hello!; // The content after the semicolon will be treated as comments
;You can directly input a semicolon and then write a single line comment
```

## `-next` parameter

You can add the parameter `-next` after any statement to jump to the next statement immediately after executing this statement. This is very useful when you need to perform multiple steps at the same time.

Example:

```
changeBg:testBG03.jpg -next; // Will immediately execute the next statement
```

## `none` keyword

When setting **resources** such as sprites, bgm, backgrounds, etc., set it to the `none` keyword to close that object.
