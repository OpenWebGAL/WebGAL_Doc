# setTextbox

A two-in-one command for showing and hiding the text box.

## Statement Content

Writing `hide` hides the dialogue box. Any other string shows the dialogue box.
Common usage is `setTextbox:hide;` to hide the text box, and `setTextbox:on;` or `setTextbox:show;` to show it again.

::: info
After `setTextbox` hides the dialogue box, if no later `setTextbox` command shows it again, the dialogue box stays hidden.
:::

If `setTextbox` shows the dialogue box but the dialogue box still does not appear, possible reasons include:
- Both the speech content and character name are empty
- __Hide all UI__ is enabled

```webgal
CharacterA:I will take you somewhere.;
setTextbox:hide;
changeBg:shop.png;
setTextbox:on;
CharacterA:We're here.;
```
