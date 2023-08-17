# Base Scripts

First, the program will start running from the **initial script** `start.txt`. In subsequent script writing, I will introduce how to jump chapters or set branch options.

**The way to write scripts is very simple and almost identical to natural language.**

## Basic character dialogue

First, use Notepad, VS Code, Sublime Text and other text editors to open start.txt in the scene folder under the game resource directory, and then you can start writing your first line of dialogue.

The method of writing character dialogue is very simple. You just need to enter:

**Note that the colons and semicolons for each line of dialogue should be English characters!**

```
Character: Dialogue; 
```

Example:

```
Yukino: Please have some tea;
Yui: Oh, thank you;
Komachi: Thank you, Sister Yukino!;
Isshiki: Thank you, senpai.
```

After each dialogue/script, use a semicolon as the ending. (If you don't use a semicolon sometimes, it might still work, but the author suggests adding a semicolon to prevent bugs).

### Continuous dialogue

If you don't change the character name in multiple lines of dialogue, you can use continuous dialogue and omit the character name, then use it again when needed:

```
Yukino: You're here early;  
Sorry, have you been waiting long?; // At this point, the character for the dialogue is still "Yukino".
Yui: I just got here;
```

### Narration

If you want to create narration dialogue without a character name, leave it blank before the colon (but keep the colon):

```
:This is a line of narration;
```

## Play voice while displaying dialogue

As we all know, what often attracts people most to visual novels is the excellent dubbing. In this version, you can introduce dubbing in the dialogue. Put your dubbing in the vocal folder, then add the audio file name in the parameters to introduce it. Syntax example:

```
Yui: I just got here -V3.ogg;
```

The introduction of dubbing is the same in continuous dialogue:

```
Yukino: You're here early -V1.ogg;  
Sorry, have you been waiting long? -V2.ogg;
```

You can set a `-volume` parameter for a voice to adjust its volume.

```
Yui: I just got here -V3.ogg -volume=30; // Available when volume is numeric and the value is in the range 0 ~ 100
```

::: tip Tip
This is an optional parameter. When not used, or when a value other than 0 ~ 100 is used, the default value of 100 is used.
:::

## Black screen text display

In many games, some text will be displayed in black screens, used to introduce themes or show characters' psychological activities. You can use the intro command to play a monologue:

```
intro:Memories don't need a suitable script,|After all, once spoken,|it all becomes empty words.;
```

The monologue is separated by separators (|), which means that each | represents a new line. In actual performance, the above text will become:

```
Memories don't need a suitable script,
After all, once spoken,
it all becomes empty words.
```

## Change background/character sprite

For WebGAL to be able to read background images and character sprites, your background images should be placed in the background folder, and sprite images should be placed in the figure folder.

Next, you can use the following simple statements to change the currently displayed background image and character sprite:

```
changeBg:testBG03.jpg;//Change background
changeFigure:testFigure02.png;//Change character sprite
changeBg:none;//Close background 
changeFigure:none;//Close character sprite
```

You may find that after you change the background image or character sprite, you need to click the mouse again to display the next line of dialogue. If you want to execute the content of the next statement immediately after changing the background image/sprite, please use:

```
changeBg:testBG03.jpg -next;  
changeFigure:testFigure02.png -next;//Change character sprite
Isshiki: Thank you, senpai!;
```

If you do this, the program will immediately execute the next statement after replacing the background image/sprite.

## Place sprites in different positions

Now you can place different sprites in three different positions on the page. You just need to add the position you want to place in the statement that places the sprite. Examples are as follows:

```
changeFigure:testFigure03.png -left;
changeFigure:testFigure04.png;  
changeFigure:testFigure03.png -right;
```

The above three lines correspond to the left, middle and right three different positions. The sprites in the three different positions are independent of each other, so if you need to clear the sprite, you must clear them independently:

```
changeFigure:none -left;
changeFigure:none;
changeFigure:none -right;
```

If you want to execute the statement immediately after changing the sprite, the operation method is the same as before, that is, add the parameter `-next`:

```
changeFigure:testFigure03.png -left -next;
changeFigure:testFigure04.png -next;
changeFigure:testFigure03.png -right -next;
```

## Free sprites with ID

If you want to control sprites more precisely, you can specify an `id` and initial position for the sprite:

```
changeFigure:testFigure03.png -left -id=test1; // A free sprite with initial position on the right
changeFigure:none -id=test1; // Close sprite by id
```

Note: If you want to reset the position of a sprite with ID, close it first and then reopen it.

## Place mini avatar

Many games can place a mini avatar in the lower left corner of the text box. The following is the syntax used in this engine:

```
miniAvatar:minipic_test.png;//Display minipic_test.png in the lower left corner
miniAvatar:none;//Close this mini avatar
```

## Jump scenes and branch choices

In visual novels, jumping chapters and scenes and branch choices are indispensable. Therefore, this game module also supports scene jumps and branch choices.

You can split your scripts into multiple txt documents, and use a simple statement to switch the currently running script.

::: warning Warning
When jumping scenes, branch choices, or calling scenes, the stage will not be cleared. This also means that effects such as background music, sprites, and background images applied in the previous scene will be inherited to the next scene.

If you use the WebGAL editor, you should pay extra attention, because the WebGAL editor does not care about the effects the previous scene will bring when previewing a single scene alone. Therefore, the preview effect and the actual game running effect may differ. You should consider properly handling the stage cleanup before the scene jump.
:::

For example, if you have now written the scripts for two chapters, Chapter-1.txt and Chapter-2.txt respectively, after Chapter-1.txt finishes running, you want to jump to the scene corresponding to Chapter-2.txt, please use the following statement:

### Jump scenes

Statement:

```
changeScene:Chapter-2.txt; 
```

Example:

```
(Chapter-1.txt) 
......
......
changeScene:Chapter-2.txt;
The content of Chapter-2.txt will be executed next.
...... 
......
(Chapter-2.txt)
```

By executing this command, you will switch the game scene and the subsequent plot will run according to the new scene script. The new script will run after the next mouse click.

### Call scenes

If you need to return to the previous scene (parent scene) after executing the called scene, you can use `callScene` to call the scene.

Statement:

```
callScene:Chapter-2.txt;
```

Example:

```
(Chapter-1.txt)
...... 
......
callScene:Chapter-2.txt;
The content of Chapter-2.txt will be executed next.
......
......
(Chapter-2.txt) 
......
(After Chapter-2.txt execution is complete)  
Return to parent scene and continue executing parent scene statements.
......
```

### Branch choices

If your script has branch options, and you want to enter different chapters by choosing different options, please use the following statement:

Where `|` is the separator.

```
choose:Call out to her:Chapter-2.txt|Go home:Chapter-3.txt;
```

You just need to correspond the text of the options one-to-one with the script name to enter after selecting the option to achieve the function of branch choices.

## End game and return to title

If you want to end the game after the plot ends and return to the title, please use:

```
end;
```

This will make the game return to the title screen.

## Introduce background music (BGM)

The way to introduce background music is extremely simple. You just need to place the background music in the /bgm directory, then you can simply play it when needed:

```
bgm:XiaYing.mp3;
```

You can set a `-volume` parameter for background music to adjust its volume.

```
bgm:XiaYing.mp3 -volume=30; // Available when volume is numeric and the value is in the range 0 ~ 100
```

In addition, you can use the `-enter` parameter for fade-in playback.

```
bgm:XiaYing.mp3 -enter=3000; // Available when enter is numeric and the value is greater than or equal to 0
```

Finally, you can use the following statement to fade out the background music.

```
bgm:none -enter=3000; // Available when enter is numeric and the value is greater than or equal to 0
```

::: tip Tip
`-volume` and `-enter` are optional parameters.
When `-volume` is not used, or when an unusable value is used, the default value of 100 is used.
When `-enter` is not used, or when an unusable value is used, the default value of 0 is used.
:::

## Use sound effects

```
playEffect:xxx.mp3;
```

Can play a short sound effect

**Loop sound effects**

Giving an id to a sound effect will automatically enable sound effect looping. Use the same id later to stop it.

```
playEffect:xxx.mp3 -id=xxx;  
playEffect:none -id=xxx; //Stop this looping sound effect
```

## Play a short video

```
playVideo:OP.mp4 //The video should be placed in the /game/video/ folder
```

## Unlock BGM or CG for appreciation

In WebGAL 4.2, the appreciation functions of BGM and CG are added. You can execute the following statements at the appropriate time to unlock BGM or CG.

```text
unlockCg:xgmain.jpeg -name=星光咖啡馆与死神之蝶 -series=1; // 解锁CG并赋予名称
unlockBgm:s_Title.mp3 -name=Smiling-Swinging!!; // 解锁bgm并赋予名称
```

Among them, the "series" parameter is optional and represents which series the current CG belongs to. CGs from the same series will be merged and displayed together in the future (i.e., displayed as switchable CGs from the same series).

## Hide text box

Sometimes, for some special performance effects, you may want to temporarily hide the text box. So you can use the following instructions:

```
setTextbox:hide;  
```

to close the text box. When the value of the `setTextbox` instruction is `hide`, the text box will be closed and the user will not be able to open it in any way. If you want to redisplay the text box, call this command again and enter any value except `hide`.

```
setTextbox:on; // Can be any value except hide.
```

## Use animation effects

### Set animation for background or sprite

Use statement `setAnimation:animation name -target=target object;`

**Example:**

```
setAnimation:enter-from-bottom -target=fig-center -next;//Set an animation of entering from the bottom for the middle sprite, and go to the next sentence.
```

Currently, the preset animations are:

| Animation effect          | Animation name      | Duration (ms) |
| :------------------------ | :------------------ | :------------ |
| Fade in                   | enter               | 300           |
| Fade out                  | exit                | 300           |
| Shake left and right once | shake               | 1000          |
| Enter from bottom         | enter-from-bottom   | 500           |
| Enter from right          | enter-from-right    | 500           |
| Enter from left           | enter-from-left     | 500           |
| Move front and back once  | move-front-and-back | 1000          |

Currently, the animation target objects are:

| target     | Actual target    |
| :--------- | :--------------- |
| fig-left   | Left sprite      |
| fig-center | Middle sprite    |
| fig-right  | Right sprite     |
| bg-main    | Background       |
|            | A sprite with id |

### Custom animation

Animation files are in `/game/animation`. You can create your own custom animations.

The animation file uses JSON to describe. You can refer to the JSON syntax in the [reference document](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

Each animation file represents an **animation sequence**, described using a JSON array. Here is a sample describing an animation entering from the left:

```
enter-from-left.json
```

```json
[
  {
    "alpha": 0, 
    "scale": {
      "x": 1,
      "y": 1
    },
    "pivot": {
      "x": 0.5,
      "y": 0.5
    },
    "position": {
      "x": -50,
      "y": 0
    },
    "rotation": 0,
    "blur": 5,
    "duration": 0
  },
  {
    "alpha": 1,
    "scale": {
      "x": 1,  
      "y": 1
    },
    "pivot": {
      "x": 0.5,
      "y": 0.5
    },
    "position": {
      "x": 0,
      "y": 0
    },
    "rotation": 0,
    "blur": 0,
    "duration": 500
  } 
]
```

The meaning of each attribute is:

| Attribute | Meaning                                                |
| :-------- | :----------------------------------------------------- |
| alpha     | Transparency, range 0-1                                |
| scale     | Scale                                                  |
| pivot     | Anchor point                                           |
| position  | Position offset                                        |
| rotation  | Rotation angle, unit is radian                         |
| blur      | Gaussian blur radius                                   |
| duration  | Duration of this time slice, unit is milliseconds (ms) |

Then, you need to add the file name of your custom animation (without the extension) in the `animationTable`

In file `animationTable.json`:

```json
["enter-from-left","enter-from-bottom","enter-from-right"]
```

Then, you can call it in the script:

```
setAnimation:enter-from-left -target=fig-left -next; 
```

### Omit some attributes

If your animation only needs to operate some attributes, you can leave other attributes that do not participate in the animation empty to keep them default:

**Example: `enter.json`**

```json
[
  {
    "alpha": 0,
    "duration": 0
  },
  { 
    "alpha": 1,
    "duration": 300
  }
]
```

### Use transforms

An animation with a duration of 0 milliseconds and only one time slice is a transform.

**Example:**

```json
[
  {
    "alpha": 0, 
 
    "duration": 0
  }  
]
```

## Add special effects

Currently, WebGAL's effect system is implemented by PixiJS.

### Initialize Pixi

```
pixiInit
```

```
pixiInit; 
```

**Note:**

**1. If you want to use effects, you must run this command first to initialize Pixi.**

**2. If you want to eliminate the effects that have been applied, you can use this syntax to clear the effects.**

#### Add effects

```
pixiPerform
```

```
pixiPerform:rain;//Add a raining effect
```

Note: After the effect is applied, it will keep running if not initialized.

### List of preset effects

| Effect | Command           |
| :----- | :---------------- |
| Rain   | pixiPerform:rain; |
| Snow   | pixiPerform:snow; |

### Superimpose effects

If you want to superimpose two or more effects, you can superimpose different effects without using the `pixiInit` command.

```
pixiPerform:rain;
pixiPerform:snow;
```

### Clear superimposed effects

Use `pixiInit` to initialize, this can eliminate all effects that have been applied.

### Movie mode (test function)

Turn on movie mode by executing the script `filmMode:enable;`, `filmMode:none;` can turn it off.
