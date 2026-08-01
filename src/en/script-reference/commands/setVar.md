# setVar

A two-in-one command for adding and modifying variables.

## Statement Content

The format is `setVar:variableName=value;` or `setVar:variableName=expression;`.
See [Variables](../../webgal-script/variable.md) for details.

Supported value types:
- Numbers, such as 15, 5e3, -5.5
- Booleans, `true` or `false`
- Strings

WebGAL attempts to convert unrecognized value types into strings.

``` webgal
setVar:char_b_fav=15; Character B initial favor
;
CharacterB:Hey, can you tell what's different about me today?;
choose:Ribbon:good_answer|You got fat:bad_answer; Jump to different label positions depending on the player's choice
;
label:good_answer;
Player:You changed your ribbon, right?;
setVar:char_b_fav=char_b_fav+10; Character B favor +10
CharacterB:Correct. So, do you think it looks good?;
Player:Yes, it suits you.;
jumpLabel:ask_go_out; Jump to ask_go_out and skip the bad_answer section below
;
label:bad_answer;
Player:You got fat.;
setVar:char_b_fav=char_b_fav-10; Character B favor -10
CharacterB:You're no fun at all...;
;
label:ask_go_out;
Player:By the way, are you free tonight?;
;
jumpLabel:not_enough_fav -when=char_b_fav<10; If favor is lower than 10, jump to not_enough_fav
;
CharacterB:I don't have plans tonight. Why?;
changeScene:chapter_01/part_02.txt;
;
label:not_enough_fav;
;
CharacterB:No. Sorry, I should go now.;
:Character B left.;
changeScene:chapter_02/part_01.txt;
;
```

## Parameters

### global
- Boolean

When the value is `true`, sets a persistent global variable. Persistent variables take effect throughout the whole game unless the user clears all data.
When the value is `false`, sets a normal variable. Normal variables only take effect in the current scene, are saved in save data, and restored when the save is loaded.

``` webgal
; Assume this is the beginning of a new game
; If this is already another playthrough, jump directly to the extra-playthrough story
jumpLabel:another_life -when=multiple_playthroughs;
;
; Otherwise, treat it as the first playthrough, initialize variables, and enter the first-playthrough story
setVar:multiple_playthroughs=false -global; Initialize as not another playthrough
changeScene:chapter_01/part_01.txt;
;
; This is the extra-playthrough story
; It is reached only when multiple_playthroughs is true
label:another_life;
Mysterious Voice:If you had the chance, would you choose another life?;
changeScene:chapter_01/part_01_extra.txt;
;
; ......
;
; Assume this is the ending section of the final chapter
setVar:multiple_playthroughs=true -global; Set as another playthrough
```

### local
- Boolean

When the value is `true`, writes to the [local variables](../../webgal-script/variable.md#local-variables) of the current scene — the same namespace the arguments of `callScene` land in. Local variables disappear when the scene call ends and never affect variables of the same name in the caller.

``` webgal
; battle.txt, called by callScene:battle.txt -hp=100
setVar:hp=hp-30 -local; Modifies the hp that was passed in
Narrator:You are hit. Your HP is now {hp}.;
```

Without `-local`, `setVar:hp=hp-30;` writes a normal variable, while reading `{hp}` prefers the local one, so the value you just wrote can never be read back. Modifying a passed-in argument requires `-local`.

::: warning
`-local` and `-global` are mutually exclusive. If both are given, `-global` wins.
:::
