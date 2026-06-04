# changeScene

Switches scenes.

## Statement Content

Sets the path of the scene file to switch to.
See [Scene and Branch](../../webgal-script/scenes.md) for details.

If this command succeeds, subsequent commands in the current scene will not be executed.

```webgal
CharacterA:Time to go.;
changeScene:chapter_01/part_02.txt;
Debug:If you see this line, the scene switch failed.;
Debug:Because when changeScene succeeds, commands after it will not run.;
```

::: warning
Switching scenes does not clear the current scene, such as figures and backgrounds. If they are not actively closed, they will be carried into the new scene.
:::

- chapter_01/part_01.txt
```webgal
changeBg:home/character_a/bedroom.png;
changeFigure:main_character/character_a/thinking.png -next;
CharacterA:Let's go to her house today!;
changeBg:none -next; Manually close background
changeFigure:none -next; Manually close figure
:; Manually close dialogue box
changeScene:chapter_01/part_02.txt;
```
- chapter_01/part_02.txt
```webgal
changeBg:home/character_b/living_room.png;
changeFigure:main_character/character_b/smile.png -next;
CharacterB:Oh, it's you. What can I do for you?;
```
