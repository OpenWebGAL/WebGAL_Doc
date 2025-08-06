# changeScene

切换场景。

## 语句内容

填写场景文件的路径，将切换到对应场景。
详情请见[场景与分支](../../webgal-script/scenes.md)。

::: warning
切换场景不会清空当前场景（如立绘、背景），若没有主动关闭，它们将被带到新场景中。
:::

- chapter_01/part_01.txt
```webgal
changeBg:home/character_a/bedroom.png;
changeFigure:main_character/character_a/thinking.png -next;
角色A:今天去她家里吧！;
changeBg:none -next; 手动关闭背景
changeFigure:none -next; 手动关闭立绘
:; 手动关闭对话框
changeScene:chapter_01/part_02.txt;
```
- chapter_01/part_02.txt
```webgal
changeBg:home/character_b/living_room.png;
changeFigure:main_character/character_b/smile.png -next;
角色B:是你啊，有什么事吗？;
```
