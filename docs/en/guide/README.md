# WebGAL Game Development Guide

## How to start making a WebGAL game?

::: warning Warning
No matter which method you use to make a WebGAL game, you should take some time to read through this entire page. It won't take long, and it will help you avoid some issues that might arise from improper operation.

Did you know that you can find answers to most of the issues you find confusing in the documentation? If you are convinced you have encountered a bug, please raise the issue in [issues](https://github.com/MakinoharaShoko/WebGAL/issues) or contact [Mahiru_@outlook.com](mailto:Mahiru_@outlook.com). You can also find ways to join the WebGAL community discussion in the "More" section in the top right corner of the site.
:::

### Method 1 (Recommended): Use the WebGAL Editor

**The WebGAL editor is the best way to create, produce, and publish a WebGAL game.**

After downloading the WebGAL editor, unzip the compressed package and launch the WebGAL_Terre application. WebGAL Terre will automatically open the default browser, or go to [http://localhost:3001/ ](http://localhost:3001/) to open the editor if it does not open automatically.

::: danger Warning
Please use a modern browser (Chrome / Firefox / Edge) to open WebGAL and the editor. Issues that may arise from using other browsers will not be addressed.
:::

::: tip Tip
The method on this page **does not support Windows 7**. Windows 7 users please refer to **[Method to start production with visual editor on Windows 7](win7)**.

The WebGAL editor has only been tested on Windows 10+ systems so far. We will gradually add support for Mac OS and Linux.
:::

Download the WebGAL visual editor:

[GitHub ](https://github.com/MakinoharaShoko/WebGAL_Terre/releases)

[123 Cloud Disk (All versions are placed in one folder, please download the latest version) ](https://www.123pan.com/s/YHszVv-jqzJ.html)

### Method 2: Develop locally by writing scripts and debug in real time

First, download the WebGAL distribution that has been built into a static web page and the accompanying debugging environment.

Download the WebGAL engine itself and debugging environment (does not include visual editor):

[GitHub ](https://github.com/MakinoharaShoko/WebGAL/releases/)

After downloading and unzipping, you can directly run the corresponding version of WebGAL-server to debug your visual novel. If you encounter interception by antivirus software or firewall, please allow it to run.

It is recommended to use VS Code for development and use plugins to enable syntax highlighting:

[Store address of syntax highlighting plugin ](https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics)

[Source code repository of syntax highlighting plugin ](https://github.com/C6H5-NO2/webgal-script-basics)

### Method 3 (suitable for front-end developers who want higher customizability): Debug from source code

```
git clone https://github.com/MakinoharaShoko/WebGAL.git
```

Install and use yarn to install dependencies

```
npm install yarn -g
yarn
```

Enter the WebGAL package

```
cd packages/webgal
```

WebGAL uses vite as the bundling and debugging tool. After entering the webgal package, you can start the development server by running the following script:

```
yarn dev
```

If you want to package, please use:

```
yarn build 
```

### How to deploy or publish my visual novel?

First, please be aware that the engine that can be deployed to the Internet should be a **release or web page exported from the WebGAL visual editor**, not the source code.

**If you use the WebGAL editor, you can select Export Game in the top right corner. Generally, File Explorer will open automatically after export is complete. If it does not open automatically, you can find it under Exported_Games in the WebGAL editor directory.**

**Web page:**

*If you use the **editor***:

In the upper right corner of the editor, select Export to Web Page. The method of deploying web pages is no different from deploying a normal website. You can purchase cloud servers (Tencent Cloud, Alibaba Cloud) and other deployment methods, or use GitHub Pages.

*If you use the **release version***:

 the files under /WebGAL (not the folders, the files under the /WebGAL folder) to the specified directory on your cloud server where you want to deploy, or deploy to GitHub Pages.

*For developers using **source code development***:

If you use the source code for debugging, you can create a static web page (in the /dist folder) by `yarn build`, and then deploy the content of this folder to GitHub Pages or your cloud server.

**Windows:**

In the upper right corner of the editor, select Export to Executable File. The executable file can run directly on Windows.

**Android:**

Package the game for android platforms

## Game script writing tutorial

Now, you should have started the WebGAL editor or started a debugging server. Next, I will introduce how to write your own scripts.

You should be able to find that under the unzipped folder, there is a WebGAL folder. Under the WebGAL folder, there is a game folder, which is where your game resources should be stored. **(If you use the visual editor, you can directly open the corresponding resource folder in the left toolbar)**

All your game scripts, pictures, character sprites, etc. should be placed under the game folder. The resource description corresponding to the directory is as follows:

| Folder     | Resources stored                                          |
| :--------- | :-------------------------------------------------------- |
| animation  | Animation description file                                |
| background | Used to store background pictures, title page backgrounds |
| figure     | Used to store character sprites                           |
| scene      | Used to store user scripts                                |
| bgm        | Used to store background music                            |
| vocal      | Used to store dubbing files                               |
| video      | Used to store videos                                      |
| tex        | Used to store effect texture files                        |

## Customize your game info

Under the /game folder, there is a file config.txt where you can fill in relevant information about your game (you can edit it directly using the visual editor):

```
Game_name:WebGAL;//Your game name 
Game_key:0f33fdGr;//A string of identification codes, you should input a string of characters that is not easy to duplicate with others as randomly as possible, preferably 6-10 characters long, otherwise bugs may occur
Title_img:Title2.png;//The name of the title picture, the picture is placed in the /background folder
Title_bgm:夏影.mp3;//The title background music, the music file should be placed in the /bgm folder
```

## Comments

The WebGAL script will only parse the content before the semicolon on each line, so the content after the semicolon will be treated as comments.



```
WebGAL:Hello!; // The content after the semicolon will be treated as comments
;You can directly input a semicolon and then write a single line comment
```

## `-next` parameter

You can add the parameter `-next` after any statement to jump to the next statement immediately after executing this statement. This is very useful when you need to perform multiple steps at the same time.

Example:

smali



```
changeBg:testBG03.jpg -next; // Will immediately execute the next statement
```

## `none` keyword

When setting **resources** such as sprites, bgm, backgrounds, etc., set it to the `none` keyword to close that object.

## Syntax for writing user scripts

First, the program will start running from the **initial script** `start.txt`. In subsequent script writing, I will introduce how to jump chapters or set branch options.

**The way to write scripts is very simple and almost identical to natural language.**

### Basic character dialogue

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

#### Narration

If you want to create narration dialogue without a character name, leave it blank before the colon (but keep the colon):



```
:This is a line of narration;
```

### Play voice while displaying dialogue

As we all know, what often attracts people most to visual novels is the excellent dubbing. In this version, you can introduce dubbing in the dialogue. Put your dubbing in the vocal folder, then add the audio file name in the parameters to introduce it. Syntax example:



```
Yui: I just got here -V3.ogg;
```

The introduction of dubbing is the same in continuous dialogue:



```
Yukino: You're here early -V1.ogg;  
Sorry, have you been waiting long? -V2.ogg;
```

### Black screen text display

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

### Change background/character sprite

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

### Place sprites in different positions

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

### Free sprites with ID

If you want to control sprites more precisely, you can specify an `id` and initial position for the sprite:



```
changeFigure:testFigure03.png -left -id=test1; // A free sprite with initial position on the right
changeFigure:none -id=test1; // Close sprite by id
```

Note: If you want to reset the position of a sprite with ID, close it first and then reopen it.

### Place mini avatar

Many games can place a mini avatar in the lower left corner of the text box. The following is the syntax used in this engine:



```
miniAvatar:minipic_test.png;//Display minipic_test.png in the lower left corner
miniAvatar:none;//Close this mini avatar
```

### Jump scenes and branch choices

In visual novels, jumping chapters and scenes and branch choices are indispensable. Therefore, this game module also supports scene jumps and branch choices.

You can split your scripts into multiple txt documents, and use a simple statement to switch the currently running script.

::: warning Warning
When jumping scenes, branch choices, or calling scenes, the stage will not be cleared. This also means that effects such as background music, sprites, and background images applied in the previous scene will be inherited to the next scene.

If you use the WebGAL editor, you should pay extra attention, because the WebGAL editor does not care about the effects the previous scene will bring when previewing a single scene alone. Therefore, the preview effect and the actual game running effect may differ. You should consider properly handling the stage cleanup before the scene jump.
:::

For example, if you have now written the scripts for two chapters, Chapter-1.txt and Chapter-2.txt respectively, after Chapter-1.txt finishes running, you want to jump to the scene corresponding to Chapter-2.txt, please use the following statement:

#### Jump scenes

Statement:



```
changeScene:Chapter-2.txt; 
```

Example:

asciidoc



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

#### Call scenes

If you need to return to the previous scene (parent scene) after executing the called scene, you can use `callScene` to call the scene.

Statement:



```
callScene:Chapter-2.txt;
```

Example:

asciidoc



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

#### Branch choices

If your script has branch options, and you want to enter different chapters by choosing different options, please use the following statement:

Where `|` is the separator.



```
choose:Call out to her:Chapter-2.txt|Go home:Chapter-3.txt;
```

You just need to correspond the text of the options one-to-one with the script name to enter after selecting the option to achieve the function of branch choices.

### End game and return to title

If you want to end the game after the plot ends and return to the title, please use:



```
end;
```

This will make the game return to the title screen.

### Introduce background music (BGM)

The way to introduce background music is extremely simple. You just need to place the background music in the /bgm directory, then you can simply play it when needed:



```
bgm:夏影.mp3;
```

### Use sound effects



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

### Play a short video



```
playVideo:OP.mp4 //The video should be placed in the /game/video/ folder
```

### Unlock BGM or CG for appreciation

In WebGAL 4.2, the appreciation functions of BGM and CG are added. You can execute the following statements at the appropriate time to unlock BGM or CG.

```text
unlockCg:xgmain.jpeg -name=星光咖啡馆与死神之蝶 -series=1; // 解锁CG并赋予名称
unlockBgm:s_Title.mp3 -name=Smiling-Swinging!!; // 解锁bgm并赋予名称
```

Among them, the "series" parameter is optional and represents which series the current CG belongs to. CGs from the same series will be merged and displayed together in the future (i.e., displayed as switchable CGs from the same series).

### Hide text box

Sometimes, for some special performance effects, you may want to temporarily hide the text box. So you can use the following instructions:



```
setTextbox:hide;  
```

to close the text box. When the value of the `setTextbox` instruction is `hide`, the text box will be closed and the user will not be able to open it in any way. If you want to redisplay the text box, call this command again and enter any value except `hide`.



```
setTextbox:on; // Can be any value except hide.
```

### Use animation effects

#### Set animation for background or sprite

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

#### Custom animation

Animation files are in `/game/animation`. You can create your own custom animations.

The animation file uses JSON to describe. You can refer to the JSON syntax in the [reference document ](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

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

#### Omit some attributes

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

#### Use transforms

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

### Add special effects

Currently, WebGAL's effect system is implemented by PixiJS.

#### Initialize Pixi

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

#### List of preset effects

| Effect | Command           |
| :----- | :---------------- |
| Rain   | pixiPerform:rain; |
| Snow   | pixiPerform:snow; |

#### Superimpose effects

If you want to superimpose two or more effects, you can superimpose different effects without using the `pixiInit` command.



```
pixiPerform:rain;
pixiPerform:snow;
```

#### Clear superimposed effects

Use `pixiInit` to initialize, this can eliminate all effects that have been applied.

#### Movie mode (test function)

Turn on movie mode by executing the script `filmMode:enable;`, `filmMode:none;` can turn it off.

## Advanced tutorials

### Implement statement jumps and branch jumps within the same scene (TXT file)

If you want to create a branch but feel it is too troublesome to create a new TXT file, you can try the following to implement creating branches and jumping statements within the same file.

**Note: If your branch is very long, I do not recommend using this method, because the number of lines in a single TXT is not suitable for being too long, otherwise it may cause performance problems such as slow loading and sluggish response.**

#### First, you must understand how to use label

asciidoc



```
......
jumpLabel:label_1; 
// The following lines will be ignored:
...... 
......
......
// Then, you need to create the label:
label:label_1;
The program will continue executing here.;
......
......
```

In short, jumpLabel is similar to a goto statement, which can immediately make your script jump to any position in the scene (TXT file), and this position needs you to create it with label.

If jumpLabel is compared to a portal, then the destination of this portal is the position where the label is located.

#### With the above basis, you can use choose to jump to the position where label is located through branches

vbnet



```
WebGAL: Let's test jumping to label through branch!;
choose:Test 1:label_1|Test 2:label_2;
label:label_1;  
It should now be branch 1;
jumpLabel:end;
label:label_2;
It should now be branch 2;
jumpLabel:end; 
label:end;
Now is the unified end;
```

Note that at the end of each branch, you should use jumpLabel to jump to where you want. Since the program executes linearly, if you do not jump at the end of the branch, the program will continue to run down, for example:



```
WebGAL: Let's test jumping to label through branch!;
choose:Test 1:label_1|Test 2:label_2;  
label:label_1;
It should now be branch 1;
label:label_2;
It should now be branch 2;  
Now is the unified end;
```

In this script, if you select branch 2, everything seems okay. But if you select branch 1, you will be surprised to find that after branch 1 executes, branch 2 executes again. This is because the program continues to execute the next line in order, and you did not specify where to jump after the branch ends.

### Use variables

**Note: Before you figure out how to use labels and how to jump scenes within labels, please do not easily use the variable system, as this may confuse you!**

Set variable:

jboss-cli



```
setVar:a=1; // Can set numbers
setVar:a=true // Can set boolean values 
setVar:a=Character name // Can set strings
```

If you have defined other variables before, you can also use them when setting variables.

### Conditional execution

Add the parameter `-when=(condition)` after the statement to determine whether to execute the current statement based on the condition.

For example:

ini



```
setVar:a=1;
changeScene:2.txt -when=a>1; // Jump to scene 2 when a>1
changeScene:3.txt; // If a<=1, the above statement is not executed, so naturally this one is executed
changeScene:3.txt -when=a==1; // Only jump when a equals 1, note that the equality operator is ==
```

**Note: `=` is the assignment symbol and cannot be used for conditional judgment. `==` is the equality operator.**

Any statement can be added with the `-when` parameter to control whether to execute it. By combining the `-when` parameter and `jumpLabel` `callScene` `changeScene`, you can achieve conditional flow control.

### Insert effects in one line of dialogue

Sometimes, you may want to insert effects like changing expressions at a certain stage when a line of dialogue is executed.
At this time, you can use the `-notend` `-concat` parameters to insert any statement in the dialogue.

`-concat` means this line of dialogue is connected after the previous line of dialogue

`-notend` means this line of dialogue does not end, and effects or dialogue may be connected afterwards.

Example as follows: This is a demo of switching sprites during dialogue.



```
WebGAL: Test inserting effects during dialogue! Switching sprite now... -notend;
changeFigure:k1.png -next;
Switched sprite! Switching expression now... -notend -concat; 
changeFigure:k2.png -next;
Switched expression! -concat;
```

### Add custom effects

You can download the source code, then find /Core/gameScripts/pixiPerformScripts/, then create a `PIXI.Container` for the effect you need.

ts



```
const effectsContainer = RUNTIME_GAMEPLAY.pixiStage!.effectsContainer!; //Get the current Pixi effect Container
const app = RUNTIME_GAMEPLAY.pixiStage!.currentApp!; // Way to call Pixi App, may be useful for determining screen size, etc.
const container = new PIXI.Container(); //Create container for custom effects
effectsContainer.addChild(container); //Add effects
```

Texture files can be placed in the /game/tex directory.

Then, at the beginning of the file, import the effect registration method to register your new effect.

At the end of the file, use it to register your effect. The first parameter is the effect name, and the second is the method to call the effect.

```typescript
import {registerPerform} from '../pixiPerformManager';

// Assume this is your effect  
function myPerform() {
  // ...
}

// Register
registerPerform('myPerform', () => myPerform(parameters)); 
```

Finally, compile the WebAPP that supports your custom effects





```
yarn run build; 
```

Now you can call your effects in the script



```
pixiPerform:your new effect;
```

## Other tutorials

### Add other UI languages into WebGal

See the [Add Other Language into WebGal](add-lang).

## Possible issues and solutions

### Why are my files not recognized properly

File names should avoid using special symbols, spaces and other hard-to-recognize names. Use pure English naming as much as possible. The file extensions should be all lowercase.

### Why is my audio file not playing properly

On Apple browsers, ogg files are not supported. You need to convert the file format, for example, to mp3.

### Why can't I open the exported web page

Due to browser security policies, you cannot open a local web page from a file. You need to use an http server, deploy WebGAL in the same way as deploying a website. Common ones are: Nginx, Apache http server, VS Code Live Server plugin, Python http server.

### Why does the visual editor flash briefly and disappear on Windows 7

Due to the node.js version being higher than the highest version supported by Windows 7. Please refer to [Method to start production with visual editor on Windows 7](win7) to resolve.

## Stargazers over time

[![Stargazers over time](https://starchart.cc/MakinoharaShoko/WebGAL.svg)](https://starchart.cc/MakinoharaShoko/WebGAL)
