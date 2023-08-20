# Dialogue

**The way to write scripts is very simple and almost identical to natural language.**

## Basic character dialogue

First, use Notepad, VS Code, Sublime Text and other text editors to open start.txt in the scene folder under the game resource directory, and then you can start writing your first line of dialogue.

The method of writing character dialogue is very simple. You just need to enter:

**Note that the colons and semicolons for each line of dialogue should be English characters!**

``` ws
Character: Dialogue; 
```

Example:

``` ws
Yukino: Please have some tea;
Yui: Oh, thank you;
Komachi: Thank you, Sister Yukino!;
Isshiki: Thank you, senpai.
```

After each dialogue/script, use a semicolon as the ending. (If you don't use a semicolon sometimes, it might still work, but the author suggests adding a semicolon to prevent bugs).

## Continuous dialogue

If you don't change the character name in multiple lines of dialogue, you can use continuous dialogue and omit the character name, then use it again when needed:

``` ws
Yukino: You're here early;
; // At this point, the character for the dialogue is still "Yukino".
Sorry, have you been waiting long?;
Yui: I just got here;
```

## Narration

If you want to create narration dialogue without a character name, leave it blank before the colon (but keep the colon):

``` ws
:This is a line of narration;
```

## Black screen text display

In many games, some text will be displayed in black screens, used to introduce themes or show characters' psychological activities. You can use the intro command to play a monologue:

``` ws
intro:Memories don't need a suitable script,|After all, once spoken,|it all becomes empty words.;
```

The monologue is separated by separators (|), which means that each | represents a new line. In actual performance, the above text will become:

``` ws
Memories don't need a suitable script,
After all, once spoken,
it all becomes empty words.
```

## Hide text box

Sometimes, for some special performance effects, you may want to temporarily hide the text box. So you can use the following instructions:

``` ws
setTextbox:hide;  
```

to close the text box. When the value of the `setTextbox` instruction is `hide`, the text box will be closed and the user will not be able to open it in any way. If you want to redisplay the text box, call this command again and enter any value except `hide`.

``` ws
setTextbox:on; // Can be any value except hide.
```

## End game and return to title

If you want to end the game after the plot ends and return to the title, please use:

``` ws
end;
```

## Movie mode (test function)

Use `filmMode:enable;` to enable movie mode.
Use `filmMode:none;` to disable movie mode.
