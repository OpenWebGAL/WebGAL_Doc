# Basic

First of all, when the program starts, it will run from the **startup script** `start.txt`. Please do not rename or delete it.

The following tutorials will teach you how to use WebGAL script.

## Comments

WebGAL script will only parse the content before the semicolon in each line, so the content after the semicolon will be regarded as a comment.

``` webgal
WebGAL:Hello!; The content after semicolon will be regarded as a comment
; You can directly input a semicolon, then write a single-line comment
```

## Multi-line Statements

When a statement has too many arguments, you can write it across multiple lines for readability.

**A continuation line must start with whitespace, and its first non-whitespace character must be `-` or `|`.** Such a line is appended to the end of the previous statement, and the whole thing is still one statement.

``` webgal
changeFigure:stand.webp
  -left
  -id=fig1
  -next;
```

The above is equivalent to:

``` webgal
changeFigure:stand.webp -left -id=fig1 -next;
```

The text segments of `intro` can be continued with `|` in the same way:

``` webgal
intro:First segment
  |Second segment
  |Third segment -hold;
```

The graphical editor automatically emits this format when a statement gets too long; short statements stay on a single line.

### Rules to Keep in Mind

- **The semicolon and the inline comment may only appear on the last line.** Everything after a semicolon is treated as a comment, so putting it on the first line would swallow the continuation lines.
- **An empty line terminates a multi-line statement.** Do not leave blank lines in the middle of one statement.
- **Statements containing `-concat` are never continued automatically**, because `-concat` itself means "join this dialogue onto the previous one" and the two semantics would conflict.
- **A trailing backslash `\` forces a continuation**, which lets you bypass the restrictions above:

``` webgal
intro:First segment\
|Second segment\
|Third segment -concat;
```

- **Compatibility note:** a dialogue line starting with "space + `-`" will be mistaken for a continuation line. If you really want a dialogue to start with a dash, remove the leading space or put another character in front of it.

## Escaping Special Characters

WebGAL scripts use the English colon `:` to separate commands and content, the English semicolon `;` to end statements and start inline comments, and some commands also use symbols such as `|`, `,`, and `.` as part of their content syntax. If you want these symbols to be displayed as plain text, add a backslash `\` before the symbol.

Common symbols that need escaping:

| Original Symbol | Writing |
| :--- | :--- |
| `:` | `\:` |
| `,` | `\,` |
| `.` | `\.` |
| `;` | `\;` |
| `|` | `\|` |

``` webgal
intro:I will display these symbols\: \:\,\.\; just look -hold;
WebGAL:I will display these symbols\: \:\,\.\; just look;
choose:I will display these symbols\: \:\,\.\; just look:nextLabel;
```

When writing CSS in text extension syntax, semicolons also need to be written as `\;`; otherwise, they will be treated as the start of a WebGAL statement comment.

## `none` Keyword

When setting **resources** such as character sprites, BGM, and backgrounds, you can disable the element by setting it to `none`.

## `-next` Parameter

You can add the parameter `-next` after any statement. This causes the next statement to execute immediately after the current statement. This is particularly helpful when you need to perform multiple operations at the same time.

Example:

``` webgal
changeBg:testBG03.jpg -next; // Will execute the next statement immediately
```

## `-notend` and `-concat` Parameters

Sometimes, you may want to add 演出効果, such as switching expressions, when a certain stage of a dialogue is executed.
At this time, you can use the `-notend` `-concat` parameters to insert any statement in the dialogue.

`-concat` means that this dialogue is connected after the previous dialogue

`-notend` means that this dialogue is not over, and there may be 演出 or dialogue connected later.

Example: switch character sprites in the middle of a dialogue.

``` webgal
WebGAL:Test statement insert 演出！Switch 立ち絵 immediately...... -notend;
changeFigure:k1.png -next;
Switch 立ち絵！Switch expression immediately...... -notend -concat;
changeFigure:k2.png -next;
Switch expression！ -concat;
```

You can also use only the `-concat` parameter to connect the next sentence after the previous dialogue, because the `-notend` parameter will move to the next sentence after the dialogue fades in.

``` webgal
This is the first sentence...;
This sentence will only appear after the user clicks the mouse -concat;
```
