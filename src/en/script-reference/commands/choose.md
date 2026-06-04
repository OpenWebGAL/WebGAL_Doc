# choose

Shows choices.

## Statement Content

Sets multiple choices. Each choice consists of __choice text__ and a __jump target__, separated by an English colon `:`. Choices are separated by `|`.
See [Branch Selection](../../webgal-script/scenes.md#branch-selection) for details.

Currently, choices can jump to:
- A scene file
- A label in the current scene

```webgal
CharacterA:Where should we go today?;
choose:Go to the shop:chapter_01/shop.txt|Someone's house:chapter_01/house_b.txt|Stay home:home;
;
label:home;
CharacterA:I guess I'll stay home.;
```

Before the player selects an option, `choose` pauses subsequent story playback and autoplay. After the player clicks an option, the options disappear and the story jumps to the corresponding scene file or label.

If the selected option jumps to a scene file, subsequent commands in the current scene will not be executed.
If an invalid option is selected, such as a missing jump target, WebGAL continues executing subsequent commands in the current scene.

### Conditional Display and Conditional Enablement

Each option can add condition prefixes before the option text:

- `(condition expression)`: controls whether the option is displayed.
- `[condition expression]`: controls whether the option can be clicked.
- `->`: separates condition prefixes from the actual option content.

```webgal
setVar:hasTicket=true;
setVar:doorPower=1;
choose:(hasTicket==true)->Show ticket:ticket|(doorPower>0)[doorPower>1]->Force the door:force|Go home:home;
;
label:ticket;
CharacterA:With a ticket, I can get in.;
jumpLabel:end;
;
label:force;
CharacterA:You can only choose this when you have enough strength.;
jumpLabel:end;
;
label:home;
CharacterA:I should go home first.;
;
label:end;
```

In the example above:

- `Show ticket` is displayed only when `hasTicket==true`.
- `Force the door` is displayed only when `doorPower>0`, and clickable only when `doorPower>1`.
- Options without condition prefixes are always displayed and clickable.

Condition expressions are written the same way as the common `-when` parameter. See [(global)](global.md#when) for details.

::: warning
`() ` and `[]` must be written to the left of `->`. If the option text needs to display special symbols such as colons, semicolons, or vertical bars, use escaping. See [Escaping Special Characters](../../webgal-script/base.md#escaping-special-characters).
:::
