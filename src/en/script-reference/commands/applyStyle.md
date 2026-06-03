# applyStyle

Changes UI styles.

## Statement Content

First, create a new style in the UI template. Then use the `applyStyle` command to replace the original style with the new one.
Connect the original style name and the new style name with `->`. Multiple replacements can be written at once and separated by English commas `,`.
The format is: originalStyle->newStyle,originalStyle2->newStyle2,...

```webgal
; Replace the speaker-name background with red, assuming the new style exists in the UI template
applyStyle:TextBox_ShowName_Background->TextBox_ShowName_Background_Red;
Character:This is a line.;
; Replace multiple styles at once
applyStyle:TextBox_ShowName_Background->TextBox_ShowName_Background_Green,TextBox_main->TextBox_main_Black;
```

No matter which new style the original style is replaced with, the replacement still starts from the original style name:

```webgal
applyStyle:OriginalStyleName->NewStyleName1;
applyStyle:NewStyleName1->NewStyleName2; Wrong
applyStyle:OriginalStyleName->NewStyleName2;
```

## Common Replaceable Styles

Choices use the following style names:

| Style Name | Purpose |
| :--- | :--- |
| `Choose_Main` | Choice list container |
| `Choose_item_outer` | Outer container of a single choice |
| `Choose_item` | Clickable choice |
| `Choose_item_disabled` | Choice whose condition is not met and cannot be clicked |

```webgal
; Replace clickable choices with Choose_item_Red defined in the template
applyStyle:Choose_item->Choose_item_Red;
```
